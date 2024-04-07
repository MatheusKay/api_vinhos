import mongoose from 'mongoose'

const { Schema } = mongoose

const winesSchema = new Schema({
    id: Number,
    title: String,
    price: Number,
    sold: Number,
    favorites: Number,
    category: String,
    country: String,
    imgs: {
        img_url: String,
        country_img: String
    }
})



const Wines = mongoose.model('Wines', winesSchema)

export default Wines