const express = require(`express`);
const app = express();
const path = require('path');

/*carpeta estatica */
app.use(express.static(path.resolve(__dirname,'public')));


/*levanto el server*/
app.listen(process.env.PORT|| 3000,()=>console.log("exito en levantar el servidor 3000"))

/*rutas*/
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, `./views/home.html`))

});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, `./views/login.html`))

});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, `./views/register.html`))

});