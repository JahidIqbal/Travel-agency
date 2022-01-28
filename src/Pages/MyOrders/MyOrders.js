import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/ratings?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/ratings/${id}`;
        const isReady = window.confirm('are you sure you want to delete this order?');
        if (isReady) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Order deleted succssfully')
                        const remaining = myOrder.filter(order => order._id !== id);
                        setMyOrder(remaining);

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
                            <th scope="col">Action <i className="fas fa-ban"></i></th>

                        </tr>
                    </thead>


                    {
                        myOrder?.map((pd, index) =>

                            <tbody key={pd._id}>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td className='text-lowercase text-bold'> {pd?.name} </td>
                                    <td>{pd?.Description}</td>

                                    <td>
                                        <button onClick={() => handleDelete(pd._id)} className="btn"><i className="fas fa-trash text-danger"></i></button>

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

export default MyOrders;