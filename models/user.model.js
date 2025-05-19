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










export const User = mongoose.model("User", userSchema);












