"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.products = [];
    }
    ProductService.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    ProductService.prototype.getProductById = function (id) {
        return this.products.find(function (product) { return product.id === id; });
    };
    ProductService.prototype.updateProduct = function (product) {
        var index = this.products.findIndex(function (p) { return p.id === product.id; });
        if (index !== -1) {
            this.products[index] = product;
        }
    };
    ProductService.prototype.removeProduct = function (id) {
        this.products = this.products.filter(function (product) { return product.id !== id; });
    };
    ProductService.prototype.getAllProducts = function () {
        return this.products;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
