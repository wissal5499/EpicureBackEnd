import mongoose from 'mongoose';
import Restaurants from './restaurants';

const chefsSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true
      },
      retaurants:{
        type: Array,
        required: false
      },
      age: {
        type: Number,
        required: true
      },
      description: {
        type: String,
        required: false
      },
      image: {
        type: String,
        required: false
      },
    },
    { timestamps: true }
  );
  
const Chefs = mongoose.model('Chefs', chefsSchema);
  
export default Chefs;

