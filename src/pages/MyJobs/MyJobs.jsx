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
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://b8a11-server-side-mu.vercel.app/myjobs?username=${user?.displayName}`, {withCredentials: true})
        .then(result => {
            setMyJobs(result.data);
            setLoading(false);
        })
        .catch(error => {
            toast(error.code);
            setMyJobs([]);
            setLoading(false);
        });
    }, [user])

    const handleDelete = (id) => {
        axios.delete(`https://b8a11-server-side-mu.vercel.app/myjobs/${id}`)
            .then(result => {
                if(result.data.deletedCount > 0) {
                    toast("Post Deleted Successfully!");
                    const filtered = myJobs.filter(job => job._id !== id);
                    setMyJobs(filtered);
                }
            })
            .catch(error => toast(error));
    }

    if (loading) return <div className="w-full h-[50vh] flex justify-center my-40"><span className="loading loading-infinity w-20"></span></div>

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