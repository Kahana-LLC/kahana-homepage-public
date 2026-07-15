import {
  AcademicCapIcon,
  BanknotesIcon,
  BoltIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  FilmIcon,
  HeartIcon,
  LightBulbIcon,
  MegaphoneIcon,
  PaintBrushIcon,
  PencilSquareIcon,
  PuzzlePieceIcon,
  ShoppingBagIcon,
  SparklesIcon,
  SunIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';

/**
 * Official Explore topics → `?tags=` slug.
 * Labels with "&" use only the first word (e.g. Beauty & Skincare → beauty).
 * @example https://kahana.io/explore?tags=business
 */
export function exploreTagSlug(label) {
  const primary = label.split(/\s*&\s*/)[0].trim().split(/\s+/)[0];
  return primary.toLowerCase().replace(/[^a-z0-9]/g, '');
}

/** Homepage Explore category chips (label + icon + tag slug). */
export const EXPLORE_CATEGORIES = [
  { label: 'Beauty & Skincare', Icon: SparklesIcon },
  { label: 'Fashion & Style', Icon: ShoppingBagIcon },
  { label: 'Health & Wellness', Icon: HeartIcon },
  { label: 'Sports & Fitness', Icon: TrophyIcon },
  { label: 'Finance', Icon: BanknotesIcon },
  { label: 'Business', Icon: BriefcaseIcon },
  { label: 'Lifestyle', Icon: SunIcon },
  { label: 'Education', Icon: AcademicCapIcon },
  { label: 'Technology', Icon: BoltIcon },
  { label: 'Creative & Design', Icon: PaintBrushIcon },
  { label: 'Marketing', Icon: MegaphoneIcon },
  { label: 'Productivity', Icon: LightBulbIcon },
  { label: 'Entertainment', Icon: FilmIcon },
  { label: 'Spirituality', Icon: BuildingLibraryIcon },
  { label: 'Writing & Publishing', Icon: PencilSquareIcon },
  { label: 'Other', Icon: PuzzlePieceIcon },
].map((item) => ({
  ...item,
  tag: exploreTagSlug(item.label),
}));
