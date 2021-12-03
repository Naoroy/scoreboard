"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const APP = (0, express_1.default)();
const PORT = process.env.PORT || 3030;
APP.get('/', (req, res) => {
    res.send([
        {
            date: new Date().toDateString(),
            task: 'Make a POC of a scoreboard app',
            sessionsEstimate: 3,
            sessions: 1,
            sessionLength: 90,
            comment: 'Typescript is pretty fun'
        },
        {
            date: new Date().toDateString(),
            task: 'Build a React frontend',
            sessionsEstimate: 1,
            sessions: 1,
            sessionLength: 90,
            comment: 'React is pretty fun'
        },
    ]);
});
APP.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map