import Alert from "react-bootstrap/Alert";
const Error = ({ mensaje }) => {
  return <Alert variant="danger">{mensaje}</Alert>;
};

export default Error;
