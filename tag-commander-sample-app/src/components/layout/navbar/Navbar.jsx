import { Link } from 'react-router-dom';
import logo from '../../../assets/Tag-Commander.png'
const Navbar = () => {
  return (
    <div className="container">
      <nav className="tag-50 navbar">
        <ul>
          <li className="brand"><Link to="/home"><img src={logo} alt=""/></Link></li>
          <li><Link to="/shop">E-commerce page</Link></li>
          <li><Link to="/dashboard">Simple page</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
