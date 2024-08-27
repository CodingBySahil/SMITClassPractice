// console.log('This is server component');
const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
  res.send('<h1>CodingBySahil</h1><h1>CodingBySahil</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
