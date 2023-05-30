const express=require('express')
const router=express.Router()

const {handelUserSignup,getUserData,handelUserLogin}=require('../controllers/user')
// const getUser=require('../controllers/user')


router.post("/signup",handelUserSignup)
router.get("/",getUserData)
router.post("/login",handelUserLogin)



module.exports =router;