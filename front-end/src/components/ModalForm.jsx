import { useState } from "react"

export default function ModalForm({ isOpen, onClose, mode, OnSubmit }) {
    const [rate, setRate] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [job, setJob] = useState('');
    const [status, setStatus] = useState(false);

    // Handle status change
    const handleStatusChange = (e) => {
        setStatus(e.target.value === 'Active');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    }

    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal" open={isOpen}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg py-4">{mode === 'edit' ? 'Edit Client' : 'Client Details'}</h3>
                    <form onSubmit={handleSubmit}>
                        <label className="input w-full">
                            <span className="label">Name</span>
                            <input type="text" placeholder="Your Full Name" className="grow" value={name} onChange={(e) => setName(e.target.value)}/>
                        </label>
                        <label className="input input-bordered w-full my-4">
                            <span className="label">E-Mail</span>
                            <input type="text" className="grow" placeholder="@xxxx.com" value={email} onChange={(e) => setEmail(e.target.value)}>
                            </input>
                        </label>
                        <label className="input input-bordered w-full">
                            <span className="label">Job</span>
                            <input type="text" className="grow" placeholder="" value={job} onChange={(e) => setJob(e.target.value)}>
                            </input>
                        </label>
                        
                        <div className="flex mb-4 justify-between my-4">
                            <label className="input input-bordered mr-4 flex items-center gap-2">
                                <span className="label">Rate</span>
                                <input type="number" className="grow" placeholder="Rate Level" value={rate} onChange={(e) => setRate(e.target.value)}>
                                </input>
                            </label>
                            <label className="select">
                                <span className="label">Status</span>
                                <select value={status ? 'Active':'Inactive'} onChange={handleStatusChange}>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </label>
                        </div>

                        {/* if there is a button in form, it will close the modal */}
                        <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>

                        <button type="submit" className="btn btn-success">{mode === 'edit' ? 'Save Changes' : 'Add Client'}</button>
                    </form>
                </div>
            </dialog>
        </>
    )
}