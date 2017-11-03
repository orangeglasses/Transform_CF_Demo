const express = require('express')
const app = express()
const exphbs  = require('express-handlebars');
const path = require('path')
const PORT = process.env.PORT || 1337
const CF_INSTANCE_INDEX = process.env.CF_INSTANCE_INDEX
const CF_INSTANCE_GUID = process.env.CF_INSTANCE_GUID
const MEMORY_LIMIT = process.env.MEMORY_LIMIT
const sys = require('util')
const exec = require('child_process').exec;

app.use(express.static(path.join(__dirname, 'assets')))
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home', {
    CF_INSTANCE_INDEX: CF_INSTANCE_INDEX,
    CF_INSTANCE_GUID: CF_INSTANCE_GUID,
    MEMORY_LIMIT, MEMORY_LIMIT
  })
    })

app.get('/kill', function (req, res) {
  res.send('Mal. Guy killed me, Mal. He killed me with a sword. How weird is that?')
  exec("kill -9 " + process.pid, function(err, stdout, stderr){
    console.log(stdout)
  })
})
app.listen(PORT, function () {
  console.log('Example app listening on port: ' + PORT + '!\nProcess PID: ' + process.pid)
})
