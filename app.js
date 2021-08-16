const rubrik = document.getElementById("rubrik");

let visitedWebsite;

if (window.localStorage.getItem("visitedWebsite") === null) {
    window.localStorage.setItem('visitedWebsite', '0');
} else {
    visitedWebsite = parseInt(window.localStorage.getItem("visitedWebsite"));
    visitedWebsite = visitedWebsite + 1;
    rubrik.innerHTML = "You have visited the webite " + visitedWebsite + " times"
    window.localStorage.setItem("visitedWebsite", visitedWebsite);
}


