import mongoose from "mongoose";

const ounerUserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: false,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    lastName: {
        type: String,
        required: false,
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
    type: {
        type: Boolean,
        required: true,
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
    pets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'pet' }]
})

const ounerUser = mongoose.model('ounerUser', ounerUserSchema)
export {ounerUser}