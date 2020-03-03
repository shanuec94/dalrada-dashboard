import React from 'react';
import './reconcile.css';

class Reconcile extends React.Component {
	render() {
		return (
			<div>
				<div class="order">
		<h3>Order Details:</h3>
		<form action="dashboard.html" style={{textAlign: "center"}}>
	
			
				<div>
					<tr>
						<div class="date">
							<label for="date">From Date:</label>
							<input type="date" name="date" data-date-format="DD-MMM-YYYY"/>

							<div class="date">
							<label for="date">To Date:</label>
							<input type="date" name="date"/>
							</div>
						</div>
						</tr>
						<div class="enter">
							<input class="button" type="submit" value="Run" style={{backgroundColor: "green"}}/>
							<input class="button" type="reset" value="Cancel" style={{backgroundColor: "red"}}/>
						</div>
						</div>
			
		</form>
	</div>
			</div>

		);
	}
}

export default Reconcile;