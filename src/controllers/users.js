const { Users }=require('../db/models');
const { genRandomUsername }=require('../utils/username');



async function createAnonUser(){

    const user = await Users.create({
        username:genRandomUsername()
    })

    return user;
}



// async function task(){

//     console.log(await createAnonUser());
//     console.log('----------------------');
//     console.log(await createAnonUser());
//     console.log('----------------------');
//     console.log(await createAnonUser());
//     console.log('----------------------');
//     console.log(await createAnonUser());
//     console.log('----------------------');

    


// }

// task();


module.exports={
    createAnonUser
}