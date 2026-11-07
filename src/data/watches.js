// Edit this file to change the collection. `look` controls the generated SVG artwork.
// look.metal: steel | gold | rose | black | titanium | platinum
// look.strap: leather colour (hex) or 'bracelet'
// look.complication: 'date' | 'chrono' | 'moon' | 'none'

export const FEATURED_ID = 'sovereign-tourbillon';

export const CATEGORIES = ['All', 'Classic', 'Sport', 'Luxury'];

export const watches = [
  {
    id: 'aurelia-36',
    name: 'Aurelia 36',
    category: 'Classic',
    price: 4200,
    short: 'A dress watch in warm steel with an ivory dial.',
    description:
      'Aurelia is the watch we measure everything else against. A slim 36 mm case, a softly domed ivory dial and leaf hands that read cleanly at a glance. It sits under a shirt cuff and is rarely noticed until it is admired.',
    specs: { movement: 'Automatic CV-110', caseMaterial: 'Polished steel', caseSize: '36 mm', waterResistance: '50 m', powerReserve: '42 hours' },
    look: { metal: 'steel', strap: '#4b3a2e', style: 'classic', complication: 'date', dial: { bg: '#e9e4d6', bg2: '#f6f2e7', ink: '#2a2825', hand: '#2a2825' } },
  },
  {
    id: 'meridian-slim',
    name: 'Meridian Slim',
    category: 'Classic',
    price: 5800,
    short: 'Ultra-thin rose gold case with a sunburst silver dial.',
    description:
      'At 6.9 mm thick, Meridian Slim is the thinnest watch in the house. The rose gold case is hand-polished, and the silver dial carries a fine sunburst finish that shifts with the light.',
    specs: { movement: 'Manual CV-40', caseMaterial: '18k rose gold', caseSize: '38 mm', waterResistance: '30 m', powerReserve: '56 hours' },
    look: { metal: 'rose', strap: '#2c2522', style: 'classic', complication: 'none', dial: { bg: '#cfd1d3', bg2: '#eceeef', ink: '#3a3633', hand: '#6e4a3a' } },
  },
  {
    id: 'halden-automatic',
    name: 'Halden Automatic',
    category: 'Classic',
    price: 3450,
    short: 'Slate dial, steel bracelet, an everyday three-hander.',
    description:
      'Halden is built to be worn daily. A graphite dial with applied markers, a brushed and polished bracelet, and a movement visible through a sapphire caseback.',
    specs: { movement: 'Automatic CV-210', caseMaterial: 'Brushed steel', caseSize: '39 mm', waterResistance: '100 m', powerReserve: '48 hours' },
    look: { metal: 'steel', strap: 'bracelet', style: 'classic', complication: 'date', dial: { bg: '#4a4e55', bg2: '#6a6f77', ink: '#eceae4', hand: '#eceae4' } },
  },
  {
    id: 'tidewalker-300',
    name: 'Tidewalker 300',
    category: 'Sport',
    price: 3900,
    short: 'A 300 m diver with a ceramic bezel and luminous markers.',
    description:
      'Tidewalker is tested to 300 metres and finished to be read in the dark. The unidirectional ceramic bezel clicks with firm resistance, and the dial markers are filled with a pale green luminous compound.',
    specs: { movement: 'Automatic CV-320', caseMaterial: 'Steel, ceramic bezel', caseSize: '42 mm', waterResistance: '300 m', powerReserve: '60 hours' },
    look: { metal: 'steel', strap: 'bracelet', style: 'sport', complication: 'date', bezel: '#1d2a3d', dial: { bg: '#0f1722', bg2: '#1c2a3f', ink: '#e9f0d6', hand: '#e9f0d6' } },
  },
  {
    id: 'apex-chrono',
    name: 'Apex Chrono',
    category: 'Sport',
    price: 4600,
    short: 'A black chronograph with two sub-dials and a tachymeter.',
    description:
      'Apex is a mechanical chronograph with a column-wheel mechanism and crisp pushers. The black case is coated for scratch resistance, and the two sub-dials keep elapsed time to the second.',
    specs: { movement: 'Chronograph CV-450', caseMaterial: 'DLC-coated steel', caseSize: '43 mm', waterResistance: '100 m', powerReserve: '54 hours' },
    look: { metal: 'black', strap: '#1c1c1e', style: 'sport', complication: 'chrono', bezel: '#17181a', dial: { bg: '#6b6e73', bg2: '#8d9096', ink: '#141416', hand: '#141416' } },
  },
  {
    id: 'strato-titanium',
    name: 'Strato Titanium',
    category: 'Sport',
    price: 5200,
    short: 'Grade 5 titanium, light enough to forget on the wrist.',
    description:
      'Strato weighs 58 grams on its bracelet. The case and links are Grade 5 titanium with a matte blasted finish, paired with an anthracite dial and a seconds hand in muted orange.',
    specs: { movement: 'Automatic CV-330', caseMaterial: 'Grade 5 titanium', caseSize: '41 mm', waterResistance: '200 m', powerReserve: '70 hours' },
    look: { metal: 'titanium', strap: 'bracelet', style: 'sport', complication: 'date', bezel: '#3a3c40', dial: { bg: '#2a2c2f', bg2: '#45484d', ink: '#e8e8e6', hand: '#e8e8e6', accent: '#d9822b' } },
  },
  {
    id: 'sovereign-tourbillon',
    name: 'Sovereign Tourbillon',
    category: 'Luxury',
    price: 48500,
    short: 'Flying tourbillon in 18k yellow gold on a black dial.',
    description:
      'Sovereign carries a flying tourbillon visible through a window at six o’clock. The 18k yellow gold case is finished by hand over several days, and the black onyx dial lets the gold markers stand out. Each piece is numbered and limited to 120 per year.',
    specs: { movement: 'Tourbillon CV-900', caseMaterial: '18k yellow gold', caseSize: '40 mm', waterResistance: '30 m', powerReserve: '72 hours' },
    look: { metal: 'gold', strap: '#17120e', style: 'luxury', complication: 'moon', dial: { bg: '#0e0e10', bg2: '#25252a', ink: '#e5cf98', hand: '#e5cf98' } },
  },
  {
    id: 'eclipse-perpetual',
    name: 'Eclipse Perpetual',
    category: 'Luxury',
    price: 32000,
    short: 'Platinum case, midnight dial and a moon-phase aperture.',
    description:
      'Eclipse tracks the moon with an accuracy of one day in 122 years. The platinum case is paired with a midnight-blue dial and white-gold hands, finished with a hand-stitched alligator strap.',
    specs: { movement: 'Perpetual CV-780', caseMaterial: 'Platinum 950', caseSize: '39 mm', waterResistance: '30 m', powerReserve: '65 hours' },
    look: { metal: 'platinum', strap: '#1a2233', style: 'luxury', complication: 'moon', dial: { bg: '#101a30', bg2: '#27406b', ink: '#e9ecf2', hand: '#e9ecf2' } },
  },
];

export const getWatch = (id) => watches.find((w) => w.id === id);
