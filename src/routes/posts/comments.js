const {Router}=require('express');

const commentsRoute=Router();

commentsRoute.get('/',(req,res)=>{
    res.send("todo all comments")
})

module.exports={
    commentsRoute
}