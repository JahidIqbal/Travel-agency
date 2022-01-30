import React, { useEffect, useState } from 'react';


const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([])
    useEffect(() => {
        fetch('https://whispering-plains-32818.herokuapp.com/manageProducts')
            .then(res => res.json())
            .then(data => setManageProducts(data))
    }, [])

    const handleRemove = id => {
        const url = `https://whispering-plains-32818.herokuapp.com/manageProducts/${id}`;
        const isReady = window.confirm('are you sure you want to delete this order?');
        if (isReady) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Order deleted succssfully')
                        const remaining = manageProducts.filter(order => order._id !== id);
                        setManageProducts(remaining);

                    }
                })
        }
    }

    return (
        <div className=" ">
            <div>
                <table className="table table-borderless  text-bold"  >
                    <thead>
                        <tr>
                            <th scope="col">Serial</th>
                            <th scope="col">All Blog <i className="far fa-clipboard"></i></th>
                            <th scope="col">Price <i className="fas fa-money-bill-wave"></i></th>

                            <th scope="col">Action <i className="fas fa-ban"></i></th>

                        </tr>
                    </thead>


                    {
                        manageProducts?.map((pd, index) =>

                            <tbody key={pd._id}>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td className='text-lowercase text-bold'> {pd?.name} </td>
                                    <td>{pd?.price}</td>


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

export default ManageProducts;