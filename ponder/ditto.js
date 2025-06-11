const ditto = {
id: 132,
name: "ditto",
type: "normal",
abilities: ["limber", "imposter"],
base_experience: 101,
height: 3,
weight: 40,
stats: {
hp: 48,
attack: 48,
defense: 48,
special_attack: 48,
special_defense: 48,
speed: 48
},
sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
transform: function(){
return this.sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png"
}
};



document.querySelector('#name').textContent = ditto.name;
document.querySelector('#ability').textContent = ditto.abilities[1];
document.querySelector('#ditto').src = ditto.sprite;


const ditto_img = document.querySelector("#ditto");


ditto_img.addEventListener ("click", () => {
    ditto.transform()
    ditto_img.src = ditto.sprite;
});



