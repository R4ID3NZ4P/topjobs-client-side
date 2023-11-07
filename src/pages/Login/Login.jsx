import { Helmet } from "react-helmet";
import titles from "../../titles/titles";


const Login = () => {
    return (
        <div>
            <Helmet>
                <title>{titles.login}</title>
            </Helmet>
            login
        </div>
    );
};

export default Login;