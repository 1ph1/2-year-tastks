const express = require('express')

const app = express();

app.get('/statistic', function (req, res) {
    res.end(JSON.stringify({asd: 123, qwe: 46}));
});

app.use('/', express.static(`${__dirname}/../frontend`));
app.listen(5000, function () {
    console.log('Server started!');
});
