import express from 'express'
import {ROUTES} from '../config'

const router = express.Router()

// middleware
router.use((req, res, next) => {
  next()
})

router.get(ROUTES.INDEX, (req, res) => {
  res.send('get categories list')
})

router.get(ROUTES.ITEM, (req, res) => {
  res.send('Get categories item')
})

router.put(ROUTES.ITEM, (req, res) => {
  res.send('Save categories item')
})

export {router as categoriesRouter}
