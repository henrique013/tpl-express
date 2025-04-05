import express from 'express'

const app = express()
const port: number = 3000

app.use('/', (await import('./routes/system.routes.js')).default)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
