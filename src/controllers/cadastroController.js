const path = require('path'); 

const cadastroController = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/HTML/criandoconta.html'))
    }
}

module.exports = cadastroController;