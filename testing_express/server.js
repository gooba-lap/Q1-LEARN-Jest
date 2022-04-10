import express from 'express'

const app = express()

app.get('test', (req, res) => {
    res.send('🤗')
})

app.listen(8080, () => console.log('listening on port 8080'))