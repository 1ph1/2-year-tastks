const express = require('express')
const app = express();
const port = 7000

app.get('/login', function(req, res) {
    console.log(req.query.login)
    res.end(`
        <h1>Hello ${req.query.login}</h1>
        <p>You are registered!</p>
    `)
})

app.use('/', express.static(__dirname));
app.listen(port, function () {
    console.log('Server started on port '+ port +'!');
});