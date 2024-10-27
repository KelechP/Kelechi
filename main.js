console.log('Hello World!');
// Select the nav-toggle button and nav-menu elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Add a click event listener to the nav-toggle button
navToggle.addEventListener('click', () => {
  // Toggle the 'active' class on the nav-menu to open or close it
  navMenu.classList.toggle('active');
});

// Close the menu when a link is clicked (for smoother UX on mobile)
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});