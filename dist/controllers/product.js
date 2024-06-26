"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.postProduct = exports.deleteProduct = exports.getAuto = exports.getAutos = void 0;
const product_1 = __importDefault(require("../models/product"));
const getAutos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listAutos = yield product_1.default.findAll();
    res.json(listAutos);
});
exports.getAutos = getAutos;
const getAuto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield Product.findByPk(id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({
            msg: `No existe producto con id ${id}`
        });
    }
});
exports.getAuto = getAuto;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield Product.findByPk(id);
    if (!product) {
        res.status(404).json({
            msg: `No existe producto con id ${id}`
        });
    }
    else {
        yield product.destroy();
        res.json({
            msg: `El producto con id ${id} fue eliminado con exito`
        });
    }
});
exports.deleteProduct = deleteProduct;
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield Product.create(body);
        res.json({
            'msg': `El producto fue creado con exito`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            'msg': `Ocurrió un error, comuniquese con soporte`
        });
    }
});
exports.postProduct = postProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const product = yield Product.findByPk(id);
        if (product) {
            yield product.update(body);
            res.json({
                msg: `El producto con el id ${id} fue actualizado con exito`
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un producto con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            'msg': `Ocurrió un error, comuniquese con soporte`
        });
    }
});
exports.updateProduct = updateProduct;
