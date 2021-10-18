import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HeroesContext } from '../contexts/HeroesContext';

const HeroesDetiails = () => {
  const [hero, setHero] = useState({});
  const { id } = useParams();
  const { heroes } = useContext(HeroesContext);
  
  setHero(heroes.find(hero => 
    hero.id === id
  ));
  console.log(hero);
  return (
    <div className="heroes-preview">
      <h1>{ hero.name }</h1>
      <p>Role: { hero.role }</p>
      <h5>Story:</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officiis ipsam repudiandae amet error eligendi impedit illo sunt in nobis ad ut doloribus repellat, delectus nihil laborum quas sed eum.</p>
    </div>
  );
}
 
export default HeroesDetiails;