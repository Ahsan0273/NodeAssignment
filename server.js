const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end('Main Page')
    }
    else if(req.url === '/readFile')
    {         
        const filePath = `${path.resolve(__dirname)}/sampleread.txt`;
        fs.readFile(filePath, 'utf-8', (err, data) =>{
            if(err){
                res.end(err);
            }
            res.end(data);
        })
    }else{
        res.end('Not Found')
    }
});

server.listen(port,() => {
    console.log(`Server is running on port ${port}` )
})