document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".lboard_tabs ul li");
    const leaderboardWrap = document.querySelector(".lboard_wrap");
    const leaderboardSection = document.querySelector(".lboard_section");

    const leaderboardData = {
        today: [
            { name: "Charles John", points: 195, image: "https://github.com/codingmarket07/Leader-Board-/blob/master/pic_1.png?raw=true" },
            { name: "Alex Mike", points: 185, image: "https://github.com/codingmarket07/Leader-Board-/blob/master/pic_2.png?raw=true" },
            { name: "Johnson", points: 160, image: "https://github.com/codingmarket07/Leader-Board-/blob/master/pic_3.png?raw=true" },
            { name: "Rosey", points: 130, image: "https://github.com/codingmarket07/Leader-Board-/blob/master/pic_4.png?raw=true" },
            { name: "Scarlett Angela", points: 110, image: "https://github.com/codingmarket07/Leader-Board-/blob/master/pic_5.png?raw=true" }
        ],
        month: [
            { name: "Alex Mike", points: 1195, image: "https://github.com/codingmarket07/Leader-Board-/blob/master/pic_2.png?raw=true" },
            { name: "Johnson", points: 1185, image: "https://github.com/codingmarket07/Leader-Board-/blob/master/pic_3.png?raw=true" },
            { name: "Charles John", points: 1160, image: "https://github.com/codingmarket07/Leader-Board-/blob/master/pic_1.png?raw=true" },
            { name: "Scarlett Angela", points: 1130, image: "https://github.com/codingmarket07/Leader-Board-/blob/master/pic_5.png?raw=true" },
            { name: "Rosey", points: 1110, image: "https://github.com/codingmarket07/Leader-Board-/blob/master/pic_4.png?raw=true" },
        ],
        year: [
            { name: "Scarlett Angela", points: 2195, image: "https://github.com/codingmarket07/Leader-Board-/blob/master/pic_5.png?raw=true" },
            { name: "Rosey", points: 2185, image: "https://github.com/codingmarket07/Leader-Board-/blob/master/pic_4.png?raw=true" },
            { name: "Johnson", points: 2160, image: "https://github.com/codingmarket07/Leader-Board-/blob/master/pic_3.png?raw=true" },
            { name: "Charles John", points: 2130, image: "https://github.com/codingmarket07/Leader-Board-/blob/master/pic_1.png?raw=true" },
            { name: "Alex Mike", points: 2110, image: "https://github.com/codingmarket07/Leader-Board-/blob/master/pic_2.png?raw=true" }
        ]
    };

    function loadLeaderboard(category) {
        leaderboardWrap.innerHTML = "";
        leaderboardData[category].forEach((player, index) => {
            const member = document.createElement("div");
            member.classList.add("lboard_mem");
            member.innerHTML = `
                <div class="img">
                    <img src="${player.image}">
                </div>
                <div class="name_bar">
                    <p><span>${index + 1}.</span> ${player.name}</p>
                </div>
                <div class="points">
                    ${player.points} points
                </div>
            `;
            leaderboardWrap.appendChild(member);
        });

        let borderColor;
        switch(category) {
            case "today":
                leaderboardSection.style.backgroundColor = "rgb(238, 238, 122)";
                borderColor = "rgb(238, 238, 122)";
                break;
            case "month":
                leaderboardSection.style.backgroundColor = "rgb(125, 216, 230)";
                borderColor = "rgb(125, 216, 230)";
                break;
            case "year":
                leaderboardSection.style.backgroundColor = "rgb(108, 177, 123)";
                borderColor =  "rgb(108, 177, 123";
                break;
        }

        document.querySelectorAll(".lboard_mem").forEach(member => {
            member.style.borderBottom = `3px solid ${borderColor}`;
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            loadLeaderboard(tab.getAttribute("data-li"));
        });
    });

    loadLeaderboard("month");
});

// document.addEventListener('DOMContentLoaded', function() {
//     const tabs = document.querySelectorAll('.lboard_tabs ul li');
//     const leaderboardWrap = document.querySelector('.lboard_wrap');

//     const leaderboardData = {
//         today: [
//             { name: "Charles John", points: 195, image: "pic_1.png" },
//             { name: "Alex Mike", points: 185, image: "pic_2.png" },
//             { name: "Johnson", points: 160, image: "pic_3.png" },
//             { name: "Rosey", points: 130, image: "pic_4.png" },
//             { name: "Scarlett Angela", points: 110, image: "pic_5.png" }
//         ],
//         month: [
//             { name: "Alex Mike", points: 1195, image: "pic_2.png" },
//             { name: "Johnson", points: 1185, image: "pic_3.png" },
//             { name: "Charles John", points: 1160, image: "pic_1.png" },
//             { name: "Scarlett Angela", points: 1130, image: "pic_5.png" },
//             { name: "Rosey", points: 1110, image: "pic_4.png" }
//         ],
//         year: [
//             { name: "Scarlett Angela", points: 2195, image: "pic_5.png" },
//             { name: "Rosey", points: 2185, image: "pic_4.png" },
//             { name: "Johnson", points: 2160, image: "pic_3.png" },
//             { name: "Charles John", points: 2130, image: "pic_1.png" },
//             { name: "Alex Mike", points: 2110, image: "pic_2.png" }
//         ]
//     };

//     function loadLeaderboard(category){
//         leaderboardWrap.innerHTML = "";
//         leaderboardData[category].forEach((player, index) => {
//             const member = document.createElement("div");
//             member.classList.add("lboard_mem");
//             member.innerHTML = `
//             <div class="img"> 
//                 <img src="${player.image}">
//             </div>

//             <div class="name_bar">
//                 <p><span>${index+1}.</span> ${player.name}</p>
//             </div>

//             <div class="points"> 
//                 ${player.points} points
//             </div>
//             `;
//             leaderboardWrap.appendChild(member);
//         })
//     }

//     tabs.forEach(tab =>{
//         TransformStream.addEventListener("click", function(){
//             tabs.forEach(t => t.classList.remove("active"));
//             tab.classList.add("active");
//             loadLeaderboard(tab.getAttribute("data-li"))
//         });
//     });

//     loadLeaderboard("month");
// });