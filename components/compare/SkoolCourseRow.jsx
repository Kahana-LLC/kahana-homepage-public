import { useState } from 'react';

const COURSES = [
  { id: 'skool', title: 'Classroom on Skool', meta: 'Members' },
  { id: 'hub', title: 'Same course on Kahana', meta: 'Library listing' },
];

/** Course list where the same pack lives on Skool and on Kahana. */
export default function SkoolCourseRow() {
  const [open, setOpen] = useState('hub');

  return (
    <div className="overflow-hidden rounded-[20px] border border-[#E4D9C4] bg-white">
      <div className="border-b border-[#E4D9C4] px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#8A6622]">Classroom</p>
        <p className="mt-1 text-sm font-semibold text-[#3B2F1A]">Community courses</p>
      </div>
      <ul className="divide-y divide-[#E4D9C4]">
        {COURSES.map((course) => {
          const on = open === course.id;
          return (
            <li key={course.id}>
              <button
                type="button"
                onClick={() => setOpen(course.id)}
                className={`flex w-full items-center justify-between px-4 py-4 text-left ${
                  on ? 'bg-[#F7F3EA]' : 'bg-white'
                }`}
              >
                <span>
                  <span className="block font-semibold text-[#3B2F1A]">{course.title}</span>
                  <span className="mt-1 block text-sm text-[#666666]">
                    {on && course.id === 'hub'
                      ? 'Files, video, and the checklist. Anyone searching Library can open it.'
                      : 'The group you already run.'}
                  </span>
                </span>
                <span className="shrink-0 text-xs font-semibold text-[#8A6622]">{course.meta}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
