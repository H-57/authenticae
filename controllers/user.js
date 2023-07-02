const { redirect } = require('express/lib/response')
const user=require('../models/userSingup')

const{ setUser }=require('../service/auth')
// handel signup and create user
const handelUserSignup=async (req,res)=>{
    const{name,email,password}= req.body
    if(!email||!password){

        return  res.status(404).json({error:"plz fill  fields"})
  
      }
    const userExist=await user.find({email,})
    if(userExist.length > 0) return res.json({error:"this email is used already",name,email,password})
    try {
        const userData= await user.create({name,email,password})
        console.log(userData)
        // res.json({"data":"sucess data added"})
       res.redirect("/user/login")
    } catch (error) {
        res.send(error.message)
    }
      

}

// handle login and analysis
const handelUserLogin=async (req,res)=>{
    const{email,password}= req.body


    if(!email||!password){

      return  res.status(404).json({error:"plz fill  fields"})

    }
    

    try {
        const User=await user.findOne({email})
      

        if(!User){
            return res.status(404).json({error:"plz enter right email info"})
            }

          
        if(User.password!=password){
          return  res.status(404).json({error:"plz enter right password info"})
            }
       
           
           const tocken= setUser(User)
            res.cookie("uid",tocken)
            res.redirect("/")
    } 
    catch (error) {
        res.send(error.message)
    }
      

}

const getUserData=async(req,res)=>{
    try {
        const users=await user.find()
        res.json(users)
    } catch (error) {
        res.send(error.message)
    }
    
}
module.exports={handelUserSignup,getUserData,handelUserLogin}