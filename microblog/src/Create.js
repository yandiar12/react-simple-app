import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);
    
    fetch('http://localhost:9000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog is added');
      setIsPending(false);
      history.push('/');
    })
  }

  return (
    <div className="p-2 m-2">
      <div className="p-2 text-lg text-gray-700 text-center font-bold h-20 flex justify-center items-center">
        <h2>Add a New Blog</h2>
      </div>
      <div className="text-sm">
        <form onSubmit={handleSubmit}>
          <div className="m-2">
            <label className="block my-1">Blog Title:</label>
            <input 
              className="block p-2 w-full border"
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              required 
            />
          </div>
          <div className="m-2">
            <label className="block my-1">Blog Body:</label>
            <textarea 
              className="block p-2 my-1 w-full border"
              cols="30" 
              rows="5" 
              value={body} 
              onChange={(e) => setBody(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="m-2">
            <label className="block my-1">Blog Author:</label>
            <select
              className="block p-2 my-1 w-full border"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            >
              <option value="mario">Mario</option>
              <option value="yoshi">Yoshi</option>
            </select>
          </div>
          { !isPending && 
            <div className="m-5 text-center">
              <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-40 rounded-full">Add Blog</button> 
            </div>
          }
          { isPending && <button disabled>Adding blog...</button> }
        </form>
      </div>
    </div>
  );
}
 
export default Create;