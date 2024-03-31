import mongoose from 'mongoose'

const { Schema } = mongoose

const winesSchema = new Schema({
    title: String,
    price: Number,
    imgs: {
        img_url: String,
        country_img: String
    }
})



const Wines = mongoose.model('Wines', winesSchema)

export default Wines