"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taskRepository_1 = require("../models/repositories/taskRepository");
function getAll(req, res) {
    const userId = req.params.id;
    (0, taskRepository_1.getTasks)(userId).then((task) => {
        res.send(task);
    });
}
function insert(req, res) {
    const userId = req.params.id;
    const task = req.body;
    if (!isValidTask(task)) {
        return res.status(400)
            .send('Missing Fields in User, expected Name, Password and Email');
    }
    (0, taskRepository_1.addTask)(task, userId).then(() => {
        res.send('OK');
    });
}
function isValidTask(task) {
    return (task.Name.length);
}
exports.default = { getAll, insert };
//# sourceMappingURL=taskController.js.map