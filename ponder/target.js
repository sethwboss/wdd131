const firstParagraph = document.querySelector('#intro')
firstParagraph.style.backgroundColor = '#f2c556';




const emElement = document.querySelector('#intro em');
emElement.textContent = 'USS Voyager Starship';




const imgElement = document.createElement('img');
imgElement.setAttribute('src', 'https://bit.ly/3RfG4sY');

const targetElement = document.getElementById('starship');

targetElement.appendChild(imgElement);