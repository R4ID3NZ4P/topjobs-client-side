import { Helmet } from "react-helmet";
import titles from "../../titles/titles";


const MyJobs = () => {
    return (
        <div>
            <Helmet>
                <title>{titles.myjobs}</title>
            </Helmet>
            My jobs
        </div>
    );
};

export default MyJobs;