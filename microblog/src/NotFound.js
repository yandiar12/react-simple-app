import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="p-2 m-2">
      <div className="pb-2 text-lg text-gray-800 font-bold">
        <h2>Sorry</h2>
      </div>
      <div className="pb-1">
        <p>That page cannot be found.</p>
        <Link className="text-sm text-blue-600 hover:text-blue-700" to='/'>Back to the Homepage...</Link>
      </div>
    </div>
  );
}
 
export default NotFound;