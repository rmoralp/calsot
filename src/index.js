import express from 'express'
import bodyParser from 'body-parser'
import {env} from './env'

import {ROUTES} from './config'
import {productsRouter} from './controllers/products'
import {categoriesRouter} from './controllers/categories'
import {attributesRouter} from './controllers/attributes'
import {brandsRouter} from './controllers/brands'

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.raw())

app.get('/', (req, res) => res.send(`${env.app.name} API with Calsot 🧅`))

// Routes
app.use(ROUTES.ATTRIBUTES, attributesRouter)
app.use(ROUTES.BRANDS, brandsRouter)
app.use(ROUTES.CATEGORIES, categoriesRouter)
app.use(ROUTES.PRODUCTS, productsRouter)

// Run server
app.listen(env.port, () => {
  console.log(`App listening on port ${env.port}!`) // eslint-disable-line
})
