import chatIcon from '../assets/chatIcon.png';
import googleIcon from '../assets/google-icon.png';
import { ArrowRight } from 'react-bootstrap-icons'

import { auth } from '../Firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';


export const Welcome = () => {
    const [loading, setLoading] = useState(false);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then()
    };
    return (
        <div className="welcome">
            <div className="welcome__card">
                <img className='chat-icon' src={chatIcon} alt="" />
                <h2>Chat App</h2>
                <p className='welcome-text'>Welcome Back!</p>
                <button className='google-btn' onClick={googleSignIn}>
                    <img className='google-icon' src={googleIcon} alt="" />
                    Sign in with Google
                </button>
                <p className='or-text'>Or</p>
                <input type="text" placeholder='Email' disabled />
                <input type="text" placeholder='Password' disabled />
                <div className="help">
                    <span>Dont have an account?</span>
                    <span>Forgot Password?</span>
                </div>
                <button className='sign-in'>Login <ArrowRight /></button>
            </div>
        </div>
    )
}