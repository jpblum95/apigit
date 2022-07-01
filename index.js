import express from "express";
var app = express();
import fetch from "node-fetch";
app.set('view engine', "hbs");
app.set('port', 3000);
import bodyParser from "body-parser";

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async function (req, res, next) {
  res.render('main');
});

app.get('/user/:username' , async function (req, res, next) {
  let usuarioBuscador = req.params.username;
  const response = await fetch(`https://api.github.com/users/${usuarioBuscador}`);
  const data = await response.json();
  const data2 = {
    login: data.login,
    avatar: data.avatar_url,
    nombre: data.name,
    repositorio: data.public_repos
  };
  console.log(data2);
  console.log(data);
  res.render('main2', {data: data2});
  //return res.json({ data: data2 });
  //entrando a localhost:3000/user aparece data en consola.
});

/*
router.get('/:name', function(req, res, next) {
  var name = req.params.name;
  var user = data.filter(u => u.name == name );
  return res.json({ message: 'Users Show', data: user });
});
*/

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});



// npm install: express, node-fetch, express-handlebars --save, nodemon,