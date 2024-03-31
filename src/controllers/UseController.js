import Wines from '../models/Wines.js'

async function getWines(req, res) {
    const wines = await Wines.find()

    return res.status(200).json(wines)
}

async function postWine(req, res) {
    const wine = req.body

    const newWine = await Wines.create(wine)

    return res.status(201).json(newWine)
}

async function deleteWine(req, res) {
    const wine = await Wines.findByIdAndDelete(req.params.id)

    return res.send(wine)
}

export { getWines, postWine, deleteWine }