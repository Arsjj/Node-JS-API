"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
userRouter.post('/login', (req, res) => {
    res.send('Login successful');
});
userRouter.post('/register', (req, res) => {
    res.send('register successful');
});
//# sourceMappingURL=users.js.map