let exp = require('express')
let app = exp();

app.listen(4000);

app.use(exp.static('./public'));

