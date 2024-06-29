import React from "react";
import 'bulma/css/bulma.css';
import BG from '../../assets/BG-1.jpg'
import Logo from '../../assets/Logo.png'

const Login = () => {

    const imageBackground = {
        backgroundImage: `url(${BG})`,
    }

    const BackgroundForm = {
        backgroundImage: `url(${Logo})`,
        backgroundSize: 'contain', // Sesuaikan dengan preferensi tampilan logo
        backgroundRepeat: 'no-repeat',
        padding: '20px 0',
        marginLeft: '35px',
        marginTop: '20px',
        display: 'flex',
    }

    return (
        <div style={imageBackground}>
            <div className='container is-flex is-align-items-center' style={{ height: '100vh' }}>
                <div className='card' style={
                    {
                        maxWidth: '400px',
                        margin: '0 auto',
                    }
                }>
                    <div className='card-title' style={BackgroundForm}>
                    </div>
                    <div className='card-content'>
                        <div className='field'>
                            <label className='label'>Username or Email</label>
                            <div className='control'>
                                <input className='input' type='text' placeholder='Username or Email' />
                            </div>
                            <div className='field'>
                                <label className='label'>Password</label>
                                <div className='control'>
                                    <input className='input' type='password' placeholder='Password' />
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <button className='button is-black'>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;