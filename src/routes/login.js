import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import {configUi} from "../firebaseConf";

export default function Login(){

    return(
        <div>
            <h2 className="text-center my-10">
                Connexion
            </h2>            
            <StyledFirebaseAuth 
                uiConfig={configUi}
                firebaseAuth={firebase.auth()}
            />
            
        </div>
        
    )
}