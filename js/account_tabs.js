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
    var savedTab = localStorage.getItem("activeTab") || "Active"; // Default to "Active" if no tab is saved
    var defaultTab = document.querySelector(`.tab button[onclick="openList(event, '${savedTab}')"]`);

    if (defaultTab) {
        defaultTab.click(); 
    }
});

let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}