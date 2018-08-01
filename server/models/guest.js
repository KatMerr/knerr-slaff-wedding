import mongoose from 'mongoose'
const Schema = mongoose.Schema

const guestSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    plus_one: {
        type: Boolean,
        require: true
    },
    plus_one_name: String,
    email: {
        type: String,
        require: true,
        unique: true
    },
    staying_at_hotel: {
        type: Boolean,
        required: true
    }
})

export default mongoose.model('Guest', guestSchema)