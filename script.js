gsap.registerPlugin(ScrollTrigger);

// Hero Animation
gsap.from(".hero-content", {
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out"
});

// Work Section Animation
gsap.utils.toArray(".project").forEach((project) => {

    gsap.from(project, {

        opacity: 0,
        y: 80,

        duration: 1,

        scrollTrigger: {

            trigger: project,

            start: "top 85%",

            toggleActions: "play none none reverse"

        }

    });

});

const poster = document.getElementById("videoPoster");
const player = document.getElementById("videoPlayer");
const iframe = document.getElementById("youtubePlayer");


poster.addEventListener("click", function(){

    console.log("Poster clicked");


    poster.style.display = "none";

    player.classList.remove("hidden");

    iframe.src = iframe.dataset.src;


});

const heroImage = document.getElementById("heroImage");

document.querySelectorAll(".project").forEach(project => {

    project.addEventListener("mouseenter", () => {

        heroImage.style.opacity = 0;

        setTimeout(() => {

            heroImage.src = project.dataset.image;

            heroImage.style.opacity = .18;

        },250);

    });

});