
const express = require('express')
const app = express()
const port = 8000

app.get('/xxx', (req, res) => {
    res.send('你好,Express!')
})

app.listen(port, () => {
    console.log(`现在监听的端口是 ${port}`)
})