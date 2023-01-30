let http = require("http");
const path = require('path');
let bodyPerser = require('body-parser');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

let express = require('express');
const app = express();


app.use(bodyPerser.urlencoded({extended:false}));
app.use("/admin",adminRouter);
app.use(shopRouter);
app.use((req,res,next)=>{
res.status(404).sendFile(path.join(__dirname,'views','not-found.html'));
});

app.listen(3000);