import { Helmet } from "react-helmet";
import titles from "../../titles/titles";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyJob from "./MyJob";
import { toast } from "react-toastify";

const MyJobs = () => {

    const { user } = useContext(AuthContext);
    const [myJobs, setMyJobs] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/myjobs?username=${user?.displayName}`)
        .then(result => {
            setMyJobs(result.data);
        });
    }, [user])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/myjobs/${id}`)
            .then(result => {
                if(result.data.deletedCount > 0) {
                    toast("Post Deleted Successfully!");
                    const filtered = myJobs.filter(job => job._id !== id);
                    setMyJobs(filtered);
                }
            })
            .catch(error => toast(error));
    }

    return (
        <div className="px-10 lg:px-32 mb-64 min-h-[40vh]">
            <Helmet>
                <title>{titles.myjobs}</title>
            </Helmet>

            <h1 className="text-3xl font-bold text-center my-6">My Jobs</h1>

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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { myJobs.length == 0 ? <tr><td colSpan={7} className="text-center">No posts found!</td></tr> :
                        myJobs.map(job => <MyJob key={job._id} data={job} handleDelete={handleDelete}></MyJob>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobs;