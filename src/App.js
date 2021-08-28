import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { actLayDuLieuLoaiSach } from './actions/actLoaiSach';
import { actLayDuLieuSach } from './actions/actSach';
import './App.css';
import Account from './components/Account';
import Admin from './components/Admin';
import Cart from './components/Cart';
import Catalog from './components/Catalog';
import Detail from './components/Detail';
import Home from './components/Home';
import Products from './components/Products';
import BaoCao from './components/BaoCao';



function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    fetchData()
    fetchloaiData()
  }, [])
  const fetchData = async () => {
    let data = await axios.get('http://localhost:3500/sach').catch(err => {
      console.log(err);
    })
    dispatch(actLayDuLieuSach(data.data))
  }
  const fetchloaiData = async () => {
    let data = await axios.get('http://localhost:3500/loaisach').catch(err => {
      console.log(err);
    })
    dispatch(actLayDuLieuLoaiSach(data.data))
  }
  return (

    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/account" component={Account} />
        <Route path="/admin" component={Admin} />
        <Route path="/baocao" component={BaoCao} />
        <Route path="/catalog/:id" component={Catalog} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" component={Detail} />
      </Switch>
      <MessengerCustomerChat
        pageId="102956268762877"
        appId="443062666733716"
      />
    </Router>
  )

}
export default App;
