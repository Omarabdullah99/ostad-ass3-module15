const { EncodeToken } = require("../utility/tokenUtility")

const helloworld= (req,res)=>{
    res.send('Hello World')
}

const postbody=(req,res)=>{
    res.send('I am post body')
}

const tokenController= (req,res)=>{
    let result= EncodeToken('omarabdullah303@gmail.com', '917303')
    res.json({token:result})
}


module.exports={helloworld,postbody,tokenController}