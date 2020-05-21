import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

export const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const logMiddleWare = (req, res, next) => {
  console.log('logging from logMiddleWare')
  next()
}

const middleWare01 = (req, res, next) => {
  console.log('middleware 01')
}

const middleWare01 = (req, res, next) => {
  console.log('middleware 01')
}

app.get('/', logMiddleWare, (req, res) => {
  res.send({
    message: 'hello',
  })
})

app.post('/', [logMiddleWare, logMiddleWare], (req, res) => {
  console.log('receive req body:', req.body)
  res.send(200)
})

export const start = () => {
  app.listen(1234, 'localhost', () => {
    console.log('server is on http://localhost:1234')
  })
}
