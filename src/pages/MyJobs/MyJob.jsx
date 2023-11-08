import { Link } from "react-router-dom";
import deleteIcon from "../../assets/delete.png";

const MyJob = ({ data, handleDelete }) => {
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
                <div className="mx-auto">
                    <Link to={`/myjobs/${_id}`} className="btn btn-warning normal-case btn-xs rounded-none text-white mr-5">Update</Link>
                    <button onClick={()=>document.getElementById(`my_modal_${_id}`).showModal()} className="btn btn-error normal-case btn-xs rounded-none text-white">Delete</button>
                </div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog id={`my_modal_${_id}`} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-center">Are you sure?</h3>
                        <img src={deleteIcon} alt="" className="w-14 mx-auto" />
                        <hr className="my-4" />
                        <p className="text-center">Are you sure you want to delete this post? This cannot be undone.</p>
                        <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={() => handleDelete(_id)} className="btn btn-error btn-outline mr-4">Delete</button>
                            <button className="btn btn-primary text-white">Close</button>
                        </form>
                        </div>
                    </div>
                    </dialog>
            </th>
        </tr>
    );
};

export default MyJob;