import mongoose from 'mongoose';

const instance = mongoose.Schema({
      platforme:String,
      image:String, 
      title:String, 
      ratting:String, 
      price: String,
      description:String ,
      type: String
})

export default mongoose.model('game', instance);