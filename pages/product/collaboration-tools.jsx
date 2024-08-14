import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Footer from '../../components/Footer';
import NavbarDup from '../../components/NavbarDup';
import Image from 'next/image';
import inviteToHub from '../../assets/images/inviteToHub.gif';
import permissionsAndControls from '../../assets/images/permissionsAndControls.gif';
import chooseCollaborationState from '../../assets/images/chooseCollaborationState.gif';
import accessYourHubs from '../../assets/images/accessYourHubs.gif';

const features = [
  {
    title: 'Divide & Conquer',
    description:
      'Invite others to any hub you create as a Viewer, Commenter, Editor, or Admin, and build your hub together.',
    image: inviteToHub,
    alt: 'How to invite people to your Kahana hub',
  },
  {
    title: 'Advanced Permissions & Controls',
    description:
      'As the Owner or Admin of a hub, you have the ability to add new members to the hub, change the roles/permissions of current hub members, and remove members from the hub. You are in complete control!',
    image: permissionsAndControls,
    alt: 'How to manage collaborator permissions in your hub',
  },
  {
    title: 'Pick & Choose',
    description:
      'For any given hub, you can choose whether to be the sole Owner/Admin or invite others to join and contribute (and who you invite).',
    image: chooseCollaborationState,
    alt: 'Make your Kahana hub private or collaborative',
  },
  {
    title: 'Seamlessly Access All Your Hubs',
    description:
      'Easily access and view your role for any hub that you created or that you\'re a collaborator on.',
    image: accessYourHubs,
    alt: 'How to access all of your hubs',
  },
];

const CollaborationTools = () => {
  const [tabOrientation, setTabOrientation] = useState('vertical');

  useEffect(() => {
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)');

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'horizontal' : 'vertical');
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener('change', onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Collaborate with others and monetize together</title>
        <meta
          name="Kahana"
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today!"
        />
      </Head>

      <div className="sticky top-0 z-50">
        <NavbarDup />
      </div>

      {/* Hero section */}
      <section className="py-16 md:py-18">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4 md:px-12 lg:px-24">
            Collaborate with others and monetize together
          </h1>
          <p className="text-lg mb-8 md:px-12 lg:px-24">
            You don&apos;t have to do it alone. Invite team members, colleagues, and experts to contribute to your hubs and share the profits.
          </p>
          <a
            href="https://app.kahana.co/signup"
            className="bg-[#3B675E] text-white py-2 px-6 rounded-md text-center inline-block"
          >
            Get Kahana free
          </a>
        </div>
      </section>

      {/* Features section */}
      <section className="overflow-hidden5">
        {tabOrientation === 'vertical' ? (
          <div className="mt-8 space-y-12 mx-4">
            {features.map((feature, index) => (
              <div key={index} className="space-y-6">
                <div className="max-w-[45rem] mx-auto">
                  <h2 className="text-2xl font-semibold text-black">
                    {feature.title}
                  </h2>
                  <p className="mt-2 text-lg text-black">
                    {feature.description}
                  </p>
                </div>
                <div className="max-w-[45rem] mx-auto">
                  <Image
                    className="w-full"
                    src={feature.image}
                    alt={feature.alt}
                    priority
                    sizes="(min-width: 1024px) 45rem, (min-width: 640px) 100vw, 90vw"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="space-y-6 flex flex-col lg:flex-row lg:space-x-6">
                <div className="max-w-[70rem] mx-auto rounded-lg bg-gray-100 p-4">
                  <div className="flex items-center space-x-6">
                    <div className="w-1/3 pl-4">
                      <h2 className="text-2xl font-semibold text-black">
                        {feature.title}
                      </h2>
                      <p className="mt-2 text-lg text-black">
                        {feature.description}
                      </p>
                    </div>
                    <div className="w-2/3">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 70rem, (min-width: 640px) 100vw, 90vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default CollaborationTools;
