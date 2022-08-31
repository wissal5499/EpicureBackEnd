import Restaurants from "../db/models/restaurants";
import { ChefsDal } from "./chefs.dal";
import { DishesDal } from "./dishes.dal";

export class RestaurantsDal {

    public createRestaurant(restaurant: any) {
        restaurant = new Restaurants({
          restaurantName: restaurant.restaurantName,
          location: restaurant.location,
          foundedTime: restaurant.foundedTime,
          chef: [],
          openingHours: restaurant.openingHours,
          image_src: restaurant.image_src,
          category: restaurant.category,
          stars: restaurant.stars,
          dishes: [],
        });

        const response = Restaurants.create(restaurant);
        return response;
    }

    public async updateRestaurant(restaurant:any) {
      await Restaurants.findOne({
        restaurantName: restaurant.restaurantName,
      }).updateOne({$set: {chef: restaurant.chef,}});
        const updatedRestaurants = await Restaurants.find();
        return updatedRestaurants;
    }

    public findAll() {
        return Restaurants.find();
    }

    public async PushDishToRestaurant(newdish: any){
      const dish = await DishesDal.prototype.createDish(newdish);
      const data = await Restaurants.findOne({restaurantName: newdish.restaurantName}).updateOne(
        {$push:{dishes: dish._id}}
      );
      return data;
    }
    public async PushChefToRestaurant(newchef: any){
      const chef = await ChefsDal.prototype.createChef(newchef);
      const data = await Restaurants.findOne({restaurantName: newchef.restaurantName}).updateOne(
        {$push:{chef: chef._id}}
      );
      return data;
    }
}
