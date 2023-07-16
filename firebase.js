// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCcJWN9uYrAPbiNFtqV_Ji1Ktu6nmhO5o0",
	authDomain: "react-app-195b8.firebaseapp.com",
	projectId: "react-app-195b8",
	storageBucket: "react-app-195b8.appspot.com",
	messagingSenderId: "64393355091",
	appId: "1:64393355091:web:6d1cba9288589bac434ba6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
