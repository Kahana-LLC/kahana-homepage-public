import Image from 'next/image';
import grayKahanaLogo from '../assets/kahana_logo_wide_gray.svg';

const navigation = {
  important: [
    { name: 'Explore', href: '/explore' },

    { name: 'Blog', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Home', href: '/' },
    { name: 'Log in', href: '#' },
    { name: 'Sign up', href: '#' },
  ],
  support: [
    { name: 'Help center', href: '#' },
    { name: 'Vote for features', href: '#' },
    { name: 'Live Chat', href: '#' },
    { name: 'Help center', href: '#' },
  ],
  social: [
    { name: 'Linkedin', href: '#' },
    { name: 'YouTube', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'TikTok', href: '#' },
    { name: 'Twitter', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <hr className="my-8 h-px bg-slate-300 border-0 mx-8" />
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Image
              className="h-10 "
              src={grayKahanaLogo}
              w
              // width={10}
              // height={20}
              alt="navbar-logo"
            />
            <p className="text-base text-gray-500">
              Kahana is the platform for creators and experts to create content,
              monetize, and collaborate all in one place.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">
                  Important links
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.important.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">Social</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.social.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2022 Kahana LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
