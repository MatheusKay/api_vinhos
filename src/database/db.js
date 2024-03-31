import mongoose, { connect } from 'mongoose'

async function connectDatabase() {
    await mongoose,connect(
        'mongodb+srv://kayquedeveloper:Allan0623@banco-de-vinhos.ft3ul85.mongodb.net/?retryWrites=true&w=majority&appName=banco-de-vinhos'
    )
}

export default connectDatabase