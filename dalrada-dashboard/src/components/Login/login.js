import React from 'react';


class Login extends React.Component {
    render() {
        return (
            <div>
                <div class="login-box">
		<div class="imgcontainer">
			<img src="images.png" alt="Avatar" class="avatar"/>

		<div class="textbox">
			<i class="fa fa-user" aria-hidden="true"></i>
			<input type="email" placeholder="abc@gmail.com" name="emailid" value=""/>
		</div>
		<div class="textbox">
			<i class="fa fa-lock" aria-hidden="true"></i>
			<input type="password" placeholder="password" name="password" value=""/>
		</div>
		<form action="dashboard.html">
			<input class="button" type="submit" value="login"/>
		</form>
		<a href="forgot.html">Forgot Password???</a>
	</div>
            </div>
            </div>
        );
    }
}

export default Login;