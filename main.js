let block = document.getElementById('block');
let text = 'Lorem ipsum dolor sit amet';
block.innerText = text; 
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

setInterval(()=> {
    let textArray = block.innerText.split(" ");
    let random = getRandomArbitrary(0, textArray.length - 1);
    let removed = textArray.splice(random, +1);
    block.innerText = textArray.join(" ");
}, 1000);




