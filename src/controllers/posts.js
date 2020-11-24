const { Users, Posts}=require('../db/models');


async function createNewPost(userId,title,body){
    const post=await Posts.create({
        title,
        body,
        userId
    })

    return post;
}


async function findAllPosts(query)
{
    // todo  handle query params
    const posts=await Posts.findAll({
        include:[Users]
    });
    return posts;
}


// async function task(){
//     // console.log(await createNewPost(1,'this is title','this is body of post'))


// const posts=await showAllPosts()
// for (let p of posts)
// {
//     console.log(`${p.title}\n${p.body}\n${p.user.username}\n======\n`)
// }

// }

// task();


module.exports={
    createNewPost,
    findAllPosts
}