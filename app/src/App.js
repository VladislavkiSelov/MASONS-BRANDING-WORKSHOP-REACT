import './App.scss';
import Header from './component/Header';
import Footer from './component/Footer';
import MainPage from './Page/MainPage';
import Products from './Page/Products';
import CardProduct from './Page/CardProduct';
import BasketPage from './Page/BasketPage';
import ContactPage from './Page/ContactPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/category/:categoryId" element={<Products />}></Route>
          <Route path='/category/:categoryId/:productId' element={<CardProduct />}></Route>
          <Route path='/basket/*' element={<BasketPage />}></Route>
          <Route path='/contact' element={<ContactPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


