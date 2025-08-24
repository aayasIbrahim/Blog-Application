import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://aayasabraham:WEJAq2346kVbVZ2n@blog.4ayevys.mongodb.net/blogAppDB";

if (!MONGODB_URI) throw new Error("Please define the MONGODB_URI");

let cached = global.mongoose;

if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
   
}

export default connectDB;
