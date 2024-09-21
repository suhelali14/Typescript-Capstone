"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = require("./service");
// Create an electronic product
var electronicService = new service_1.ProductService();
electronicService.addProduct({
    id: 1,
    name: "Laptop",
    price: 100000,
    warrantyPeriod: 2,
});
console.log("Electronic Products after creation:", electronicService.getAllProducts());
// Create a food product
var foodService = new service_1.ProductService();
foodService.addProduct({
    id: 2,
    name: "Chocolate Bar",
    price: 150,
    expiryDate: "2024-12-31",
});
console.log("Food Products after creation:", foodService.getAllProducts());
// Read a specific electronic product by ID
var foundElectronic = electronicService.getProductById(1);
console.log("Found Electronic Product by ID:", foundElectronic);
// Update an existing food product
var updatedFoodProduct = {
    id: 2,
    name: "Dark Chocolate Bar",
    price: 200,
    expiryDate: "2025-12-31",
};
foodService.updateProduct(updatedFoodProduct);
console.log("Food Products after update:", foodService.getAllProducts());
// Delete an electronic product by ID
electronicService.removeProduct(1);
console.log("Electronic Products after deletion:", electronicService.getAllProducts());
// Read all food products
var allFoodProducts = foodService.getAllProducts();
console.log("All Food Products:", allFoodProducts);