const express= require('express')
const { helloworld } = require('../controllers/firstController')

const firstRouter= express.Router()

firstRouter.get('/helloworld',helloworld)

module.exports={firstRouter}