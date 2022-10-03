const express = require('express');
const rotaCadastro = require('./src/routes/rotaCadastro');


let app = express();
const path = require('path');



app.use('/telalogin', rotaCadastro);
app.get('/contato', (req,res) => res.send("olá mundo"));
app.use(express.static(path.join(__dirname, '/public')));











app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})