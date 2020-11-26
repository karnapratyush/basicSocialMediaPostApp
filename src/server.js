const express =require('express');
const models=require('./db/models.js');
const PORT=process.env.PORT||4444
const db=models.db;
//  if we want just one thing at a time can use 
// const {db}=require('./db/models')

const {usersRoute}=require('./routes/users/index');
const {postsRoute}=require('./routes/posts');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api/users',usersRoute);
app.use('/api/posts',postsRoute);
app.use('/', express.static(__dirname+'/public'));


db.sync()
.then(()=>{
    app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
    
    })
})
.catch((err)=>{
    console.error(new Error('could not start db'));
    console.error(err)
})

