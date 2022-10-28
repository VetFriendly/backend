import mongoose from "mongoose";

const veterinarySchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    adress: {
        type: String,
        required: false,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    schedulTime: {
        type: Array,
        required: false,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    schedulDay: {
        type: Array,
        required: false,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
})

const veterinary = mongoose.model('veterinary', veterinarySchema)
export {veterinary}