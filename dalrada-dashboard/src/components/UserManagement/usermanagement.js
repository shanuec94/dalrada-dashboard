import React from 'react';
import './usermanagement.css';

class UserManagement extends React.Component {
	render() {
		return (
			<div>
				<div class="user">
					<h2>Add User</h2>
					<form action="dashboard.html" style={{ textAlign: "center" }}>
						<div class="textbox">
							<i class="fa fa-user" aria-hidden="true"></i>
							<input type="textAlign" name="" placeholder="UserName"/>
						</div>
						<div class="textbox">
							<i class="fa fa-envelope" aria-hidden="true"></i>
							<input type="email" name="" placeholder="Email-Id" />
						</div>
						
						<div class="select">
						<i class="fa fa-black-tie" aria-hidden="true"></i>
							<select id="code" name="code">
								<option value="Null">Select a Role</option>
								<option value="Manager">Manager</option>
								<option value="Executive">Executive</option>
								<option value="Admin">Admin</option>
								<option value="Tester">Tester</option>
							</select>
							</div>
							<div class="textbox">
								<i class="fa fa-lock" aria-hidden="true"></i>
								<input type="password" name="" placeholder="Password" />
							</div>
							
						<div class="enter">
							<input class="button" type="submit" value="Create" style={{ backgroundColor: "green" }} />
							<input class="button" type="reset" value="Cancel" style={{ backgroundColor: "red" }} />
						</div>

					</form>
				</div>
				<div class="tabledata">
					<h2>Users Registered</h2>
					<table>
						<tbody>
							<tr>
								<th>Name</th>
								<th>Emailid</th>
								<th>Role</th>
								<th>Status</th>
								<th>Action</th>
							</tr>
							<tr>
								<td>Fawad</td>
								<td>Fawad@prakat.in</td>
								<td>Manager</td>
								<td>Disable</td>
								<td><i class="fa fa-pencil-square-o" aria-hidden="true"></i></td>
							</tr>
							<tr>
								<td>Vamsi</td>
								<td>vamsi@prakat.in</td>
								<td>Admin</td>
								<td>Disable</td>
								<td><i class="fa fa-pencil-square-o" aria-hidden="true"></i></td>
							</tr>
							<tr>
								<td>Aahana</td>
								<td>Aahana@prakat.in</td>
								<td>Manager</td>
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


export default UserManagement;