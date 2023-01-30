let http = require("http");
let bodyPerser = require('body-parser');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

let express = require('express');
const app = express();


app.use(bodyPerser.urlencoded({extended:false}));
app.use(adminRouter);
app.use(shopRouter);
app.use((req,res,next)=>{
res.status(404).send('<h1>Page Not Found ! </h1>');
});

app.listen(3000);