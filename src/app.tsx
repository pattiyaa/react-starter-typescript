import * as React from "react";
import { inject, observer } from 'mobx-react';
import {IRootStore,RootStore} from "./rootStore";
import {ProductList} from "./modules/product/components/productList";


export class App extends React.Component<IRootStore,{}> {
    constructor(props: any){
        super(props);
    }
    render() {
        return (
            <div>
                < h1>Project List</h1>
                <ProductList products={this.props.store.products}/>
            </div>
        );
    }
}
export default inject("store")(observer(App));

