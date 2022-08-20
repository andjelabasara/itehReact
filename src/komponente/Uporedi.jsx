import Kartica from "./Kartica";

 

function Uporedi({telefoniUporedjivanje,broj}) {
  return (
    <div className="uporedi" >
         {broj==0? 
         <><p>Niste odabrali telefone za uporedjivanje</p></>
         :
         broj>4? <><p>Odabrali ste previse</p></>
            :
            <>
                <table >
                    <thead>

                    </thead>
                    <tbody>
                        <tr><th>Slika</th>{telefoniUporedjivanje.map((t)=><td className="celijaSlika"><img src={t.slika} className="slika"/></td>)}</tr>
                        <tr><th>Model</th>{telefoniUporedjivanje.map((t)=><td>{t.model}</td>)}</tr>
                        <tr><th>Cena</th>{telefoniUporedjivanje.map((t)=><td>{t.cena}</td>)}</tr>
                        <tr><th>Ekran</th>{telefoniUporedjivanje.map((t)=><td>{t.ekran}</td>)}</tr>
                        <tr><th>Baterija</th>{telefoniUporedjivanje.map((t)=><td>{t.baterija}</td>)}</tr>
                        <tr><th>Boja</th>{telefoniUporedjivanje.map((t)=><td>{t.boja}</td>)}</tr>


                    </tbody>
                </table>
            
            
            
            </>
         }
    </div>





  );
}

export default Uporedi;
