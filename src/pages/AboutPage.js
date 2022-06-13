import React from 'react'
import colon from '../Components/colon.png';
import paso from '../Components/paso.png';
import styled from 'styled-components';
function AboutPage() {
  return (

    <AboutContainer>
    <div className="cabezera" id="cabezera">
    <div>
      <h1>Casa Central - Paso Molino</h1>
<h2>
            Avda. Agraciada 4109
           Telefax. + 598 2 309 11 68</h2>

    <a href="AboutPage"><img src={paso} alt=""/></a>
    </div>
    <br/><br/><br/><br/>
    <div>
      <h1>Sucursal - Colón</h1> 
       <h2>Avda. Garzón 1927 bis
        Telefax. +598 2 320 14 06</h2>

    <a href="AboutPage"><img src={colon} alt=""/></a>
    </div>
    </div></AboutContainer>
  )
}

export default AboutPage

const AboutContainer= styled.nav `
div{
  text-align: center;
    font-size: 20px;
    font-weight: 00;
    color: red;
    background-color: beige;

}
.cabezera img{
  font-size:620px;
  padding-top: 1.5vw;
  padding-bottom: 1.5vw;
    width: 24vw;
  }
`