const fs  = require('fs');

const HTTP =  require('http');
let Server= HTTP.createServer((req,res) =>
{
   res.setHeader('Content-Type','text/html')
   if(req.url=="/")
   {
        fs.readFile('./index.html',(err,data) =>
        {
            if(err) throw new err
            res.end(data)  
        })
   }
   else if(req.url=="/login")
   {
        res.end("Welcome To Login")
   }
   else if(req.url=="/signup")
   {
        res.end("Welcome To Signup")
   }
   else if(req.url=="/contact")
    {
        res.end("Welcome To Contact")
    }
    else if(req.url=="/service")
    {
        res.end("Welcome To Service")
    }            
})
Server.listen(8090,() =>
{
    console.log("Server Is Running");
})
