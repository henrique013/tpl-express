import { Router, Request, Response } from 'express'

const router = Router()

router.get('/health-check', (_req: Request, res: Response) => {
  res.json({
    message: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  })
})

export default router