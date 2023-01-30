const express =require('express');
const router = express.Router();
  router.get('/add-product', (req ,res,next)=>{  
    res.send('<form action="/product" method="POST"> <input type="text" name="title"> <button action="submit"> Add Product</button> </form>')
});
router.post('/product',(req,res,next)=>{
    console.log("Request body",(req.body));
    res.redirect('/');
});

module.exports =router;