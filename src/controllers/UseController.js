import Wines from '../models/Wines.js'

async function getWines(req, res) {
    const wines = await Wines.find()

    return res.status(200).json(wines)
}

export { getWines } 