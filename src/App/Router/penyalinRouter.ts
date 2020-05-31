import { Router } from 'express'
import * as penyalin from '../Controller/Penyalin'

const router = Router()

router.get('/wuku', penyalin.penyalinWuku)
router.get('/sasih', penyalin.penyalinSasih)

export default router
