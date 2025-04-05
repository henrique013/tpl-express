import { Router, Request, Response } from 'express'
import { getHealthStatus } from '../../app/actions/system.get-health-status.js'

const router = Router()

router.get('/health-check', async (_req: Request, res: Response) => {
  const healthStatus = await getHealthStatus()
  res.json(healthStatus)
})

export default router
