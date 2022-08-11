import React from 'react'
import "./Styles.css"
 import Card from 'react-bootstrap/Card';
 import eeuu from '../Components/eeuu.jpg' 
 import brazil from '../Components/brazil.png'
 import argentina from '../Components/argentina.png'
 import european from '../Components/european.jpg'
function Cotizaciones() {
  return (
    <>    <h10><Card style={{ width: '8rem' }}>
         <Card.Img variant="top" src={eeuu} alt=""/>
         <Card.Body>
           <Card.Title>42.50 <br/> 45.33</Card.Title>
           
         </Card.Body>
          </Card> </h10>
      
      
      <h20>   <Card style={{ width: '8rem' }}>
         <Card.Img variant="top" src={european} alt=""/>
         <Card.Body position="top">
           <Card.Title>40.33 <br/> 50.32</Card.Title>
           
         </Card.Body>
          </Card> </h20>
         
<h30>  <Card style={{ width: '8rem' }}>
         <Card.Img variant="top" src={brazil} alt=""/>
         <Card.Body position="top">
           <Card.Title>40.33 <br/> 50.32</Card.Title>
           
         </Card.Body>
          </Card> </h30>
         
         <h40><Card style={{ width: '8rem' }}>
         <Card.Img variant="top" src={argentina} alt=""/>
         <Card.Body position="top">
           <Card.Title>40.33 <br/> 50.32</Card.Title>
           
         </Card.Body>
          </Card></h40>
        </>
      
     );
   }
export default Cotizaciones
