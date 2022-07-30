import expressAsyncHandler from 'express-async-handler'
const jwt = require('jsonwebtoken')
const { Users } = require ('../models/Users')

exports.protect = expressAsyncHandler(async (req,res,next)=> {
    let token : string | null = null

   if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
   try {
       //   GET token from header
       token = req.headers.authorization.split(' ')[1]

       //   Verify token
       const decoded = jwt.verify(token ,process.env.JWT_SECRET)
       
       //   GEt user from the token
       req.body.user = await Users.findById(decoded.id).select('-password')

       next()
   } catch (error) {
       res.status(401)
       throw new Error('Not authorized')
   }
   
   if(!token) {
    res.status(401)
    throw new Error('Not authorized no token')
   }
})