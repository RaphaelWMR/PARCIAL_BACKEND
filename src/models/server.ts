import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import routesProducto from '../routes/product';
import cors from 'cors';

// Enviroment variables
dotenv.config();


class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.middlewares();
        this.routes();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`App running in port ${this.port}`)
        });
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'Api working'
            })
        });
        this.app.use('/api/products', routesProducto);
    }

    middlewares() {
        // body parse
        this.app.use(express.json());
        // Cors
        this.app.use(cors());

    }
}

export default Server;