import * as React from "react";
import {observer, inject} from "mobx-react";
import {IProductStore, IProduct} from "./../productStore"
import {ProductDetail} from "./productDetail";
import * as PStyled from "./../productStyle";
import * as Styled from "./../../../style";
import { CardDeck, Card ,CardBody,CardImg} from "reactstrap";

export class ProductList extends React.Component<IProductStore,{}>{
    private newProduct: IProduct;
    constructor(props: IProductStore){
        debugger;
        super(props);
    }
    render(): JSX.Element { 
        debugger;
        return(
            <CardDeck>
            
                 {this.props.products.values()
                    .map((product:IProduct, index:number) => (
                        <Card key={index.toString()} >
                            
                                <CardImg top={true}  src="./../../../assets/strawberry.png"/>
                                <CardBody>
                                    <ProductDetail key={product.id} product={product} >
                                    </ProductDetail> 
                                </CardBody>
                        </Card>
                        ))}
           
            </CardDeck>
        );
        
    }
}
export default inject("store")(observer(ProductList));
