import { Helmet } from "react-helmet";
import titles from "../../titles/titles";


const AddAJob = () => {
    return (
        <div>
            <Helmet>
                <title>{titles.add}</title>
            </Helmet>
            add a job
        </div>
    );
};

export default AddAJob;