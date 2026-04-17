import React from 'react';
import { motion } from 'framer-motion';
import { sceneComponentMap } from './FeatureScenes';
import { getSceneForFeature } from './sceneMapping';
import { subtleTransition, usePrefersReducedMotion } from './motion';

export default function SolutionFeatureWithVisual({ pageKey, feature, index }) {
  const Scene = sceneComponentMap[getSceneForFeature(pageKey, index)];
  const isEven = index % 2 === 0;
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className="rounded-xl border border-[#4A5745]/10 bg-white p-6 md:p-7 shadow-sm transition-all duration-200 hover:border-kahana-primary-800/30 hover:shadow-md"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...subtleTransition, delay: Math.min(index * 0.05, 0.35) }}
      whileHover={prefersReducedMotion ? undefined : { y: -1 }}
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-start">
        <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
          <h3 className="text-base md:text-lg font-semibold text-[#4A5745] leading-snug tracking-tight mb-3">
            {feature.title}
          </h3>
          <p className="text-sm text-[#4A5745]/90 leading-relaxed mb-5 border-l-2 border-kahana-primary-800/25 pl-4">
            {feature.description}
          </p>
          <ul className="space-y-2.5">
            {feature.details.map((detail) => (
              <li key={detail} className="flex gap-3 text-sm text-[#4A5745]/95 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
          <Scene pageKey={pageKey} featureIndex={index} />
        </div>
      </div>
    </motion.div>
  );
}
