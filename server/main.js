'use es6';

const Express = require('express');

const app = new Express();

app.get('/', (req, res) => {
  res.render('./../app/index.ejs');
})
.use(Express.static(`${__dirname} ./../.tmp`))
.listen(process.env.PORT || 7777);
