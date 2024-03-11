let personajes = document.querySelector("#personajes");

fetch("https://rickandmortyapi.com/api/character")
    .then((resp) => resp.json()) 
    .then((data) => {
        console.log(data); 
        
        data.results.forEach((item) => {
            const characterContainer = document.createElement("div");
            characterContainer.classList.add("character-container");

            const characterImage = document.createElement("img");
            characterImage.src = item.image;

            const characterName = document.createElement("h4");
            characterName.textContent = item.name;

            const characterInfo = document.createElement("div");
            characterInfo.classList.add("personajes-info");
            
            const characterStatus = document.createElement("p");
            characterStatus.textContent = `Estado: ${item.status}`;

            const characterSpecies = document.createElement("p");
            characterSpecies.textContent = `Especie: ${item.species}`;

            characterInfo.appendChild(characterStatus);
            characterInfo.appendChild(characterSpecies);

            characterContainer.appendChild(characterImage);
            characterContainer.appendChild(characterName);
            characterContainer.appendChild(characterInfo);

            personajes.appendChild(characterContainer);
        });
    });
