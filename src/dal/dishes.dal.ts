import Dishes from '../db/models/dishes';

export class DishesDal{
    
    public async createDish(dish: any){
        dish = new Dishes({
            dishName: dish.dishName,
            restaurantName: dish.restaurantName,
            description: dish.description,
            image_src: dish.image_src,
            price: dish.price,
            type: dish.type,
            category: dish.category,
        });
        const response = await Dishes.create(dish);
        return response;
    }
    public async updateDish(dish: any){
        const data= await Dishes.findOne({
            dishName: dish.dishName
        }).updateOne({$set:{description: dish.description,},})
        return data
    }
    public findAll(query: any = null) {
        return Dishes.find(query);
      }
}