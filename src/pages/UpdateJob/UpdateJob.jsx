import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./UpdateJob.css";
import { Helmet } from "react-helmet";
import axios from "axios";
import { toast } from "react-toastify";


const UpdateJob = () => {

    const navigate = useNavigate();
    const data = useLoaderData().data;

    const {
        _id,
        username,
        image,
        title,
        category,
        salary,
        description,
        postdate,
        deadline,
        applicants
    } = data;

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const image = form.image.value;
        const title = form.title.value;
        const category = form.category.value;
        const salary = form.salary.value;
        const description = form.description.value;
        const postdate = form.postdate.value;
        const deadline = form.deadline.value;
        const applicants = parseInt(form.applicants.value);
        

        const job = {
            username,
            image,
            title,
            category,
            salary,
            description,
            postdate,
            deadline,
            applicants
        };

        
        console.log(job);
        console.log(new Date(postdate).getTime());
        console.log(new Date(deadline).getTime());
        axios.put(`http://localhost:5000/myjobs/${_id}`, job)
            .then(result => {
                if(result.data.modifiedCount > 0) {
                    toast("Job Updated Successfully!");
                    navigate("/myjobs");
                }
                console.log(result.data);
            }).catch(error => toast(error));
    };

    const [startDate, setStartDate] = useState(new Date(postdate));
    const [startDate2, setStartDate2] = useState(new Date(deadline));

    return (
        <div className="px-10 lg:px-32">
            <Helmet>
                <title>{`TopJobs | Update Job: ${title}`}</title>
            </Helmet>
            <h1 className="text-center text-3xl font-bold my-6">Update Job</h1>
            <form
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-base-200 rounded-xl py-16 px-4 mb-8"
                onSubmit={handleSubmit}
            >
                <div className="form-control">
                    <label className="input-group input-group-md">
                        <span>Banner</span>
                        <input
                            type="text"
                            placeholder="Image URL"
                            className="input input-bordered input-md w-full"
                            name="image"
                            defaultValue={image}
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group input-group-md">
                        <span>Title</span>
                        <input
                            type="text"
                            placeholder="Job Title"
                            className="input input-bordered input-md w-full"
                            name="title"
                            defaultValue={title}
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group input-group-md">
                        <span>User</span>
                        <input
                            type="text"
                            placeholder="User Name"
                            className="input input-bordered input-md w-full"
                            name="username"
                            defaultValue={username}
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group input-group-md">
                        <span>Category</span>
                        <select defaultValue={category} name="category" className="select select-bordered w-full" required>
                            <option disabled>Select a category</option>
                            <option value={"onsite"}>On Site</option>
                            <option value={"remote"}>Remote</option>
                            <option value={"parttime"}>Part-Time</option>
                            <option value={"hybrid"}>Hybrid</option>
                        </select>
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group input-group-md">
                        <span>Salary</span>
                        <input
                            type="text"
                            placeholder="Salary Range"
                            className="input input-bordered input-md w-full"
                            name="salary"
                            defaultValue={salary}
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group input-group-md">
                        <span>Description</span>
                        <input
                            type="text"
                            placeholder="Job Description"
                            className="input input-bordered input-md w-full"
                            name="description"
                            defaultValue={description}
                        />
                    </label>
                </div>

                <div className="form-control">
                    <div className="form-control">
                        <label className="input-group">
                            <span>Date</span>
                            <DatePicker 
                                className="input input-bordered input-md w-full rounded-l-none" 
                                selected={startDate} 
                                onChange={(date) => setStartDate(date)} 
                                name="postdate"
                            />
                        </label>
                    </div>
                </div>
                <div className="form-control">
                    <label className="input-group input-group-md">
                        <span>Deadline</span>
                        <DatePicker 
                            className="input input-bordered input-md w-full rounded-l-none" 
                            selected={startDate2} 
                            onChange={(date) => setStartDate2(date)} 
                            name="deadline"
                        />
                    </label>
                </div>
                <div className="form-control lg:col-span-2">
                    <label className="input-group input-group-md">
                        <span>Applicants</span>
                        <input
                            type="number"
                            placeholder="Job Applicants Number"
                            className="input input-bordered input-md w-full"
                            name="applicants"
                            defaultValue={applicants}
                            disabled
                        />
                    </label>
                </div>
                <input type="submit" value="Update" className="btn btn-primary text-white lg:col-span-2"/>
            </form>
        </div>
    );
};

export default UpdateJob;