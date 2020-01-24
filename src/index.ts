import express from 'express'
import {env} from './env'

const app = express()

app.get('/', (req, res) => res.send(`${env.app.name} API with Calsot 🧅`))

app.listen(env.port, () => {
  console.log(`App listening on port ${env.port}!`) // eslint-disable-line
})
