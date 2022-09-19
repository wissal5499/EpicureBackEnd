
import { UsersDal } from "../dal/users.dal";

export class UsersService {

    public static async getUsers() {

        const dal = new UsersDal();
        const user = await dal.findAll();
        return user;
    };

    public async createUser(user:any) {
       const dal = new UsersDal();
       const usr = dal.createUser(user);
       return usr;
    };

    public async updateUser(chef:any) {
       // const dal = new UsersDal();
      //  const res = await dal.updateChef(chef);
      //  return res;
    };
};



