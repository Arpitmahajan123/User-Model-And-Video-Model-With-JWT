import { Schema } from "mongoose";
import mongoose from mongoose;
import { type } from "os";
import { ref } from "process";
import mongoosePaginate from "mongoose-paginate-v2";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({

    Videofile : {
        type : String,
        required : true,

    },


    Thumbnail : {
        type : String,
        required : true,
    },

    Title : {
        type : String,
        required : true,
    },

    Duration : {
        type : Number,
        required : true,
    },

    ViewCount : {
        type : Number,
        default : 0,
    },

    IsPublished : {
        type : Boolean,
        default : true,
    },

    Owner : {
        type : Schema.Types.ObjectId,
        ref: "User",
        required : true,
    },


}, {timestamps : true});


// Adding Plugins to the schema

videoSchema.plugin(mongooseAggregatePaginate);















export const Video = mongoose.model("Video", videoSchema);












