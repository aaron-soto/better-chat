import { useState } from 'react';
import { auth, db } from '../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export const TopBar = () => {
    const [user] = useAuthState(auth);
    const [userMenuVisible, setUserMenuVisible] = useState(false)

    const signOut = () => {
        auth.signOut();
    };

    return (
        <div className="top-bar">
            <h3>Chat App</h3>
            <div className="img-wrapper" onClick={(e) => setUserMenuVisible(!userMenuVisible)}>
                <img src={user?.photoURL!} alt="" />
                <div className="activity-indicator"></div>
                <div className="img-menu" style={{ display: `${userMenuVisible ? 'block' : 'none'}` }}>
                    <div className="user">
                        <div className="user-img">
                            <img src={user?.photoURL!} alt="" />
                        </div>
                        <div className="status">

                            <span>{user?.displayName}</span>
                            <div className="status-indicator"></div>
                        </div>
                    </div>
                    <p>Set yourself as away</p>
                    <p>Pause notifications</p>
                    <div className="divider"></div>
                    <p>Profile</p>
                    <p>Preferences</p>
                    <div className="divider"></div>
                    <p onClick={signOut} >Logout</p>
                </div>
            </div>
        </div>
    )
}