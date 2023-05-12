const mongoose=require('mongoose')

const connectDb=()=>{
    try{

        const conn=mongoose.connect(process.env.MONGO_URL)
        console.log('mongodb connected')
    }
    catch(error){
        console.log(`mongodb error ${error}`)
    }
    }
    module.exports=connectDb