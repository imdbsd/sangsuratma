import express from 'express'
import router from './Router'

const app = express()

app.use(router)

export default app
