import {Button} from 'react-bootstrap'; 
import IconLogin from '../images/Icons/IconLogin'

const Buttons = ({variante, tipo, clase, valor}) => (
    <Button variant={variante} type={tipo} className={clase}>
       <IconLogin/>{' '+valor}
    </Button>
);
export default Buttons;