import React from 'react';
import './forgatpassword.css';

class ForgatPassword extends React.Component {
    render() {
        return (
            <div>
                <div class="forgot">
                    <h2>Change Password</h2>
                    <form action="index.html" style={{ textAlign: "center" }}>
                        <div class="textbox">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            <input type="email" id="mail" name="email" title="Email" placeholder="abc@gmail.com" />
                        </div>
                        <div class="textbox">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                            <input type="password" id="newpassword" placeholder="New Password" />
                        </div>
                        <div class="textbox">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                            <input type="password" id="confirmpassword" placeholder="Re-Type Password" />
                        </div>
                        <input class="w3-btn-w3-black" type="submit" value="Submit" onclick="passwordChange()" style={{ backgroundColor: "green" }} />
                        <input class="w3-btn-w3-black" type="reset" value="Cancel" style={{ backgroundColor: "red" }} />
                    </form>
                </div>
            </div>
        );
    }
}

export default ForgatPassword;