// import { time } from 'console';
import mongoose from 'mongoose';

const restaurantsSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true
      },
      foundedTime:{
        type: String,
        require: false
      },
      chef: {
        type: String,
        required: true
      },
      openingHours: {
        type: String,
        require: false
      },
      dishes:{
        type: Array,
        require: false
      },
      image: {
        type: String,
        require: false
      },
      category: {
        type: String,
        require: false
      }
    },
    { timestamps: true }
  );
  
const Restaurants = mongoose.model('Restaurants', restaurantsSchema);
  
export default Restaurants;

