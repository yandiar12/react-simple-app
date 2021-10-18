import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { HeroesContext } from './contexts/HeroesContext'

const Home = () => {
  const { heroes } = useContext(HeroesContext);
  
  return (
    <div className='heroes-list'>
      {heroes.map(hero => {
        return (
          <Link to={`/hero/${hero.id}`} key={hero.id}>
            <div className='heroes-card'>
              <div className='heroes-details'>
                <h3>{hero.name}</h3>
                <p>Role: {hero.role}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Home
