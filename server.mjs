import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("hello babs");
  res.send('Hi check this out! = <a href=" https://ibtihaj51.github.io/Charity-Website/ "> https://ibtihaj51.github.io/Charity-Website/')
  console.log('response from ibtihaj ali: ' +  req.ip);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})