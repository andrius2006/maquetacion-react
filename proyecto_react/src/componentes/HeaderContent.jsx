import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function HeaderCont() {
  return (
    <header>
      <p>Este es el contenido del header</p>

      <Button 
        as={Link} 
        to="/login" 
        variant="warning"
      >
        Ir al Login
      </Button>
      
    </header>
  );
}

export default HeaderCont;

