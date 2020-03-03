import React from 'react';
import './upload.css';



class Upload extends React.Component {
	render() {
		return (
			<div>
				<div class="invoice">
					<h2>Manage Warehouses</h2>
					<h3>Invoice Details:</h3>
					<form action="dashboard.html" style={{ textAlign: "center" }}>
						<div>
							<tr>
								<div class="select">
									<select id="code" name="code">
										<option value="null">Select Warehouse</option>
										<option value="warehouse1(23451)">warehouse1(23451)</option>
										<option value="warehouse2(23421)">warehouse2(23421)</option>
										<option value="warehouse4(23436)">warehouse4(23436)</option>
										<option value="warehouse5(28754)">warehouse5(28754)</option>
									</select>
								</div>

								<div class="file">
									<label for="">Upload Invoice Excel File:</label>
									<input type="file" name="myFile" /><br /><br />
								</div>
							</tr>


							<tr align="end">
								<div class="enter">
									<input class="button" type="submit" value="Create" style={{ backgroundColor: "green" }} />
									<input class="button" type="reset" value="Cancel" style={{ backgroundColor: "red" }} />
								</div>
							</tr>
						</div>
					</form>
				</div>

				<div class="order">
					<h3>Order Details:</h3>
					<form action="dashboard.html" style={{ textAlign: "center" }} >

						<tr align="left">
							<div class="date">
								<label for="date">From Date:</label>
								<input type="date" name="date" data-date-format="MMMM-DD-YYYY" />
						

								<div class="date">
								<label for="date">To Date:</label>
								<input type="date" name="date" />
								</div>
							</div>
						</tr>
						

						<tr align="center">
							<div class="file">
								<label for="">Upload Invoice Excel File:</label>
								<input type="file" name="myFile" /><br /><br />
							</div>

							<div class="enter">
								<input class="button" type="submit" value="Create" style={{ backgroundColor: "green"}} />
								<input class="button" type="reset" value="Cancel" style={{ backgroundColor: "red"}} />
							</div>
						</tr>
						
					</form>
				</div>
			</div>



		);
	}
}


export default Upload;