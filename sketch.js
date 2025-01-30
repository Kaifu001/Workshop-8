function setup() {
  createCanvas(600, 400);
  background(255);

  
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      
      const dogImageURL = data.message;
      loadImage(dogImageURL, (img) => {
        
        image(img, 50, 50, 500, 300);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function draw() {
  
}
