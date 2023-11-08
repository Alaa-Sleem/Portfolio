

var Nav = document.getElementById("Navbar");
var ProjectsSection = document.getElementById("Projects")

ProjectsSection.addEventListener('mouseover', ()=> {
Nav.style.backgroundColor="#2b2a51" , color="white"
Transform = scale(1.03);
}
)


document.addEventListener('scroll', (event) => {
    if (event.target !== ProjectsSection) {
        Nav.style.backgroundColor = 'transparent';
    }
});