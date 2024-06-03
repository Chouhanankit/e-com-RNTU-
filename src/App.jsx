import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Allusers from "./Pages/Allusers";
import Admin from "./Pages/Admin";
import { Toaster } from "react-hot-toast";
import Footer from "./Pages/Footer";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";
import ProductForm from "./Components/ProductForm";
import ProductDetail from "./Components/ProductDetails";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cartt";
import Checkout from "./Components/Checkout";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Allusers" element={<Allusers />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Productfoam" element={<ProductForm />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/productslist" element={<ProductList />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />

      </Routes>
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
