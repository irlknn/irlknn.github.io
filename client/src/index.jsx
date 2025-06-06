import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import './style/account.css';
import './style/competition.css';
import './style/foooter.css';
import './style/general.css';
import './style/hackathon-card.css';
import './style/hackathon.css';
import './style/home.css';
import "./style/rating.css";
import './style/topbar.css';

// ЛР 5
// Веб-сайт платформи для віртуальних хакатонів та змагань із програмування
// 1. Налаштувати серверну частину з використанням Node.js/Express для хостингу статичних 
// файлів сайту.
// 2. Створити хмарну базу даних для збереження інформації про подані користувачем заявки.
// 3. На сервері створити маршрут (HTTP GET) для отримання інформації про подані 
// користувачем заявки відфільтровані за датою створення заявки. Використати створений 
// маршрут у клієнтській частині для відображення інформації про подані користувачем 
// заявки на сторінці "Мої проєкти".
// 4. Реалізувати на сервері маршрут (HTTP POST) для збереження інформації про подані 
// користувачем заявки. Використати створений маршрут у клієнтській частині, для 
// збереження змін інформації про подані користувачем заявки на сторінці "Мої проєкти".
// 5. Розгорнути веб-сайт платформи для віртуальних хакатонів та змагань із програмування на 
// хостингу

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
