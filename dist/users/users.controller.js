"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const base_controller_1 = require("../common/base.controller");
class UserController extends base_controller_1.BaseController {
    constructor(logger) {
        super(logger);
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
    login(req, res, next) {
        this.ok(res, "login");
    }
    register(req, res, next) {
        this.ok(res, "register");
    }
}
exports.UserController = UserController;
//# sourceMappingURL=users.controller.js.map