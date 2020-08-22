const express = require('express');
const {User} = require('./model');
const app = express();

app.listen(4000);   

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    next();
})

app.get('/getAll',function(req,res){
    User.find(function(err,docs){
        if(err){
            res.send({status:'ERROR',data:null});
            return;
        }
        res.send({status:'SUCCESS',data:docs});
    })
})

app.get('/add',function(req,res){
    let emp = req.query.emp;
    let o = new User(emp);
    o.save(function(err,doc){
        if(err){
            res.send({status:'ERROR'});
            return;
        }
        res.send({status:'SUCCESS'});
    })
})


