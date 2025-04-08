import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'] },
  email: { type: String, required: [true, 'Email is required'], unique: true },
  password: { type: String, required: [true, 'Password is required'] },
  isVerified: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  forgotPasswordToken: { type: String },
  forgotPasswordExpiry: { type: Date },
  verifyToken: { type: String },
  verifyTokenExpiry: { type: Date },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
