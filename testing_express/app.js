import express from "express"

const app = express()

// app.use(express.json())
// app.post('/users', (req, res) => {
//     const { password } = req.body
//     if (!password) {
//         res.sendStatus(400)
//         return
//     }
//     res.send({userId: 0})
// })

// app.post('/users', (req, res) => {
//     res.send({userId: 0})
// })

/// github

app.use(express.json())
app.post('/users', async(req, res) => {
  const { password, username } = req.body
  if (!password || !username) {
    res.sendStatus(400)
    return
  }

  res.send({ userId: 0 })
})

export default app