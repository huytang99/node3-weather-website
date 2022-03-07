<!-- Đã install heroku cli ở -g
- heroku login
- heroku keys:add Y để set up ssh key cho heroku key
- heroku create project-name để tạo project heroku
- "start": "node src/app.js" tạo trong script của package.json để heroku biết đường chạy app
-npm run start: heroku chạy project trên server của nó
-const port = process.env.PORT || 3000//dưới const app = express()lấy port heroku sort trong arc/app.js, rồi thay para app.listen 3000 = var port
- Vì mình sửa đường sẫn của api có thể vẫn là localhost3000 nếu như k chạy heroku hoặc port của heroku nên khi mình đi fetch trong public/js/app.js mình cũng phải cho nó dynamic(xem file)
- git add .
git commit -m "Heroku"
- git push heroku master(check = git remote thì sẽ thấy 2 cái 1 là origin của link github 2 là của heroku)

 -->

