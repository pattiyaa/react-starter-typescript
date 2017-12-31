import { types } from "mobx-state-tree";


export const Product:any = types
    .model( "Product",{
        key: types.optional(types.string,""),
        name: types.optional(types.string,""),
        description:  types.optional(types.string,""),
        isActive: types.optional(types.boolean,false)
    })
    .actions((self:IProduct)=>{
        function setName(newName:string){
            self.name=newName;
        }
        function toggle(){
            self.isActive =!self.isActive;
        }
        return {setName,toggle};
    });
export const ProductStore:any = types
    .model("ProductStore",{
        products:types.array(Product)
    });
type IProductType = typeof Product.Type;
export interface IProduct extends IProductType {};
type IProductStoreType = typeof ProductStore.Type;
export interface IProductStore extends IProductStoreType {};
