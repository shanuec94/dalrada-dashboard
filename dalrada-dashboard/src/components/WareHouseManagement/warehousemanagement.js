import React from 'react';
import './warehousemanagement.css';


class WareHouseManagement extends React.Component {
    render() {
        return (
            <div>
                <div class="warehouse">
                    <h2>Add Warehouse</h2>
                    <form action="dashboard.html" style={{ textAlign: "center" }}>
                        <div class="textbox">
                            <i class="fa fa-user-circle" aria-hidden="true"></i>
                            <input type="textAlign" name="" placeholder="WarehouseName" />
                        </div>
                        <div class="textbox">
                            <i class="fa fa-sort-numeric-asc" aria-hidden="true"></i>
                            <input type="number" pattern="[0-9]{5-10}" title="Enter only numbers" placeholder="Warehousecode" />
                        </div>
                        <div class="select">
                            <i class="fa fa-address-book-o" aria-hidden="true"></i>
                            <textarea type="textarea" name="address" placeholder="Warehouse Address"></textarea>
                        </div>
                        <div class="enter">
                            <input class="button" type="submit" value="Create" style={{ backgroundColor: "green" }} />
                            <input class="button" type="reset" value="Cancel" style={{ backgroundColor: "red" }} />
                        </div>

                    </form>
                </div>
                <div class="tabledata">
                    <h2>Warehouses</h2>
                    <table>
                        <tbody>
                            <tr>
                                <th>WarehouseName</th>
                                <th>WarehouseAddress</th>
                                <th>WarehouseCode</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>Warehouse001</td>
                                <td>Sanfrancisco</td>
                                <td>22309</td>
                                <td>Disable</td>
                                <td><i class="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <td>Warehouse005</td>
                                <td>Bangalore</td>
                                <td>22311</td>
                                <td>Disable</td>
                                <td><i class="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>



        );
    }
}

export default WareHouseManagement;