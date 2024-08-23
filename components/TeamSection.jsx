import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

// images
import adam from '../assets/headshots/Adam_Kershner.webp';
import emilio from '../assets/headshots/Emilio_Abelmann.webp';
import eugene from '../assets/headshots/eugene_kaminsky.webp';
import hugh from '../assets/headshots/hugh_molotsi.webp';
import jonathan from '../assets/headshots/Jonathan_Gans.webp';
import william from '../assets/headshots/william_reehil.webp';
import greg from '../assets/headshots/Gregory_Gray.webp';
import denali from '../assets/headshots/Denali_Keefe.webp';
import benjamin from '../assets/headshots/Benjamin_St_Juste.webp';
import aparna from '../assets/headshots/Aparna_Chaturvedula.webp';
import kelsie from '../assets/headshots/Kelsie_Exley.webp';
import jyoti from '../assets/headshots/Jyoti_Vashist.webp';
import kirtana from '../assets/headshots/Kirtana_Sridharan.webp';
import monty from '../assets/headshots/Monty_Lans.webp';
import saumya from '../assets/headshots/Saumya Roy.webp';
import shivani from '../assets/headshots/Shivani_Chandrashekar.webp';
import sinchana from '../assets/headshots/Sinchana_Thippeswamy.webp';
import jordan from '../assets/headshots/Jordan_Kern.webp';
import veda from '../assets/headshots/veda_kanduri.webp';
import siddhartha from '../assets/headshots/siddhartha_roy.webp';

const people = [
  { name: 'Kelsie Exley', role: 'Lead Creator Ambassador', imageUrl: kelsie },
  { name: 'Benjamin St-Juste', role: 'Creator Ambassador', imageUrl: benjamin },
  { name: 'Monty Lans', role: 'Creator Ambassador', imageUrl: monty },
  { name: 'Jyoti Vashist', role: 'Product', imageUrl: jyoti },
  { name: 'Siddhartha Roy', role: 'Product', imageUrl: siddhartha },
  { name: 'Saumya Roy', role: 'Product', imageUrl: saumya },
  { name: 'Aparna Chaturvedula', role: 'Product', imageUrl: aparna },
  { name: 'Sinchana Thippeswamy', role: 'Product', imageUrl: sinchana },
  { name: 'Veda Kanduri', role: 'Product', imageUrl: veda },
  { name: 'Denali Keefe', role: 'Marketing', imageUrl: denali },
  { name: 'Emilio V Abelmann', role: 'Partnerships', imageUrl: emilio },
  { name: 'William Reehil', role: 'Technical', imageUrl: william },
  { name: 'Kirtana Sridharan', role: 'Data Analytics', imageUrl: kirtana },
  { name: 'Shivani Chandrashekar', role: 'Data Analytics', imageUrl: shivani },
  { name: 'Jordan Kern', role: 'CMO', imageUrl: jordan },
  { name: 'Adam Kershner', role: 'COO', imageUrl: adam },
  { name: 'Jonathan Gans', role: 'CEO', imageUrl: jonathan },
  { name: 'Eugene Kaminsky', role: 'Advisor', imageUrl: eugene },
  { name: 'Gregory Gray', role: 'Advisor', imageUrl: greg },
  { name: 'Hugh Molotsi', role: 'Advisor', imageUrl: hugh },
];

export default function TeamSection() {
  return (
    <>
      <Head>
        <title>Kahana HQ Team</title>
        <meta name="description" content="Meet the Kahana team, the brilliant minds driving our mission forward." />
        <meta property="og:title" content="Kahana HQ Team" />
        <meta property="og:description" content="Meet the Kahana team, the brilliant minds driving our mission forward." />
        <meta property="og:image" content="/path/to/og-image.jpg" />
        <meta property="og:url" content="https://www.kahana.co/team" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kahana HQ Team" />
        <meta name="twitter:description" content="Meet the Kahana team, the brilliant minds driving our mission forward." />
        <meta name="twitter:image" content="/path/to/twitter-image.jpg" />
      </Head>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Kahana HQ
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The team of hungry avengers behind Kahana.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <Image
                    className="h-32 w-32 rounded-full" // Updated size
                    src={person.imageUrl}
                    alt={`Headshot of ${person.name}, ${person.role}`} // Descriptive alt text
                    loading="lazy" // Built-in lazy loading
                    placeholder="blur" // Use blur-up effect for better UX
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-green-700">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
