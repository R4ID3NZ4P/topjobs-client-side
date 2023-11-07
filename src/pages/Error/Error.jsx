import { Helmet } from "react-helmet";
import titles from "../../titles/titles";


const Error = () => {
    return (
        <div>
            <Helmet>
                <title>{titles.error}</title>
            </Helmet>
            error 404
        </div>
    );
};

export default Error;