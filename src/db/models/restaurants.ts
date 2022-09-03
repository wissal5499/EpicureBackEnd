// import { time } from 'console';
import mongoose from 'mongoose';

const restaurantsSchema = new mongoose.Schema(
    {
      restaurantName: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      foundedTime:{
        type: Number,
        required: false
      },
      chef: {
        type: Array,
        required: false
      },
      chefName: {
        type: String,
        required: false
      },
      openingHours: {
        type: Number,
        required: false
      },
      dishes:{
        type: Array,
        required: false
      },
      image_src: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: false
      },
      stars: {
        type: Number,
        required: false
      },
      status: {
        type: String,
        required: false
      }
    },
    { timestamps: true }
  );
  
const Restaurants = mongoose.model('Restaurants', restaurantsSchema);
  
export default Restaurants;

