import mongoose from "mongoose";

const clubSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    leader: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    members: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
        role: {
          type: String,
          enum: ["CLUB_MEMBER", "CLUB_LEADER"],
          default: "CLUB_MEMBER",
        },
      },
    ],
    requests: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
        message: { type: String },
        status: {
          type: String,
          enum: ["PENDING", "APPROVED", "REJECTED"],
          default: "PENDING",
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Club", clubSchema);
