import Link from 'next/link';
import {
  ArrowRightIcon,
  ArrowTrendingUpIcon,
  AcademicCapIcon,
  ArchiveBoxArrowDownIcon,
  BanknotesIcon,
  BellIcon,
  BookmarkIcon,
  BookOpenIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  FilmIcon,
  FireIcon,
  FolderIcon,
  HeartIcon,
  IdentificationIcon,
  LightBulbIcon,
  LockClosedIcon,
  LockOpenIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  PresentationChartLineIcon,
  RectangleStackIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  UserPlusIcon,
  UsersIcon,
  ArrowPathRoundedSquareIcon,
} from '@heroicons/react/24/outline';
import RainbowHoverCard from '../home/platform/RainbowHoverCard';

const FEATURE_ICONS = {
  explore: MagnifyingGlassIcon,
  hubs: RectangleStackIcon,
  'preview-reels': FilmIcon,
  clubs: UserGroupIcon,
  analytics: ChartBarIcon,
  earning: BanknotesIcon,
  aura: SparklesIcon,
  'aura-pathways': ArrowTrendingUpIcon,
  'aura-and-trust': ShieldCheckIcon,
  profiles: IdentificationIcon,
  trust: LockClosedIcon,
  'for-you': HeartIcon,
  saved: BookmarkIcon,
  files: FolderIcon,
  'archive-import': ArchiveBoxArrowDownIcon,
  collaborators: UsersIcon,
  messages: ChatBubbleLeftRightIcon,
  notifications: BellIcon,
  notes: DocumentTextIcon,
  following: UserPlusIcon,
  'cognition-streak': FireIcon,
  'book-clubs': UserGroupIcon,
  'selling-digital-products': BanknotesIcon,
  'selling-ebooks': BookOpenIcon,
  'selling-courses': AcademicCapIcon,
  workshops: PresentationChartLineIcon,
  playbooks: ClipboardDocumentListIcon,
  journals: PencilSquareIcon,
  'study-and-research': MagnifyingGlassIcon,
  'personal-library': BookmarkIcon,
  'video-companion': FilmIcon,
  'newsletter-companion': EnvelopeIcon,
  'public-domain-ebooks': ArchiveBoxArrowDownIcon,
  'cohorts-and-communities': UsersIcon,
  'paid-memberships': ArrowPathRoundedSquareIcon,
  'get-discovered': SparklesIcon,
  'collaborate-on-hubs': UserPlusIcon,
  'share-your-profile': IdentificationIcon,
  'finish-more-books': FireIcon,
  'learn-a-skill': LightBulbIcon,
  'unlock-paid-hubs': LockOpenIcon,
  'meet-people': ChatBubbleLeftRightIcon,
  'learn-in-depth': DocumentTextIcon,
};

export default function FeatureCatalogCard({ href, title, summary, slug, scrollItem = false }) {
  const Icon = FEATURE_ICONS[slug];
  return (
    <li
      className={
        scrollItem
          ? 'flex w-[17.5rem] shrink-0 snap-start sm:w-[19rem]'
          : 'flex min-w-[16rem] flex-1'
      }
    >
      <Link href={href} className="flex h-full w-full no-underline">
        <RainbowHoverCard
          className="h-full w-full"
          innerClassName="flex h-full flex-col bg-white px-6 py-7"
        >
          {Icon ? (
            <>
              <span className="rainbow-hover-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D9DACB] text-[#4F5140]">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <span className="mt-4 h-0.5 w-8 rounded-full bg-[#8A6622]" aria-hidden />
            </>
          ) : null}
          <h3 className={`${Icon ? 'mt-4' : ''} text-lg font-semibold text-[#3B2F1A]`}>{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#666666]">{summary}</p>
          <p className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-[#8A6622]">
            Learn more
            <ArrowRightIcon className="h-4 w-4 shrink-0" aria-hidden />
          </p>
        </RainbowHoverCard>
      </Link>
    </li>
  );
}
