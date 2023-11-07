import { Link, useNavigate } from "react-router-dom";

const Job = ({ data }) => {

    const {
        _id,
        username,
        title,
        salary,
        postdate,
        deadline
    } = data;

    return (
        <tr>
            <th>{username}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{title}</div>
                    </div>
                </div>
            </td>
            <td>
                {postdate}
            </td>
            <td>{deadline}</td>
            <td>${salary}</td>
            <th>
                <Link to={`/job/${_id}`} className="btn btn-primary btn-outline normal-case btn-xs rounded-none text-white">Details</Link>
            </th>
        </tr>
    );
};

export default Job;
