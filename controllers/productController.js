// const productSchema=require('./models/Product.js')
const productSchema=require('../models/Product.js')
const { param } = require('../routes/productRoute.js')

const createProduct=async(req,res)=>{
    const {name,description,price}=req.body
    try {
        if(!name || !description || !price){
            return res.status(202).json({
                success:false,
                message:"please fill the all the fields"
            })
        }
        const product=await productSchema({
            name,
            description,
            price

        }).save()
        return res.status(200).json({
            message:"created successfully"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({message:error})
    }


}

const getAllProduct=async(req,res)=>{
try{


    const pro=await productSchema.find({})
    if(!pro){
        return res.status(201).send({
            message:"no product available"
        })
    }
    return res.status(200).json({
        pro
    })
}
catch(error){
    console.log(error)
    return res.status(500).send({message:error}) 
}
}

const getSingleProduct=async(req,res)=>{
   try{

       const pro=await productSchema.findById({_id:req.params.id})
       if(!pro){
           return res.status(201).send({message:"invalid id"})
       }
       return res.status(200).json({
        message:"hi",
           pro
       })
   }
   catch(error){
    console.log(error)
    return res.status(500).send({message:error})
   }
}

const updateProduct=async(req,res)=>{
    try {
        const {name,description,price}=req.body
        const pro=await productSchema.findById({_id:req.params.id})
       if(!pro){
           return res.status(201).send({message:"invalid id"})
       }
      
      
       if(!price){
        return res.status(201).send({message:"pls enter updated price"})
       }

       const product=await productSchema.findByIdAndUpdate(req.params.id,{
        name:name || pro.name,
        description:description || pro.description,
        price
       })
       return res.status(200).json({
       
        product
       })

    } catch (error) {
        console.log(error)
        return res.status(500).send({message:error})  
    }
}

module.exports={createProduct,getAllProduct,getSingleProduct,updateProduct}