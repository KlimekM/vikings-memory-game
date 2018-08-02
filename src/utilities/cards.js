export const vikingsCards = [
  {
    id: 1,
    name: 'Elflein',
    number: 65,
    imgSrc: 'https://res.cloudinary.com/nflclubs/image/private/t_thumb_squared/f_auto/vikings/ibydqfli9t97d02buhj6.jpg',
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 2,
    name: 'Cousins',
    number: 8,
    imgSrc: 'https://res.cloudinary.com/nflclubs/image/private/t_thumb_squared/f_auto/vikings/khugu9xobhkodtmfpy5u.jpg',
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 3,
    name: 'Cook',
    number: 33,
    imgSrc: 'https://res.cloudinary.com/nflclubs/image/private/t_thumb_squared/f_auto/vikings/twzccqszxhlzugzn6hrg.jpg',
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 4,
    name: 'Diggs',
    number: 14,
    imgSrc: 'https://res.cloudinary.com/nflclubs/image/private/t_thumb_squared/f_auto/vikings/sxltpvpbpavogdipprhd.jpg',
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 5,
    name: 'Thielen',
    number: 19,
    imgSrc: 'https://res.cloudinary.com/nflclubs/image/private/t_thumb_squared/f_auto/vikings/kcvahr3wkurwl5jffg9z.jpg',
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 6,
    name: 'Rudolph',
    number: 82,
    imgSrc: 'https://res.cloudinary.com/nflclubs/image/private/t_thumb_squared/f_auto/vikings/kxt3v8kt6biiz4bo8ggb.jpg',
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 7,
    name: 'Rhodes',
    number: 29,
    imgSrc: 'https://res.cloudinary.com/nflclubs/image/private/t_thumb_squared/f_auto/vikings/t7jgfjevqf035p7lohow.jpg',
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 8,
    name: 'Smith',
    number: 22,
    imgSrc: 'https://res.cloudinary.com/nflclubs/image/private/t_thumb_squared/f_auto/vikings/hubfxex6nvkgc7hs2q2c.jpg',
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 9,
    name: 'Hunter',
    number: 99,
    imgSrc: 'https://res.cloudinary.com/nflclubs/image/private/t_thumb_squared/f_auto/vikings/kgmybmqktfvw2wpablhb.jpg',
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 10,
    name: 'Griffen',
    number: 97,
    imgSrc: 'https://res.cloudinary.com/nflclubs/image/private/t_thumb_squared/f_auto/vikings/snms7x5lmenlol8owgmt.jpg',
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 11,
    name: 'Barr',
    number: 55,
    imgSrc: 'https://res.cloudinary.com/nflclubs/image/private/t_thumb_squared/f_auto/vikings/z4epxqhyydupw1syo3oo.jpg',
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 12,
    name: 'Joseph',
    number: 98,
    imgSrc: 'https://res.cloudinary.com/nflclubs/image/private/t_thumb_squared/f_auto/vikings/fii1ppk4wegn3cml8jfh.jpg',
    isFlipped: false,
    isMatched: false,
  },
];

/* slightly modified implementation of the Fisher-Yates shuffle from here: https://bost.ocks.org/mike/shuffle/ */
const shuffle = (array) => {
  let originalArrayLength = array.length;
  let i = 0;
  let j = 0;

  // While there remain elements to shuffle
  while (originalArrayLength) {

    // Pick a remaining element
    i = Math.floor(Math.random() * (originalArrayLength -= 1));

    // And swap it with the current element.
    j = array[originalArrayLength];
    array[originalArrayLength] = array[i];
    array[i] = j;
  }

  return array;
}

export const createCardDeck = (cards) => {
  /* creating a deep clone of the original 12 card array so that there are 12 card pairs and I can increment the id to pass it as a unique identifier key for the card component */
  const cardsClone = JSON.parse(JSON.stringify(cards)).map((card) => {
    card.id += 12;
    return card;
  });

  return shuffle([...cards, ...cardsClone]);
};
