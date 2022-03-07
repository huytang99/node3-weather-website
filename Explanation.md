<!-- npm init -y
npm i express@4.16.4
DÙng nodemon để mỗi lần đổi code thì server cũng cập nhật theo

Dynamic Pages with template engine:
    -npm i handlebars: thay thế = npm i hbs@4.0.1 cho express(plugin cho express)

    Thư mục có tên là templates có tên gốc là views và là tên mặc định bắt buộc để node nó biết chỗ lấy file hbs. Sở dĩ mình dùng dc tên khác là vì mình đã define lại path trong src/app.js

    Trong thư mục template thì mình có 2 phần:
    1- partials: chỉ những component mà mình muốn dùng đi dùng lại trong nhiều page như là headers, content, footer
    2- views: chỉ các page mà switch qua lại = links mà mỗi trang thì render các component khác nhau tùy mục đích


    -nodemon src/app.js -e js,hbs:set up lại nodemon để nó có thể quan sát được cả sự thay đổi của file hbs vì bth nó chỉ quan tâm đến th .js mà mình chạy

    -Thêm partials vào view với cú pháp {{>header}} chẳng hạn k cần đường dẫn chỉ cần partial name và nó nằm trong partials

    SHow 404 khi sai url: app.js 

    QUERY STRING dc trả về qua req.query



    WORKFLOW:
    Mình tạo ra 1 server trên post 3000
    Mình tạo ra front end với handlebars
    Mình dùng thẻ a để chuyển đổi giữa các url trong index.hbs
    Mình dùng query selector để lấy về thông tin query dùng để call api forecast(đã dc viết sẵn) sau đó lại res.send về lại client(viết xong api của mình, khi gọi đến api này nó sẽ trả về res.send 1 object dưới dạng json) để mình có thể fetch nó ở bên client
    Chú ý cái bước res.send({}) là mình gửi dữ liệu trả về từ api mình viết lên client để ng khác fetch => bắt buộc
    Lấy thông tin từ url đó ở client side = fetch(js/app.js)
     -->

