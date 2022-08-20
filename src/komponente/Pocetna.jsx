import Kartica from "./Kartica";

 

function Pocetna({telefoni,uporedi,sort}) {
  return (
    <div className="all-products" >
        
        {sort==true
        ? 
        <>
            {telefoni
            .sort((a,b)=>a.cena<b.cena?-1:1)
            .map((t)=><Kartica key={t.id} telefon={t} uporedi={uporedi}></Kartica>)}
        </>
            
        :
        <>
        {telefoni
             .sort((a,b)=>a.cena<b.cena?1:-1)
              .map((t)=><Kartica key={t.id} telefon={t} uporedi={uporedi}></Kartica>)}</>
        
        
       }
        
    </div>





  );
}

export default Pocetna;
