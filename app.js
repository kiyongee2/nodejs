const express = require('express')
const app = express()
const port = 3000

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// 라우팅
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use("/contacts", require("./routes/contactRoute"));


app.listen(3000, () => {
  console.log(`포트 ${port}에서 실행 중...`);
})