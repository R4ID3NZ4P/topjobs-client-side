import { Link } from "react-router-dom";

const MyJob = ({ data }) => {
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
            <th colSpan={2}>
                <Link to={`/myjobs/${_id}`} className="btn btn-primary btn-outline normal-case btn-xs rounded-none text-white mr-5">Update</Link>
                <Link  className="btn btn-primary btn-outline normal-case btn-xs rounded-none text-white">Delete</Link>
            </th>
        </tr>
    );
};

export default MyJob;