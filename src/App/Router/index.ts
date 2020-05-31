import { Router } from 'express'
import penyalinRouter from './penyalinRouter'
import validateParamsMidleware from '../Middleware/validateParamsMiddleware'

const mainRouter = Router()

mainRouter.use('/penyalin', validateParamsMidleware, penyalinRouter)

export default mainRouter
