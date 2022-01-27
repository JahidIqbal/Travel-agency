import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Review from "../DashboardHome/Review/Review";
import './Dashboard.css'

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth();
    return (
        <div style={{ background: `linear-gradient(to right, #70e1f5, #ffd194) ` }}>
            <div className="row">
                <div className="col-md-2 col-sm-4 sidebar1">

                    <br />
                    <div className="left-navigation">
                        <ul className="list">
                            {
                                !admin &&
                                <li>
                                    <h2>DashBoard</h2>



                                    <Link to={`${url}/seeorder`} className="nav-link text-white">my orders</Link>

                                    <Link to={`${url}/review`} className="nav-link text-white">Review</Link>
                                </li>
                            }





                        </ul>

                        <ul className="list">
                            {
                                admin &&
                                <li>
                                    <h2>DashBoard</h2>

                                    <Link to={`${url}/makeadmin`} className="nav-link text-white">Make Admin</Link>

                                    <Link to={`${url}/addaproduct`} className="nav-link text-white">Add a Product</Link>

                                    <Link to={`${url}/manageallorders`} className="nav-link text-white">Manage All orders</Link>

                                    <Link to={`${url}/manageproducts`} className="nav-link text-white">Manage Products</Link>

                                    <Link to="" className="nav-link text-white">
                                        <button className="btn btn-light" onClick={logOut}> Logout</button> </Link>
                                </li>

                            }

                        </ul>


                    </div>
                </div>
                <div className="col-md-10 col-sm-8 main-content">

                    <Switch>

                        <Route path={`${path}/`}>
                            <Review />
                        </Route>

                        <Route path={`${path}/review`}>
                            <Review />
                        </Route>



                    </Switch>

                </div>
            </div>

        </div >
    );
};

export default Dashboard;