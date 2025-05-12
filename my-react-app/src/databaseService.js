import { collection, getDocs, setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "./LoginSignup/Firebase";

export async function getHackathons() {
    const hackathonsCol = collection(db, "hackathons");
    const hackathonsSnapshot = await getDocs(hackathonsCol);
    console.log("Hackathons: ", hackathonsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    return hackathonsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export const getHackathonById = async (id) => {
    const docRef = doc(db, 'hackathons', id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        throw new Error('Hackathon not found');
    }

    return { ...docSnap.data(), firebaseId: docSnap.id };
};
export async function addUserToDatabase(user, role) {
    try {
        await setDoc(doc(db, "users", user.uid), {
            name: user.displayName || user.email.split('@')[0],
            email: user.email,
            role: role
        });
        console.log("User added to database: ", user);
    } catch (error) {
        alert("Error adding user to database: ", error);
        console.error("Error adding user to database: ", error);
        throw error;
    }
}

export async function getLeaderboard() {
    try {
        const todayDoc = await getDocs(doc(db, 'leaderboard', 'today'));
        const todayData = todayDoc.exists() ? todayDoc.data().rankings : [];

        const monthDoc = await getDocs(doc(db, 'leaderboard', 'month'));
        const monthData = monthDoc.exists() ? monthDoc.data().rankings : [];

        const yearDoc = await getDocs(doc(db, 'leaderboard', 'year'));
        const yearData = yearDoc.exists() ? yearDoc.data().rankings : [];

        return {
            today: todayData,
            month: monthData,
            year: yearData,
        };
    } catch (error) {
        console.error('Error fetching leaderboard data:', error);
        return { today: [], month: [], year: [] };
    }
}

export async function registerToHackathon(userId, hackathonId) {
    const createdAt = new Date().toISOString();

    try {
        const response = await fetch('/api/applications', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, hackathonId, createdAt }),
        });


        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Registration failed: ${errorText}`);
        }

        const data = await response.json();
        console.log('User registered, doc ID:', data.id);
        return data.id;
    } catch (error) {
        console.error('Error registering to hackathon:', error);
        throw error;
    }
}
