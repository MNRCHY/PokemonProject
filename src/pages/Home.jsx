import React from 'react'
// import { useDispatch, useSelector } from 'react-redux' { useEffect }
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/Logo.webp'
import Footer from '../components/Footer'
// import { getAllPokemons } from '../redux/actions/pokeActions'

function Home() {
  // const dispatch = useDispatch()
  // const { pokemons } = useSelector((state) => state.pokemon)

  // useEffect(() => {
  //   dispatch(getAllPokemons())
  // }, [dispatch])
  
  const navigate = useNavigate()
  return (
    <div className='bg-Main'>
        <header className='flex justify-center p-10'>
            <img className='w-96' src={Logo} alt='Logo'/>
        </header>

        <div className='grid grid-rows-2 gap-5 p-20'>
          <button className='text-white text-2xl bg-blue-700 hover:bg-blue-800 p-3 rounded-xl border-4' onClick={() => navigate('/pokemon')}> Pokemons </button>
          <button className='text-white text-2xl bg-blue-700 hover:bg-blue-800 p-3 rounded-xl border-4' onClick={() => navigate('/item')}> Items </button>
          <button className='text-white text-2xl bg-blue-700 hover:bg-blue-800 p-3 rounded-xl border-4' onClick={() => navigate('/berry')}> Berries </button>
        </div>

        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Home