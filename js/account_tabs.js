function openList(evt, status) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(status).style.display = "block";
    evt.currentTarget.className += " active";

    localStorage.setItem("activeTab", status);
}

document.addEventListener("DOMContentLoaded", function () {
    var savedTab = localStorage.getItem("activeTab") || "active"; // Default to "Active" if no tab is saved
    var defaultTab = document.querySelector(`.tab button[onclick="openList(event, '${savedTab}')"]`);

    if (defaultTab) {
        defaultTab.click();
    }

    const joinedHackathons = JSON.parse(localStorage.getItem('joinedHackathons')) || [];
    
    const container = document.getElementById('content-wrapper');
    
    const grid = document.createElement('div');
    grid.classList.add("card-grid");

    // const tabcontent = document.getElementsByClassName('tabcontent');

    if (joinedHackathons.length > 0) {
        joinedHackathons.forEach(hackathon => {

            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <div class="image-content">
                    <span class="overlay"></span>
                    <img src="images/image${hackathon.id}.png" class="card-img">
                </div>
                <div class="card-content">
                    <h2 class="name">${hackathon.name}</h2>
                    <p class="theme">${hackathon.theme}</p>
                    <p class="date">${hackathon.date}</p>
                    <p class="location">${hackathon.location}</p>
                    <button class="button" onclick="removeHackathon(${hackathon.id})">Remove</button>
                </div>
            `;
            grid.appendChild(card);
            container.appendChild(grid);
        });
    } else {
        
        const noContent = document.createElement("div");
        noContent.classList.add("no-content");
        noContent.innerHTML = `
        <div class="no-content">
            <img src="https://i.pinimg.com/736x/54/9c/10/549c10713685a3162b9f71387c7f1914.jpg" class="no-content">
            <h3>No active applications</h3>
            <h3>Look for some here &#8595;</h3>
            <button class="button">
                <a href="competition.html">More hackathons</a>
            </button>
        </div>

        `;
        container.appendChild(noContent);
        // container.innerHTML = "<h2>No hackathons joined yet</h2>";
    }

});

function removeHackathon(id) {
    let joinedHackathons = JSON.parse(localStorage.getItem('joinedHackathons')) || [];
    joinedHackathons = joinedHackathons.filter(hackathon => hackathon.id != id);
    localStorage.setItem('joinedHackathons', JSON.stringify(joinedHackathons));
    location.reload();
}

// let subMenu = document.getElementById("subMenu");

// function toggleMenu(){
//     subMenu.classList.toggle("open-menu");
// }