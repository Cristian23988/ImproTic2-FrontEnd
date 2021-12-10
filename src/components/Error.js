import Alert from "react-bootstrap/Alert";
const Error = ({ children }) => {
  return <p className="mt-1 text-danger">{children}</p>;
};

export default Error;
