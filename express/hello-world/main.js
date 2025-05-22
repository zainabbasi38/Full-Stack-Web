const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})
app.get('/About-us', (req, res) => {
  res.send('About me')
})
app.get('/contact', (req, res) => {
  res.send('For contact me')
})
app.get('/blog', (req, res) => {
  res.send('Blog')
})
app.get('/blog/:slug', (req, res) => {
  res.send(`Hello to ${req.params.slug}`)
})
// app.get('/blog/intro-to-js', (req, res) => {
//   res.send('Intro to java script')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
