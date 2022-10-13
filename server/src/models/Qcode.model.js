import mongoose from "mongoose";

const QrSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "The title is required"],
  },
  url: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Qr-code", QrSchema);
