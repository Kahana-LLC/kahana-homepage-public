// Cartoon images: public/assets/team-cartoons/{slug}.jpg

export const teamGalleryMembers = [
  { slug: 'adam_kershner', name: 'Adam Kershner', role: 'CEO & Founder', imageReady: true },
  { slug: 'agrima_gupta', name: 'Agrima Gupta', role: 'Analytics', imageReady: true },
  { slug: 'akansha_parihar', name: 'Akansha Parihar', role: 'Operations', imageReady: true },
  { slug: 'archana_ramalingam', name: 'Archana Ramalingam', role: 'Product Manager', imageReady: true },
  { slug: 'archit_gupta', name: 'Archit Gupta', role: 'Software Engineer', imageReady: true },
  { slug: 'ashutosh_shimpi', name: 'Ashutosh Shimpi', role: 'Product Manager', imageReady: true },
  { slug: 'ashwin_john', name: 'Ashwin John', role: 'Systems Engineer', imageReady: true },
  { slug: 'atharva_joshi', name: 'Atharva Joshi', role: 'Software Engineer', imageReady: true },
  { slug: 'bharadwaj_manikandan', name: 'Bharadwaj Manikandan', role: 'GTM', imageReady: true },
  { slug: 'dhruv_patel', name: 'Dhruv Patel', role: 'Marketing Manager', imageReady: true },
  { slug: 'harsh_vora', name: 'Harsh Vora', role: 'Software Engineer', imageReady: true },
  { slug: 'hasitha_sigatapu', name: 'Hasitha Sigatapu', role: 'Project Management Lead', imageReady: true },
  { slug: 'hemanth_kuncham', name: 'Hemanth Kuncham', role: 'Software Engineer', imageReady: true },
  { slug: 'jaideep_kulkarni', name: 'Jaideep Kulkarni', role: 'Product Manager', imageReady: true },
  { slug: 'krishna_samhitha', name: 'Krishna Samhitha', role: 'GTM Lead', imageReady: true },
  { slug: 'lalith_avinash', name: 'Lalith Avinash', role: 'Software Engineer', imageReady: true },
  { slug: 'likhitha_guggilla', name: 'Likhitha Guggilla', role: 'AI Engineer', imageReady: true },
  { slug: 'lokesh_nenavath', name: 'Lokesh Nenavath', role: 'Product Manager', imageReady: true },
  { slug: 'nithish_sampath', name: 'Nithish Sampath', role: 'Product Manager', imageReady: true },
  { slug: 'pallavi_mise', name: 'Pallavi Mise', role: 'Software Engineer', imageReady: true },
  { slug: 'rashmi_kadwani', name: 'Rashmi Kadwani', role: 'Product Marketing Manager', imageReady: true },
  { slug: 'rashmila_mitra', name: 'Rashmila Mitra', role: 'Analytics', imageReady: true },
  { slug: 'ravi_chandra_dasari', name: 'Ravi Chandra Dasari', role: 'Analytics', imageReady: true },
  { slug: 'rohan_mehere', name: 'Rohan Mehere', role: 'Product Manager', imageReady: true },
  { slug: 'rohit_cmr', name: 'Rohith CMR', role: 'Product Manager', imageReady: true },
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
