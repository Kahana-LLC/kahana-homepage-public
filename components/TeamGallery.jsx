import Image from 'next/image';
import { teamGalleryMembers, getTeamMemberInitials, teamCartoonPath } from '../data/team-gallery';
import { getCloudinaryImageUrl } from '../utils/cloudinary-mapper';

const IMAGE_SIZE = 384;

function TeamMemberCard({ member }) {
  const { slug, name, role, imageReady } = member;
  const initials = getTeamMemberInitials(name);

  return (
    <li className="flex flex-col overflow-hidden rounded-2xl border border-oasis-green-600/15 bg-white shadow-sm">
      <div className="relative h-36 w-full overflow-hidden bg-white sm:h-40">
        {imageReady ? (
          <Image
            src={getCloudinaryImageUrl(teamCartoonPath(slug), {
              width: IMAGE_SIZE,
              height: IMAGE_SIZE,
              quality: 'auto:good',
            })}
            alt={`Cartoon portrait of ${name}`}
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
            className="h-full w-full origin-top scale-[1.45] object-contain object-top"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-oasis-green-100 to-oasis-green-50"
            aria-hidden
          >
            <span className="text-3xl font-semibold tracking-tight text-oasis-green-600/80 sm:text-4xl">
              {initials}
            </span>
          </div>
        )}
      </div>
      <div className="px-3 py-2.5">
        <h3 className="text-base font-semibold text-oasis-green-800">{name}</h3>
        {role ? <p className="mt-1 text-sm text-oasis-green-600">{role}</p> : null}
      </div>
    </li>
  );
}

export default function TeamGallery() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-oasis-green-800 sm:text-4xl">Meet the team</h2>
      <p className="mt-4 max-w-2xl text-base text-oasis-green-800 leading-relaxed">
        The people building Oasis across product, engineering, marketing, and security.
      </p>
      <ul
        role="list"
        className="mt-10 grid grid-cols-2 items-start gap-5 sm:grid-cols-3 lg:grid-cols-4"
      >
        {teamGalleryMembers.map((member) => (
          <TeamMemberCard key={member.slug} member={member} />
        ))}
      </ul>
    </div>
  );
}
