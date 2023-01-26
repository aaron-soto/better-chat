import { auth } from '../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { TopBar } from './TopBar';

export const ChatHome = () => {
    return (
        <div className="chat-home">
            <TopBar />
        </div>
    )
}