import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/HOC/PrivateRoute';
// import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Home from './container/Home';
import Signin from './container/Signin';
import Signup from './container/Signup';
import {isUserLoggedIn, getInitialData} from './actions';
import Products from './container/Products/index';
import Orders from './container/Orders';
import Category from './container/Category';
// import { getInitialData } from './actions/initialData.action';





const App = () => {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() =>{
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
    dispatch(getInitialData());
    
  }, []);

  return (
    <>
      <div className="App">
      
          <Switch>
            <PrivateRoute path ="/" exact component ={Home} />
            <PrivateRoute path ="/products" component ={Products} />
            <PrivateRoute path ="/orders" component ={Orders} />
            <PrivateRoute path ="/category" component ={Category} />

            

            <Route exact path ="/signup" component={Signup} />
            <Route exact path ="/signin" component={Signin} />
          </Switch>
        
      </div>
    </>
  )
};

export default App;
