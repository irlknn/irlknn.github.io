import React from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from './Firebase';
import { addUserToDatabase } from '../databaseService';
// import { Icon }
// import { Link } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import './loginSignup.css'
import Topbar from '../components/Topbar';

function LoginSignup() {
    const [action, setAction] = React.useState("Sign Up");
    const [bannerMessage, setbannerMessage] = React.useState("");

    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [role, setRole] = React.useState('user');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    async function signUp() {
        // add validation for empty fields
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        if (role === "Role") {
            setbannerMessage('Please select a role.');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // add user name in firebase auth
            await updateProfile(user, { displayName: name });
            await addUserToDatabase(user, role);

            setbannerMessage('Welcome, ' + user.displayName + '! You have successfully signed up.');
            // <Link to="/personAccount"><span>Click to go to your account</span></Link>);
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setbannerMessage('Email already in use. Please use a different email.');
            }
            setbannerMessage('Sorry, something went wrong. Please try again later.');
            console.log("Error: " + error.message);
        }
    }

    async function login() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            setbannerMessage('Welcome back, ' + userCredential.user.displayName + '! You have successfully logged in.');

        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                setbannerMessage('Wrong password. Please try again.');
            }
            setbannerMessage('Sorry, something went wrong. Please try again later.');

            console.log("Error: " + error.message);
        }
    }

    return (
        <>
            <Topbar />
            <div className='container'>
                {bannerMessage ? (
                    <div className="banner-container">
                        <div className='close-button' onClick={() => { setbannerMessage("") }} >✖</div>
                        <div className="submit-banner">
                            <h2>{bannerMessage}</h2>
                        </div>
                    </div>

                ) : (
                    <>
                        <div className='header'>
                            <div className="submit-container">
                                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
                            </div >

                            <div className='underline' style={{ left: action === 'Login' ? '400px' : '140px' }}></div>
                        </div >

                        <div className="inputs">
                            {action === "Login"
                                ? <div></div> :
                                <>
                                    <div className="input">
                                        <img src="/images/loginSignup/person.png" alt="user" />
                                        <input type='text' placeholder='Name' id='name' />
                                    </div>
                                    <div className="input">

                                        <img src="/images/loginSignup/role.svg" alt="role" className='role-icon' />
                                        <form onSubmit={handleSubmit}>
                                            <select
                                                className='role-select'
                                                id='role'
                                                name='role'
                                                value={role}
                                                onChange={(e) => setRole(e.target.value)}
                                            >
                                                <option>Role</option>
                                                <option value="user">User</option>
                                                <option value="host">Host</option>
                                                {/* <option value="admin">admin</option>
                                                <option value="mentor">mentor</option> */}
                                            </select>
                                        </form>
                                    </div>
                                    {/* <div className="input">
                                        <img src="/images/loginSignup/role.svg" alt="role" className='role-icon'/>
                                        <input type='text' placeholder='Role' id='role' />
                                    </div> */}
                                </>
                            }

                            <div className="input">
                                <img src="/images/loginSignup/email.png" alt="email" />
                                <input type='email' placeholder='Email' id='email' />
                            </div>
                            <div className="input">
                                <img src="/images/loginSignup/password.png" alt="password" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Password'
                                    id='password'
                                    value={password}
                                    onChange={handlePasswordChange}
                                />

                                <button
                                    className='eye-icon'
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </button>


                                {/* <span className='' onClick={handleSetIcon}><Icon icon={icon} size={25}/></span> */}
                            </div>
                        </div>
                        {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password?<span>Click Here!</span></div>}

                        <div className="submit-container">
                            <button className='submit-button'
                                onClick={action === "Login" ? login : signUp}>
                                Submit</button>
                        </div>
                    </ >
                )}
            </div >
        </>

    )
}


export default LoginSignup;