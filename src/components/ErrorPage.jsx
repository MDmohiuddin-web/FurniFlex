import { Link } from "react-router-dom";
import imerror from "../assets/image.png";
const ErrorPage = () => {
  return (
    <div className="w-full m-auto text-center">
    <img src={imerror} alt="" className="mx-auto" />
    <Link to='/' className="btn btn-warning">Back to Home </Link>
    
</div>
  );
};

export default ErrorPage;
