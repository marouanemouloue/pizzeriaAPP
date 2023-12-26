import {Pizza} from "../Pizza";

// La liste des pizzas est de type Pizza qui est le model créé avant.
// Chaque pizza a les mêmes propriétés : un id, name, nutriScore, un lien vers son image, sa composition et la date de création.

export var LIST_PIZZAS: Pizza[] = [
  {
    id: 1,
    name: 'Cannibale',
    nutriScore: 2,
    picture: '../assets/images/crispy_cannibale.png',
    compositions: ['S.barbecue', 'v. hachée'],
    created: new Date()
  },
  {
    id: 2,
    name: '4 Fromages',
    nutriScore: 4,
    picture: '../assets/images/4_fromages.png',
    compositions: ['mozzarella', 'chèvre'],
    created: new Date()
  },
  {
    id: 3,
    name: 'Deluxe',
    nutriScore: 2,
    picture: '../assets/images/deluxe.png',
    compositions: ['v. hachée', 'champignons'],
    created: new Date()
  },
  {
    id: 4,
    name: 'Diavola',
    nutriScore: 2,
    picture: '../assets/images/diavola.png',
    compositions: ['oignons', 'piments'],
    created: new Date()
  },
  {
    id: 5,
    name: 'Extravaganzza',
    nutriScore: 3,
    picture: '../assets/images/extravaganzza.png',
    compositions: ['S. tomate', 'oignons'],
    created: new Date()
  },
  {
    id: 6,
    name: 'Hypnotika',
    nutriScore: 5,
    picture: '../assets/images/Hypnotika.png',
    compositions: ['merguez', 'c. fraîche'],
    created: new Date()
  },
  {
    id: 7,
    name: 'Veggie',
    nutriScore: 1,
    picture: '../assets/images/supper_veggie.png',
    compositions: ['roquette'],
    created: new Date()
  },
  {
    id: 8,
    name: 'Texas Grill',
    nutriScore: 2,
    picture: '../assets/images/texas_grill.png',
    compositions: ['S. tomate', 'v. hachée'],
    created: new Date()
  },
  {
    id: 9,
    name: 'Urban Kebab',
    nutriScore: 4,
    picture: '../assets/images/urban_kebab.png',
    compositions: ['v. kebab', 'merguez'],
    created: new Date()
  },
  {
    id: 10,
    name: 'Australienne',
    nutriScore: 2,
    picture: '../assets/images/australienne.png',
    compositions: ['S.barbecue'],
    created: new Date()
  },
  {
    id: 11,
    name: 'Indienne',
    nutriScore: 3,
    picture: '../assets/images/indienne.png',
    compositions: ['c. fraîche', 'champignons'],
    created: new Date()
  },
  {
    id: 12,
    name: 'Chèvre miel',
    nutriScore: 1,
    picture: '../assets/images/chvremiel.png',
    compositions: ['chèvre', 'miel'],
    created: new Date()
  }

]
