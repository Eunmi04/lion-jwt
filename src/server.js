require('dotenv').config()

const express = require('express')
const { issueToken } = require('./auth')

const app = express()
const port = Number(process.env.PORT) || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: '멋쟁이사자처럼 14기 JWT 발급 실습' })
})

app.post('/login', async (req, res) => {
  try {
    const result = await issueToken(req.body.username)
    res.json(result)
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message })
  }
})

app.listen(port, () => {
  console.log(`JWT 실습 서버 실행: http://localhost:${port}`)
})
