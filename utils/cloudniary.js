import { v2 as cloudinary } from "cloudinary"
import fs from "fs";
import dotenv from "dotenv";        
import { fileURLToPath } from "url";



cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


// Ye Ek File Ka path Lega Jo Ke Local Machine Par Hoga.

const uploadImage = async (filePath) => {

    try {

        // Check if local path is provided or not.

        if(!filePath) return null;

        const result = await cloudinary.uploader.upload(filePath, {

            resource_type: "auto",
            // folder: "ecommerce",
          
        });

        console.log("File Upoaded Successfully to Cloudinary");

        // Ye Aapke File ka URL return karega jo ke Cloudinary par upload ho chuka hoga Publically.
        return result.secure_url;

    } 
    
    catch (error) {
        
        // Clean up the local file save files if upload fails.
        fs.unlinkSync(filePath); 
        
        console.error("Error uploading image to Cloudinary:", error);
        throw new Error("Image upload failed");
    }
}

export { uploadImage };

