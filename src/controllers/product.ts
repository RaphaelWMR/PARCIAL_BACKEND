import { Request, Response } from "express"

export const getProducts = (req: Request, res: Response) => {
    res.json({
        'msg': 'get Products'
    });
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