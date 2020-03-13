import express from 'express'
import {ROUTES} from '../config'

const router = express.Router()

// middleware
router.use((req, res, next) => {
  next()
})

router.get(ROUTES.INDEX, (req, res) => {
  res.send('get brands list')
})

router.get(ROUTES.ITEM, (req, res) => {
  res.send('Get brand item')
})

router.put(ROUTES.ITEM, (req, res) => {
  res.send('Save brand item')
})

export {router as brandsRouter}
