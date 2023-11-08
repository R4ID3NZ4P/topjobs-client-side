import { Link } from "react-router-dom";


const JobCard = ({ data }) => {

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

    return (
        <div className="card bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt={title} /></figure>
            <div className="card-body gap-1">
                <h2 className="card-title mb-6 text-secondary">{title}</h2>
                <p><span className="font-semibold text-secondary">Posted by </span>{username}</p>
                <p><span className="font-semibold text-secondary">Salary Range </span>${salary}</p>
                <p><span className="font-semibold text-secondary">Posted on </span>{postdate}</p>
                <p><span className="font-semibold text-secondary">Deadline </span>{deadline}</p>
                <p><span className="font-semibold text-secondary">Applicants </span>{applicants}</p>
                <div className="card-actions justify-end">
                <Link to={`/job/${_id}`} className="btn btn-secondary btn-outline rounded-none text-white">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;