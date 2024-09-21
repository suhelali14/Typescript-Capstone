import { IProduct } from './Iproducts';

export class ProductService<T extends IProduct> {
    private products: T[] = [];

    addProduct(product: T): void {
        this.products.push(product);
    }

    getProductById(id: number): T | undefined {
        return this.products.find(product => product.id === id);
    }

    updateProduct(product: T): void {
        const index = this.products.findIndex(p => p.id === product.id);
        if (index !== -1) {
            this.products[index] = product;
        }
    }

    removeProduct(id: number): void {
        this.products = this.products.filter(product => product.id !== id);
    }

    getAllProducts(): T[] {
        return this.products;
    }
}