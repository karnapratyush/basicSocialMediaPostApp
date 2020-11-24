const {Router}=require('express');


const {createAnonUser,
getUserById,
getUserByUsername

}=require('../../controllers/users')
const usersRoute=Router();

usersRoute.get('/:id',async(req,res)=>{
    let user;
    if (isNaN(parseInt(req.params.id)))
    {
        user=await getUserByUsername(req.params.getUserById);
    }
    else{
        user=await getUserById(req.params.id);
    }
    if (user){
        res.status(200).send(user)
    }
    else{
        res.status(404).send({
            error:'No such userid or username'
        })
    }
})



usersRoute.post('/',async (req,res)=>{
    const user=await createAnonUser();
    res.status(201).send(user);
})
module.exports={
    usersRoute
}