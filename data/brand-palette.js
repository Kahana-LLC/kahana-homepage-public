/**
 * Brand color hex values (mirrors tailwind.config.js oasis-green, desert-yellow, oasis-blue).
 * Update here when Tailwind scales change.
 */
export const brandPaletteFamilies = [
  {
    id: 'oasis-green',
    name: 'Oasis green',
    description: 'Primary brand and UI emphasis.',
    shades: [
      { token: '50', hex: '#F8FAF2' },
      { token: '200', hex: '#E4E9CC' },
      { token: '400', hex: '#AFBE66' },
      { token: '600', hex: '#7A9200' },
      { token: '800', hex: '#495800' },
    ],
  },
  {
    id: 'desert-yellow',
    name: 'Desert yellow',
    description: 'Warm highlights and secondary surfaces.',
    shades: [
      { token: '100', hex: '#FEF8E8' },
      { token: '300', hex: '#FDEABB' },
      { token: '500', hex: '#FBDC8E' },
      { token: '600', hex: '#C9B072' },
      { token: '800', hex: '#645839' },
    ],
  },
  {
    id: 'oasis-blue',
    name: 'Oasis blue',
    description: 'Cool accents, links, and depth.',
    shades: [
      { token: '100', hex: '#DAEBF0' },
      { token: '300', hex: '#91C3D3' },
      { token: '500', hex: '#489CB5' },
      { token: '600', hex: '#3A7C91' },
      { token: '800', hex: '#1D3E48' },
    ],
  },
];
