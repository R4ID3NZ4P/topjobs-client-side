import { Helmet } from "react-helmet";
import titles from "../../titles/titles";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Job from "./Job";

const AllJobs = () => {

    const [jobs, setJobs] = useState([]);
    const data = useLoaderData().data;
    useEffect(() => {
        if(data == null || data == []) return;
        setJobs(data);
    }, [data])



    return (
        <div className="px-10 lg:px-32">
            <Helmet>
                <title>{titles.all}</title>
            </Helmet>

            <h1 className="text-center text-3xl font-bold my-8">All Jobs</h1>

            <div className="overflow-x-auto my-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>Job Title</th>
                            <th>Posting Date</th>
                            <th>Application Deadline</th>
                            <th>Salary Range</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map(job => <Job key={job._id} data={job}></Job>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllJobs;
