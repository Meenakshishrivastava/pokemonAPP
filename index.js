const typecolor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",

}




const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

let getpokedata = () => {
    let id = Math.floor(Math.random() * 150) + 1;
    console.log(id);
    const finalurl = url + id;
    console.log(finalurl);
   
    //fetch generated url
    fetch(finalurl)
      .then((response) => response.json())
      .then((data) => {
    
      generatecard(data);
    });
};

//generated card
let generatecard = (data) => {
    //get neccessary data and assigned it to varaibles
   console.log(data);
   const hp = data.stats[0].base_stat;
   const imgsrc = data.sprites.other.dream_world.front_default;
   const pokename = data.name;
   const statattack = data.stats[1].base_stat;
   const statdefence = data.stats[2].base_stat;
   const statspeed = data.stats[5].base_stat;

   const themecolor = typecolor[data.types[0].type.name];
   console.log(themecolor);

   card.innerHTML = `
   
   <p class="hp">
   <span>HP</span>
   ${hp}
</p>
<img src="${imgsrc}"/>
<h2 class="poke-name">${pokename}</h2>
<div class="types">
   
   
</div>
<div class="stat">
   <div>
       <h3>${statattack}</h3>
       <p>Attack</p>
   </div>
   <div>
       <h3>${statdefence}</h3>
       <p>Defence</p>
   </div>
   <div>
       <h3>${statspeed}</h3>
       <p>Speed</p>
   </div>
</div>
   
   `;
appendtypes(data.types);
  styleCard(themecolor);


}
let appendtypes = (types) => {
  console.log(types);
  types.forEach((item) => {
    let span = document.createElement("SPAN");
    span.textContent = item.type.name;
    console.log(span); 
    document.querySelector(".types").appendChild(span);
   })
  }

   let styleCard = (color) => {
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
    card.querySelectorAll(".types span").forEach((typeColor) => {
      typeColor.style.backgroundColor = color;
    })
}



btn.addEventListener("click", getpokedata);
window.addEventListener("load", getpokedata);




