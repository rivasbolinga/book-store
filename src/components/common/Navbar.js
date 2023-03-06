import { Link, Outlet } from 'react-router-dom';
import '../styles/Navbar.scss';
import { GoPerson } from 'react-icons/go';

const Navbar = () => (
  <>
    <nav className="navbar">
      <div className="nav-tit">
        <h2 className="navbar-title">Bookstore CMS </h2>
        <ul className="navbar-links">
          <li className="navbar-item">
            <Link
              to="/"
              className="navbar-link"
            >
              BOOKS
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="Categories"
              className="navbar-link categ"
            >
              CATEGORIES
            </Link>
          </li>
        </ul>
      </div>

      <div className="icon-container">
        <GoPerson className="mask-icon" />
      </div>
    </nav>
    <Outlet />
  </>
);

export default Navbar;
