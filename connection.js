const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
const con=await mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
   // useFindAndModify:false,
   // useCreateIndex:true,
  
     })
  
     Model.findOneAndUpdate(query, update, { new: true, runValidators: true }, callback);

    console.log('MongoDB connection:$(con.connection.host)')
    }catch(err){
    console.log(err);
    process.exit(1);
    }
}
module.exports=connectDB