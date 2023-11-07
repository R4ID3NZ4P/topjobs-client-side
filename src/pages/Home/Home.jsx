import { Helmet } from "react-helmet";
import titles from "../../titles/titles";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>{titles.home}</title>
            </Helmet>
        </div>
    );
};

export default Home;
