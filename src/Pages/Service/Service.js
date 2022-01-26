import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, image, description, _id } = props.service;
    return (
        <div>
            <div className="col">
                <div className="card h-100 shadow-lg" >
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"> <strong>Description:</strong> {description}</p>

                        <Link to={`/buynow/${_id}`}>
                            <button className="btn btn-dark"><img src="" alt="" width="25" />
                                Buy now</button>
                        </Link>



                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;