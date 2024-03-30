const express = require('express')
const server = express()

const infos = server.get('/infos', (require, response) => {
    return response.json({
        mensagem: 'Api está on',
        teste: 'Api atualizada'
    })
})

server.listen(3500, () => {
    console.log('Api pronta para uso')
})

export default infos