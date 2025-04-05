import { ActionFn } from './action.js'

interface Out {
  message: string
  timestamp: string
  uptime: number
}

export const getHealthStatus: ActionFn<void, Out> = async () => {
  return {
    message: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  }
}
