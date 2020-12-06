import mongoose from 'mongoose';

const instance = mongoose.Schema({
    name:String,
    price:String,
    image:String,
    description:String,
    platforme:String,
    ratting:String,
})

export default mongoose.model('game', instance);