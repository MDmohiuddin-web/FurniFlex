import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../src/components/Loading/Loading';
import UseAuth from '../src/Hooks/UseAuth';



const PrivateRouts = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  // console.log(location)

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/Login" state={{ from: location }} replace />;
};

export default PrivateRouts;
