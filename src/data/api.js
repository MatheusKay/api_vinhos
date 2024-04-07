import fs from 'fs/promises'

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const atualizarBancoApi = async () => {
    try {
        let data = await fs.readFile('src/data/api.json', 'utf8')

        let bancoApi = JSON.parse(data)

        for (let i = 0; i < bancoApi.length; i++) {
            bancoApi[i].vendas = gerarNumeroAleatorio(100, 10000)
            bancoApi[i].favoritos = gerarNumeroAleatorio(100, 1000)
            bancoApi[i].id = i + 1
        }

        let bancoApiAtualizado = JSON.stringify(bancoApi, null, 2)

        await fs.writeFile('src/data/api.json', bancoApiAtualizado, 'utf8')

        console.log('Valores atualizados com sucesso')
    } catch (err) {
        console.log('Erro: ', err)
    }
}

atualizarBancoApi()