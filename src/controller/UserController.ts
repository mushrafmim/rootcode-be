import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {

  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public async all(request: Request, response: Response, next: NextFunction) {
    return this.userService.getAllUsers();
  }

  public async one(request: Request, response: Response, next: NextFunction) {
    const id = parseInt(request.params.id);

    return this.userService.getUserById(id);
  }

  // static async remove(request: Request, response: Response, next: NextFunction) {
  //   const id = parseInt(request.params.id);

  //   let userToRemove = await userRepository.findOneBy({ id });

  //   if (!userToRemove) {
  //     return "this user not exist";
  //   }

  //   await userRepository.remove(userToRemove);

  //   return "user has been removed";
  // }
}
