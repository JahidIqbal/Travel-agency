import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);
    const [displayServices, setDisplayServices] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size = 10;
    useEffect(() => {
        fetch(`http://localhost:5000/services?page=${page}&&size=${size}`)

            .then(res => res.json())
            .then(data => {
                setServices(data.services);
                setDisplayServices(data.services);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            })

    }, [page])



    return (
        <div>
            {
                services.length === 0 ?
                    <div className="spinner-border text-info " role="status" >
                        <span className="visually-hidden">Loading...</span>
                    </div>

                    :
                    <div className=" mx-auto mt-5">
                        <h2 className=" fw-bolder display-4  w-100 mt-5">World Tour Blog </h2>

                        <div className="row row-cols-1 row-cols-md-3 g-4" >

                            {
                                services.map(service => <Service key={service._id} service={service}></Service>)
                            }




                        </div>


                    </div>
            }

            <div className="pagination  justify-content-center mt-4">
                {
                    [...Array(pageCount).keys()]
                        .map(number => <buttton
                            key={number}
                            onClick={() => setPage(number)}
                            className="btn btn-info btn-lg  mx-2">Page{number + 1}</buttton>)
                }
            </div>
        </div>


    );
};

export default Services;