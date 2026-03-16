/* Select all anchor elements within the navigation menu */
const links = document.querySelectorAll("nav a");

/* Add a click event listener to each navigation link that logs a message to the console when clicked */
links.forEach(link => {
    link.addEventListener("click", () => {
        console.log("link cliccato");
    });
});