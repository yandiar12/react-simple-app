import React, { useContext, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { HeroesContext } from '../contexts/HeroesContext';

const HeroesForm = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const { id } = useParams();
  const history = useHistory();
  const { heroes, addHeroes, editHeroes } = useContext(HeroesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addHeroes(name, role);
    history.push("/");
  }

  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" id="name" onChange={(e) => {setName(e.target.value)}} required />
          </div>
          <div className="form-group">
            <label>Role</label>
            <input type="text" name="role" id="role" onChange={(e) => {setRole(e.target.value)}} required />          
          </div>
          <div className="form-group">
            <button className="btn-primary" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
 
export default HeroesForm;