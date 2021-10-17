import React, { useContext } from 'react'
import { HeroesContext } from './contexts/HeroesContext'

const Home = () => {
  const { heroes } = useContext(HeroesContext)
  
  return (
    <div className='heroes-list'>
      {heroes.map(hero => {
        return (
          <div key={hero.id} className='heroes-card'>
            <div className='heroes-details'>
              <h3>{hero.name}</h3>
              <p>Role: {hero.role}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home
