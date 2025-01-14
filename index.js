const express = require('express')
const { firstRouter } = require('./routes/fristRouter')
const app= express()

app.use('/api',firstRouter)

app.get('/', (req,res)=>{
    res.send('hello express')
})

app.listen(3000, ()=>{
    console.log('app running 3000 port')
})
