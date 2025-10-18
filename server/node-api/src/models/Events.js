import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String },
    eventDate: { type: Date },

    host: [{ type: mongoose.Schema.Types.ObjectId, ref: "Clubs" }],

    participants_limit: { type: Number, default: 100 },

    event_leaders: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
        rank: { type: String },
      },
    ],

    participants: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
        attended: { type: Boolean, default: false },
        // qrCode: { type: String },
        eventKey: { type: String },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Events", eventSchema);
