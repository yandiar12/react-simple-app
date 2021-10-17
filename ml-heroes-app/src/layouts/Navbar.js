import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand-logo"><h1>Heroes App</h1></div>
      <div className="links">
        <Link className="navlink" to="/">Home</Link>
        <Link className="navlink" to="/add">New Heroes</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;