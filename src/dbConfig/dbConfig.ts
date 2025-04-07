import mongoose from 'mongoose';

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;
    connection.on('connected', () => {
      console.log('MongoDB connected successfully');
    });
    connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
      process.exit(1);
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}
