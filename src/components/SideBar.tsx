import { addDoc, collection, getDocs, onSnapshot, query, where } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { PencilSquare } from 'react-bootstrap-icons'
import { auth, db } from '../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export const SideBar = () => {
    const [addMenuVisible, setAddMenuVisible] = useState(false);
    const [roomName, setRoomName] = useState('')
    const [user] = useAuthState(auth);
    const [usersRooms, setUsersRooms] = useState([])

    useEffect(() => {
        const q = query(collection(db, "chat-rooms"), where("users", "array-contains", user?.uid));

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let userRooms: any = [];
            QuerySnapshot.forEach((doc) => {
                userRooms.push({ ...doc.data(), id: doc.id });
            });
            setUsersRooms(userRooms);
        });
        return () => unsubscribe;
    }, [])

    const createRoom = async (event: any) => {
        event.preventDefault();

        if (roomName.trim() === '') {
            alert('Enter valid message');
            return;
        }
        await addDoc(collection(db, 'chat-rooms'), {
            name: roomName,
            users: [
                user?.uid
            ]
        })
        setRoomName('')
        setAddMenuVisible(false)
    }

    return (
        <div className="side-bar">
            <div className="header">
                <h3>Chat Rooms</h3>
                <div className="new-chat" >
                    <PencilSquare onClick={(e) => setAddMenuVisible(!addMenuVisible)} />
                    <form onSubmit={(event) => createRoom(event)} className="form" style={{ display: `${addMenuVisible ? 'block' : 'none'}` }}>
                        <input placeholder='Room Name' autoComplete='false' onChange={(e) => setRoomName(e.target.value)} value={roomName} type="text" />
                        <button type='submit'>Add</button>
                    </form>
                </div>
            </div>
            <div className="rooms">
                {usersRooms?.map((room: any, idx: number) => {
                    return (
                        <button key={idx} className="room">{room?.name}</button>
                    )
                })}
            </div>
        </div>
    )
}