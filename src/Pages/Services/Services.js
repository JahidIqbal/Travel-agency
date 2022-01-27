import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

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
            <div className=" mx-auto mt-5">
                <h2 className=" fw-bolder display-4  w-100 mt-5">Travellers Experience </h2>

                <div className="row row-cols-1 row-cols-md-3 g-4" >

                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }




                </div>
                <div className="pagination bg-info justify-content-center">
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <buttton
                                key={number}
                                onClick={() => setPage(number)}
                                className="btn btn-primary justify-content-center">{number}</buttton>)
                    }
                </div>

            </div>
        </div>


    );
};

export default Services;