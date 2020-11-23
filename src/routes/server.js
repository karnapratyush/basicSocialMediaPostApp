const express =require('express');
const models=require('../db/models.js');
const db=models.db;
//  if we want just one thing at a time can use 
// const {db}=require('./db/models')

const app=express();

db.sync({force:true})
.then(()=>{
    app.listen(8888,()=>{
    console.log('http://127.0.0.1:8888');
    
    })
})
.catch((err)=>{
    console.error(new Error('could not start db'));
    console.error(err)
})
