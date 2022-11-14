import { uniqueId } from "lodash";
import mongoose from "mongoose";

const QrSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "The title is required"],
  },
  url: {
    type: String,
    required: uniqueId,
  },
});

export default mongoose.model("Qrcode", QrSchema);
