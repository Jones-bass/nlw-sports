import express, { Request, Response } from 'express'
import { routes } from './routes'
import cors from 'cors'

import 'express-async-errors'

const app = express()
app.use(cors())

app.use(express.json())

app.use(routes)

app.use((err: Error, request: Request, response: Response) => {
  if (err instanceof Error) {
    return response.status(400).json({
      message: err.message,
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Interal server error',
  })
})

app.listen(3333, () => console.log('🚀 HTTP Server Running!'))
