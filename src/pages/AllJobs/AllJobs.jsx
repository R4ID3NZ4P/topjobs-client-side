import { Helmet } from "react-helmet";
import titles from "../../titles/titles";

const AllJobs = () => {
    return (
        <div>
            <Helmet>
                <title>{titles.all}</title>
            </Helmet>
            all jobs
        </div>
    );
};

export default AllJobs;
