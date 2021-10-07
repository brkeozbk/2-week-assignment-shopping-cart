import HomePage from '../HomePage';
import Navi from "../Navi";
import Stories from "../Stories";
import About from "../About";
import Login from "../Login";
import Cart from "../Cart";
import React, {Component} from 'react';
import {  Route,  Switch } from 'react-router-dom';
import { ShopContainer } from "../../containers/ShopContainer"
import {GetProductsContainer} from "../../containers/GetProductsContainer";

class App extends Component {
  render(){
    return (

      <div>
         <Navi/>
         <Switch>
           <Route path="/"  exact component ={HomePage}/>
           <Route path="/shop" >
        
           <GetProductsContainer/> 
           <ShopContainer/></Route>
           <Route path="/stories"  component ={Stories}/>
           <Route path="/about"  component ={About}/>
           <Route path="/login"  component ={Login}/>
           <Route path="/cart"  component ={Cart}/>
         </Switch>
      </div>
    );
  }
  
}

export default App;
