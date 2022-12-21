//Écrivez un programme Node.js qui utilise le module http pour créer un serveur simple qui sert un fichier statique.
const fs = require('fs'); 
const http = require('http')

const server = http.createServer((httpreq, httpres) => {

    fs.readFile('ini/Documents/Isitech/D2/Module/Module NodeJS/NodeJS/TP2/test.txt','utf-8', (err,data)=>{
        if(err){
            console.log(err)
                httpres.statusCode =500
                httpres.end ('an error has occured');
                return;
        }



        httpres.setHeader('Content-Type','text/plain')

        httpres.end(data)
      })
    })

server.listen(3000, ()=>{

    console.log('server web listening on port 3000')

})

