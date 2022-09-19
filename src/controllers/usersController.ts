import { Request , Response } from "express";
import { UsersService } from "../services/users.service";


export class DishesController {

    public static async getUsers(req: Request, res: Response) {
        const users = await UsersService.getUsers();
        return res.send(users);
    };

    public static async createUser(req: Request , res: Response){
        const params = req.body;
        const service = new UsersService();
        const user = await service.createUser(params);
        return res.send(user);
    }
    public static async updateUser(req: Request , res: Response){
        const params = req.body;
        const service = new UsersService();
        const user = await service.updateUser(params);
        return res.send(user);
    }
}