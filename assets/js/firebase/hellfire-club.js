import app from './app.js'
import {getFiresotore, collection}  from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js'

export async function subscribeToHellfireClub(subscription) {
    const db = getFiresotore(app)
    const HellfireClubCollection = collection (db, 'Hellfire-club')
    const docRef = await addDoc(HellfireClubCollection, subscription)
    return docRef.id

}