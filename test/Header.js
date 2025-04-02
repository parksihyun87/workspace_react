import { Link, Navigate, Outlet } from 'react-router-dom';

export default function Header() {
  


    return (
      <>
        <div>
          <h1><Link to ="./">Shopping</Link></h1>
          <Link to="/product">상품보기</Link>
          &nbsp;
          <Link to="/shopping_cart">장바구니</Link>
          &nbsp;
          <Link to="/payment">결재금액보기</Link>
        </div>

        <Outlet></Outlet>
      </>
    );
  }
  
  