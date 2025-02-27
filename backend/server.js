import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Jeffs baseball manager app running sqlite')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})