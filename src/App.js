import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import NotFound from "./Components/NotFound/NotFound";
import CartItem from "./Components/CartItem/CartItem";
import Shipping from "./Components/Shipping/Shipping";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import HeaderWithLogo from "./Components/Shared/HeaderWithLogo/HeaderWithLogo";
import Footer from "./Components/Shared/Footer/Footer";
import ScrollRestoration from "react-scroll-restoration";

export const ProductContext = createContext();

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [showCartItem, setShowCartItem] = useState(false);
  const [token, setToken] = useState();
  // console.log(token);

  useEffect(() => {
    const productData = localStorage.getItem("cartItem");
    if (productData) {
      setCartItem(JSON.parse(productData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  useEffect(() => {
    const decodedToken = localStorage.getItem("token");
    setToken(decodedToken);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
  };

  const addProduct = (product) => {
    const exsist = cartItem.find((item) => item.id === product.id);
    if (exsist) {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exsist, qty: exsist.qty + 1 } : x
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  const removeProduct = (product) => {
    const exsist = cartItem.find((item) => item.id === product.id);
    if (exsist.qty === 1) {
      setCartItem(cartItem.filter((x) => x.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exsist, qty: exsist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <ProductContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        cart: [cartItem, setCartItem],
        showCart: [showCartItem, setShowCartItem],
        userToken: [token, setToken],
      }}
    >
      <Router>
        <ScrollRestoration />
        <div style={{ background: "#a9d6e5" }}>
          <HeaderWithLogo
            addProduct={addProduct}
            removeProduct={removeProduct}
          ></HeaderWithLogo>
        </div>
        <Switch>
          <Route exact path="/">
            <Home addProduct={addProduct}></Home>
          </Route>
          <Route path="/home">
            <Home addProduct={addProduct}></Home>
          </Route>
          <Route path="/productDetail/:id">
            <ProductDetail
              addProduct={addProduct}
              removeProduct={removeProduct}
            ></ProductDetail>
          </Route>
          <PrivateRoute path="/shipping">
            <Shipping></Shipping>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/cart">
            <CartItem
              addProduct={addProduct}
              removeProduct={removeProduct}
            ></CartItem>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </ProductContext.Provider>
  );
}

export default App;
