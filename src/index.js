import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAIFGzHqdGfk1nC4wNrIk6KPm-89fgtlyQ",
    authDomain: "gdgaming-f99b8.firebaseapp.com",
    projectId: "gdgaming-f99b8",
    storageBucket: "gdgaming-f99b8.appspot.com",
    messagingSenderId: "399297149662",
    appId: "1:399297149662:web:5a817ba7a61a97509ea04f",
    measurementId: "G-VSERWPJBDC"
};
let app = initializeApp(firebaseConfig);
let analytics = getAnalytics(app);
logEvent(analytics, 'select_content', {
    content_type: 'test',
    content_id: '1'
});