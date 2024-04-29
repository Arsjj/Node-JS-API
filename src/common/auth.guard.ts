import { NextFunction, Request, Response } from "express";
import { IMiddleware } from "./middlware.interface";

export class AuthGuard implements IMiddleware {
  execute(req: Request, res: Response, next: NextFunction): void {
    if (req.user) {
      return next();
    }
    res.status(401).send({ error: "User not logged in" });
  }
}
