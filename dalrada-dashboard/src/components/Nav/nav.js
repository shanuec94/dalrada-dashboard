import React from 'react';
import { Link } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div>

                <div class="wrapper">
                    <div class="sidebar">

                        <h2>Menu</h2>
                        <ul>

                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>

                            <li>
                                <Link to="/createrole">CreateRole</Link>
                            </li>

                            <li>
                                <Link to="/usermanagement">ManageUser</Link>
                            </li>

                            <li>
                                <Link to="/warehousemanagement">ManageWareHouse</Link>
                            </li>

                            <li>
                                <Link to="/upload">Upload</Link>
                            </li>

                            <li>
                                <Link to="/reconcile">Reconcile</Link>
                            </li>

                            <li>
                                <Link to="/login">Logout</Link>
                            </li>

                        </ul>


                    </div>
                </div>
            </div>

        );
    }
}

export default Nav;
