const express=require("express")
const dotenv=require('dotenv').config()
const productRoute=require('./routes/productRoute.js')
const connectDb=require('./config/db.js')


const app=express();
connectDb()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/user',productRoute)

const port=process.env.PORT || 7080

app.listen(port,()=>{
    console.log(`server connect on port ${port}`)
})