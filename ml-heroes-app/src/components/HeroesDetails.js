import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { HeroesContext } from '../contexts/HeroesContext';

const HeroesDetiails = () => {
  const { heroes, removeHero } = useContext(HeroesContext);
  const { id } = useParams();
  const history = useHistory();

  const handleDelete = (id) => {
    removeHero(id);
    history.push("/");
  }
  
  return (
    <div>
      { heroes.filter(hero => hero.id == id).map(filteredHero => (
        <div key={id} className="heroes-preview">
          <h1>{ filteredHero.name }</h1>
          <p>Role: { filteredHero.role }</p>
          <h5>Story:</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officiis ipsam repudiandae amet error eligendi impedit illo sunt in nobis ad ut doloribus repellat, delectus nihil laborum quas sed eum.</p>
          <div className="action">
            <button className="btn-primary">Edit</button>
            <button className="btn-secondary" onClick={() => handleDelete(filteredHero.id)}>Delete</button>
          </div>
        </div>
      )) }
    </div>
  );
}
 
export default HeroesDetiails;