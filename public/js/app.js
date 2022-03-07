console.log('Client sise js file is loaded')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const location = search.value//lấy input value
    messageOne.textContent = "Loading..."
    messageTwo.textContent = ""
    fetch(`/weather?address= ${location}`).then((response) => {//gọi đến /weather nơi có hàm xử lí query string trong app.get('/weather')
        response.json().then((data)=> {
            if(data.error){
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
    
})