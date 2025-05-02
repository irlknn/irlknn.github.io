import React, { useState } from "react";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../LoginSignup/Firebase";

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState("month");
  const [leaderboardData, setLeaderboardData] = useState({
    today: [],
    month: [],
    year: []
  });
  const [loading, setLoading] = useState(true);
  
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

  useEffect(() => {
    async function fetchData() {
      try {
        // Отримуємо дані для сьогоднішнього рейтингу
        const todayDoc = await getDoc(doc(db, 'leaderboard', 'today'));
        const todayData = todayDoc.exists() ? todayDoc.data().rankings : [];

        // Отримуємо дані для рейтингу за місяць
        const monthDoc = await getDoc(doc(db, 'leaderboard', 'month'));
        const monthData = monthDoc.exists() ? monthDoc.data().rankings : [];

        // Отримуємо дані для рейтингу за рік
        const yearDoc = await getDoc(doc(db, 'leaderboard', 'year'));
        const yearData = yearDoc.exists() ? yearDoc.data().rankings : [];

        // Оновлюємо стан
        setLeaderboardData({
          today: todayData,
          month: monthData,
          year: yearData,
        });
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }
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
