import React from 'react';

export default function DeviceVsBrowserBand({
  heading,
  intro,
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
}) {
  return (
    <section className="bg-white py-16 md:py-20 border-b border-[#4A5745]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {heading && (
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-4 tracking-tight">{heading}</h2>
        )}
        {intro && (
          <p className="text-[#4A5745]/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">{intro}</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <div className="rounded-xl border border-[#4A5745]/10 bg-[#f8faf9] p-6 md:p-7 shadow-sm">
            <h3 className="text-lg font-semibold text-[#4A5745] mb-3">{leftTitle}</h3>
            <ul className="space-y-2.5 text-sm text-[#4A5745]/95 leading-relaxed">
              {leftItems.map((text, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#4A5745]/10 bg-white p-6 md:p-7 shadow-sm">
            <h3 className="text-lg font-semibold text-[#4A5745] mb-3">{rightTitle}</h3>
            <ul className="space-y-2.5 text-sm text-[#4A5745]/95 leading-relaxed">
              {rightItems.map((text, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
