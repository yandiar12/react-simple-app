import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:9000/blogs');

  return (
    <div className="home">
      { error && <div className="text-center">{ error }</div> }
      { isPending && <div className="text-center">Loading...</div>}
      { !error && blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    </div>
  );
}
 
export default Home;