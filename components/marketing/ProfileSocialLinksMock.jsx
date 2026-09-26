'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CameraIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import {
  SiInstagram,
  SiLinkedin,
  SiTiktok,
  SiYoutube,
} from 'react-icons/si';
import {
  adamKershnerProfile,
  adamKershnerSocialLinks,
} from '../../data/adam-kershner-links';

function XIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const ICONS = {
  instagram: SiInstagram,
  tiktok: SiTiktok,
  linkedin: SiLinkedin,
  youtube: SiYoutube,
  x: XIcon,
};

const HANDLES = {
  instagram: '@adam_kershner',
  tiktok: '@adam_kershner',
  youtube: '@adam_kershner',
  x: '@adam_kershner',
  linkedin: 'adam-kershner',
};

const DISPLAY_ORDER = ['instagram', 'tiktok', 'linkedin', 'youtube', 'x'];

const BIO =
  'Founder of Kahana. Building a library where unique knowledge stays findable.';

const COVER_OPTIONS = [
  {
    id: 'bronze',
    label: 'Bronze wash',
    type: 'gradient',
    className: 'bg-gradient-to-br from-[#EDE6D2] via-[#D9DACB] to-[#C4B89A]',
  },
  {
    id: 'desert',
    label: 'Desert light',
    type: 'image',
    src: '/images/desert-background-5.webp',
  },
  {
    id: 'library',
    label: 'In the Library',
    type: 'image',
    src: '/images/in-action.webp',
  },
  {
    id: 'oasis',
    label: 'Oasis calm',
    type: 'image',
    src: '/images/Welcome to Oasis.webp',
  },
];

