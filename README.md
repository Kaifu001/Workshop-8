What I Learned:
API Fetching:

Learned how to use the fetch() function to get data from an external API (in this case, the Dog CEO's Dog API).
Handled the response with .then() to parse the JSON data and extract the image URL.
Image Loading:

Used loadImage() to fetch and display the image dynamically.
Incorporated error handling with .catch() to manage API fetch failures.
How the Code Works:
setup() Function:

Creates the canvas and sets the background color.
Fetches data from the Dog API and retrieves a random dog image URL.
Uses loadImage() to load and display the image on the canvas at a specified position.
draw() Function:

Empty in this case since the image only needs to be displayed once in setup().
Problem Solving:
Issue:
Encountered issues with displaying the image on the canvas due to improper handling of the asynchronous nature of the API request.

Solution:
Used loadImage() inside the .then() block to ensure the image is loaded after the data is fetched.

Further Development Ideas:
Add more dog-related data (like breed or name) to display alongside the image.
Implement a button to fetch a new image without reloading the page.
