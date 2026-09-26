import FadeInSection from '../FadeInSection';
import { productHref } from '../../lib/productLinks';
import { trackButtonClick } from '../../utils/analytics';
import {
  ExploreLibraryButton,
  ShareUniqueKnowledgeButton,
} from './LibraryActionButtons';

export default function DarkLibraryCta({
  title,
  description,
  libraryCampaign = 'site_library',
  createCampaign = 'site_create',
  libraryTrack,
  createTrack,
  createLabel = 'Share your unique knowledge',
  createFirst = false,
  children,
}) {
  const libraryHref = productHref('/library', libraryCampaign);
  const createHref = productHref('/', createCampaign);

  const libraryBtn = (
    <ExploreLibraryButton
      href={libraryHref}
      className="btn-secondary !border-[#F7F3EA]/40 !bg-transparent !text-[#F7F3EA] hover:!border-[#F7F3EA] hover:!bg-white/10 hover:!text-[#F7F3EA]"
      onClick={() => libraryTrack && trackButtonClick(libraryTrack)}
    />
  );

  const createBtn = (
    <ShareUniqueKnowledgeButton
      href={createHref}
      className="btn-primary"
      onClick={() => createTrack && trackButtonClick(createTrack)}
    >
      {createLabel}
    </ShareUniqueKnowledgeButton>
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
