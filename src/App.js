import './App.css';
import Cards from './pages/Cards';
import Addcard from './pages/Addcard';
import { Route, Link, Routes, } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <div className='navBox'>
        <h1 className='headTitle'>E-wallet</h1>
        <Link className='navLink' to="/" >
          My cards
        </Link>

      </div>

    <Routes>
      <Route exact path="/" element={<Cards/>}/> 
      <Route path="/addcard" element={<Addcard/>} />
    </Routes>
    </div>
  );
}

export default App;
