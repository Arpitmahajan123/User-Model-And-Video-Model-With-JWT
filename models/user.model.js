import { Schema } from "mongoose";
import mongoose from mongoose;
import { type } from "os";
import { ref } from "process";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";



const userSchema = new Schema({


    Username : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        index: true,
    },


    Email : {
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,
    },

    Avtar : {
        type:String,
        required:true,
    },

    CoverImage : {
        type:String,
        required:true,
    },

    WatchHistory : [
        {
            type : Schema.Types.ObjectId,
            ref: "Video",
        }
    ],

    password : {
        type : String,
        required : true,
    },

    refreshToken : {
        type : String,
    },

    

}, {timestamps : true});


// Adding Plugins to the schema And Hooks.

userSchema.pre("save", async function(next) {
    
    if(this.isModified("password")) {
        this.password = bcrypt.hash(this.password, 10);
        next();
    }
    
    else {
        next();
    }
});








export const User = mongoose.model("User", userSchema);












