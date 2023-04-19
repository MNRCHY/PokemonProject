import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.webp'
import pokeSample from '../assets/poke-sample.webp'
import Footer from '../components/Footer'
import { getAllPokemons } from '../redux/actions/pokeActions'

function Pokemon() {

  const dispatch = useDispatch()
  const { pokemons } = useSelector((state) => state.pokemon)

  useEffect(() => {
    dispatch(getAllPokemons())
  }, [dispatch])

  return (
    <div className='bg-Main'>

      <header className='flex justify-center p-10'>
        <img className='w-96' src={Logo} alt='Logo'/>
      </header>

      <div className='bg-white grid grid-cols-4 gap-3 mx-20 p-5 rounded-md'>
        {
          pokemons.map((pokemon, index) => (
            <div className='bg-green-500 p-2 rounded-sm' key={index}>
              <Link to='/details'>
                <div className='bg-white p-1 rounded-sm mb-2'>
                  <img src={pokeSample}/>
                </div>
                <h1 className='text-white font-semibold'>{pokemon.name}</h1>
              </Link>
            </div>
          ))
        }
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Pokemon