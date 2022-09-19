import { Request, Response } from "express";
import { RestaurantsService } from "../services/restaurants.service";
import {RestaurantsDal} from '../dal/restaurants.dal'

export class RestaurantsController {

    public static async getRestaurants(req: Request, res: Response) {
        const service = new RestaurantsService();
        const restaurants = await service.getRestaurants();
        return res.send(restaurants);
    };
    public static async createRestaurant(req: Request, res: Response) {
        const params = req.body;
        const service = new RestaurantsService();
        const restaurant = await service.createRestaurant(params);
        return res.send(restaurant);
    };

    public static async updateRestaurant(req: Request, res: Response) {
        const params = req.body;
        const service = new RestaurantsService();
        const restaurant = await service.updateRestaurant(params);
        return res.send(restaurant);
    };
    public static async PushDishToRestaurant(req: Request, res: Response) {
        const params = req.body;
        const service = new RestaurantsDal();
        const restaurant = await service.PushDishToRestaurant(params);
        return res.send(restaurant);
    };
    public static async PushChefToRestaurant(req: Request, res: Response) {
        const params = req.body;
        const service = new RestaurantsDal();
        const restaurant = await service.PushChefToRestaurant(params);
        return res.send(restaurant);
    };
    
};

