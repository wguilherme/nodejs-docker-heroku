import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => res.json({
  version: '1.0.0',
  status: 'success',
  message: 'API Online'
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
