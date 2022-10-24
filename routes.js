const http = require('http')
let fs = require("fs");

const requestHandler = (req ,res)=>{
    const url = req.url;
    const method = req.method;
    res.setHeader('content-type', 'text/html');
    
    if (url === '/') {
        res.write('<html>');
        res.write('<head> <title> here login first </title> </head>')
        res.write('<body> <form action="/message" method="POST"> <input type="text" name="field"><button type="submit">SEND</button> </form> </body>')
        res.write('</html>');
        return res.end()
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            let data = Buffer.concat(body).toString();
            const fieldValue = data.split('=')[1];
            fs.writeFile('write.text', fieldValue, (error) => {
                res.statusCode = 302;
                res.setHeader('location', '/');
                return res.end();
            });
    
        })
    
    }
    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<head> <title> wellcome to my node server </title> </head>')
    res.write('<body> Here is the responce from node server </body>')
    res.write('</html>');
}
 module.exports =requestHandler;

//  or 
// module.exports ={
//     handler: requestHandler,
//     text : "here is some text"
// }
