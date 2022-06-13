import React from 'react'
import wester from '../Components/wester.png'
import {Container,Col,Row,Accordion} from "react-bootstrap"
function Inicio() {
  return (
    <Container>
      <Row>
        <Col xs={12}> 
        <>
    <h2>Trabajamos con el Sistema: <a href="inicio"><img src={wester} alt=""/></a> Dinero en Minutos </h2> <br />
    <h4> 
Para la compra y venta de moneda extranjera somos su mejor cotización,
Pase por alguno de nuestros locales. <br />
Contactese con nosotros: 2 309 11 68 (*) <br />
Si usted quiere hacer alguna queja o comentario,
 dirija un mail a <h3>info@cambioromantico.com</h3> 
   con gusto lo atenderemos,Gracias a la tecnología de punta que este servicio utiliza, su contraparte recibe el dinero a transferir en aproximadamente 15 minutos.

Dinero en sus manos en tan solo unos minutos.
Una billetera vacía o peor aún, una billetera perdida, no tiene porqué arruinar su viaje.
 Si usted necesita recibir o enviar dinero de manera urgente, ya sea por sus negocios o placer,
  Western Union puede ayudarle a obtener ese dinero en cuestión de minutos.
Lo único que debe hacer es pedir a un amigo o pariente que lleve el dinero en efectivo requerido,
 el cargo por servicio a un agente de Western Union.
  La red de computadoras pondrá ese dinero a su disposición en cualquier agente de Western Union en pocos minutos.
La institución está autorizada y supervisada por el Banco Central del Uruguay y por más información se puede acceder a www.bcu.gub.uy
 <br /> <h2>Banco Central del Uruguay </h2> Por más información se puede acceder a www.bcu.gub.uy
</h4>

</>
        <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header><h3>Fácil:</h3></Accordion.Header>
    <Accordion.Body>
    
Western Union brinda un servicio fácil de utilizar. Usted puede recibir dinero a través de cualquier agente ya que el remitente no tiene que especificar una localidad en particular. Además, el servicio está a disposición de cualquier persona - no se requieren cuentas bancarias, afiliaciones ni importes mínimos. Y para mayor conveniencia, también pagamos en moneda local, a tipos de cambio competitivos.

      
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><h3>Rápido:</h3></Accordion.Header>
    <Accordion.Body>
El destinatario puede recoger su dinero a los pocos minutos del envío. Western Union usa tecnología informática de avanzada en su propia red mundial de computadores para autorizar el pago inmediato en más de 184 países
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
<Accordion defaultActiveKey="2">
  <Accordion.Item eventKey="3">
    <Accordion.Header><h3>Conveniente:</h3></Accordion.Header>
    <Accordion.Body>
Western Union es la red líder del mundo en transferencias de dinero, con más de 80.000 agencias dedicadas a brindar la mejor atención al cliente. Muchas están ubicadas en bancos, oficinas de correos, farmacias, tiendas, estaciones de ferrocarril, aeropuertos y otros lugares convenientes que ofrecen sus servicios en amplios horarios e incluso durante los fines de semana.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header><h3>Seguro:</h3></Accordion.Header>
    <Accordion.Body>
Western Union ha estado transfiriendo dinero desde 1871. En 1996, se realizan más de 33 millones de transferencias, cada una de ellas protegida por nuestro sistema de seguridad de primer nivel. Esto, garantiza que su dinero se pague pronta y totalmente y sólo a la persona adecuada.. Brindamos satisfacción a millones de clientes de todo el mundo que utilizan a Western Union una y otra vez..
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header><h3>Procedimiento:</h3></Accordion.Header>
    <Accordion.Body>
   
El remitente lleva el dinero al agente de Western Union, llena un breve formulario, paga la tarifa del servicio y obtiene un recibo con un Número de Control. Luego, el remitente informa al destinatario de la transferencia. El destinatario acude a cualquier agencia de Western Union, presenta su identificación (es útil, aunque no necesario, saber el Número de Control) e inmediatamente recibe la totalidad del dinero en efectivo.
Los amables operadores de Western Union en todos los países en que prestamos servicios pueden responder a sus preguntas y ayudarle a localizar las agencias más convenientes. Todos los operadores hablan inglés, así como también su lengua materna.

Para enviar o recibir dinero de otros países, consulte en Cambio Romántico su mejor solución cambiaria!

 
</Accordion.Body>
  </Accordion.Item>
</Accordion>
<br/> <br/> <br/>

       
        </Col>
      </Row>
  </Container> 
  

  )
   
} 

export default Inicio