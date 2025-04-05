import express from 'express'
import systemRoutes from './routes/system.routes.js'

const app = express()
const port: number = 3000

app.use('/', systemRoutes)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
