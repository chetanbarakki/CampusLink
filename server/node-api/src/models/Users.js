import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },

  batch: {
    dept: { type: String},
    batch: { type: String },
  },

  role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },

  club: [
    {
      club: { type: mongoose.Schema.Types.ObjectId, ref: "Clubs" },
      rank: { type: String }
    },
  ],

  events_participated: [
    {
      event: { type: mongoose.Schema.Types.ObjectId, ref: "Events" },
      date: { type: Date },
    },
  ],
}, { timestamps: true });

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // only hash if changed
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// method to compare password later
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("Users", userSchema);
