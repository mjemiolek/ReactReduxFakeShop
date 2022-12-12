import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import WeakHeader from "./containers/WeakHeader";
import "./App.css";
import ProductDetail from "./containers/ProductDetail";
import CartComponent from "./containers/CartComponent";
import CheckoutComponent from "./containers/CheckoutComponent";


function App() {
  return (
    <div className="App">
      <Router>
        <WeakHeader />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route path="/cart" component={CartComponent} />
          <Route path="/payment" component={CheckoutComponent} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;