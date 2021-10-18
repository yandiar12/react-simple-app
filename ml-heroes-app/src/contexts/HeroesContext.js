import React, { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const HeroesContext = createContext()

const HeroesContextProvider = props => {
  const [heroes, setHeroes] = useState([])
  // const [heroes, setHeroes] = useState([
  //   { name: 'Alucard', role: 'Fighter', id: 1 },
  //   { name: 'Karina', role: 'Assassin', id: 2 },
  //   { name: 'Gord', role: 'Mage', id: 3 }
  // ])
  useEffect(() => {
    fetch("http://localhost:9000/heroes")
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch the data.');
        }
        return res.json()
      }).then(data => {
        setHeroes(data);
      }).catch((err) => {
        console.log(err.name);
      })
  }, []);
  
  const addHeroes = (name, role) => {
    setHeroes([...heroes, { name, role, id: uuidv4() }])
  }
  // const removeHeroes = id => {
  //   setHeroes(
  //     heroes.filter(hero => {
  //       hero.id !== id
  //     })
  //   )
  // }
  return (
    <HeroesContext.Provider value={{ heroes, addHeroes }}>
      { props.children }
    </HeroesContext.Provider>
  )
}

export default HeroesContextProvider;