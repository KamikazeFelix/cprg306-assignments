import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

async function getItems(userId) {
    const db = getFirestore();
    const itemsCollection = collection(db, `users/${userId}/items`);
    const q = query(itemsCollection);
    const querySnapshot = await getDocs(q);
    const items = [];

    querySnapshot.forEach(doc => {
        items.push({ id: doc.id, ...doc.data() });
    });

    return items;
}

async function addItem(userId, item) {
    const db = getFirestore();
    const itemsCollection = collection(db, `users/${userId}/items`);
    const docRef = await addDoc(itemsCollection, item);
    
    return docRef.id;
}
