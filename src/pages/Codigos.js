import React from  'react';
import { } from "react-bootstrap";
import Captura1 from "../Components/Captura 1.PNG";
import Captura2 from "../Components/Captura2.PNG";
import Captura3 from "../Components/Captura3.PNG";
import Captura4 from "../Components/Captura4.PNG"; 
function Codigos() {
  return (
    <div  className="container">
      <h2>Codigos De Buenas Practicas</h2>
      <div style={{textAlign:"center"}}>
        <br /><h2>Pagina-1</h2>
        
        <a href="Codigos"><img src={Captura1} alt=""/></a>
      </div>    
      <br />   <h2>Pagina-2</h2>
      <div> 
      <a href="Codigos"><img src={Captura2} alt=""/></a>
      </div>
      <br />   <h2>Pagina-3</h2>
      <div> 
      <a href="Codigos"><img src={Captura3} alt=""/></a>
      </div>
      <br />   <h2>Pagina-4</h2>
      <div> 
      <a href="Codigos"><img src={Captura4} alt=""/></a>
      </div>
    </div>
  );
}

export default Codigos
