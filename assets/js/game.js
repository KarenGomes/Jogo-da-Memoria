const grid = document.querySelector('.grid');

const characters = [
    'Amethyst',
    'garnet',
    "giant-woman",
    'lapis',
    'pearl', 
    'peridot',
    'pink',
    'ruby',
    'sapphire',
    'steven'    
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');    
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    return card;
}

const loadGame = () => {
    characters.forEach((character)=>{
        const card = createCard(character);
        grid.appendChild(card);
    });
}

loadGame();
