import Rating from 'react-rating';


const Testimonial = (props) => {
    const { name, Description, image, number } = props.testmonial;
    return (
        <div>

            <div className='text-white' data-aos="zoom-in">
                <div className="col">
                    <div className="card h-100 shadow-lg" style={{ background: "#19547b" }} >
                        <img src={image} className="card-img-top" width="500" height="500" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-uppercase">{name}</h5>
                            <p className="card-text"> {Description}</p>

                            <p> <Rating
                                initialRating={number}
                                emptySymbol="far fa-star icon-color text-warning"
                                fullSymbol="fas fa-star icon-color  text-warning"
                                readonly ></Rating></p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testimonial;