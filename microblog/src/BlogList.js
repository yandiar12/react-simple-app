import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <div className="p-2 text-lg text-gray-800 font-semibold">
        <h1>{ title }</h1>
      </div>
      {blogs.map((blog) => (
        <div className="p-5 mt-5 hover:shadow-md" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2 className="text-blue-600 font-semibold">{ blog.title }</h2>
            <p className="text-sm text-gray-600">Written by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;