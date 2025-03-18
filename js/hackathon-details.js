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
                <div class="preview">
                    <div class="left-side">
                        <div class="image-container">
                            <img class="hackathon-image" src="images/image${hackathon.id}.png">
                        </div>
                        <h1 class="title">${hackathon.name}</h1>

                        <div class="countdown-box">
                            <div class="countdown">
                                <h3 id="days">00</h3>
                                <p>Days</p>
                            </div>
                            <div class="countdown">
                                <h3 id="hours">00</h3>
                                <p>Hours</p>
                            </div>
                            <div class="countdown">
                                <h3 id="minutes">00</h3>
                                <p>Minutes</p>
                            </div>
                            <div class="countdown">
                                <h3 id="seconds">00</h3>
                                <p>Seconds</p>
                            </div>
                        </div>

                        <button class="join-button">Join hackathon</button>
                    </div>

                    <div class="right-side">
                        <div class="hackathon-info">
                            <p class="deadline">Deadline<br>${hackathon.date}</p>
                            <hr>
                            <p class="location"><img src="https://www.svgrepo.com/show/77412/location-point.svg">${hackathon.location}</p>
                            <p class="prize">&#36; ${hackathon.prize}</p>
                            <hr>
                            <p class="theme">${hackathon.theme}</p>

                        </div>
                    </div>
                </div>
                <section class="second-section">
                    <p class="description">${hackathon.description}</p>
                    <hr>
                    <p class="rules">${hackathon.rules}</p>
                </section>
                `;

            const targetDate = new Date(hackathon.date).getTime();

            function countdown() {
                const currentDate = new Date().getTime();
                const distance = targetDate - currentDate;

                const days = Math.floor(distance / 1000 / 60 / 60 / 24);
                const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
                const minutes = Math.floor(distance / 1000 / 60) % 60;
                const seconds = Math.floor(distance / 1000) % 60;

                document.getElementById('days').innerHTML = days < 10 ? '0' + days : days;
                document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours;
                document.getElementById('minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
                document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;

                // Додатковий вивід в консоль
                console.log(days + ":" + hours + ":" + minutes + ":" + seconds);

                if (distance < 0) {
                    Days.innerHTML = "00";
                    Hours.innerHTML = "00";
                    Minutes.innerHTML = "00";
                    Seconds.innerHTML = "00";
                }
            }

            const interval = setInterval(countdown, 1000);

        } else {
            console.error('Hackathon not found');
        }
    })
    .catch(error => {
        console.error('Error loading hackathon data:', error);
    });




