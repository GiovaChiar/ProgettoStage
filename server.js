const express= require ('express')
const cors = require ('cors')

const app= express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// middleware
/*var corsMiddleware = function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', 'localhost');    
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');    
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');    
    next();
}*/
//app.use(cors())
/*app.use(cors({
    origin: '*',
    methods: '*',
  }));
app.listen(8080, function () {
  console.log('CORS abilitati')
})*/
//app.use(corsMiddleware);

/*const corsOptions = {
    origin: 'http://backend:8080', // Only allow from this domain
    methods: 'GET, POST, UPDATE, DELETE',                     // Specify allowed methods
    //optionsSuccessStatus: 200                // For legacy browsers
};*/

app.use(cors()); 




// routers
const router= require('./routes/UserRoutes.js')
app.use('/', router)


// port 
const PORT= process.env.PORT || 8080

//server 
app.listen(PORT, ()=>{
    console.log(`Il server è runnato sulla porta ${PORT}`)
})

console.log(process.env);
console.log(process.env.NODE_ENV);