// Cartoon images: public/assets/team-cartoons/{slug}.jpg

export const teamGalleryMembers = [
  { slug: 'adam_kershner', name: 'Adam Kershner', role: 'CEO & Founder', imageReady: true },
  { slug: 'archit_gupta', name: 'Archit Gupta', role: 'Software Engineer', imageReady: true },
  { slug: 'ashutosh_shimpi', name: 'Ashutosh Shimpi', role: 'Product Manager', imageReady: true },
  { slug: 'dhruv_patel', name: 'Dhruv Patel', role: 'Marketing Manager', imageReady: true },
  { slug: 'harsh_vora', name: 'Harsh Vora', role: 'Software Engineer', imageReady: true },
  { slug: 'hasitha_sigatapu', name: 'Hasitha Sigatapu', role: 'Project Management Lead', imageReady: true },
  { slug: 'hemanth_kuncham', name: 'Hemanth Kuncham', role: 'Software Engineer', imageReady: true },
  { slug: 'jaideep_kulkarni', name: 'Jaideep Kulkarni', role: 'Product Manager', imageReady: true },
  { slug: 'pallavi_mise', name: 'Pallavi Mise', role: 'Software Engineer', imageReady: true },
  { slug: 'rushyanth_nerellakunta', name: 'Rushyanth Nerellakunta', role: 'Software Engineer', imageReady: true },
  { slug: 'sudhire_karunakaran', name: 'Sudhire Karunakaran', role: 'Product Manager', imageReady: true },
  { slug: 'sushma_emmadi', name: 'Sushma Emmadi', role: 'Analytics', imageReady: true },
  { slug: 'veda_gupta', name: 'Veda Gupta', role: 'Software Engineer', imageReady: true },
];

export function teamCartoonPath(slug) {
  return `/assets/team-cartoons/${slug}.jpg`;
}

function initialsFromName(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export function getTeamMemberInitials(name) {
  return initialsFromName(name);
}
