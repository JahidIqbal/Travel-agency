import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../Images/img1.jpg';
import img2 from '../../Images/img2.jpg';
import img3 from '../../Images/img3.jpg';
import img4 from '../../Images/img4.jpg';
import img5 from '../../Images/img5.jpg';
import img6 from '../../Images/img6.jpg';
import img7 from '../../Images/img7.jpg';
import img8 from '../../Images/img8.jpg';



const TeamMembers = () => {
    return (
        <div>
            <div className=" py-5">
                <div className="row text-center text-dark">
                    <div className="col-lg-8 mx-auto">
                        <h1 className=" fw-bolder text-uppercase w-100 mb-3 text-center underline mt-2" >Meet the Team</h1>
                    </div>
                </div>
            </div>


            <div className="">
                <div className="row text-center " data-aos="slide-up">


                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-lg py-5 px-4"><img src={img1} alt="" style={{ width: '120px', height: '120px' }} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">James Taylor</h5><span className="small text-uppercase text-muted">General Manager</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <Link to="/"><i className="fab fa-twitter mx-2" style={{ color: '#19547b' }}> </i></Link>
                                <Link to="/"><i className="fab fa-linkedin-in  mx-2" style={{ color: '#19547b' }}> </i></Link>
                                <Link to=" /"><i className="fab fa-instagram  mx-2 " style={{ color: '#19547b' }}> </i></Link>
                            </ul>
                        </div>
                    </div>


                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-lg py-5 px-4"><img src={img2} alt="" style={{ width: '120px', height: '120px' }} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Samuel Yam</h5><span className="small text-uppercase text-muted">Associate Manager</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <Link to="/"><i className="fab fa-twitter mx-2" style={{ color: '#19547b' }}> </i></Link>
                                <Link to="/"><i className="fab fa-linkedin-in  mx-2" style={{ color: '#19547b' }}> </i></Link>
                                <Link to=" /"><i className="fab fa-instagram  mx-2 " style={{ color: '#19547b' }}> </i></Link>
                            </ul>
                        </div>
                    </div>


                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-lg py-5 px-4"><img src={img3} alt="" style={{ width: '120px', height: '120px' }} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Tom harry</h5><span className="small text-uppercase text-muted">Advising Director</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <Link to="/"><i className="fab fa-twitter mx-2" style={{ color: '#19547b' }}> </i></Link>
                                <Link to="/"><i className="fab fa-linkedin-in  mx-2" style={{ color: '#19547b' }}> </i></Link>
                                <Link to=" /"><i className="fab fa-instagram  mx-2 " style={{ color: '#19547b' }}> </i></Link>
                            </ul>
                        </div>
                    </div>


                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-lg py-5 px-4"><img src={img4} alt="" style={{ width: '120px', height: '120px' }} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Neubi Gal</h5><span className="small text-uppercase text-muted text-center">Product manager</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <Link to="/"><i className="fab fa-twitter mx-2" style={{ color: '#19547b' }}> </i></Link>
                                <Link to="/"><i className="fab fa-linkedin-in  mx-2" style={{ color: '#19547b' }}> </i></Link>
                                <Link to=" /"><i className="fab fa-instagram  mx-2 " style={{ color: '#19547b' }}> </i></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-lg py-5 px-4"><img src={img5} alt="" style={{ width: '120px', height: '120px' }} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">max ulay</h5><span className="small text-uppercase text-muted text-center">Project manager</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <Link to="/"><i className="fab fa-twitter mx-2" style={{ color: '#19547b' }}> </i></Link>
                                <Link to="/"><i className="fab fa-linkedin-in  mx-2" style={{ color: '#19547b' }}> </i></Link>
                                <Link to=" /"><i className="fab fa-instagram  mx-2 " style={{ color: '#19547b' }}> </i></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-lg py-5 px-4"><img src={img6} alt="" style={{ width: '120px', height: '120px' }} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Jhondy rhodes</h5><span className="small text-uppercase text-muted text-center">Development manager</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <Link to="/"><i className="fab fa-twitter mx-2" style={{ color: '#19547b' }}> </i></Link>
                                <Link to="/"><i className="fab fa-linkedin-in  mx-2" style={{ color: '#19547b' }}> </i></Link>
                                <Link to=" /"><i className="fab fa-instagram  mx-2 " style={{ color: '#19547b' }}> </i></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-lg py-5 px-4"><img src={img7} alt="" style={{ width: '120px', height: '120px' }} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Perez hary</h5><span className="small text-uppercase text-muted text-center">Assistant MG</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <Link to="/"><i className="fab fa-twitter mx-2" style={{ color: '#19547b' }}> </i></Link>
                                <Link to="/"><i className="fab fa-linkedin-in  mx-2" style={{ color: '#19547b' }}> </i></Link>
                                <Link to=" /"><i className="fab fa-instagram  mx-2 " style={{ color: '#19547b' }}> </i></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-lg py-5 px-4"><img src={img8} alt="" style={{ width: '120px', height: '120px' }} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Nicolas tai</h5><span className="small text-uppercase text-muted text-center">Service manager</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <Link to="/"><i className="fab fa-twitter mx-2" style={{ color: '#19547b' }}> </i></Link>
                                <Link to="/"><i className="fab fa-linkedin-in  mx-2" style={{ color: '#19547b' }}> </i></Link>
                                <Link to=" /"><i className="fab fa-instagram  mx-2 " style={{ color: '#19547b' }}> </i></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMembers;