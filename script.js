let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");


let sideMenuIcon = document.getElementById("side-menu");
let sideBar = document.getElementById("side-bar");
let sideLinks = sideBar.querySelectorAll('li');

hamMenuIcon.addEventListener("click", () => {
  navBar.style.display='flex';
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
  
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

sideMenuIcon.addEventListener('click', ()=>{
  sideBar.classList.toggle('activeSidebar');
  sideBar.style.display= 'block'
  navBar.style.display='none'
  
})
sideLinks.forEach((sideLinks)=>{
  sideLinks.addEventListener('click', ()=>{
    sideBar.classList.remove('activeSidebar');
    
  })
})



