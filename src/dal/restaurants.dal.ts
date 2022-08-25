import Restaurants from "../db/models/restaurants";

export class RestaurantsDal {

    public createRestaurant(restaurant: any) {
        restaurant = new Restaurants({
          name: restaurant.name,
          chef: restaurant.chef,
        });

        const response = Restaurants.create(restaurant);
        return response;

         // restaurant.save(function (err: any, results: any) {
        //   return results;
       // });
    }

    public async updateRestaurant(restaurant:any) {
      await Restaurants.findOne({
        name: restaurant.name,
      }).updateOne({$set: {chef: restaurant.chef,}});
        const updatedRestaurants = await Restaurants.find();
        return updatedRestaurants;
    }


    public findAll() {
        return Restaurants.find();
    }
}
