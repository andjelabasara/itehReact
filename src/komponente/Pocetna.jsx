import Kartica from "./Kartica";

 

function Pocetna({telefoni,uporedi}) {
  return (
    <div className="all-products" >
        {telefoni.map((t)=><Kartica key={t.id} telefon={t} uporedi={uporedi}></Kartica>)}
        
    </div>





  );
}

export default Pocetna;
