import { Router } from 'express'
import * as penyalin from '../Controller/Penyalin'

const router = Router()

router.get('/urip', penyalin.penyalinUrip)
router.get('/wuku', penyalin.penyalinWuku)
router.get('/sasih', penyalin.penyalinSasih)
router.get('/ingkel', penyalin.penyalinIngkel)
router.get('/bhatara', penyalin.penyalinBhatara)
router.get('/wewaran', penyalin.penyalinWewaran)
router.get('/penanggal-pangelong', penyalin.penyalinPenanggalPangelong)

export default router
