import { NextFunction, Request, Response } from "express";
import { BaseController } from "../common/base.controller";
import { LoggerService } from "../logger/logger.service";
import { HTTPError } from "../errors/http-error.class";
import { inject, injectable } from "inversify";
import { ILogger } from "../logger/logger.interface";
import { TYPES } from "../types";
import "reflect-metadata";
import { IUsersController } from "./users.controller.interface";
import { UserLoginDto } from "./dto/user-login.dto";
import { UserRegisterDto } from "./dto/user-register.dto";

@injectable()
export class UserController extends BaseController implements IUsersController {
  constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
    super(loggerService);

    this.bindRoutes([
      {
        path: "/login",
        method: "post",
        func: this.login,
      },
      {
        path: "/register",
        method: "post",
        func: this.register,
      },
    ]);
  }

  login(req: Request<{}, {}, UserLoginDto>, res: Response, next: NextFunction) {
    console.log(req.body);
    this.ok(res, "login");
  }

  register(
    req: Request<{}, {}, UserRegisterDto>,
    res: Response,
    next: NextFunction
  ) {
    console.log(req.body);
    this.ok(res, "register");
    // next(new HTTPError(401, "Registration error"));
  }
}
