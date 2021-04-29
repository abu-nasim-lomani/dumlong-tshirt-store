import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import SearchButton from './components/SearchButton/SearchButton';
import ShopProduct from './components/ShopProduct/ShopProduct';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from './components/Checkout/Checkout';
import NotFound from './components/NotFound/NotFound';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivetRoute/PrivetRoute';
import AdminPanel from './components/ShopProduct/AdminPanel/AdminPanel';
import Orders from './components/Orders/Orders';


export const  UserContext=createContext();
function App() {
const [loggedInUser, setLoggedInUser] =useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/">
          <Header ></Header>
          <SearchButton></SearchButton>
          <ShopProduct></ShopProduct>
        </Route>

        <PrivateRoute path="/checkout/:productId">
          <Checkout></Checkout>
        </PrivateRoute>
        <Route path="/orders">
            <Orders></Orders>
        </Route>
        <PrivateRoute path="/admin">
          <AdminPanel></AdminPanel>
        </PrivateRoute>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
