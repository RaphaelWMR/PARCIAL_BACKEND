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
exports.updateauto = exports.postauto = exports.deleteauto = exports.getAuto = exports.getAutos = void 0;
const auto_1 = __importDefault(require("../models/auto"));
const getAutos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listAutos = yield auto_1.default.findAll();
    res.json(listAutos);
});
exports.getAutos = getAutos;
const getAuto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const auto = yield auto_1.default.findByPk(id);
    if (auto) {
        res.json(auto);
    }
    else {
        res.status(404).json({
            msg: `No existe autoo con id ${id}`
        });
    }
});
exports.getAuto = getAuto;
const deleteauto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const auto = yield auto_1.default.findByPk(id);
    if (!auto) {
        res.status(404).json({
            msg: `No existe autoo con id ${id}`
        });
    }
    else {
        yield auto.destroy();
        res.json({
            msg: `El autoo con id ${id} fue eliminado con exito`
        });
    }
});
exports.deleteauto = deleteauto;
const postauto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield auto_1.default.create(body);
        res.json({
            'msg': `El autoo fue creado con exito`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            'msg': `Ocurrió un error, comuniquese con soporte`
        });
    }
});
exports.postauto = postauto;
const updateauto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const auto = yield auto_1.default.findByPk(id);
        if (auto) {
            yield auto.update(body);
            res.json({
                msg: `El autoo con el id ${id} fue actualizado con exito`
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un autoo con el id ${id}`
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
exports.updateauto = updateauto;
