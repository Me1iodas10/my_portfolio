console.log("Portfolio site loaded successfully!");
console.log("Portfolio site loaded successfully!");

function revealSections() {
    const sections = document.querySelectorAll("section");
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < windowHeight - 100) {
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);
