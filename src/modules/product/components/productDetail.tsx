import * as React from "react";
import {observer, inject} from "mobx-react";
import  {IProduct} from "./../productStore"


export class ProductDetail extends React.Component<IProduct,{}>{
    constructor(props: IProduct){
        super(props);
    }
    getProductForm(product: IProduct): JSX.Element{
        return(
            <span>{product.name} - {product.isActive ? "active" : "inactive"}</span>
        );
    }
    render(): JSX.Element{
        const {product} = this.props;
        return(
            <li>
                {this.getProductForm(product)}
            </li>
        );
    }
}
export default inject("store")(observer(ProductDetail));
