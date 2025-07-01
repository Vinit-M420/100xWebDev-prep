
async function getRandomTypePokemons() {
    const noOfCards = parseInt(document.querySelector('input[name="cardcount"]').value);
    const whichType = document.querySelector('#dropdown').value;

    const apiType = `https://pokeapi.co/api/v2/type/${whichType}`;

    try{
        const res = await fetch(apiType);
        const data = await res.json();

        const allPokemon = data.pokemon.map(p => p.pokemon);

        const shuffled = allPokemon.sort(() => 0.5 - Math.random());
        const selected = allPokemon.splice(0, noOfCards);
        return selected;
    }
    catch (err){
        console.error("Failed to fetch type data:", err);
        return [];
    }
}



async function gather(){
    const parentContainer = document.querySelector('.cards');
    parentContainer.innerHTML = ''; // clear existing cards

    const pokemons = await getRandomTypePokemons();

    for (const poke of pokemons) {
        const url = await fetch(poke.url);
        const data = await url.json();

        let cardElem = document.createElement('div');
        cardElem.className = 'card';
        cardElem.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}" />
            <p>Type: ${data.types.map(t => t.type.name).join(', ')}</
            `;
        parentContainer.appendChild(cardElem);
}

}

function lose(){
    const parentContainer = document.querySelector('.cards');
    parentContainer.innerHTML = '';
}