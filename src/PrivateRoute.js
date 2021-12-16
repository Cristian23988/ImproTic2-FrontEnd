import { useLocation, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let token = sessionStorage.getItem("token");
  let location=useLocation();
  if(!token){
    return (
      <Navigate to="/" state={{ from: location }}/>
    );
  }
  return children;
};

export default PrivateRoute;