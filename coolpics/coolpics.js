
let menuButton = document.querySelector(".button_class");
const menu = document.querySelector(".a_tags");



function toggleMenu() {
  menu.classList.toggle("show");
}

menuButton.addEventListener("click", toggleMenu);










// make the modal

const gallery = document.querySelector('.gallery');
const modal = document.createElement('dialog');

modal.innerHTML = `
  <div class="modal-content">
    <img>
    <button class='modal-close'>X</button>
  </div>
`;

document.body.appendChild(modal);

const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.modal-close');





// event after clicking

gallery.addEventListener('click', (event) => {
  const clickedImage = event.target.closest('img');

  if (clickedImage) {
    const imageUrl = clickedImage.getAttribute('src');

    
    let first = imageUrl.split('-')[0];
    let second = imageUrl.split('-')[1];

    const highQualityUrl = `${first}-full.jpeg`;

    modalImage.setAttribute('src', highQualityUrl);
    modalImage.setAttribute('alt', clickedImage.getAttribute('alt'));

    modal.showModal();
  }
});





// exit modal

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});










/*
const task = document.querySelector('#todo').value = '';
document.querySelector('#todo').value = '';

let first = task.split('-')[0];
let second = task.split('-')[1];
*/



/*


target the menu button (querySelector)
target the menu links (querySelector)
listen for the click event (.addEvent Listener)

When it's clicked show the menu if it's hidden and hide it if it's showing
(Add a class to CSS)




When user clicks an image show a modal with that same image inside it:
Target the whole gallery. (querySelector)
Create the modal (.createElement('dialog'))
Add the empty image to the modal (a template literal with <img>)
Add button to close the modal (also in the template literal)
Place the modal on the page (they are hidden by default)(.appendChild)
Target the image and close button in the modal (.querySelector)
When the user clicks an image (.addEventListener for the whole gallery)
    Find out which image they clicked (use event parameter with target.closest)
    Take the name of the file, use that to get the high def version file (.split)
    Place the image into the new modal (.setAttribute or src and alt)
    Show the modal (.showModal())

When a user clicks the close button on the modal, close the modal. (.close())

When a user clicks outside the image, close the modal (.close())



closeButton.addEventListener('click', () => {
    modal.close()}
    )











*/
