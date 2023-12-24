const http=require('http')

const server = http.createServer((req,res)=>{
   if(req.url === '/'){
    res.end("welcome to home page")
   }
   if(req.url === '/about'){
    res.end("here is about page")
   }
   res.end(`<h1>oops</h1>
   <p>no page exists</p>
   <a href='/'>back Home</a>`)
})

server.listen(5000)