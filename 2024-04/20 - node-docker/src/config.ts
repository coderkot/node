import dotenv from 'dotenv'

dotenv.config()

export default {
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 4000
}
