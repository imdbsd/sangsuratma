import { Router } from 'express'
import * as penyalin from './App/Controller/Penyalin'
import validateParamsMidleware from './App/Middleware/validateParamsMiddleware'

const router = Router()

router.get('/penyalin/wuku', validateParamsMidleware, penyalin.penyalinWuku)

export default router
