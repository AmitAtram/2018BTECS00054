const express = require('express')
const app = express()
const hostname = '127.0.1.1'
const port = 3510

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running on http://${hostname}:${port}`)
})