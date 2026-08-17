import {
  DocumentIcon,
  FolderPlusIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import RainbowHoverCard from '../home/platform/RainbowHoverCard';
import { formatStatPlus } from '../../lib/kahanaLibraryStats';

export default function LibraryStats({ stats, t }) {
  const items = [
    {
      key: 'hubs',
      value: formatStatPlus(stats.hubs),
      label: t('home.statsHubs'),
      Icon: FolderPlusIcon,
    },
    {
      key: 'files',
      value: formatStatPlus(stats.files),
      label: t('home.statsFiles'),
      Icon: DocumentIcon,
    },
    {
      key: 'users',
      value: formatStatPlus(stats.users),
      label: t('home.statsUsers'),
      Icon: UserGroupIcon,
    },
  ];

  return (
    <div>
      <h2 className="text-center text-3xl font-semibold sm:text-4xl">{t('home.statsTitle')}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-[#666666]">
        {t('home.statsLead')}
      </p>
      <ul className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-stretch">
        {items.map((item) => {
          const { Icon } = item;
          return (
            <li key={item.key} className="flex flex-1">
              <RainbowHoverCard
                className="h-full w-full"
                innerClassName="flex h-full flex-col items-center bg-white px-6 py-8 text-center sm:px-8"
              >
                <span className="rainbow-hover-icon flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF3D8] text-[#495800]">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <p className="mt-5 text-4xl font-semibold tracking-tight text-[#313A00]">
                  {item.value}
                </p>
                <p className="mt-2 text-base text-[#666666]">{item.label}</p>
              </RainbowHoverCard>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
