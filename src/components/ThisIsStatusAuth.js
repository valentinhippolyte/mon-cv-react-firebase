import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import {Link} from 'react-router-dom';
import Login from "../routes/login";
import Home from "./Home";


export function ThisIsStatusAuth(){
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const myStatusAuth = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
            console.log("user"+user);
            console.log("is signes in"+isSignedIn);
        })
        return () => myStatusAuth();
    }, [isSignedIn]);

    if(!isSignedIn){
        return(
            <Link to="login"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button></Link>
        )
    }
    return(
        <div>
            <Link to="/"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => {firebase.auth().signOut()}}>Logout</button></Link>
        </div>
    )
}
export function WelcomeTexte(){
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const myStatusAuth = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
            console.log("user"+user);
            console.log("is signes in"+isSignedIn);
        })
        return () => myStatusAuth();
    }, [isSignedIn]);

     if(!isSignedIn){
        return(
            ''
            )
    }
    return(
        <p class="text-neutral-50	">
            Bienvenue {firebase.auth().currentUser.displayName} !
        </p>
    )

}