import express from 'express'
import { PORT } from './config'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(PORT, () => {
  console.log(`Server runing in port: ${PORT}`)
})
