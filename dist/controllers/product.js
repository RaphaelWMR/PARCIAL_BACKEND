"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.postProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
const getProducts = (req, res) => {
    res.json({
        'msg': 'get Products'
    });
};
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    const { id } = req.params;
    res.json({
        'msg': 'get Product',
        'id': id
    });
};
exports.getProduct = getProduct;
const deleteProduct = (req, res) => {
    const { id } = req.params;
    res.json({
        'msg': 'delete Product',
        'id': id
    });
};
exports.deleteProduct = deleteProduct;
const postProduct = (req, res) => {
    const { body } = req;
    res.json({
        'msg': 'create Product',
        'body': body
    });
};
exports.postProduct = postProduct;
const updateProduct = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        'msg': 'update Product',
        id,
        'body': body
    });
};
exports.updateProduct = updateProduct;
