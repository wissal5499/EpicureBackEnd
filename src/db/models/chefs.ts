import mongoose from 'mongoose';

const chefsSchema = new mongoose.Schema(
    {
      chefName: {
        type: String,
        required: true
      },
      category:{
        type: String,
        required: false
      },
      restaurantName:{
        type: String,
        required: false
      },
      age: {
        type: Number,
        required: false
      },
      description: {
        type: String,
        required: false
      },
      image_src: {
        type: String,
        required: false
      },
      chef_of_the_week:{
        type: Boolean,
        required: false
      },
      mostViewd: {
        type: Boolean,
        required: false
      }
    },
    { timestamps: true }
  );
  
const Chefs = mongoose.model('Chefs', chefsSchema);
  
export default Chefs;

