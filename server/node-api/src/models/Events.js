import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },

  host: [{ type: mongoose.Schema.Types.ObjectId, ref: "Clubs" }],

  event_leaders: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
      rank: { type: String },
    },
  ],

  participants_limit: { type: Number, default: 100 },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
}, { timestamps: true });

export default mongoose.model("Events", eventSchema);
