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


// For Taking Password From The User.

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password);
}

// Method for generating JWT Access Token.

userSchema.methods.generateAccessToken = async function() {

    return jwt.sign({
        _id : this._id,
        Username : this.Username,
        Email : this.Email,
    },

    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn : process.env.ACCESS_TOKEN_EXPIRE,
    }

)}

// Method for generating JWT Refresh Token.

userSchema.methods.generateRefreshToken = async function() {
    return jwt.sign({
        _id : this._id,
        Username : this.Username,
        Email : this.Email,
    },

    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn : process.env.REFRESH_TOKEN_EXPIRE,

    }

)}


export const User = mongoose.model("User", userSchema);







