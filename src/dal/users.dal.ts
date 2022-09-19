import Users from "../db/models/users";

export class UsersDal {

    public async createUser(user: any) {
        user = new Users({
            firstName: user.firstName,
            email: user.email,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            password: user.password,
            confirmPassword: user.confirmPassword,
        });
        const response= await Users.create(user);
        return response;
    }

    public async updateUser(user:any) {
      const data = await Users.findOne({
        email: user.email,
      }).updateOne({$set: {password: user.password,},})
        return data
      }

    public findAll(query: any = null) {
        return Users.find();
      }
    }