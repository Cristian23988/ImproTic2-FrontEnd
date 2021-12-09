import {Button} from 'react-bootstrap'; 

const Buttons = ({variante, tipo, clase, children}) => (
    <Button variant={variante} type={tipo} className={clase}>
      {children}
    </Button>
);
export default Buttons;