let exp = require('express');
let app = exp();
let got = require('got');

app.listen(4000);

// 消息头
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    next()
})

app.get('/getdata',function(req,res){
    let url = req.query.url;
    got(url).then(data => {
        res.send(data.body)
    })
})