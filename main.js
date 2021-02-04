const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('public/index.html', {root: __dirname });
})

app.get('/pod-info', (req, res) => {
    res.send(JSON.parse(fs.readFileSync(`files/pod-data.json`)));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})