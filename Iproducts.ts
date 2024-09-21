export interface IProduct {
    id: number;
    name: string;
    price: number;
}

export interface IElectronicProduct extends IProduct {
    warrantyPeriod: number;
}

export interface IFoodProduct extends IProduct {
    expiryDate: string;
}