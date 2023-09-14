import { NavLink } from 'react-router-dom';
import './header.css'
import { FiShoppingCart } from "react-icons/fi";

const Navigation = () => {
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
          <span className='cart-total-item'>10</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

// Ask With Sir 
// import { NavLink } from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';

// const Navigation = () => {
//   return (
//   <Nav className="mr-auto">
//     <NavLink to="/">Home</NavLink>
//     <NavLink to="/about">About Us</NavLink>
//     <NavLink to="/products">Products</NavLink>
//     <NavLink to="/contact">Contact</NavLink>
    
//   </Nav>
//   )
// }

// export default Navigation
