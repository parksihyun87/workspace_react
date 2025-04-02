import {Route, Routes} from 'react-router-dom';
import Header from './Header';
import Welcome from './Welcome';
import Product from './Product';
import ShoppingCart from './ShoppingCart';
import Payment from './Payment';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Welcome/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="/shopping_cart" element={<ShoppingCart/>}></Route>
          <Route path="/payment" element={<Payment/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

