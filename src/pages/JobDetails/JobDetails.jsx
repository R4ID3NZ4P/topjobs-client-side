import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";
import { Helmet } from "react-helmet";


const JobDetails = () => {

    const navigate = useNavigate();
    const data = useLoaderData().data;
    console.log(data);
    const {
        _id,
        description,
        image,
        title,
        salary,
        deadline,
        applicants,
        username
    } = data;

    const { user } = useContext(AuthContext);

    const handleApply = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const resume = form.resume.value;

        if(name == username) {
            toast("You can't apply to your own posts!");
            document.getElementById('my_modal_5').close();
            return;
        }

        if(new Date(deadline).getTime() < new Date().getTime()) {
            toast("You are past the deadline!");
            document.getElementById('my_modal_5').close();
            return;
        }

        const applicationForm = {
            name,
            email,
            resume,
            jobId: _id
        }

        const result = await axios.post("http://localhost:5000/apply", applicationForm);
        if(result.data.insertedId) {
            toast("Applied Successfully!");
            navigate(-1);
        }
    }

    return (
        <div className="px-10 lg:px-32">
            <Helmet>
                <title>{`TopJobs | Job: ${title}`}</title>
            </Helmet>
            <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-6 lg:gap-20 my-16">
                <div className="w-full lg:w-2/3">
                    <h2 className="text-2xl font-semibold mb-5">{title}</h2>
                    <img src={image} alt="" />
                    <h2 className="text-2xl font-semibold my-5">Description</h2>
                    <p>{description}</p>
                </div>
                <div className="w-3/4 md:w-1/2 lg:w-1/6 space-y-4">
                    <h3 className="text-2xl font-bold mb-10">Details</h3>
                    <div className="flex justify-between">
                        <p className="text-gray-400 font-semibold">Salary Range</p> 
                        <p className="font-semibold">${salary}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-400 font-semibold">Number Of Applicants</p> 
                        <p className="font-semibold">{applicants}</p>
                    </div>
                    <div className="flex justify-between mb-16">
                        <p className="text-gray-400 font-semibold">Deadline</p> 
                        <p className="font-semibold">{deadline}</p>
                    </div>

                    <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-primary btn-block rounded-none text-white">Apply</button>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-center">Application Form</h3>
                        <form onSubmit={handleApply}>
                            <div className="form-control mb-5 mt-5">
                                <label className="input-group">
                                    <span>Name</span>
                                    <input name="name" defaultValue={user?.displayName} type="text" placeholder="Your Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control mb-5">
                                <label className="input-group">
                                    <span>Email</span>
                                    <input name="email" defaultValue={user?.email} type="text" placeholder="Your Email" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control mb-5">
                                <label className="input-group">
                                    <span>Resume</span>
                                    <input name="resume" type="text" placeholder="Link of your resume" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <button className="btn btn-primary btn-block text-white">Submit</button>
                        </form>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                        </div>
                    </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
