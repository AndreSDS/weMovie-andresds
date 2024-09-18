import {Product} from "./IProduct.ts";

export interface CartProduct {
    product: Product;
    quantity: number;
}