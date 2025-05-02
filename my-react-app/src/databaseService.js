import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "./LoginSignup/Firebase";

export async function getHackathons() {
    const hackathonsCol = collection(db, "hackathons");
    const hackathonsSnapshot = await getDocs(hackathonsCol);
    console.log("Hackathons: ", hackathonsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    return hackathonsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

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

