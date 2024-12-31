import './App.css';
import Navbar from './components/Navbar/navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shopcategory from './pages/Shopcategory.jsx';
import Shop from './pages/Shop/Shop.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart/Cart.jsx';
import LoginSignUp from './pages/LoginPage/LoginSignUp.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/mens" element={<Shopcategory category='men'/>}/>
          <Route path="/womens" element={<Shopcategory category='women'/>}/>
          <Route path="/kids" element={<Shopcategory category='kids'/>}/>
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
