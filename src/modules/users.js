import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

name: {
    type: String, 
    required: true
},

age:{
    type : Number ,
    required : true
},

nickname:{
    type :String,
    required:true
},

createdAt:{
    type : Date ,
    default :Date.now()
},
})

export default mongoose.model('users',userSchema)