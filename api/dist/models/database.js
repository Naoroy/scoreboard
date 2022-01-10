"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = exports.all = exports.run = void 0;
const sqlite3_1 = require("sqlite3");
const db = new sqlite3_1.Database('scoreboard.db');
function run(sql) {
    return new Promise((resolve, reject) => {
        db.run(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(rows);
            }
        });
    });
}
exports.run = run;
function query(sql, params) {
    return new Promise((resolve, reject) => {
        db.get(sql, params, (err, rows) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(rows);
            }
        });
    });
}
exports.query = query;
function all(sql) {
    return new Promise((resolve, reject) => {
        db.all(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(rows);
            }
        });
    });
}
exports.all = all;
//# sourceMappingURL=database.js.map