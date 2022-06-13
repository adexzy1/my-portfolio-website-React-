import { initializeApp } from 'firebase/app';
import { getFirestore, collection, orderBy, query } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyChshkFZwckLddoc3HCmli2W-3dPuovWTI',
  authDomain: 'my-portfolio-55bf8.firebaseapp.com',
  projectId: 'my-portfolio-55bf8',
  storageBucket: 'my-portfolio-55bf8.appspot.com',
  messagingSenderId: '705112681672',
  appId: '1:705112681672:web:2642332a7bceb1917b09fd',
};

initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, 'projects');
const queryData = query(colRef, orderBy('id', 'desc'));

export { queryData };
