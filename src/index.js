const express = require('express')
const mongoose = require('mongoose')

const server = express()
server.use(express.json())

const Wine = mongoose.model('Wine', { 
    title: String,
    price: Number,
    img_url: String,
    country_img: String
})

server.get('/', async (require, response) => {
    const wines =  await Wine.find()

    return response.send(wines)
})

server.delete('/:id', async (require, response) => {
    const wine = await Wine.findByIdAndDelete(require.params.id)

    return response.send(wine)
})

server.put('/:id', async (require, response) => {
    const wine = await Wine.findByIdAndUpdate(require.params.id, {
        title: require.body.title,
        price: require.body.price,
        img_url: require.body.img_url,
        country_img: require.body.country_img
    }, {
        new: true
    })

    return response.send(wine)
})

server.post('/', async (require, response) => {
    const wines = new Wine({
        title: require.body.title,
        price: require.body.price,
        img_url: require.body.img_url,
        country_img: require.body.country_img
    })

    await wines.save()

    return response.send(wines)
})

server.listen(3500, () => {
    mongoose.connect('mongodb+srv://kayquedeveloper:Allan0623@banco-de-vinhos.ft3ul85.mongodb.net/?retryWrites=true&w=majority&appName=banco-de-vinhos')

    console.log('Api pronta para uso')
})