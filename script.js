//Dodela imena
const inputs = document.querySelector('input');
const player1Input = document.querySelector('#player1NameInput');
const player2Input = document.querySelector('#player2NameInput');
const player1NameBtn = document.querySelector('#player1NameBtn');
const player2NameBtn = document.querySelector('#player2NameBtn');
const player1Name = document.querySelector('#player1Name');
const player2Name = document.querySelector('#player2Name');
const player1Form = document.querySelector('#player1Form');
const player2Form = document.querySelector('#player2Form');


const dodeliIme = (player, button, name, form) => {
  button.addEventListener('click', () => {
    if (!player.value) {
      alert('Morate uneti ime!');
      return 0;
    }
    name.innerText = `${player.value}`;
    return form.reset();
  });
};

dodeliIme(player1Input, player1NameBtn, player1Name, player1Form);
dodeliIme(player2Input, player2NameBtn, player2Name, player2Form);

//izvlacenje karata
const player1NewCard = document.querySelector('#pullCard1');
const player2NewCard = document.querySelector('#pullCard2');
const card1 = document.querySelector('#player1Card');
const card2 = document.querySelector('#player2Card');
const stop1 = document.querySelector('#stop1');
const stop2 = document.querySelector('#stop2');
const result1 = document.querySelector('#player1Result');
const result2 = document.querySelector('#player2Result');
const resultText = document.querySelector('header > h2');
const karte = [
  './slike/1.png',
  './slike/2.png',
  './slike/3.png',
  './slike/4.png',
  './slike/5.png',
  './slike/6.png',
  './slike/7.png',
  './slike/8.png',
  './slike/9.png',
  './slike/10.png',
  './slike/jack.png',
  './slike/queen.png',
  './slike/king.png',
];

let rezultat1 = 0;
let rezultat2 = 0;

const reset = () => {
  rezultat1 = 0;
  rezultat2 = 0;
  player1NewCard.removeAttribute('disabled');
  player2NewCard.setAttribute('disabled', 'disabled');
  card1.style.opacity = 0;
  card2.style.opacity = 0;
  stop1.setAttribute('disabled', 'disabled');
  stop2.setAttribute('disabled', 'disabled');
  result1.innerText = `Result:`;
  result2.innerText = `Result:`;
  resultText.innerText = '';
  return 0;
};

player1NewCard.addEventListener('click', () => {
  let karta = Math.floor(Math.random() * karte.length);
  card1.style.backgroundImage = `url(${karte[karta]})`;
  card1.style.opacity = 1;
  switch (karta) {
    case 0:
      if (rezultat1 + 11 > 21) {
        rezultat1 += 1;
      } else {
        rezultat1 += 11;
      }
      break;
    case 1:
      rezultat1 += 2;
      break;
    case 2:
      rezultat1 += 3;
      break;
    case 3:
      rezultat1 += 4;
      break;
    case 4:
      rezultat1 += 5;
      break;
    case 5:
      rezultat1 += 6;
      break;
    case 6:
      rezultat1 += 7;
      break;
    case 7:
      rezultat1 += 8;
      break;
    case 8:
      rezultat1 += 9;
      break;
    case 9:
      rezultat1 += 10;
      break;
    case 10:
    case 11:
    case 12:
      rezultat1 += 10;
      break;
    default:
      break;
  }
  result1.innerText = `Result: ${rezultat1}`;
  if (rezultat1 > 21) {
    player1NewCard.setAttribute('disabled', 'disabled');
    stop1.setAttribute('disabled', 'disabled');
    resultText.innerText = `THE WINNER IS ${player2Name.innerText}!`;
    setTimeout(() => reset(), 3500);
  } else {
    stop1.removeAttribute('disabled');
    stop1.addEventListener('click', () => {
      player1NewCard.setAttribute('disabled', 'disabled');
      player2NewCard.removeAttribute('disabled');
      stop1.setAttribute('disabled', 'disabled');
    });
  }
});

player2NewCard.addEventListener('click', () => {
  let karta = Math.floor(Math.random() * karte.length);
  card2.style.backgroundImage = `url(${karte[karta]})`;
  card2.style.opacity = 1;
  switch (karta) {
    case 0:
      if (rezultat2 + 11 > 21) {
        rezultat2 += 1;
      } else {
        rezultat2 += 11;
      }
      break;
    case 1:
      rezultat2 += 2;
      break;
    case 2:
      rezultat2 += 3;
      break;
    case 3:
      rezultat2 += 4;
      break;
    case 4:
      rezultat2 += 5;
      break;
    case 5:
      rezultat2 += 6;
      break;
    case 6:
      rezultat2 += 7;
      break;
    case 7:
      rezultat2 += 8;
      break;
    case 8:
      rezultat2 += 9;
      break;
    case 9:
      rezultat2 += 10;
      break;
    case 10:
    case 11:
    case 12:
      rezultat2 += 10;
      break;
    default:
      break;
  }
  result2.innerText = `Result: ${rezultat2}`;
  if (rezultat2 > 21) {
    player1NewCard.setAttribute('disabled', 'disabled');
    resultText.innerText = `THE WINNER IS ${player1Name.innerText}!`;
    setTimeout(() => reset(), 3500);
  }
  stop2.removeAttribute('disabled');
  stop2.addEventListener('click', () => {
    player2NewCard.setAttribute('disabled', 'disabled');
    stop2.setAttribute('disabled', 'disabled');
    if (rezultat1 > rezultat2)
      resultText.innerText = `THE WINNER IS ${player1Name.innerText}!`;
    if (rezultat2 > rezultat1)
      resultText.innerText = `THE WINNER IS ${player2Name.innerText}!`;
    if (rezultat2 == rezultat1) resultText.innerText = `IT'S A TIE!`;
    setTimeout(() => reset(), 3500);
  });
});
