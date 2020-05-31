import { Router } from 'express'
import * as penyalin from '../Controller/Penyalin'

const router = Router()

router.get('/wuku', penyalin.penyalinWuku)
router.get('/sasih', penyalin.penyalinSasih)
router.get('/ingkel', penyalin.penyalinIngkel)
router.get('/bhatara', penyalin.penyalinBhatara)

export default router
