import { types, applySnapshot } from "mobx-state-tree";
import {Product} from "./modules/product/productStore"

export const RootStore:any = types
    .model('RootStore',{
        products: types.optional(types.map(Product), {})
    });
    // .actions(self => {
    //     function addProduct(id:number, name:string) {
    //       self.products.set(id, Product.create({ name }));
    //     }
    
    //     return { addProduct };
    // });;

type IRootType  = typeof RootStore.Type;
export interface IRootStore extends IRootType {};
