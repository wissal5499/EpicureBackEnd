import Chefs from "../db/models/chefs";

export class ChefsDal {

    public async createChef(chef: any) {
        chef = new Chefs({
          chefName: chef.chefName,
          category: chef.category,
          restaurantName: chef.restaurantName,
          description: chef.description,
          image_src: chef.image_src,
          chef_of_the_week: chef.chef_of_the_week,
          age: chef.age,
          mostViewd: chef.mostViewd,
          restaurants: chef.restaurants,
        });
        const response= await Chefs.create(chef);
        return response;
        
        // chef.save(function (err: any, results: any) {
        //   return results;
        // });
    }

    public async updateChef(chef:any) {
      const data = await Chefs.findOne({
        name: chef.name,
      }).updateOne({$set: {age: chef.age,},})
        return data
      }

    public findAll(query: any = null) {
        return Chefs.find();

      }
    }