import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"


const JobCard = ({ data, isVisible }) => {

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
        <AnimatePresence>
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                >
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={image} alt={title} /></figure>
                    <div className="card-body gap-1">
                        <h2 className="card-title mb-6 text-warning">{title}</h2>
                        <p><span className="font-semibold text-warning">Posted by </span>{username}</p>
                        <p><span className="font-semibold text-warning">Salary Range </span>${salary}</p>
                        <p><span className="font-semibold text-warning">Posted on </span>{postdate}</p>
                        <p><span className="font-semibold text-warning">Deadline </span>{deadline}</p>
                        <p><span className="font-semibold text-warning">Applicants </span>{applicants}</p>
                        <div className="card-actions justify-end">
                        <Link to={`/job/${_id}`} className="btn btn-warning btn-outline rounded-none text-white">View Details</Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default JobCard;