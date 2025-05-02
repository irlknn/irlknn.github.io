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

// ЛР 4
// Веб-сайт платформи для віртуальних хакатонів та змагань із програмування
// 1. Створити форми реєстрації та входу користувачів на сайт та впровадити функції 
// автентифікації.
// 2. Реалізувати можливість доступу до сторінки Мої проєкти тільки для 
// автентифікованих користувачів.
// 3. Створити хмарну базу даних для зберігання інформації про змагання та рейтинги. 
// Використовувати інформацію з бази даних для відображення на клієнтській частині.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// fetch('http://localhost:5000/api')
// .then(response => response.json()
// .then(data => console.log(data.message)));