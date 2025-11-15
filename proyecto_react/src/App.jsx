import './App.css';
import HeaderCont from './componentes/HeaderContent';
import NavCont from './componentes/MenuContent';
import MainleftCont from './componentes/MainleftContent';
import MainrightCont from './componentes/MainrightContent';
import FooterCont from './componentes/FooterContent';

import { Container, Row, Col } from 'react-bootstrap';

function App() {
   return (
    <Container>
      <Row>
        <Col>
          <HeaderCont/></Col>
      </Row>
      <Row>
        <Col><NavCont/></Col>
      </Row>
      <main>
      <Row>
        <Col>
          <MainleftCont/></Col>
          <Col>
          <MainrightCont/></Col>
      </Row>
      </main>
      <Row>
        <Col><FooterCont/></Col>
      </Row>
    </Container>
  );


}

export default App;