import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddProducts from "../DashboardHome/AddProducts/AddProducts";
import Dashtable from "../DashboardHome/DashTable/Dashtable";
import MakeAdmin from "../DashboardHome/MakeAdmin/MakeAdmin";
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

                                    <Link to={`${url}/review`} className="nav-link text-white"> <i className="fas fa-comments"></i> Review</Link>
                                </li>
                            }

                        </ul>

                        <ul className="list">
                            {
                                admin &&
                                <li>
                                    <h2>DashBoard</h2>

                                    <Link to={`${url}/makeadmin`} className="nav-link text-white"> <i className="fas fa-user-shield"></i> Make Admin</Link>

                                    <Link to={`${url}/addaproduct`} className="nav-link text-white"><i className="fas fa-plus"></i> Add a Blog</Link>

                                    <Link to={`${url}/manageallorders`} className="nav-link text-white"> <i className="fab fa-first-order"></i> Manage All Blogs</Link>

                                    <Link to={`${url}/manageproducts`} className="nav-link text-white"> <i className="fab fa-blogger-b"></i> Managed Blogs</Link>

                                    <Link to="" className="nav-link text-white">
                                        <button className="btn btn-light" onClick={logOut}> Logout</button> </Link>
                                </li>

                            }

                        </ul>



                    </div>
                </div>
                <div className="col-md-10 col-sm-8 main-content">

                    <Switch>

                        <Route exact path={`${path}/`}>
                            <Dashtable />
                        </Route>


                        <Route path={`${path}/review`}>
                            <Review />
                        </Route>
                        <AdminRoute path={`${path}/makeadmin`}>
                            <MakeAdmin />
                        </AdminRoute>

                        <AdminRoute path={`${path}/addaproduct`}>
                            <AddProducts></AddProducts>
                        </AdminRoute>
                    </Switch>

                </div>
            </div>

        </div >
    );
};

export default Dashboard;