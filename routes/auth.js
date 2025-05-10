// import ....
const express = require('express')
const router = express.Router()
// import controller
const { register, login, currentUser } = require('../controllers/auth')
// import Middleware
//const { authCheck, adminCheck } = require('../middlewares/authCheck')

router.post('/register', register)
router.post('/login', login)
router.post('/current-user',currentUser) //authCheck, 
router.post('/current-admin',currentUser) //authCheck, adminCheck, 

module.exports = router