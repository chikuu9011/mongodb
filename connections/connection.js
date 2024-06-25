import mongoose from 'mongoose';

const connectionString = 'mongodb+srv://chikuu_9800:7741086495@cluster0.zxfgyim.mongodb.net/haware-city?retryWrites=true&w=majority&appName=Cluster0';

const connection = async () => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

export default connection;
