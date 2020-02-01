import express from 'express'
import {ROUTES} from '../config'
import {domain} from '../domain'

const router = express.Router()

// middleware
router.use((req, res, next) => {
  next()
})

router.get(ROUTES.INDEX, async (req, res) => {
  const response = await domain.getCategoryListUseCase()
  res.send(response)
})

router.get(ROUTES.ITEM, async (req, res) => {
  const response = await domain.getCategoryUseCase()
  res.send(response)
})

router.put(ROUTES.ITEM, async (req, res) => {
  const response = await domain.saveCategoryUseCase()
  res.send(response)
})

export {router as categoriesRouter}
