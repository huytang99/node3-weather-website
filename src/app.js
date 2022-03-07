console.log("Hi")
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const request = require('request')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
console.log(__dirname)
console.log(__filename)
console.log(path.join(__dirname, '../public'))

const app = express()
const port = process.env.PORT || 3000//lấy port heroku sort

//Define paths for express config
const publicDirectory = path.join(__dirname, '../public')//đây là mình define path tới thư mục public(chứa static elements)
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Set up handlebars engin and views location
app.set('view engine', 'hbs')//exact set để chạy hbs
app.set('views', viewsPath)//set đường dẫn mới cho thư mục views cũ(đổi tên)
hbs.registerPartials(partialsPath)//set path tới thư mục partials

//Set up static directory to serve
app.use(express.static(publicDirectory))//này là root gốc để làm link static ví dụ 'public/css/style.css' thì ở chỗ khác
                                        //mình có thể link là '/css/style.css' thì nó vẫn hiểu ở đâu


app.get('',(req, res) => {//1st arg là extend url, 2 là function
    res.render('index', {//dùng render để truyền data cho file hbs dùng trực tiếp tên k cần .hbs
        title: 'Weather App',
        name: 'Andrew Mead'
    })

})

app.get('/about',(req, res) => {
    res.render('about',{
        title: 'About me',
        name: 'Wierd Robot'
    })
})

app.get('/help',(req, res) => {
    res.render('help',{
        message: 'I am an idiot',
        title: 'Help',
        name: 'Andrew Mead'
    })
})

// app.get('/help', (req, res) => {
//     res.send({
//         name: 'Andrew',
//         age: 34,
//     })
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>About page</h1>')
// })

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })

    }
    geocode(req.query.address,(error, {latitude, longitude, location}={}) => {
        if(error) {
            return res.send({
                error: error
            })
        }
        forecast(latitude, longitude, (error,forecastData) => {
            if(error) {
                return res.send({
                    error: error
                })
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
   
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({//ở đây phải dùng return vì http chỉ gửi và nhận 1 luồng, k thể res.send 2 lần liên tiếp
                        //=> đặt return để nếu k tìm thấy query string thì return error và kết thúc function luôn
            error: 'You must provide a search term'
        })
    }
    
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        error: 'Help article not available',
        name: 'Andrew Mead'
    })
})

app.get('*', (req, res) => {//404 handler
    res.render('404', {
        title: '404',
        error: 'Page not found',
        name: 'Andrew Mead'
    })
})

// app.com
// app.com/help
// app.com/about

app.listen(port, () => {
    console.log('Server is up on port '+ port)
})