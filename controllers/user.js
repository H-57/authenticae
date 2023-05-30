const user=require('../models/userSingup')

// handel signup and create user
const handelUserSignup=async (req,res)=>{
    const{name,email,password}= req.body
    
    try {
        const userData= await user.create({name,email,password})
        console.log(userData)
        res.send("<h1>sucess data added</h1>")
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
       
            res.redirect("/")
    } catch (error) {
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