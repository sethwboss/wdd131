const character = {
      name: "Snortleblat",
      class: "Swamp Beat Diplomat",
      level: 5,
      health: 100,
      image: 'https://andejuli.github.io/img/snortleblat.png',
      attacked() {
        if (this.health >= 20) {
          this.level -= 1;
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };


/* For when the page loads*/
document.querySelector('.image').src = character.image;
document.querySelector('.name').textContent = character.name;

function updateCharacterCard() {
  document.querySelector('#class').textContent = character.class;
  document.querySelector('#level').textContent = character.level;
  document.querySelector('#health').textContent = character.health;
}

document.addEventListener('DOMContentLoaded', function() {
    updateCharacterCard(); // Call the update function when the DOM is ready
});


  

document.querySelector('#attacked').addEventListener('click', function(){
    character.attacked();

    // Update Stats
    updateCharacterCard()
})

document.querySelector('#levelup').addEventListener('click', function(){
    character.levelUp();

    //Update Stats
    updateCharacterCard()
})