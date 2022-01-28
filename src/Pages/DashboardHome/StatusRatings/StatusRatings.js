import React, { useEffect } from 'react';
import { useState } from 'react';

const StatusRatings = () => {
    const [status, setStatus] = useState([])
    const [manageRatings, setManageRatings] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/ratings')
            .then(res => res.json())
            .then(data => setManageRatings(data))
    }, [])
    const handleStatus = (_id, pd) => {
        pd.status = "shipped";

        fetch(`http://localhost:5000/ratings/${_id}`, {
            method: 'PUT',
            headers:
                { "content-type": "application/json" },
            body: JSON.stringify(pd),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.modifiedCount) {
                    setStatus(false);
                }
            });
    }


    const handleRemove = id => {
        const url = `http://localhost:5000/ratings/${id}`;
        const isReady = window.confirm('are you sure you want to delete this ratings?');
        if (isReady) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Order deleted succssfully')
                        const remaining = manageRatings.filter(order => order._id !== id);
                        setManageRatings(remaining);

                    }
                })
        }
    }

    return (
        <div>
            <div>
                <table className="table table-borderless  text-bold"  >
                    <thead>
                        <tr>
                            <th scope="col">Serial</th>
                            <th scope="col">Testimonials list <i className="far fa-clipboard"></i></th>
                            <th scope="col">Description </th>
                            <th scope="col">Status</th>
                            <th scope="col">Action <i className="fas fa-ban"></i></th>

                        </tr>
                    </thead>


                    {
                        manageRatings?.map((pd, index) =>

                            <tbody key={pd._id}>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td className='text-lowercase text-bold'> {pd?.name} </td>
                                    <td>{pd?.Description}</td>

                                    <td>
                                        <button onClick={() => handleStatus(pd._id, pd)} className="btn btn-success btn-sm mx-2">
                                            {pd?.status}</button>

                                    </td>


                                    <td>
                                        <button onClick={() => handleRemove(pd._id)} className="btn"><i className="fas fa-trash text-danger"></i></button>

                                    </td>

                                </tr>
                            </tbody>

                        )

                    }




                </table>

            </div>

        </div>
    );
};

export default StatusRatings;