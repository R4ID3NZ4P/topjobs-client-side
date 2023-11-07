import { Helmet } from "react-helmet";
import titles from "../../titles/titles";

const AppliedJobs = () => {
    return (
        <div>
            <Helmet>
                <title>{titles.applied}</title>
            </Helmet>
            applied jobs
        </div>
    );
};

export default AppliedJobs;
