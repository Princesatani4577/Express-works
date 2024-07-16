const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/app', (req, res) => {
  res.send('Hello app!')
})

app.get('/home', (req, res) => {
    res.sendfile(__dirname+'/views/home.html')
  })

  app.get('/prince', (req, res) => {
    res.sendfile(__dirname+'/views/prince.html')
  })
  app.get('/about', (req, res) => {
    res.sendfile(__dirname+'/views/about.html')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})