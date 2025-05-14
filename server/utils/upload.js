import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined in .env");
}


const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpg", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      return null; 
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-file-${file.originalname}`
    };
  }
});

export default multer({ storage });
