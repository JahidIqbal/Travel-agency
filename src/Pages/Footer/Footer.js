import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-white mt-4'>

            <footer className="page-footer font-small" style={{ backgroundColor: ' #19547b' }}>


                <div className="container text-white">


                    <div className="row text-center d-flex justify-content-center pt-5 mb-3 ">


                        <div className="col-md-2 mb-3 ">

                            <Link className='text-decoration-none text-uppercase font-weight-bold text-white' to="#">About us</Link>

                        </div>



                        <div className="col-md-2 mb-3">

                            <Link className='text-decoration-none text-uppercase font-weight-bold text-white' to="#">Travels</Link>

                        </div>



                        <div className="col-md-2 mb-3">

                            <Link className='text-decoration-none text-uppercase font-weight-bold text-white' to="#">Awards</Link>

                        </div>
                        <div className="col-md-2 mb-3">

                            <Link className='text-decoration-none text-uppercase font-weight-bold text-white' to="#">Help</Link>

                        </div>



                        <div className="col-md-2 mb-3">

                            <Link className='text-decoration-none text-uppercase font-weight-bold text-white' to="#">Contact</Link>

                        </div>


                    </div>

                    <hr className="rgba-white-light" style={{ margin: ' 0 15%' }} />


                    <div className="row d-flex text-center justify-content-center mb-md-0 mb-4 text-white">


                        <div className="col-md-8 col-12 mt-5">
                            <p style={{ lineHeight: "1.7rem" }}>A ExpoTrip agency is a private retailer or public service that provides travel and tourism-related services to the general public on behalf of accommodation or travel suppliers to offer different kinds of travelling packages for each destination. ExpoTrip can provide outdoor recreation activities, airlines, car rentals, cruise lines, hotels, railways, travel insurance, package tours, insurance, guide books, VIP airport lounge access, arranging logistics for luggage and medical items delivery for travellers upon request, public transport timetables, car rentals, and bureau de change services.</p>
                        </div>


                    </div>

                    <hr className="clearfix d-md-none rgba-white-light" style={{ margin: ' 10% 15% 5%' }} />


                    <div className="row pb-3">


                        <div className="col-md-12">

                            <div className="mb-5 flex-center">


                                <Link className="fb-ic text-white">
                                    <i className="fab fa-facebook-f fa-lg white-text mx-2"> </i>
                                </Link>

                                <Link className="tw-ic text-white">
                                    <i className="fab fa-twitter fa-lg white-text mx-2"> </i>
                                </Link>

                                <Link className="gplus-ic text-white">
                                    <i className="fab fa-google-plus-g fa-lg white-text mx-2"> </i>
                                </Link>

                                <Link className="li-ic text-white">
                                    <i className="fab fa-linkedin-in fa-lg white-text mx-2"> </i>
                                </Link>

                                <Link className="ins-ic text-white">
                                    <i className="fab fa-instagram fa-lg white-text mx-2"> </i>
                                </Link>

                                <Link className="pin-ic text-white">
                                    <i className="fab fa-pinterest fa-lg white-text"> </i>
                                </Link>

                            </div>

                        </div>


                    </div>


                </div>



                <div className="footer-copyright text-center py-3 text-white">© 2022 Copyright:
                    <Link className='text-decoration-none text-white' to="https://ExpoTrip.com"> ExpoTrip.com</Link >
                </div>


            </footer>

        </div>
    );
};

export default Footer;