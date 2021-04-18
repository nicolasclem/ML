const express = require(`express`);
const app = express();
const path = require('path');


app.use(express.static(path.resolve(__dirname,'public')));

app.listen(3030,()=>console.log("exito en levantar el servidor 3030"))


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, `./views/home.html`))

});