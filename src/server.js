import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

export const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res, next) => {
  // res.send({
  //   message: 1,
  // })
  next()
})

app.get('/', (req, res) => {
  res.send({
    message: 2,
  })
})

app.post('/', (req, res) => {
  res.send(200)
})

export const start = () => {
  app.listen(1234, 'localhost', () => {
    console.log('server is on http://localhost:1234')
  })
}
