// import React from "react";
// import IconButton from '@mui/material/IconButton';
// import InputLabel from '@mui/material/InputLabel';
// import Visibility from '@mui/icons-material/Visibility';
// import InputAdornment from '@mui/material/InputAdornment';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import Input from '@mui/material/Input';
// import './LoginSignup/loginSignup.css'

function Test(){
    return <h1>Test</h1>; 
}

export default Test;

// const Test = () => {
//     const [password, setPassword] = React.useState('');
//     const [showPassword, setShowPassword] = React.useState(false);
    
//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };
    
//     const handleClickShowPassword = () => {
//         setShowPassword((prev) => !prev);
//     };
    
//     const handleMouseDownPassword = (event) => {
//         event.preventDefault();
//     };
    
//     // const [values, setValues] = React.useState({
//     //     password: "",
//     //     showPassword: false,
//     // });


//     // const handleClickShowPassword = () => {
//     //     setValues({
//     //         ...values,
//     //         showPassword: !values.showPassword,
//     //     });
//     // };

//     // const handleMouseDownPassword = (event) => {
//     //     event.preventDefault();
//     // };

//     // const handlePasswordChange = (prop) => (event) => {
//     //     setValues({
//     //         ...values,
//     //         [prop]: event.target.value,
//     //     });
//     // };

//     return (
// <>

// <div className="input">
//     <img src="/images/loginSignup/password.png" alt="password" />
//     {/* <input> */}
//     <Input
//         className="inputPassword"
//         placeholder="Password"
//         id="password"
//         type={showPassword ? 'text' : 'password'}
//         value={password}
//         onChange={handlePasswordChange}
//         endAdornment={
//             <InputAdornment position="end">
//                 <IconButton
//                     onClick={handleClickShowPassword}
//                     onMouseDown={handleMouseDownPassword}
//                 >
//                     {!showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//             </InputAdornment>
//         }
//     />
//     {/* </input> */}
// </div>
// </>
//     );
// };


// export default Test;

// import { collection, addDoc } from "firebase/firestore";
// import { db } from "./LoginSignup/Firebase";
// import { setDoc, doc } from "firebase/firestore";

// async function saveLeaderboardData(leaderboardData) {
//     try {
//         // Запис даних для сьогоднішнього рейтингу
//         await setDoc(doc(db, 'leaderboard', 'today'), {
//             rankings: leaderboardData.today,
//         });

//         // Запис даних для рейтингу за місяць
//         await setDoc(doc(db, 'leaderboard', 'month'), {
//             rankings: leaderboardData.month,
//         });

//         // Запис даних для рейтингу за рік
//         await setDoc(doc(db, 'leaderboard', 'year'), {
//             rankings: leaderboardData.year,
//         });

//         alert('Leaderboard data saved successfully!');
//         console.log('Leaderboard data saved successfully!');
//     } catch (error) {
//         alert('Error saving leaderboard data:', error);
//         console.error('Error saving leaderboard data:', error);
//     }
// }

// // Викликаємо функцію для запису даних у Firestore
// // saveLeaderboardData(leaderboardData);

// // Приклад використання функції

// // Викликаємо функцію для запису даних у БД
// // saveLeaderboardData(leaderboardData);


// const hackathons = [
//     {
//         "Hackathon_ID": 2,
//         "name": "One Trillion Agents Hackaton",
//         "date": "April 20 2025 23:59:59",
//         "theme": "Gaming",
//         "prize": "10,000",
//         "description": "One Trillion Agents Hackaton is a hackathon that brings together 300 students from across North America to create innovative projects in 36 hours. Whether you're a beginner or a seasoned hacker, we welcome you to join us for a weekend of learning and fun.",
//         "rules": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//     },
//     {
//         "Hackathon_ID": 3,
//         "name": "Predictive AI In Healthcare with FHIR®",
//         "date": "March 30 2025 23:59:59",
//         "theme": "Web Development",
//         "prize": "no prize",
//         "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//         "rules": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//     },
//     {
//         "Hackathon_ID": 4,
//         "name": "Azure AI Developer Hackathon",
//         "date": "May 28 2025 19:00:00",
//         "theme": "Artificial Intelligence",
//         "prize": "500",
//         "description": "Hack the North is Canada's biggest hackathon, happening at the University of Waterloo. For 36 hours, 1000 students from around the world will come together to learn something new, create projects, and share them with the world.",
//         "rules": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//     },
//     {
//         "Hackathon_ID": 5,
//         "name": "Code fest",
//         "date": "April 25 2025 10:00:00",
//         "theme": "Databases",
//         "prize": "3500",
//         "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//         "rules": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//     },
//     {
//         "Hackathon_ID": 6,
//         "name": "Nova Hacks III",
//         "date": "May 19 2025 19:00:00",
//         "theme": "Blockchain",
//         "prize": "no prize",
//         "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//         "rules": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//     }];

// const uploadCardsToFirestore = async () => {
//     try {
//         const collectionRef = collection(db, "hackathons");

//         for (const hackathon of hackathons) {
//             await addDoc(collectionRef, {
//                 ...hackathon,
//                 date: new Date(hackathon.date) // перетворення дати у формат Timestamp
//             });
//         }

//         alert("Успішно додано всі хакатони до Firestore.");
//         console.log("Успішно додано всі хакатони до Firestore.");
//     } catch (error) {
//         console.error("Помилка при записі в Firestore:", error);
//     }
// };

// export default function Test() {
//     const leaderboardData = {
//         today: [
//             { name: "Charles John", points: 195 },
//             { name: "Alex Mike", points: 185 },
//             { name: "Johnson", points: 160 },
//             { name: "Rosey", points: 130 },
//             { name: "Scarlett Angela", points: 110 },
//         ],
//         month: [
//             { name: "Alex Mike", points: 1195 },
//             { name: "Johnson", points: 1185 },
//             { name: "Charles John", points: 1160 },
//             { name: "Scarlett Angela", points: 1130 },
//             { name: "Rosey", points: 1110 },
//         ],
//         year: [
//             { name: "Scarlett Angela", points: 2195 },
//             { name: "Rosey", points: 2185 },
//             { name: "Johnson", points: 2160 },
//             { name: "Charles John", points: 2130 },
//             { name: "Alex Mike", points: 2110 },
//         ],
//     };

//     return (
//         <>
//             <button onClick={() => saveLeaderboardData(leaderboardData)}>Add data to leaderboard</button>
//             <button onClick={uploadCardsToFirestore}>add hackathons</button>
//         </>
//     );
// }
