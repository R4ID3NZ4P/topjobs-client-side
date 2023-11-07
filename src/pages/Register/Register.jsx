import { Helmet } from "react-helmet";
import titles from "../../titles/titles";


const Register = () => {
    return (
        <div>
            <Helmet>
                <title>{titles.register}</title>
            </Helmet>
        </div>
    );
};

export default Register;