var baseUrl = 'https://pokeapi.co/api/v2/';
var pokeListUl = document.getElementById('poke-list');
var goBackBtn = document.getElementById('go-back');
var pokeContainer = document.getElementById('poke-info');
var hashUrl = window.location.hash;

var getPokemons = function () {
    pokeContainer.hidden = true;
    fetch(baseUrl + 'type/1')
        .then(function (result) {
            return result.json();
        })
        .then(function (rawList) {
            var list = rawList.pokemon.slice(0, 10);
            pokeListUl.innerHTML = '';
            list.forEach(function (item) {
                var pokemonLi = document.createElement('li');
                pokemonLi.textContent = item.pokemon.name;
                pokeListUl.appendChild(pokemonLi);
            });
        });
    pokeListUl.onclick = function () {
        window.location.hash = event.target.textContent;
        pokeListUl.hidden = true;
    };
};
var getPokemon = function (name) {
    fetch(baseUrl + 'pokemon/' + name)
        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            renderPokePage(pokemon);
        })
};

if (!hashUrl || hashUrl === '#') {
    getPokemons();
} else {
    getPokemon(hashUrl.slice(1));
}

goBackBtn.onclick = function() {
    window.location.hash = '';
    pokeListUl.hidden = false;
};

window.addEventListener('hashchange', function () {
    var pokemonName = window.location.hash.slice(1);
    if (!pokemonName) {
        getPokemons();
    } else {
        getPokemon(pokemonName);
    }
});


var pokePropertyMap = {
    name: 'Name: ',
    base_experience: 'Experience: ',
    height: 'Poke height: ',
    weight: 'Poke weight',
};

function renderPokePage(pokemon) {
    pokeContainer.innerHTML = '';
    pokeContainer.hidden = false;
    Object.keys(pokePropertyMap).forEach(function (key) {
        var pokemonProp = document.createElement('p');
        pokemonProp.textContent = pokePropertyMap[key] + pokemon[key];
        pokeContainer.appendChild(pokemonProp);
    })
}