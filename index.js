
//Recibir peticiones sin uso de express

// const http = require('http');

// http.createServer( ( req, res )=>{
//     res.write('hola mundo desde http');
//     res.end();
// } )
// .listen( 8081 );

// console.log('escuchando el puerto: 8081');;

const express = require('express');
const app = express();
const port = 8081;

app.get('/', (req, res ) =>{
    res.send('Hola mundo');
});

//para toda url difrente de las establecidas.
app.get('*',( req, res )=>{
    res.sendFile(__dirname + '/public/404.html');
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})