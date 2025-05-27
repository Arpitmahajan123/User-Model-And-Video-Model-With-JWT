import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";


// Set up storage configuration for multer.


// Here we define the storage configuration for multer, which specifies where to store the uploaded files and how to name them.
// In this case, we are using disk storage, which saves the files to the local filesystem.
// The destination is set to the "uploads/" directory, and the filename is generated using a unique suffix based on the current timestamp and a random number.
// This ensures that each uploaded file has a unique name, preventing overwrites of files with the same original name.
// cb Means Callback Function, which is used to tell multer where to store the file and what name to give it.


const storage = multer.diskStorage({
  
  destination: (req, file, cb) => {
    // Specify the directory to store uploaded files.
    cb(null, "./public/temp"); 
  },
  
  filename: (req, file, cb) => {
    // Generate a unique filename using the original name and a timestamp.
    cb(null, file.originalname);

  },

});


export const upload = multer({ 
    storage,
 });


























