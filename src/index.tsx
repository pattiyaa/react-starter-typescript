import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "mobx-react";
import {RootStore} from "./rootStore";
import {App} from "./app"
import 'bootstrap/dist/css/bootstrap.css';


const rootStore = RootStore.create({
  products: {
        "1":{
          name: "strawberry"
        }
  }
});


const router =(
    <Provider >
        <App store={rootStore} />
    </Provider>
);
ReactDOM.render(
  router,
  document.getElementById("root")
);