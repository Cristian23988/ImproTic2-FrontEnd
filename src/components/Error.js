import Alert from "react-bootstrap/Alert";
const Error = ({ children }) => {
  return <Alert variant="danger">{children}</Alert>;
};

export default Error;
