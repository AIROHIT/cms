
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.REACT_APP_API,
    authDomain:import.meta.env.REACT_APP_AUTHDOMAIN,
    projectId:import.meta.env.REACT_APP_PROJECTID,
    storageBucket:import.meta.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId:import.meta.env.REACT_APP_SENDERID,
    appId:import.meta.env.REACT_APP_APPID
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);