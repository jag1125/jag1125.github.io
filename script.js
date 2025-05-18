document.addEventListener('DOMContentLoaded', function (){
    const aboutMeBtn = document.getElementById("aboutMeBtn");
    const projectsBtn = document.getElementById("projectsBtn");
    const aboutMeSection = document.getElementById("about-me");
    const projectsSection = document.getElementById("projects");

    aboutMeBtn.addEventListener("click", function() {
        projectsSection.classList.add("hidden")
        aboutMeSection.classList.remove("hidden")
    });

    projectsBtn.addEventListener("click", function() {
        aboutMeSection.classList.add("hidden")
        projectsSection.classList.remove("hidden")
    });
});