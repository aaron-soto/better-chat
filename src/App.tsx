import { useState } from 'react'
import { Welcome, ChatHome } from './components'

import { auth } from './Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {!user ? <Welcome /> : <ChatHome />}

    </div>
  )
}

export default App
