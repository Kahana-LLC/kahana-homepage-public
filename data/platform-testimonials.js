import avatarKelsey from '../assets/images/avatars/kelseyVetterHeadshot.png';
import avatarBenjamin from '../assets/images/avatars/BSJheadshot.png';
import avatarOlivia from '../assets/images/avatars/oliviaMancusoHeadshot.png';
import avatarTay from '../assets/images/avatars/tayLaddHeadshot.png';

/**
 * Platform homepage testimonials (Amy, Kelsey, Benjamin, Alex).
 * Kelsey / Benjamin copy from creator Reviews; Amy / Alex interim until dedicated assets land.
 */
export const platformTestimonials = [
  {
    id: 'amy',
    name: 'Amy',
    role: 'Creator',
    content:
      'Aura Library made it feel possible to put my expertise out there without building a whole company first. One hub was enough to start.',
    image: avatarOlivia,
  },
  {
    id: 'kelsey',
    name: 'Kelsey Vetter',
    role: 'CEO & Pinterest Marketing Expert',
    content:
      "Aura Library has the most user-friendly interface I've come across in a platform of its kind. I love how easy it is to set up, make changes, add value, and connect with your audience. It's allowed me to monetize my knowledge and add a passive revenue stream to my small business.",
    image: avatarKelsey,
    highlight: 'Creators like Kelsey turn expertise into hubs people pay for',
  },
  {
    id: 'benjamin',
    name: 'Benjamin St-Juste',
    role: 'NFL Player & Brand Owner',
    content:
      "Aura Library allows me to go so much more in-depth and share all the knowledge I've learned on and off the field - I can only scratch the surface on Instagram and TikTok.",
    image: avatarBenjamin,
  },
  {
    id: 'alex',
    name: 'Alex',
    role: 'Creator',
    content:
      'I stopped chasing empty ratings and started publishing what actually helps people. Aura makes it easier for the right buyers to find depth.',
    image: avatarTay,
  },
];
