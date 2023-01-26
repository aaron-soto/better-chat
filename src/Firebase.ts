// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyA4IbGtCPJ2Gy5qbQ-T85-tN4VJeDij8Fg',
	authDomain: 'react-chat-2023.firebaseapp.com',
	projectId: 'react-chat-2023',
	storageBucket: 'react-chat-2023.appspot.com',
	messagingSenderId: '449103104827',
	appId: '1:449103104827:web:f7f88a36c5dc6ed734851e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
