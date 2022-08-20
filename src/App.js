 
import './App.css';
import Navbar from './komponente/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pocetna from './komponente/Pocetna';
import Kontakt from './komponente/Kontakt';
import Footer from './komponente/Footer';
import { useState } from 'react';
import Uporedi from './komponente/Uporedi';
function App() {

  const [telefoni] = useState([

    {
      id:1,
      model: "Xiaomi mi 11T", 
      ekran: "6,67",
      baterija: 5000,  
      boja: "siva",
      cena: 60000,
      slika: "https://static.tehnomanija.rs/UserFiles/products/2021/023/large/180916.webp",
      uporedi:0

    },
    {
      id:2,
      model: "Iphone 13",
      tezina: 200,
      ekran: "6,67",
      baterija: 5000, 
      boja: "siva",
      cena: 120000,
      slika: "https://static.tehnomanija.rs/UserFiles/products/2021/023/large/182599.webp",
      uporedi:0

    },
    {
      id:3,
      model: "Samsung s21",
      tezina: 200,
      ekran: "6,67",
      baterija: 5000, 
      boja: "siva",
      cena: 99000,
      slika: "https://static.tehnomanija.rs/UserFiles/products/2021/005/large/160543.webp",
      uporedi:0

    },
    {
      id:4,
      model: "iphone 11",
      tezina: 200,
      ekran: "6,67",
      baterija: 5000, 
      boja: "siva",
      cena: 80690,
      slika: "https://static.tehnomanija.rs/UserFiles/products/2020/003/large/157495.webp",
      uporedi:0

    },
    {id:5,
      model: "Xiaomi mi 11T",
      tezina: 200,
      ekran: "6,67",
      baterija: 5000, 
      boja: "siva",
      cena: 60000,
      slika: "https://static.tehnomanija.rs/UserFiles/products/2021/023/large/180916.webp",
      uporedi:0

    },
    {
      id:6,
      model: "Iphone 13",
      tezina: 200,
      ekran: "6,67",
      baterija: 5000, 
      boja: "siva",
      cena: 120000,
      slika: "https://static.tehnomanija.rs/UserFiles/products/2021/023/large/182599.webp",
      uporedi:0

    },
    {
      id:7,
      model: "Samsung s21",
      tezina: 200,
      ekran: "6,67",
      baterija: 5000, 
      boja: "siva",
      cena: 99000,
      slika: "https://static.tehnomanija.rs/UserFiles/products/2021/005/large/160543.webp",
      uporedi:0

    },
    {
      id:8,
      model: "iphone 11",
      tezina: 200,
      ekran: "6,67",
      baterija: 5000, 
      boja: "siva",
      cena: 80690,
      slika: "https://static.tehnomanija.rs/UserFiles/products/2020/003/large/157495.webp",
      uporedi:0

    },



  ]);

  const [telefoniUporedjivanje,setTelefoniUporedjivanje]=useState([]);
  const [brojUporedi,setBrojUporedi]=useState(0);
  const [sort,setSort]=useState(true);

  function sortiraj(){
    setSort(!sort);
  }
  function uporediTelefon(id){
    setBrojUporedi(brojUporedi+1);
    telefoni.forEach((t)=>{
        if(t.id==id)
          t.uporedi=1;
    })
    let niz =  telefoni.filter((t)=>t.uporedi==1);
    setTelefoniUporedjivanje(niz);
  }
  return (
    <div  > 
      <BrowserRouter className="App">
        <Navbar sortiraj={sortiraj}></Navbar>
        <Routes>
            <Route path="/" element={<Pocetna telefoni={telefoni} uporedi={uporediTelefon} sort={sort}></Pocetna>}> </Route>
            <Route path="/kontakt" element={<Kontakt></Kontakt>}> </Route>
            <Route path="/uporedi" element={<Uporedi broj={brojUporedi} telefoniUporedjivanje={telefoniUporedjivanje}></Uporedi>}> </Route>



        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
