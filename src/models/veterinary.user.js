import mongoose from "mongoose";

const veterinaryUserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: /.*@.*\..*/
    },
    password: {
        required: true,
        type: String,
        minLength: 3,
    },
    identification: {
        required: true,
        type: String,
        trim: true
    },
    imageProfile: {
        type: String,
        required: false,
        trim: true
    },
    entryDate: {
        type: Date,
        required: false
    },
    nacionality: {
        type: String,
        required: true,
        min: 1,
        max: 100
    },
    biography: {
        type: String,
        required: false,
        minLength: 3,
        maxLength: 500,
        trim: true
    },
    vet: { type: mongoose.Schema.Types.ObjectId, ref: 'veterinary' }
})

const veterinaryUser = mongoose.model('veterinaryUser', veterinaryUserSchema)
export {veterinaryUser}