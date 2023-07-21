const actionButtons = document.querySelectorAll('.programmation__header__action-button');

actionButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains("programmation__header__action-button--active")) {
            return;
        } else {
            actionButtons.forEach((element) => element !== button ? element.classList.remove("programmation__header__action-button--active") : null);
            button.classList.add("programmation__header__action-button--active")
        }
    })
})

const filterButtons = document.querySelectorAll('.programmation__header__action-button');

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains("programmation__header__action-button--active")) {
            return;
        } else {
            filterButtons.forEach((element) => element !== button ? element.classList.remove("programmation__header__action-button--active") : null);
            button.classList.add("programmation__header__action-button--active")
        }
    })
});

const programmationContainer = document.querySelector('.programmation__content');
let artists = [];
const fetchArtists = async () => {
    const response = await fetch('../../data/artists.json');
    artists = await response.json();
    // console.log(artists);
}

const showProgrammations = async (date) => {
    // // await fetchArtists();
    // programmationContainer.innerHTML = '';
    // const response = await fetch('../../data/programmations.json');
    // const programmations = await response.json();
    // // console.log(date);
    // // console.log(programmations);
    // const filteredProgrammations = date === "all" ? programmations : programmations.filter((programmation) => programmation.date === date);
    // // console.log(filteredProgrammations);

    // Object.entries(filteredProgrammations.current).map(async (programmation) => {
    //     programmation = programmation[1];
    //     // console.log(programmation)
    //     const response = await fetch('../../data/artists.json')
    //     const artists = await response.json();
    //     let artist = {};
        
    //     await Object.entries(artists).map((person) => {
    //         // console.log(person[1].id, programmation.artist)
    //         if (person[1].id === programmation.artist) {
    //             // console.log(person[1].id === programmation.artist)
    //             return artist = person[1];
    //         }
    //     })

    //     const programmationElement = document.createElement('div');
    //     programmationElement.classList.add('programmation__content__row');
    //     const formattedDate = new Date(programmation.startTime).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });

    //     programmationElement.innerHTML = `
    //         <div class="programmation__content__row">
    //         <a href="artiste.html?artist=${programmation.artist}" data-name="${artist.name}" data-date="${formattedDate}" class="programmation__content__artiste-card">
    //             <img src="./assets/img/artists/${artist.picture}" alt="${artist.name}">
    //         </a>
    //         </div>`;
    //     programmationContainer.appendChild(programmationElement);
    // })
    // CA MARCHE PAS
}

const init = async () => {
    // await showProgrammations('all');
}

init();
