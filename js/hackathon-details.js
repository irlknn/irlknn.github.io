const urlParams = new URLSearchParams(window.location.search);
const hackathonId = urlParams.get('id');

// Завантаження даних про хакатони з JSON-файлу
fetch('json\\hackathons.json')
.then(response => response.json())
.then(data => {
    const hackathon = data.find(e => e.id == hackathonId);
    if (hackathon) {
        const container = document.getElementById('hackathon-detail-container');
        
        container.innerHTML = `
        <h2>${hackathon.name}</h2>
        <p>Date: ${hackathon.date}</p>
        <p>Location: ${hackathon.location}</p>
        <p>${hackathon.description}</p>
        <a href="index.html">Back to hackathons</a>
        `;

        // // Додавання заголовку хакатону
        // const title = document.createElement('h2');
        // title.textContent = hackathon.title;
        
        // // Додавання дати хакатону
        // const date = document.createElement('p');
        // date.textContent = `Date: ${hackathon.date}`;
        
        // // Додавання місця хакатону
        // const location = document.createElement('p');
        // location.textContent = `Location: ${hackathon.location}`;
        
        // // Додавання опису хакатону
        // const description = document.createElement('p');
        // description.textContent = hackathon.description;
        
        // const backButton = document.createElement('a');
        // backButton.textContent = "Back to hackathons";
        // backButton.href = "index.html";

        // // Додавання всіх елементів до контейнера
        // container.appendChild(title);
        // container.appendChild(date);
        // container.appendChild(location);
        // container.appendChild(description);
        // container.appendChild(backButton);
        
        
    } else {
        console.error('Hackathon not found');
    }
    })
    .catch(error => {
        console.error('Error loading hackathon data:', error);
    });
