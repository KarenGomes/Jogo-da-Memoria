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

let firstCard = ''; 
let secondCard = '';

const revealCard = ({target}) => {
    if(target.parentNode.className.includes('reveal-card')) {
        return;
    }

    target.parentNode.classList.add('reveal-card');
} 

const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');    
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.jpg')`;

    card.appendChild(front);    
    card.appendChild(back);

    card.addEventListener('click', revealCard);

    return card;
}

const loadGame = () => {

    const duplicateCharacters = [...characters, ...characters];

    const shuffledArray = duplicateCharacters.sort(()=> Math.random() - 0.5);

    shuffledArray.forEach((character)=>{
        const card = createCard(character);
        grid.appendChild(card);
    });

}

loadGame();
