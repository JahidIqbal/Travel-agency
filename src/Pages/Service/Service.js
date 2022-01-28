import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, image, description, _id } = props.service;
    return (
        <div data-aos="flip-right">
            <div className="col">
                <div className="card h-100 shadow-lg" >
                    <img src={image} className="card-img-top" width="500" height="500" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-uppercase">{name}</h5>
                        <p className="card-text"> {description}</p>

                        <Link to={`/buynow/${_id}`}>
                            <button className="btn btn-dark border-0" style={{ background: `linear-gradient(to right, #b993d6, #8ca6db)` }}  ><img src="" alt="" width="25" />
                                Read more</button>
                        </Link>



                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;