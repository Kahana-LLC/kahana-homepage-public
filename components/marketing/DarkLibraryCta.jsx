import { FolderPlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import FadeInSection from '../FadeInSection';
import { productHref } from '../../lib/productLinks';
import { trackButtonClick } from '../../utils/analytics';

const libraryBtnClass =
  'btn-secondary inline-flex items-center justify-center gap-2 !border-[#F7F3EA]/40 !bg-transparent no-underline !text-[#F7F3EA] hover:!border-[#F7F3EA] hover:!bg-white/10 hover:!text-[#F7F3EA]';
const createBtnClass = 'btn-primary inline-flex items-center justify-center gap-2 no-underline';

export default function DarkLibraryCta({
  title,
  description,
  libraryCampaign = 'site_library',
  createCampaign = 'site_create',
  libraryTrack,
  createTrack,
  createLabel = 'Create',
  createFirst = false,
  children,
}) {
  const libraryHref = productHref('/library', libraryCampaign);
  const createHref = productHref('/', createCampaign);

  const libraryBtn = (
    <a
      href={libraryHref}
      target="_blank"
      rel="noopener noreferrer"
      className={libraryBtnClass}
      onClick={() => libraryTrack && trackButtonClick(libraryTrack)}
    >
      <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
      Explore the Library
    </a>
  );

  const createBtn = (
    <a
      href={createHref}
      target="_blank"
      rel="noopener noreferrer"
      className={createBtnClass}
      onClick={() => createTrack && trackButtonClick(createTrack)}
    >
      <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
      {createLabel}
    </a>
  );

  return (
    <section className="bg-[#3B2F1A] px-6 py-20 text-[#F7F3EA] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-2xl text-center">
        <FadeInSection>
          <h2 className="text-3xl font-semibold leading-tight !text-[#F7F3EA] sm:text-4xl">{title}</h2>
          {description ? <p className="mt-4 text-lg text-[#F7F3EA]/85">{description}</p> : null}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {createFirst ? (
              <>
                {createBtn}
                {libraryBtn}
              </>
            ) : (
              <>
                {libraryBtn}
                {createBtn}
              </>
            )}
          </div>
          {children}
        </FadeInSection>
      </div>
    </section>
  );
}
