import express from 'express'
import {ROUTES} from '../config'

const router = express.Router()

// middleware
router.use((req, res, next) => {
  next()
})

router.get(ROUTES.INDEX, (req, res) => {
  res.send('get products list')
})

router.get(ROUTES.ITEM, (req, res) => {
  res.send('Get product item')
})

router.put(ROUTES.ITEM, (req, res) => {
  res.send('Save product item')
})

export {router as productsRouter}
