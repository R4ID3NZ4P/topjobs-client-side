import { Helmet } from "react-helmet";
import titles from "../../titles/titles";
import { useEffect, useState } from "react";
import AppliedJob from "./AppliedJob";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const AppliedJobs = () => {

    const [applied, setApplied] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        axios.get(`http://localhost:5000/applied/${user?.displayName}`)
            .then(result => {
                setApplied(result.data);
                setFiltered(result.data);
            })
            .catch(error => toast(error));
    }, [user]);

    const handleChange = e => {
        if (e.target.value == "all") {
            setFiltered(applied);
        }
        else {
            const filter = applied.filter(job => job.category == e.target.value);
            setFiltered(filter);
        }
    }

    return (
        <div className="px-10 lg:px-32 min-h-[80vh]">
            <Helmet>
                <title>{titles.applied}</title>
            </Helmet>

            <h1 className="text-3xl font-bold text-center my-6">Applied Jobs</h1>
            <div className="w-full flex justify-end items-center">
                <p className="text-sm font-semibold mr-2">Filter by category:</p>
                <select onChange={handleChange} defaultValue={"all"} className="select select-success w-full max-w-[128px]">
                    <option value={"all"}>All</option>
                    <option value={"onsite"}>On Site</option>
                    <option value={"remote"}>Remote</option>
                    <option value={"parttime"}>Part-Time</option>
                    <option value={"hybrid"}>Hybrid</option>
                </select>
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
                        { filtered.length == 0 ? <tr><td colSpan={6} className="text-center">You haven&apos;t applied to any job yet!</td></tr> :
                        filtered.map(job => <AppliedJob key={job._id} data={job}></AppliedJob>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppliedJobs;
