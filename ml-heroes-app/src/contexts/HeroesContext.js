import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const HeroesContext = createContext()

const HeroesContextProvider = props => {
  const [heroes, setHeroes] = useState([
    { name: 'Alucard', role: 'Fighter', id: "1" },
    { name: 'Karina', role: 'Assassin', id: "2" },
    { name: 'Gord', role: 'Mage', id: "3" }
  ])
  const addHeroes = (name, role) => {
    setHeroes([...heroes, { name, role, id: uuidv4() }])
  }
  const removeHero = id => {
    setHeroes(
      heroes.filter(hero => 
        hero.id !== id
      )
    )
  }
  return (
    <HeroesContext.Provider value={{ heroes, addHeroes, removeHero }}>
      { props.children }
    </HeroesContext.Provider>
  )
}

export default HeroesContextProvider;