const helloworld= (req,res)=>{
    res.send('Hello World')
}

const postbody=(req,res)=>{
    res.send('I am post body')
}


module.exports={helloworld,postbody}