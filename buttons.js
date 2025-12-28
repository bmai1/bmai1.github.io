const aboutMeConcise = document.getElementById('about-me-concise');
const aboutMe = document.getElementById('about-me');
const projects = document.getElementById('projects');
const aboutMeConciseButton = document.getElementById('about-me-concise-button');
const aboutMeButton = document.getElementById('about-me-button');
const projectsButton = document.getElementById('projects-button');

aboutMeConciseButton.addEventListener('click', () => {
    aboutMeConcise.style.display = "block";
    aboutMe.style.display = "none";
    projects.style.display = "none";
    aboutMeConciseButton.style.textDecoration = "underline";
    aboutMeButton.style.textDecoration = "none";
    projectsButton.style.textDecoration = "none";
    aboutMeConciseButton.style.color = "white";
    aboutMeButton.style.color = "#737c88";
    projectsButton.style.color = "#737c88";
});

aboutMeButton.addEventListener('click', () => {
    aboutMeConcise.style.display = "none";
    aboutMe.style.display = "block";
    projects.style.display = "none";
    aboutMeConciseButton.style.textDecoration = "none";
    aboutMeButton.style.textDecoration = "underline";
    projectsButton.style.textDecoration = "none";
    aboutMeConciseButton.style.color = "#737c88";
    aboutMeButton.style.color = "white";
    projectsButton.style.color = "#737c88";
});

projectsButton.addEventListener('click', () => {
    aboutMeConcise.style.display = "none";
    aboutMe.style.display = "none";
    projects.style.display = "block";
    aboutMeConciseButton.style.textDecoration = "none";
    aboutMeButton.style.textDecoration = "none";
    projectsButton.style.textDecoration = "underline";
    aboutMeConciseButton.style.color = "#737c88";
    aboutMeButton.style.color = "#737c88";
    projectsButton.style.color = "white";
});