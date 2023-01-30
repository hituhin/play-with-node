const express =require('express');

const router = express.Router(); 

router.get('/', (req ,res,next)=>{
    console.log("I am from 1st middleware!");
    res.send("<h1>Responce send from 1st middleware on  Express!</h1>")
});

module.exports = router ;