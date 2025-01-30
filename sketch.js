function setup() {
  createCanvas(600, 400);
  background(255);

  // Call the Dog CEO API to get a random dog image
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      // Get the dog image URL from the API response
      const dogImageURL = data.message;
      loadImage(dogImageURL, (img) => {
        // Once the image is loaded, display it on the canvas
        image(img, 50, 50, 500, 300);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function draw() {
  // Nothing to draw here, the dog image is loaded and displayed once the API is called
}
