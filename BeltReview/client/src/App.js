// import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AllProducts from './components/AllProducts';
import NewProductForm from './components/NewProduct';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Products List</h1>
        <Switch>
          <Route exact path="/">
            <NewProductForm></NewProductForm>
            <hr />
            <AllProducts></AllProducts>
          </Route>

          <Route exact path="/products/:_id">
            <OneProduct></OneProduct>
          </Route>

          <Route exact path="/edit/:_id">
            <EditProduct></EditProduct>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
