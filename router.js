const express = require('express');
const route = express.Router();
const controller=require('../controller/controller');

const services=require('../services/render');
const { model } = require('mongoose');
route.get('/',services.homeRoutes);
route.get('/newstudent',services.newstudent)
route.get('/update_student',services.update_student)

//API
route.post('/api/student',controller.create);
route.get('/api/student',controller.find);
route.put('/api/student/:id',controller.update);
route.delete('/api/student/:id',controller.delete);

 module.exports=route

