/* 
    - Use the provided HTML, CSS, and JS files to fetch images of two separate characters from the Rick and Morty API. You will not need to edit/change anything in the HTML file, everything you need is already there.
    - Your fetch call to the specified endpoint is also already defined in the script.js file. You will need to complete the fetch call by including the .then() statements.
    - Define a function named displayResults in the global scope of your document. This function will be passed the jsonified data from the fetch.
    		Inside the display function you will need to:
    				1. Declare two variables named imgOne and imgTwo, and use those variables to store two images from the API data that was fetched and passed to the displayResults funciton.
    				2. Acces each image element from the index.html file, and set the src to be the image link you stored in a variable during step 1.
    
    After you are seeing images of two different characters, use the attached style.css file to style each image with the following properties:
    1. Each image must have a border-radius
    2. Each image must have a border
    3. Each image must be centered
*/


fetch('https://rickandmortyapi.com/api/character')