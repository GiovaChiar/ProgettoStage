const express= require ('express')
const cors = require ('cors')
const fs = require('fs');
const path = require('path');
const http = require('http');

// port 
const PORT= process.env.PORT || 8080

const app= express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// middleware
/*var corsMiddleware = function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', 'localhost');    
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');    
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');    
    next();
}*/

/*app.use(cors({
    origin: '*',
    methods: '*',
  }));
app.listen(8080, function () {
  console.log('CORS abilitati')
})*/
//app.use(corsMiddleware);
/*
const corsOptions = {
    origin: 'http://frontend:4200', // Only allow from this domain
    methods: 'GET, POST, UPDATE, DELETE',                     // Specify allowed methods
    optionsSuccessStatus: 200                // For legacy browsers
};

app.use(cors(corsOptions)); 

app.createServer( function (request, response){     
    console.log('request starting ' + request.url + '...');	//visualizzo nella console     
    const headers = {         
      'Access-Control-Allow-Origin': 'http://frontend:4200', // non mettere la slash finale        
      'Access-Control-Allow-Headers': 'Content-Type,Authorization',         
      'Access-Control-Allow-Methods': 'OPTIONS,GET,POST',         
      'Access-Control-Max-Age': 86400, // 1 days * 24 ore * 60 minuti * 60 secondi        
      'Vary': 'Origin, Access-Control-Request-Headers, Access-Control-Request-Method'    
    };
    console.log('---------------------------------');     
    console.log(`Request [${request.method}] ${new Date()}`, request.headers);     
    if (request.method === 'OPTIONS') {         
      console.log('preflight request');         
      response.writeHead(204, headers);         
      response.end();         
      return;     
    }     
    if (['GET', 'POST'].indexOf(request.method) > -1) {         
      const content = { date: new Date() };         
      console.log('content', content);         
      response.writeHead(200, headers);         
      response.end(JSON.stringify(content), 'utf-8');         
      return;     
    }     
    response.writeHead(405, headers);     
    response.end(`${request.method} is not allowed for the request.`);
  }
)*/


/*http.createServer(function (request, response) {     
  console.log('request starting ' + request.url + '...');	//visualizzo nella console     
  const headers = {         
    'Access-Control-Allow-Origin': 'http://frontend:4200', // non mettere la slash finale        
    'Access-Control-Allow-Headers': 'Content-Type,Authorization',         
    'Access-Control-Allow-Methods': 'OPTIONS,GET,POST',                
    'Vary': 'Origin, Access-Control-Request-Headers, Access-Control-Request-Method'           
  };     
  console.log('---------------------------------');     
  console.log(`Request [${request.method}] ${new Date()}`, request.headers);     
  if (request.method === 'OPTIONS') {         
    console.log('preflight request');         
    response.writeHead(204, headers);         
    response.end();         
    return;     
  }     
  if (['GET', 'POST'].indexOf(request.method) > -1) {         
    const content = { date: new Date() };         
    console.log('content', content);         
    response.writeHead(200, headers);         
    response.end(JSON.stringify(content), 'application/json; charset=utf-8');         
    return;     
  }     
  response.writeHead(405, headers);     
  response.end(`${request.method} is not allowed for the request.`); 
}).listen(PORT); //imposto il server per ascoltare sulla porta indicata
console.log('Server running at http://localhost:' + PORT + '/');*/


// routers
const router= require('./routes/UserRoutes.js')
app.use('/', router)




//server 
app.listen(PORT, ()=>{
    console.log(`Il server è runnato sulla porta ${PORT}`)
})

console.log(process.env);
console.log(process.env.NODE_ENV);