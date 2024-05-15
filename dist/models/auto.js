"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Auto = connection_1.default.define('auto', {
    marca: {
        type: sequelize_1.DataTypes.STRING
    },
    modelo: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.STRING
    },
    anio: {
        type: sequelize_1.DataTypes.NUMBER
    },
    vendedor_id: {
        type: sequelize_1.DataTypes.NUMBER
    },
    observaciones: {
        type: sequelize_1.DataTypes.STRING
    },
    precio: {
        type: sequelize_1.DataTypes.DOUBLE
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Auto;
