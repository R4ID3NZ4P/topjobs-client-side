import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);

    const location = useLocation();
    
    if(loading) return <div className="w-full h-[50vh] flex justify-center my-40"><span className="loading loading-infinity w-20"></span></div>

    if(user) return children;

    return (
        <Navigate state={location.pathname} to={"/login"}></Navigate>
    );
};

export default PrivateRoute;