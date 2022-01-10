"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.getUser = void 0;
const database_1 = require("../database");
function getUser() {
    return new Promise((resolve, reject) => {
        const sql = `
        SELECT * FROM User
        `;
        (0, database_1.all)(sql).then(resolve).catch(reject);
    });
}
exports.getUser = getUser;
function addUser(user) {
    return new Promise((resolve, reject) => {
        const sql = `
        INSERT INTO User (Name, Password, Email) VALUES (?,?,?)
        `;
        (0, database_1.query)(sql, [user.Name, user.Password, user.Email])
            .then(resolve).catch(reject);
    });
}
exports.addUser = addUser;
//# sourceMappingURL=userRepository.js.map