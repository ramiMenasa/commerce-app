import Header from './components/Header.js';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import ProductDetail from './components/ProductDetails.js';
import CartPage from './pages/CartPage.js';
import NotFound from './pages/NotFoundPage.js';


function App() {
  return (
    <CartProvider>
      <Router>
        <Header/>
        <Routes>
           <Route path="/" element={<Home/>} /> 
           <Route path="/product/:id" element={<ProductDetail/>} /> 
           <Route path="/cart" element={<CartPage/>} /> 
           <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Router>      
    </CartProvider>
    
  );
}

export default App;
