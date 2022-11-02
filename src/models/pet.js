import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    species: {
        type: String,
        enum: [ 'canine', 'feline'],
        required: true,
    },
    gender: {
        type: String,
        enum: [ "male", "Female" ]
    },
    weight: {
        type: String,
        required: true,
        minLength: 3,
    },
    Vaccines: [{ type: mongoose.Schema.Types.ObjectId, ref: 'vaccines' }],
    medicalHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'medicalHistory' }],
})

const pet = mongoose.model('pet', petSchema)
export {pet}