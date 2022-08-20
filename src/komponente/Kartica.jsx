 
import { BsFillPhoneFill,BsBatteryFull,BsPen} from 'react-icons/bs';
import { ImPriceTag} from 'react-icons/im';
import { DiGitCompare } from 'react-icons/di';
function Kartica({telefon,uporedi}) {
    return (
      <div className="card" >
              <div className="card-header">
                    <img src={telefon.slika} alt="" className="card-img-top" />
              </div>
              <div className="card-body">
                <h4 className="product-name">{telefon.model}</h4>
                <hr />
                <h5 className='karakteristike'>
                    
                    <BsFillPhoneFill></BsFillPhoneFill>  Ekran: {telefon.ekran} <br />
                    <ImPriceTag></ImPriceTag>  Cena: {telefon.cena} <br />        
                    <BsBatteryFull></BsBatteryFull>  Baterija: {telefon.baterija} <br />     
                    <BsPen></BsPen>  Boja: {telefon.boja} <br />        

                </h5>
              </div>
            <button className="btnCompare" onClick={()=>uporedi(telefon.id)}><DiGitCompare></DiGitCompare></button>
      </div>
  
  
  
  
  
    );
  }
  
  export default Kartica;
  