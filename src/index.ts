import express, { Request, Response } from 'express'

const app = express()
const port: number = 3000

app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Hello World!' })
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
