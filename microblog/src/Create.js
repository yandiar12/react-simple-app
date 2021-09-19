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
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Blog Title:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          required 
        />
        <label htmlFor="title">Blog Body:</label>
        <textarea 
          cols="30" 
          rows="5" 
          value={body} 
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label htmlFor="title">Blog Author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        { !isPending && <button>Add Blog</button> }
        { isPending && <button disabled>Adding blog...</button> }
      </form>
    </div>
  );
}
 
export default Create;