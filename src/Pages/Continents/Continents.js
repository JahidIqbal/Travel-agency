import React from 'react';
import './Continents.css';

const Continents = () => {
    return (
        <div className="mt-5 w-100" style={{ width: "100%" }} >
            <div className="row" >
                <div className="col-md-3 " data-aos="flip-up" >
                    <div className="card border-info mx-sm-1 p-3">
                        <div className="card border-info shadow  p-3 my-card" style={{ color: '#19547b' }} ><span className="fa fa-check" aria-hidden="true"></span></div>
                        <div className=" text-center mt-3" style={{ color: '#19547b' }}><h4>Years of experience
                        </h4></div>
                        <div className="text-dark  text-center mt-2"><h1>28+</h1></div>
                    </div>
                </div>
                <div className="col-md-3" data-aos="flip-up">

                    <div className="card border-success mx-sm-1 p-3">
                        <div className="card border-success shadow p-3 my-card" style={{ color: '#19547b' }}><span className=" fas fa-project-diagram" aria-hidden="true"></span></div>
                        <div className=" text-center mt-3" style={{ color: '#19547b' }}><h4> Hours on projects</h4></div>
                        <div className="text-dark text-center mt-2"><h1>219 k</h1></div>
                    </div>
                </div>
                <div className="col-md-3" data-aos="flip-up">
                    <div className="card border-danger mx-sm-1 p-3">
                        <div className="card border-danger shadow p-3 my-card" ><span className="fa fa-award" aria-hidden="true" style={{ color: '#19547b' }}></span></div>
                        <div className=" text-center mt-3" style={{ color: '#19547b' }}><h4>National awards</h4></div>
                        <div className="text-dark text-center mt-2"><h1>121</h1></div>
                    </div>
                </div>
                <div className="col-md-3 " data-aos="flip-up">
                    <div className="card border-warning mx-sm-1 p-3 ">
                        <div className="card border-warning shadow p-3 my-card" ><span className="fa fa-suitcase" aria-hidden="true" style={{ color: '#19547b' }}></span></div>
                        <div className="text-center mt-3" style={{ color: '#19547b' }}><h4>Professional services</h4></div>
                        <div className="text-dark text-center mt-2"><h1>556 </h1></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Continents;