"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = exports.getTasks = void 0;
const database_1 = require("../database");
function getTasks(userId) {
    return new Promise((resolve, reject) => {
        const sql = `
        SELECT * FROM Task
        WHERE UserId = ?
        `;
        (0, database_1.query)(sql, [userId]).then(resolve).catch(reject);
    });
}
exports.getTasks = getTasks;
function addTask(task, userId) {
    return new Promise((resolve, reject) => {
        const sql = `
        INSERT INTO Task (UserId, Name) VALUES (?, ?)
        `;
        (0, database_1.query)(sql, [userId, task.Name])
            .then(resolve).catch(reject);
    });
}
exports.addTask = addTask;
//# sourceMappingURL=taskRepository.js.map