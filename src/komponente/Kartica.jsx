 

function Kartica({telefon}) {
    return (
      <div className="card" >
              <div className="card-header">
                    <img src={telefon.slika} alt="" className="card-img-top" />
              </div>
              <div className="card-body">
                <h3 className="product-name">{telefon.model}</h3>
                <h5>
                    
                    Ekran: {telefon.ekran} <br />
                    Cena: {telefon.cena} <br />        
                    Baterija: {telefon.baterija} <br />     
                    Boja: {telefon.boja} <br />        

                </h5>
              </div>
            <button className="btn">Uporedi</button>
      </div>
  
  
  
  
  
    );
  }
  
  export default Kartica;
  