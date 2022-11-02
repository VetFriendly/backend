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
    schedulTime: [
        {
            type: Number,
            required: false,
            trim: true
        },
    ],
    schedulDay: [
        {
            type: Number,
            required: false,
            trim: true
        },
    ],
})

const veterinary = mongoose.model('veterinary', veterinarySchema)
export { veterinary }