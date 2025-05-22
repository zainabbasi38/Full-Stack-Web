const express = require('express')
const app = express()
const port = 3000

// app.use(express.static('public'))

app.use((req , res , next)=>{
    console.log(`${Date.now()} is requesting`)
    next()
})
app.use((req , res , next)=>{
    console.log("Hey i am second middleware")
    next()
})



app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/About', (req, res) => {
  res.send('Hello About!')
})
app.get('/contact', (req, res) => {
  res.send('Hello Contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
