import express from "express";
var app = express();
import fetch from "node-fetch";
app.set('view engine', "hbs");
app.set('port', 3000);



app.get('/user', async function (req, res, next) {
  const response = await fetch("https://api.github.com/users/jpblum95");
  let data = await response.json();
  console.log(data);
  res.render('main')
  //entrando a localhost:3000/user aparece data en consola.
});

//funcion tomar usuario del buscador
/*var form = document.getElementById('userBuscado');

form.addEventListener('submit', function(event){
  event.preventDefault(); //prevents the form from autosubmitting

  let username = document.getElementById('usuario').value 

  console.log(username)
});
*/

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});


// npm install: express, node-fetch, express-handlebars --save, nodemon,