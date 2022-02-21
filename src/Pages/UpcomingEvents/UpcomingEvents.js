import React from 'react';
import './UpcomingEvents.css'

const UpcomingEvents = () => {
    return (
        <div>
            <h1 className=" fw-bolder text-uppercase w-100 mt-5 text-center underline mt-2" >Upcoming Events</h1>
            <div className="container p-5 g-4" data-aos="zoom-out-down">
                <div className="row text-center">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-center align-items-center flex-wrap">
                            <div className="col" >
                                <div className="event-block">
                                    <div className="circle"></div>
                                    <div className="event-block-container">
                                        <h2 className="titular">January Slot</h2>
                                        <div className="the-day">12 January <span>To</span>22 January </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="event-block">
                                    <div className="circle"></div>
                                    <div className="event-block-container">
                                        <h2 className="titular">February Slot</h2>
                                        <div className="the-day">15 February <span>To</span>25 February</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="event-block">
                                    <div className="circle"></div>
                                    <div className="event-block-container">
                                        <h2 className="titular">August Slot</h2>
                                        <div className="the-day">17 August <span>To</span>27 August</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="event-block">
                                    <div className="circle"></div>
                                    <div className="event-block-container">
                                        <h2 className="titular">November Slot</h2>
                                        <div className="the-day">19 August <span>To</span>28 August</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default UpcomingEvents;