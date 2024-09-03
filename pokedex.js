const url="https://pokeapi.co/api/v2/pokemon/25/";
const container=document.getElementById("contenedor");
ConsultarPokemon();
async function ConsultarPokemon()
{
let consulta= await fetch(url);
let resultado= await consulta.json();
console.log(resultado);
let template=`<img src='${resultado.sprites.other.home.front_default}'/>}`;
let div=document.createElement('div');
div.innerHTML=template;
container.appendChild(div);
}
