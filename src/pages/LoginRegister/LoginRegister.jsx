import './LoginRegister.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const LoginRegister = () => {
   const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/home'); 
    }
    return (
        <div className='wrapper'>
            <div className='form-box login' >
                <div className='form'>
                    <h1>Login</h1>
                    <div className='input-box'>
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <Link to={'#'}>Forgot password</Link>
                    </div>

                    <button type="submit" onClick={handleSubmit}>Login</button>
                    <div className="register-link">
                        <p>Don&apos;t have an account? <Link to={'#'}>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;