const express= require('express')
const { helloworld, postbody } = require('../controllers/firstController')

const firstRouter= express.Router()

firstRouter.get('/helloworld',helloworld)
firstRouter.post('/post',postbody)

module.exports={firstRouter}