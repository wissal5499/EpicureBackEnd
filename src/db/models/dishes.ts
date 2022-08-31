import mongoose from "mongoose";

const dishesSchema = new mongoose.Schema(
    {
        dishName: {
            type: String,
            required: true
        },
        restaurantName: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        image_src: {
            type: String,
            required: false
        },
        price: {
            type: Number,
            required: false
        },
        type: {
            type: String,
            required: false
        },
        category: {
            type: String,
            required: false
        }
    },
    { timestamps: true }
);

const Dishes = mongoose.model('Dishes', dishesSchema);
export default Dishes