export default function TableList(handleOpen) {
    const clients =[
        {id: 1, name:"John Doe", email:"John.doe@gmail.com", job:"Developer", rate:"150", isactive:false},
        {id: 2, name:"Malika", email:"malika@gmail.com", job:"Architecture", rate:"145", isactive:true},
        {id: 3, name:"Filisku", email:"filisku@gmail.com", job:"Gamer", rate:"80", isactive:true},
        {id: 4, name:"Davina", email:"Dav@gmail.com", job:"Chef", rate:"188", isactive:true},
    ]

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Job</th>
                            <th>Rate</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-base-200">

                    {clients.map((client) => (
                        <tr>
                            <th>{client.id}</th>
                            <td>{client.name}</td>
                            <td>{client.email}</td>
                            <td>{client.job}</td>
                            <td>{client.rate}</td>
                            <td>
                                <button className={`btn rounded-full w-20 ${client.isactive ? `btn-primary`:`btn-outline btn-primary`}`}>
                                    {client.isactive ? `Active`:`Inactive`}
                                </button>
                            </td>
                            <td>
                                <button onClick={() => handleOpen('edit')} className="btn btn-secondary">
                                    Update
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-error">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}    
                    </tbody>
                </table>
            </div>
        </>
    )
}