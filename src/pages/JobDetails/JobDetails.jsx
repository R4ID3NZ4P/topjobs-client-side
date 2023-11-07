import { useLoaderData } from "react-router-dom";


const JobDetails = () => {

    const data = useLoaderData().data;
    console.log(data);
    const {
        _id,
        description,
        image,
        title,
        salary,
        deadline,
        applicants
    } = data;

    return (
        <div className="px-10 lg:px-32">
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

                    <button className="btn btn-primary btn-block rounded-none text-white">Apply</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;