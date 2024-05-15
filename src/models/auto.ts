import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Auto = db.define('auto', {
    marca: {
        type: DataTypes.STRING
    },
    modelo: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    },
    anio: {
        type: DataTypes.NUMBER
    },
    vendedor_id: {
        type: DataTypes.NUMBER
    },
    observaciones: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.DOUBLE
    },
}, {
    createdAt: false,
    updatedAt: false
});

export default Auto;