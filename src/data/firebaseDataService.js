import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export async function fetchRamData() 
{
    const querySnapshot = await getDocs(collection(db, "ramData"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}