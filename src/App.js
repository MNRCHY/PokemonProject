import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon'
import Item from './pages/Items'
import Berry from './pages/Berries'
import PokeDetails from './pages/PokeDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon' element={<Pokemon />} />
        <Route path='/item' element={<Item />} />
        <Route path='/berry' element={<Berry />} />
        <Route path='/details' element={<PokeDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
