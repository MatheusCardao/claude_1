import mongoose, { ConnectOptions } from 'mongoose';

const mongooseOptions: ConnectOptions = {
  family: 4 // Use IPv4, algumas máquinas não têm suporte para IPv6
};

mongoose.connect('mongodb://localhost:27017/todo-db', mongooseOptions)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

export default mongoose;