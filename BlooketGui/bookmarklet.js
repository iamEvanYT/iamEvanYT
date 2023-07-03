const githubUrl = "https://raw.githubusercontent.com/iamEvanYT/iamEvanYT/main/BlooketGui/gui.js";

fetch(githubUrl)
    .then(response => response.text())
    .then(data => {
        eval(data);
    })
    .catch(error => {
        console.error("Error loading JavaScript file:", error);
    });