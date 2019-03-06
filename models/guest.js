import mongoose from 'mongoose'
const Schema = mongoose.Schema

const guestSchema = new Schema({
    names: {
        type: String,
        required: [true, "Must include name in RSVP"]
    },
    number_attending: {
        type: Number,
        required: false
    },
    not_attending: {
        type: Boolean,
        required: false
    }
})

export default mongoose.model('Guest', guestSchema)