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

function unhideBlurb(blurb){
    document.getElementById(blurb+"-desc").classList.remove("hidden")
    document.getElementById(blurb+"-learn").classList.add("hidden")
    document.getElementById(blurb+"-hide").classList.remove("hidden")
}

function closeBlurb(blurb){
    document.getElementById(blurb+"-desc").classList.add("hidden")
    document.getElementById(blurb+"-learn").classList.remove("hidden")
    document.getElementById(blurb+"-hide").classList.add("hidden")
}