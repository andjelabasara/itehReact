import Kartica from "./Kartica";

 

function Pocetna({telefoni}) {
  return (
    <div className="all-products" >
        {telefoni.map((t)=><Kartica telefon={t}></Kartica>)}
        
    </div>





  );
}

export default Pocetna;
