import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBbPgDSESm81owybSBql54QR9QSRNdodKI',
  authDomain: 'movies-project2-74c75.firebaseapp.com',
  projectId: 'movies-project2-74c75',
  storageBucket: 'movies-project2-74c75.appspot.com',
  messagingSenderId: '109705504938',
  appId: '1:109705504938:web:e1b40ef0e512c7b49d88d3',
};

// počáteční initializace
firebase.initializeApp(firebaseConfig);

// počáteční initilizace služeb
const projectFirestore = firebase.firestore();

export default projectFirestore;
