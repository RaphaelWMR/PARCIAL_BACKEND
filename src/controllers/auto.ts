import { Request, Response } from "express"
import Auto from "../models/auto";

export const getAutos = async (req: Request, res: Response) => {
    const listAutos = await Auto.findAll();
    res.json(listAutos);
};

export const getAuto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const auto = await Auto.findByPk(id);
    if (auto) {
        res.json(auto);
    } else {
        res.status(404).json({
            msg: `No existe autoo con id ${id}`
        })
    }
};

export const deleteauto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const auto = await Auto.findByPk(id);
    if (!auto) {
        res.status(404).json({
            msg: `No existe autoo con id ${id}`
        });
    } else {
        await auto.destroy();
        res.json({
            msg: `El autoo con id ${id} fue eliminado con exito`
        });
    }
};

export const postauto = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Auto.create(body);
        res.json({
            'msg': `El autoo fue creado con exito`
        });
    } catch (error) {
        console.log(error);
        res.json({
            'msg': `Ocurrió un error, comuniquese con soporte`
        });
    }

};

export const updateauto = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const auto = await Auto.findByPk(id);
        if (auto) {
            await auto.update(body);
            res.json({
                msg: `El autoo con el id ${id} fue actualizado con exito`
            })
        } else {
            res.status(404).json({
                msg: `No existe un autoo con el id ${id}`
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            'msg': `Ocurrió un error, comuniquese con soporte`
        });
    }


};