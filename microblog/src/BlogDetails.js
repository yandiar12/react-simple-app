import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:9000/blogs/' + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch('http://localhost:9000/blogs/' +  blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  }

  return (
    <div className="p-5 m-5">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div>}
      { blog && (
        <article>
          <h2 className="pt-5 py-2 text-blue-600 font-semibold">{ blog.title }</h2>
          <p className="text-sm text-gray-600">Written by { blog.author }</p>
          <div className="py-5">{ blog.body }</div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;