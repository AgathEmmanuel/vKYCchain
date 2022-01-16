const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    bankEmail: { type: String, required: true, lowercase: true, unique: true },
    fullName: { type: String, required: true },
    newPassword: { type: String, required: true, minlength: 5 },
    employeeId: { type: String, required: true },
  },
  {
    collection: "userData",
  }
);

const User= mongoose.model("UserDetails", userSchema);
module.exports= User;

