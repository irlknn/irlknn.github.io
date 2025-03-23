const participants = [
    { name: "Alex", team: "First", events: 10, points: 2300 },
    { name: "Maria", team: "First", events: 10, points: 2280 },
    { name: "Ivan", team: 'НУ "ЛП"', events: 8, points: 2100 },
    { name: "Dana", team: "Аналіз після синтеза", events: 8, points: 2099 },
    { name: "Nadia", team: "Аналіз після синтезу", events: 8, points: 2099 },
    { name: "Stepan", team: 'НУ "ЛП"', events: 7, points: 2050 },
    { name: "Maks", team: "Перші", events: 7, points: 1950 },
    { name: "Vadym", team: "-", events: 7, points: 1900 },
    { name: "Kate", team: "tech-team", events: 6, points: 1820 },
    { name: "Jessica", team: "tech-team", events: 6, points: 1760 }
];


const list = document.getElementById("ranking");

participants.forEach(makeRanking);

function makeRanking(participant, index) { 
    const row = document.createElement("tr");
    row.innerHTML = `<td>${index + 1}</td><td>${participant.name}</td><td>${participant.team}</td><td>${participant.events}</td><td>${participant.points}</td>`;
    list.appendChild(row);
}
