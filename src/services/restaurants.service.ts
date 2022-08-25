import { RestaurantsDal } from "../dal/restaurants.dal";

import { ChefsService } from "./chefs.service";

export class RestaurantsService {

    public  async getRestaurants() {
       /* const dal = new RestaurantsDal();
        const res = await dal.findAll();
        return res;*/
        return  {
          container: [{
          name: "Claro",
          chefs: await ChefsService.getChefs(),
           FoundingYear : 2010,
           OpeningHours:"Open now",
           location:"Ran Shmueli",
           image:"./Images/Restaurants/Claro.svg",
           Category:"new",
           dishes:[{
               name:"Pad Ki Mao",
               description:"Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
               price: 88,
               image:"./Images/Restaurants/Yapan.svg",
               type:"breakfast",
               category:"./Images/DishesCategory/SpicySmall.svg"
               },
               {name:"Garbanzo Frito",
               description:"Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
               price: 78,
               image:"./Images/Restaurants/Messa.svg",
               type:"dinner",
               category:"./Images/DishesCategory/VegitarianSmall.svg"
               },
               {name:"Garbanzo Frito",
               description:"Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
               price: 78,
               image:"./Images/Restaurants/tiger-lily.svg",
               type:"lanch",
               category:"./Images/DishesCategory/VeganSmall.svg"
               }
               ]},
               {name: "Kab Kem",
               location:"Kab Kem",
               image:"./Images/Restaurants/Kab kem.svg",
               Category:"new",
               OpeningHours:"Open now",
               dishes:[{
                name:"Pad Ki Mao",
                description:"Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
                price: 88,
                image:"./Images/Restaurants/Yapan.svg",
                type:"breakfast",
                category:"./Images/DishesCategory/SpicySmall.svg"
                },
                {name:"Garbanzo Frito",
                description:"Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
                price: 78,
                image:"./Images/Restaurants/Messa.svg",
                type:"dinner",
                category:"./Images/DishesCategory/VegitarianSmall.svg"
                },
                {name:"Garbanzo Frito",
                description:"Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
                price: 78,
                image:"./Images/Restaurants/tiger-lily.svg",
                type:"lanch",
                category:"./Images/DishesCategory/VeganSmall.svg"
                }
                ]},
   
               {name: "Messa",
               location:"Aviv Moshe",
               image:"./Images/Restaurants/Messa.svg",
               Category:"new",
               OpeningHours:"Open now",
               dishes:[{
                name:"Pad Ki Mao",
                description:"Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
                price: 88,
                image:"./Images/Restaurants/Yapan.svg",
                type:"breakfast",
                category:"./Images/DishesCategory/SpicySmall.svg"
                },
                {name:"Garbanzo Frito",
                description:"Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
                price: 78,
                image:"./Images/Restaurants/Messa.svg",
                type:"dinner",
                category:"./Images/DishesCategory/VegitarianSmall.svg"
                },
                {name:"Garbanzo Frito",
                description:"Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
                price: 78,
                image:"./Images/Restaurants/tiger-lily.svg",
                type:"lanch",
                category:"./Images/DishesCategory/VeganSmall.svg"
                }
                ]},
   
               {name: "Nitan Thai",
               location:"Shahaf Shabtay",
               image:"./Images/Restaurants/nithan-thai.svg",
               Category:"popular",
               OpeningHours:"Open now",
               dishes:[{
                name:"Pad Ki Mao",
                description:"Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
                price: 88,
                image:"./Images/Restaurants/Yapan.svg",
                type:"breakfast",
                category:"./Images/DishesCategory/SpicySmall.svg"
                },
                {name:"Garbanzo Frito",
                description:"Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
                price: 78,
                image:"./Images/Restaurants/Messa.svg",
                type:"dinner",
                category:"./Images/DishesCategory/VegitarianSmall.svg"
                },
                {name:"Garbanzo Frito",
                description:"Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
                price: 78,
                image:"./Images/Restaurants/tiger-lily.svg",
                type:"lanch",
                category:"./Images/DishesCategory/VeganSmall.svg"
                }
                ]},

               {name: "Kab Kem",
               location:"Yariv Malili",
               image:"./Images/Restaurants/Kab kem 2.svg",
               Category:"open",
               OpeningHours:"Open now",
               dishes:[{
                name:"Pad Ki Mao",
                description:"Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
                price: 88,
                image:"./Images/Restaurants/Yapan.svg",
                type:"breakfast",
                category:"./Images/DishesCategory/SpicySmall.svg"
                },
                {name:"Garbanzo Frito",
                description:"Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
                price: 78,
                image:"./Images/Restaurants/Messa.svg",
                type:"dinner",
                category:"./Images/DishesCategory/VegitarianSmall.svg"
                },
                {name:"Garbanzo Frito",
                description:"Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
                price: 78,
                image:"./Images/Restaurants/tiger-lily.svg",
                type:"lanch",
                category:"./Images/DishesCategory/VeganSmall.svg"
                }
                ]},
   
               {name: "Messa",
               location:"Aviv Moshe",
               image:"./Images/Restaurants/Messa 2.svg",
               Category:"open",
               OpeningHours:"Open now",
               dishes:[{
                name:"Pad Ki Mao",
                description:"Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
                price: 88,
                image:"./Images/Restaurants/Yapan.svg",
                type:"breakfast",
                category:"./Images/DishesCategory/SpicySmall.svg"
                },
                {name:"Garbanzo Frito",
                description:"Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
                price: 78,
                image:"./Images/Restaurants/Messa.svg",
                type:"dinner",
                category:"./Images/DishesCategory/VegitarianSmall.svg"
                },
                {name:"Garbanzo Frito",
                description:"Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
                price: 78,
                image:"./Images/Restaurants/tiger-lily.svg",
                type:"lanch",
                category:"./Images/DishesCategory/VeganSmall.svg"
                }
                ]}     
]
        }
    };

    public async createRestaurant(restaurant:any) {
        const dal = new RestaurantsDal();
        const res = dal.createRestaurant(restaurant);
        return res;
    };

    public async updateRestaurant(restaurant:any) {
        const dal = new RestaurantsDal();
        const res = await dal.updateRestaurant(restaurant);
        return res;
    };
};



