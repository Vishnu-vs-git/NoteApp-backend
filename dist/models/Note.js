import mongoose, { Schema } from "mongoose";
const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
        default: "",
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    },
}, {
    timestamps: true,
});
export default mongoose.model("Note", noteSchema);
//# sourceMappingURL=Note.js.map