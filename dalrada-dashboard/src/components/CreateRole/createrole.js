import React from 'react';
import './createrole.css';



class CreateRole extends React.Component {

    render() {
        return (
            <div>
                <div class="role">
                    <h2>Manage Role</h2>
                    <form action="dashboard.html" style={{ textAlign: "center" }}>
                        <div class="textbox">
                            <i class="fa fa-black-tie" aria-hidden="true"></i>
                            <input type="textAlign" name="" placeholder="e.g., Manager,Executive" />
                        </div><br/>
                        <input class="button" type="submit" value="Create" style={{ backgroundColor: "green" }} />
                        <input class="button" type="reset" value="Cancel" style={{ backgroundColor: "red" }} />
                    </form>
                </div>
                <div class="tabledata">
                    <h2>Roles Added</h2>
                    <table>
                        <tbody>
                            <tr>
                                <th>RoleName</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>Admin</td>
                                <td>Disable</td>
                                <td><i class="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <td>Manager</td>
                                <td>Disable</td>
                                <td><i class="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <td>Executive</td>
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

export default CreateRole;