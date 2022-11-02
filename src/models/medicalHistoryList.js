import mongoose from "mongoose";

const vaccinesListSchema = new mongoose.Schema({
    type: {
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
    applicationDate: {
        type: Date,
        required: true,
    },
    dateRenovation: {
        type: Date,
        required: true,
    },
    expiration: {
        type: Boolean,
        required: true,
    },

})

const listSchema = new mongoose.Schema({

    vaccines: vaccinesListSchema

})

const vaccines = mongoose.model('vaccines', vaccinesSchema)
export {vaccines}