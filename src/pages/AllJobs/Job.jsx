const Job = ({ data }) => {

    const {
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
                <button className="btn btn-primary btn-outline normal-case btn-xs rounded-none text-white">Details</button>
            </th>
        </tr>
    );
};

export default Job;
