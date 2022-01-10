"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const userController_1 = __importDefault(require("./controller/userController"));
const taskController_1 = __importDefault(require("./controller/taskController"));
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.get('/user/', userController_1.default.getAll);
routes.post('/user', userController_1.default.insert);
routes.get('/user/:id/task', taskController_1.default.getAll);
//# sourceMappingURL=routes.js.map