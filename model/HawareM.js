import mongoose from "mongoose";

const { Schema } = mongoose;

const HawareSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tower: {
        type: Number,
        required: true
    },
    flat: {
        type: Number,
        required: true
    },
    complane: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    }
});

const userM = mongoose.model('Haware', HawareSchema);

export default userM;
