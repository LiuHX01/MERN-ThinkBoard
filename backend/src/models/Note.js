import mongoose from "mongoose";

// 1. 创建一个schema
// 2. 基于schema创建一个model

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Note = mongoose.model("Note", noteSchema);

export default Note;