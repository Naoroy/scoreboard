"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRepository_1 = require("../models/repositories/userRepository");
function getAll(req, res) {
    (0, userRepository_1.getUser)().then((users) => {
        res.send(users);
    });
}
function insert(req, res) {
    const user = req.body;
    if (!isValidUser(user)) {
        return res.status(400)
            .send('Missing Fields in User, expected Name, Password and Email');
    }
    (0, userRepository_1.addUser)(user).then(() => {
        res.send('OK');
    });
}
function isValidUser(user) {
    return (user.Name.length &&
        user.Password.length &&
        user.Email.length);
}
exports.default = { getAll, insert };
//# sourceMappingURL=userController.js.map