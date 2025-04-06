import React, { useState, useEffect } from "react";
// import "./style/rating.css"; // Import your CSS file for styling

const leaderboardData = {
  today: [
    { name: "Charles John", points: 195 },
    { name: "Alex Mike", points: 185 },
    { name: "Johnson", points: 160 },
    { name: "Rosey", points: 130 },
    { name: "Scarlett Angela", points: 110 },
  ],
  month: [
    { name: "Alex Mike", points: 1195 },
    { name: "Johnson", points: 1185 },
    { name: "Charles John", points: 1160 },
    { name: "Scarlett Angela", points: 1130 },
    { name: "Rosey", points: 1110 },
  ],
  year: [
    { name: "Scarlett Angela", points: 2195 },
    { name: "Rosey", points: 2185 },
    { name: "Johnson", points: 2160 },
    { name: "Charles John", points: 2130 },
    { name: "Alex Mike", points: 2110 },
  ],
};

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState("month");

  const getColor = (category) => {
    switch (category) {
      case "today":
        return "rgb(238, 238, 122)";
      case "month":
        return "rgb(125, 216, 230)";
      case "year":
        return "rgb(108, 177, 123)";
      default:
        return "#fff";
    }
  };

  const activeColor = getColor(activeTab);

  return (
    <div className="wrapper">

      <div className="lboard_section" style={{ backgroundColor: activeColor }}>
        <div className="lboard_tabs">
          <ul>
            {["today", "month", "year"].map((category) => (
              <li
                key={category}
                className={activeTab === category ? "active" : ""}
                onClick={() => setActiveTab(category)}
                data-li={category}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </li>
            ))}
          </ul>
        </div>

        <div className="lboard_wrap">
          {leaderboardData[activeTab].map((player, index) => (
            <div
              className="lboard_mem"
              key={player.name}
              style={{ borderBottom: `8px solid ${activeColor}` }}
            >
              <div className="name_bar">
                <p>
                  <span>{index + 1}.</span> {player.name}
                </p>
              </div>
              <div className="points">{player.points} points</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
