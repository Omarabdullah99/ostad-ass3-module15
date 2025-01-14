const express= require('express')
const { helloworld, postbody, tokenController } = require('../controllers/firstController')

const firstRouter= express.Router()

firstRouter.get('/helloworld',helloworld)
firstRouter.get('/token',tokenController)
firstRouter.post('/post',postbody)


module.exports={firstRouter}