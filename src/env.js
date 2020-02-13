import * as dotenv from 'dotenv'
import * as pkg from '../package.json'

dotenv.config()

const {PORT: port, APP_NAME: appName} = process.env

export const env = {
  node: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
  isDevelopment: process.env.NODE_ENV === 'development',
  port,
  version: pkg.version,
  app: {
    name: appName
  }
}
