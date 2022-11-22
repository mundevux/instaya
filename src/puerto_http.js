const http = require('http');

http.createServer((req, res)=>{
       /* res.write("hola lucho");
        res.end();
       */
      res.writeHead(200, {'Content-Type':'application/json'})
      let salida = {
        nombre: "lucho",
        edad:28,
        url: req.url
      }
      res.write(JSON.stringify(salida));
      res.end();
})
.listen(4000);

console.log("habilitado el puerto 4000");