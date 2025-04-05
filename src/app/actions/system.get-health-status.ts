interface Out {
  message: string
  timestamp: string
  uptime: number
}

export default (): Out => {
  return {
    message: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  }
}
