const express = require('express')
const server = express()

server.get('/', (require, response) => {
    return response.json({
        mensagem: 'Api está on',
        teste: 'Api atualizada'
    })
})

server.listen(3500, () => {
    console.log('Api pronta para uso')
})