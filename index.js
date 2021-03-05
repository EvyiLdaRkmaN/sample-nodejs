
//Recibir peticiones sin uso de express

const http = require('http');

http.createServer( ( req, res )=>{
    res.write('hola mundo desde http');
    res.end();
} )
.listen( 8081 );

console.log('escuchando el puerto: 8081');;