var collegedb=require('../model/model');
//create and save new student
exports.create=(req,res)=>{
    //validation
    if(!req.body){
        res.status(400).send({message:"content can not be empty"});
        return;
    }
    //new user
    const student=new studentdb({
        name:req.body.name,
        rollno:req.body.rollno,
        mobileno:req.body.mobileno,
        classid:req.body.classid
    })
    //save student in the database
    studentdb
    .save(student)
    .then(data=>{
     res.send(data)   

    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||"some error occured while creating a create operation"
        })
    })

}
//retrive and return 
exports.find=(req,res)=>{

}
//update student by id
exports.update=(req,res)=>{

}
//delete student
exports.delete=(req,res)=>{

}
