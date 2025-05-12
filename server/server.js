const express = require('express');
const admin = require('firebase-admin');

const path = require('path');

// Підключаємо сервісний ключ для Firebase
const serviceAccount = require('./serviceAccountKey.json');

// Ініціалізація Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
const db = admin.firestore();  // Підключення до Firestore

const cors = require('cors');
app.use(cors());


const PORT = process.env.PORT || 5000;

// Додаємо middleware для парсингу JSON
app.use(express.json());

// Статичні файли з React
// app.use(express.static(path.join(__dirname, '..', 'my-react-app', 'build')));

// Обробка POST-запиту для заявки
app.post('/api/applications', async (req, res) => {
  const { userId, hackathonId, createdAt } = req.body;

  // Логування отриманих даних для дебагу
  console.log('Request body:', req.body);

  try {
    // Перевірка на наявність всіх необхідних полів
    if (!userId || !hackathonId || !createdAt) {
      return res.status(400).send('Missing required fields');
    }

    // Збереження заявки в Firestore
    const docRef = await db.collection('applications').add({
      userId,
      hackathonId,
      createdAt: new Date(createdAt), // Перетворюємо дату на об'єкт Date
    });

    // Відповідь після успішного збереження
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).send('Server error: ' + error.message);
  }
});

// Запит до бд щоб отримати всі хакатони на які записаний користувач
app.get('/user/:uid', async (req, res) => {
  const { uid } = req.params;

  try {
    const applicationsSnapshot = await db.collection('applications')
      .where('userId', '==', uid)
      .get();

    const applications = [];

    for (const doc of applicationsSnapshot.docs) {
      const appData = doc.data();
      const hackathonRef = db.collection('hackathons').doc(appData.hackathonId);
      const hackathonDoc = await hackathonRef.get();
      const hackathonData = hackathonDoc.exists ? hackathonDoc.data() : {};

      applications.push({
        id: doc.id,
        createdAt: appData.createdAt,
        status: appData.status || 'registered',
        hackathon: {
          id: hackathonDoc.id,
          ...hackathonData
        }
      });
    }

    res.json(applications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).send("Error fetching applications");
  }
});

// Виведення повідомлення про запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});

// Обробка всіх інших запитів — повертаємо index.html для SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'my-react-app', 'build', 'index.html'));
});

// const express = require('express');
// const path = require('path');

// const admin = require('firebase-admin');
// const serviceAccount = require('./serviceAccountKey.json');
// admin.initializeApp({ credential: admin.credential.cert(serviceAccount), });

// const app = express();
// app.use(express.json());

// const db = admin.firestore();

// const PORT = process.env.PORT || 5000;

// // Вказуємо, де лежать статичні файли
// app.use(express.static(path.join(__dirname, '..', 'my-react-app', 'build')));

// // Отримання заявок користувача
// app.post('/api/applications', async (req, res) => {
//   const { userId, hackathonId, createdAt } = req.body;
//   console.log('Request body:', req.body); // Логування отриманих даних

//   // console.log('>>> BODY:', req.body);
//   try {

//     if (!userId || !hackathonId || !createdAt) {
//       throw new Error("Missing required fields");
//     }

//     console.log("Saving application:", { userId, hackathonId, createdAt });

//     const docRef = await db.collection('applications').add({
//       userId,
//       hackathonId,
//       createdAt: new Date(createdAt),
//     });

//     res.status(201).json({ id: docRef.id });
//   } catch (error) {
//     console.error('Error in application saving: ', error);
//     res.status(500).send('Server error: ' + error.message);
//   }
// });

// // Збереження в бд заявок поданих користувачем
// app.post('/api/applications', async (req, res) => {
//   const { userId, hackathonId, createdAt } = req.body;

//   try {
//     await db.collection('applications').add({
//       userId,
//       hackathonId,
//       createdAt: createdAt ? new Date(createdAt) : new Date()
//     });
//     res.status(201).send('Application saved')
//   } catch (error) {
//     console.error('Error in application saving: ', error);
//     res.status(500).send('Server error');
//   }
// });


// // Виведення в консоль про запущення сервера
// app.listen(PORT, () => {
//   console.log(`Сервер запущено на порту ${PORT}`);
// });

// // Обробка всіх інших запитів — повертаємо index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'my-react-app', 'build', 'index.html'));
// });

// // Отримання заявок поданих користувачем в якомусб часовомц проміжку
// // app.get('/api/applications', async (req, res) => {
// //   const { userId, fromDate, toDate } = req.query;

// //   try{
// //     let query = db.collection('applications').where('userId', '==', userId);

// //     if(fromDate) {
// //       query = query.where('createdAt', '>=', new Date(fromDate));
// //     }
// //     if(toDate){
// //       query = query.where('createdAt', '<=', new Date(toDate));
// //     }
// //     const snapshot = await query.get();
// //     const results = snapshot.docs.map(doc => ({id: doc.id, ...doc.data() }));

// //     res.json(results);
// //   }catch(error){
// //     console.log('Error in establishing the connection');
// //     res.status(500).send('Server error');

// //   }
// // });

