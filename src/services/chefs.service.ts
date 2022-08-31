
import { ChefsDal } from "../dal/chefs.dal";

export class ChefsService {

    public static async getChefs() {
        // const dal = new ChefsDal();
        // const res = await dal.findAll();
        return  {name: "Yossi Shitrit",
                description:"Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
                image: "./Images/Chef/chef1.png",
            }
    };

    public async createChef(chef:any) {
       const dal = new ChefsDal();
       const res = dal.createChef(chef);
       return res;
    };

    public async updateChef(chef:any) {
       // const dal = new ChefsDal();
      //  const res = await dal.updateChef(chef);
      //  return res;
    };
};


