import mongoose from "mongoose";

// Connect to MongoDB
 async function connectDataBase() {
  // Use Mongoose to connect
  await mongoose.connect(
    "mongodb+srv://<DBNAME>:<PASSWORD>@cluster0.ll8dy7s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
}

export default connectDataBase;
