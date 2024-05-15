import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import routesAuto from '../routes/auto';
import db from '../db/connection';
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
        this.dbConnect();
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
        this.app.use('/api/autos', routesAuto);
    }

    middlewares() {
        // body parse
        this.app.use(express.json());
        // Cors
        this.app.use(cors());

    }

    async dbConnect() {
        try {
            await db.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default Server;