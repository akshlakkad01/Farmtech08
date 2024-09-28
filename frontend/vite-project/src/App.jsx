import Login from './Pages/login.jsx';
import axios from 'axios';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductShow from './Pages/productShow.jsx';
import AddProduct from './Pages/addProduct.jsx';
import ShowCart from './Pages/showCart.jsx';
import Layout from './Pages/layout.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './Pages/index.jsx';
import Signup from './Pages/signup.jsx';
import Contact from './Pages/contact.jsx';
import About from './Pages/about.jsx';
import Profile from './Pages/Profile.jsx';
import ForgotPassword from './Pages/forgotpassword.jsx';

function App() {
  // It's generally better to set axios config here if there are no conditions
  axios.defaults.withCredentials = true;

  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Index />} />
        <Route path="/showProduct" element={<ProductShow />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/showCart" element={<ShowCart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
