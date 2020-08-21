let {User} = require('./model');

let u1 = {
    empId:101,
    empName:'虹猫',
    age:18,
    position:'后端开发',
    telephone:'13101175369',
    address:'南京江宁区',
    edu:'本科'
}
let u2 = {
    empId:102,
    empName:'蓝兔',
    gender:'F',
    age:15,
    position:'前端开发',
    telephone:'18723659868',
    address:'南京雨花台区',
    edu:'本科'
}

User.insertMany([u1,u2],function(err,docs){
    console.log(err);
    console.log(docs);
})