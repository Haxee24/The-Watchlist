import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import { Route, Routes } from 'react-router-dom';
import Base from './pages/Base';
import About from './pages/About';

function App() {

  return (
      <Routes>
        <Route path="/" element={<Base/>}>
          <Route index element={<Home/>} />
          <Route path='/watchlist' element={<Watchlist/>} />
          <Route path='about' element={<About/>} />
        </Route>
      </Routes>
  )
}

export default App
