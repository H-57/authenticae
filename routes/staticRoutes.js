const express=require('express')
const router=express.Router()
const path = require("path");

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname , "../public/loginForm.html"));
  });
  
  router.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/signupForm.html"));
  });

module.exports=router  