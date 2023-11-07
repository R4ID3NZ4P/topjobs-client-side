import { Helmet } from "react-helmet";
import titles from "../../titles/titles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AddAJob.css"


const AddAJob = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

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
        const applicants = form.applicants.value;
        

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
    };

    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());

    return (
        <div className="px-10 lg:px-32">
            <Helmet>
                <title>{titles.add}</title>
            </Helmet>
            <h1 className="text-center text-3xl font-bold my-6">Add A Job</h1>
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
                            defaultValue={user?.displayName}
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group input-group-md">
                        <span>Category</span>
                        <select name="category" className="select select-bordered w-full" required>
                            <option disabled selected>Select a category</option>
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
                        />
                    </label>
                </div>

                <div className="form-control">
                    <div className="form-control">
                        <label className="input-group">
                            <span>Date</span>
                            {/* <input
                                type="date"
                                placeholder="Posting Date"
                                className="input input-bordered w-full"
                                name="postdate"
                            /> */}
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
                        {/* <input
                            type="date"
                            placeholder="Application Deadline"
                            className="input input-bordered input-md w-full"
                            name="deadline"
                        /> */}
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
                            defaultValue={0}
                        />
                    </label>
                </div>
                <input type="submit" value="Add" className="btn btn-primary text-white lg:col-span-2"/>
            </form>
        </div>
    );
};

export default AddAJob;