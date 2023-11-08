import { Helmet } from "react-helmet";
import titles from "../../titles/titles";
import errorImage from "../../assets/error404.png"
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="bg-[#D5CBE5] h-screen">
            <Helmet>
                <title>{titles.error}</title>
            </Helmet>
            <div className="h-full flex flex-col justify-center items-center">
                <img src={errorImage} className="lg:w-1/2" />
                <Link to={"/"} className="btn btn-primary">Go Back To Home Page</Link>
            </div>
        </div>
    );
};

export default Error;