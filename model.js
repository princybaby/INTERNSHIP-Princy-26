const mongoose=require('mongoose');
var schema=new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    rollno:{
        type:String,
        required:true
    },

    mobileno:{
        type:String,
        required:true

    },
    classid:{
        type:String,
        required:true

    },

})
const collegedb=mongoose.model('student',schema);
module.exports=collegedb;