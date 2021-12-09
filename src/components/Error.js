import Alert from "react-bootstrap/Alert";
const Error = ({ children }) => {
  return <Alert variant="danger" className="mt-4">{children}</Alert>;
};

export default Error;
