const express= require ('express')
const cors = require ('cors')

const app= express()

const corsOption= {
    origin: 'http:localhost:23456'

}
// middleware 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))



// routers
const router= require('./routes/UserRoutes.js')
app.use('/api/utenti', router)

// testing api
app.get('/',(req,res)=>{
    res.json({message: 'hello from api'})
})


// port 
const PORT= process.env.PORT || 23456

//server 
app.listen(PORT, ()=>{
    console.log(`Il server è runnato sulla porta ${PORT}`)
})