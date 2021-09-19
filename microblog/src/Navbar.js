import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="bg-white shadow-lg">
      <div className="text-lg py-5 px-5 max-w-2xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-blue-600 font-bold">The Microblog</h1>
        </div>
        <div className="flex space-x-2">
          <Link className="text-gray-700 font-semibold hover:text-blue-600" to="/">Home</Link>
          <Link className="text-gray-700 font-semibold hover:text-blue-600" to="/create">New Blog</Link>
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;