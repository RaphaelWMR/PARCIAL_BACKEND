"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const product_1 = __importDefault(require("../routes/product"));
const cors_1 = __importDefault(require("cors"));
// Enviroment variables
dotenv_1.default.config();
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.middlewares();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App running in port ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'Api working'
            });
        });
        this.app.use('/api/products', product_1.default);
    }
    middlewares() {
        // body parse
        this.app.use(express_1.default.json());
        // Cors
        this.app.use((0, cors_1.default)());
    }
}
exports.default = Server;
