import { NavLink } from 'react-router-dom';
import './header.css'
import { FiShoppingCart } from "react-icons/fi";
import { useMyContext } from '../../Context';

const Navigation = () => {
  const {cart} = useMyContext();
  return (
    <nav className='navigation-menu'>
      <ul>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/cart">
          <FiShoppingCart className='cart-trolley'/>
          <span className='cart-total-item'>{cart.length || "0" }</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

