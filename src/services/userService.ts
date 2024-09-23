import { userModel } from "../models/userModel"; 

export class userService {
    async createUser(data: { username: string; email: string, password: string }) {
        return userModel.create({ data });
      }
    
    async getUser(id: number ) {
        return userModel.findUnique({ where: {id} });
    }

    async updateUser(id: number, data: { username: string, email: string}) {
        return userModel.update({ where: {id}, data });
    }
}