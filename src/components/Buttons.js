import {Button} from 'react-bootstrap'; 

const Buttons = ({variante, tipo, clase, children, handleClick}) => (
    <Button variant={variante} type={tipo} className={clase} onClick={handleClick}>
      {children}
    </Button>
);
export default Buttons;