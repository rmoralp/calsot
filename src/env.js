import * as dotenv from 'dotenv'
import {resolve} from 'path'
import * as pkg from '../package.json'

dotenv.config()

const {PORT: port, APP_NAME: appName} = process.env
const path = process.cwd()

export const env = {
  node: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
  isDevelopment: process.env.NODE_ENV === 'development',
  port,
  version: pkg.version,
  path,
  app: {
    name: appName,
    localDatabase: resolve(`${path}/src/data/db.json`)
  }
}
