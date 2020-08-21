const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 创建用户名对应的Schema
const userSchema = new Schema({
    empId:Number,
    empName:String,
    gender:{type:String,default:'M'},
    age:Number,
    position:String,
    telephone:String,
    address:String,
    edu:String
})

// 创建数据库
const User = mongoose.model('emp',userSchema);

const url = 'mongodb://localhost:27017/web';
var opt = { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
};

// 连接数据库
mongoose.connect(url,opt);

// 暴露
module.exports = {
    User
}
