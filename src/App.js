import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './store/store';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Authentication/Login';
import Profile from './components/Authentication/Profile';


const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Routes>     
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />

      </Provider>

    </>
  );
};

export default App;

