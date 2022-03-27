import React from 'react' // import react
import { Button } from 'react-bootstrap'; // import button
import "./LoginComponent.css"; // import css login component

const LoginComponent = () => {
    return (
        <form>
            <div className="container">
                <div>
                    <div>
                        <center><h2>Form Login</h2></center>
                            <div>
                                <center><div className="card-body">
                                    <div className="form-group">
                                        <center><h1>Tugas Pertemuan Ketiga</h1></center>
                                        <label><b>Username</b></label>
                                        <input type="text" placeholder="Enter Username" name="uname" required/>

                                        <label><b>Password</b></label>
                                        <input type="password" placeholder="Enter Password" name="psw" required/>
                            
                                    </div>
                                    <button className="login">Login</button><br></br>
                                        <input type="checkbox" defaultChecked/> Remember me <br></br>
                                    <button className="cancel">Cancel</button>
                                </div></center>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
    );
};

export default LoginComponent;