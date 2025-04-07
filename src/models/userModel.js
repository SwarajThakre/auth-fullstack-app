import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'] },
  email: { type: String, required: [true, 'Email is required'], unique: true },
  password: { type: String, required: [true, 'Password is required'] },
  isVerified: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  forgotPasswordToken: { type: String, default: null },
  forgotPasswordExpiry: { type: Date, default: null },
  verifyToken: { type: String, default: null },
  verifyTokenExpiry: { type: Date, default: null },
});

const User = mongoose.model.users || mongoose.model('users', userSchema);

export default User;
