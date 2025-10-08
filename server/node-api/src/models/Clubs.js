import mongoose from "mongoose";

const clubSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String },

  club_leaders: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
      rank: { type: String },
    },
  ],

  club_members: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
      rank: { type: String },
    },
  ],

  events_hosted: [{ type: mongoose.Schema.Types.ObjectId, ref: "Events" }],
}, { timestamps: true });

export default mongoose.model("Clubs", clubSchema);
