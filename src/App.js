 
import './App.css';
import Navbar from './komponente/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pocetna from './komponente/Pocetna';
import Kontakt from './komponente/Kontakt';
function App() {
  return (
    <div  > 
      <BrowserRouter className="App">
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Pocetna></Pocetna>}> </Route>
            <Route path="/kontakt" element={<Kontakt></Kontakt>}> </Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
