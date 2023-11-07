import { Helmet } from "react-helmet";
import titles from "../../titles/titles";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Job from "./Job";

const AllJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState("");
    const data = useLoaderData().data;
    useEffect(() => {
        if(data == null || data == []) return;
        setJobs(data);
    }, [data])

    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const handleSearch = () => {
        const filtered = data.filter(job => job.title.toLowerCase().includes(search.toLowerCase()));
        setJobs(filtered)
    }

    return (
        <div className="px-10 lg:px-32">
            <Helmet>
                <title>{titles.all}</title>
            </Helmet>

            <h1 className="text-center text-3xl font-bold my-8">All Jobs</h1>

            <div className="flex justify-center items-center">
                <div className="join mx-auto">
                    <input onChange={handleChange} className="input input-bordered join-item" placeholder="Search Jobs"/>
                    <button onClick={handleSearch} className="btn join-item rounded-r-lg btn-primary text-white normal-case">Search</button>
                </div>
            </div>

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
