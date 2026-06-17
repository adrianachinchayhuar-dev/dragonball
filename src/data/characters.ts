export type Character = {
  id: string;
  name: string;
  race: string;
  power: number;
  image: string;
};

export const CHARACTERS: Character[] = [
  { id: 'goku', name: 'Goku', race: 'Saiyajin', power: 9999, image: 'https://via.placeholder.com/400x400?text=Goku' },
  { id: 'vegeta', name: 'Vegeta', race: 'Saiyajin', power: 9800, image: 'https://via.placeholder.com/400x400?text=Vegeta' },
  { id: 'gohan', name: 'Gohan', race: 'Humano/Saiyajin', power: 7200, image: 'https://via.placeholder.com/400x400?text=Gohan' },
  { id: 'piccolo', name: 'Piccolo', race: 'Namekuseijin', power: 6800, image: 'https://via.placeholder.com/400x400?text=Piccolo' },
  { id: 'trunks', name: 'Trunks', race: 'Saiyajin/Humano', power: 6400, image: 'https://via.placeholder.com/400x400?text=Trunks' },
  { id: 'freezer', name: 'Freezer', race: 'Alien', power: 9500, image: 'https://via.placeholder.com/400x400?text=Freezer' },
];
