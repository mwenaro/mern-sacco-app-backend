
import express from 'express';

import Account from './Account'
import UserRoute from './UserRoute'
import Transaction from './Transction'
import Fine from './Fine'


const router = express.Router();




router.use('/account', Account)
router.use('/user', UserRoute)
router.use('/transaction', Transaction)
router.use('/fine', Fine)

// export *  as v0Routes from './v0'
// export * as v1Routes from  './v1'

export default router;