function EditFab({ label, onClick, className = '', active = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-full shadow-md ring-2 ring-white transition focus:outline-none focus-visible:ring-[#8A6622] ${
        active
          ? 'bg-[#8A6622] text-[#F7F3EA]'
          : 'bg-[#3B2F1A] text-[#F7F3EA] hover:bg-[#5C4520]'
      } ${className}`}
    >
      <PencilSquareIcon className="h-3.5 w-3.5" aria-hidden />
    </button>
  );
}

/**
 * Example Kahana profile chrome: editable photo + cover options, then social links.
 * Parent owns header/subtext. Demo picks only; not a live editor.
 */
export default function ProfileSocialLinksMock() {
  const { name, headshot } = adamKershnerProfile;
  const [coverId, setCoverId] = useState('desert');
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [showCoverPicker, setShowCoverPicker] = useState(true);

  const cover = COVER_OPTIONS.find((c) => c.id === coverId) || COVER_OPTIONS[0];
  const links = DISPLAY_ORDER.map((id) => adamKershnerSocialLinks.find((l) => l.id === id)).filter(
    Boolean
  );

  return (
    <aside
      className="overflow-hidden rounded-[20px] bg-white"
      aria-label={`${name} example Kahana profile with customizable photo, cover, and social links`}
    >
      <div className="relative z-10">
        <div className="relative h-28 overflow-hidden">
          {cover.type === 'image' ? (
            <Image
              src={cover.src}
              alt=""
              fill
              sizes="400px"
              className="object-cover"
            />
          ) : (
            <div className={`absolute inset-0 ${cover.className}`} />
          )}
          <div className="absolute inset-0 bg-[#3B2F1A]/15" aria-hidden />
          <EditFab
            label="Edit cover photo"
            active={showCoverPicker}
            onClick={() => {
              setShowCoverPicker((v) => !v);
              setShowAvatarPicker(false);
            }}
            className="absolute right-3 top-3 z-10"
          />
        </div>

        {/* Outside the cover clip so the avatar can sit over both banner and body */}
        <div className="absolute bottom-0 left-5 z-20 translate-y-1/2">
          <div className="relative">
            <span className="relative block h-16 w-16 overflow-hidden rounded-full border-[3px] border-white bg-[#EDE6D2] shadow-sm">
              <Image src={headshot} alt={name} fill sizes="64px" className="object-cover" />
            </span>
            <EditFab
              label="Edit profile photo"
              active={showAvatarPicker}
              onClick={() => {
                setShowAvatarPicker((v) => !v);
                if (!showAvatarPicker) setShowCoverPicker(false);
              }}
              className="absolute -bottom-1 -right-1 z-10 h-7 w-7 ring-[2.5px]"
            />
          </div>
        </div>
      </div>

      <div className="relative z-0 px-5 pb-5 pt-12">
        {showCoverPicker ? (
          <div className="mb-4 rounded-xl bg-[#F7F3EA] px-3 py-3">
            <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
              <CameraIcon className="h-3.5 w-3.5" aria-hidden />
              Cover photo
            </p>
            <p className="mt-1 text-xs text-[#666666]">
              Choose a banner for your public profile. About 1600×400.
            </p>
            <ul className="mt-3 grid grid-cols-4 gap-2">
              {COVER_OPTIONS.map((option) => {
                const selected = option.id === coverId;
                return (
                  <li key={option.id}>
                    <button
                      type="button"
                      onClick={() => setCoverId(option.id)}
                      aria-label={option.label}
                      aria-pressed={selected}
                      title={option.label}
                      className={`relative block aspect-[16/10] w-full overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6622] ${
                        selected
                          ? 'ring-2 ring-[#8A6622] ring-offset-1 ring-offset-[#F7F3EA]'
                          : 'ring-1 ring-[#E4D9C4] hover:ring-[#C4B89A]'
                      }`}
                    >
                      {option.type === 'image' ? (
                        <Image
                          src={option.src}
                          alt=""
                          fill
                          sizes="72px"
                          className="object-cover"
                        />
                      ) : (
                        <span className={`absolute inset-0 ${option.className}`} />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}

        {showAvatarPicker ? (
          <div className="mb-4 rounded-xl bg-[#F7F3EA] px-3 py-3">
            <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
              <CameraIcon className="h-3.5 w-3.5" aria-hidden />
              Profile photo
            </p>
            <p className="mt-1 text-xs text-[#666666]">
              Replace anytime. Shows on your profile and Library cards. Square, at least 400×400.
            </p>
            <div className="mt-3 flex items-center gap-3">
              <span className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#8A6622] ring-offset-1 ring-offset-[#F7F3EA]">
                <Image src={headshot} alt="" fill sizes="56px" className="object-cover" />
              </span>
              <span className="flex h-14 w-14 flex-col items-center justify-center gap-0.5 rounded-full border border-dashed border-[#C4B89A] bg-white text-[#8A6622]">
                <CameraIcon className="h-4 w-4" aria-hidden />
                <span className="text-[9px] font-semibold uppercase tracking-wide">Upload</span>
              </span>
            </div>
            <p className="mt-2 text-[10px] text-[#8A9378]">Illustrative. Upload on your live profile.</p>
          </div>
        ) : null}

        <p className="font-semibold text-[#3B2F1A]">{name}</p>
        <p className="mt-0.5 text-sm text-[#666666]">Founder, Kahana</p>
        <p className="mt-3 text-sm leading-relaxed text-[#666666]">{BIO}</p>

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
          Profile links
        </p>
        <ul className="mt-3 space-y-2">
          {links.map((link, index) => {
            const Icon = ICONS[link.id];
            const handle = HANDLES[link.id];
            const primary = index === 0;
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    primary
                      ? 'flex items-center gap-3 rounded-xl bg-[#3B2F1A] px-3.5 py-2.5 text-[#F7F3EA] no-underline'
                      : 'flex items-center gap-3 rounded-xl border border-[#E4D9C4] bg-[#F7F3EA] px-3.5 py-2.5 text-[#3B2F1A] no-underline hover:bg-[#EDE6D2]'
                  }
                >
                  {Icon ? <Icon className="h-4 w-4 shrink-0" aria-hidden /> : null}
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">{link.label}</span>
                    {handle ? (
                      <span
                        className={
                          primary
                            ? 'mt-0.5 block truncate text-xs text-[#F7F3EA]/75'
                            : 'mt-0.5 block truncate text-xs text-[#666666]'
                        }
                      >
                        {handle}
                      </span>
                    ) : null}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
