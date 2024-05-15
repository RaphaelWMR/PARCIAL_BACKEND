import { Request, Response } from "express"
import Product from "../models/product";

export const getProducts = async (req: Request, res: Response) => {
    const listProducts = await Product.findAll();
    res.json(listProducts);
};

export const getProduct = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        'msg': 'get Product',
        'id': id
    });
};

export const deleteProduct = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        'msg': 'delete Product',
        'id': id
    });
};

export const postProduct = (req: Request, res: Response) => {
    const { body } = req;
    res.json({
        'msg': 'create Product',
        'body': body
    });
};

export const updateProduct = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        'msg': 'update Product',
        id,
        'body': body
    });
};