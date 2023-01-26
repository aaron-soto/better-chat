import { auth } from '../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { TopBar } from './TopBar';
import { SideBar } from './SideBar';

export const ChatHome = () => {
    return (
        <div className="chat-home">
            <TopBar />
            <main>
                <SideBar />
            </main>
        </div>
    )
}