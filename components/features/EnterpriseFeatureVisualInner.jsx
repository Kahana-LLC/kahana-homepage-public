import React from 'react';
import { sceneComponentMap } from '../solutions/visuals/FeatureScenes';
import { getSceneForFeature } from '../solutions/visuals/sceneMapping';
import { ENTERPRISE_FEATURE_SCENE_BY_SLUG } from '../../data/enterpriseFeatureVisualMap';

const PAGE_KEY = 'oasis-enterprise-browser';

/**
 * Client-only: pulls in Framer-based feature scenes. Render via dynamic(..., { ssr: false }).
 */
export default function EnterpriseFeatureVisualInner({ slug }) {
  const index = ENTERPRISE_FEATURE_SCENE_BY_SLUG[slug];
  if (index === undefined) return null;

  const sceneKey = getSceneForFeature(PAGE_KEY, index);
  const Scene = sceneComponentMap[sceneKey];
  if (!Scene) return null;

  return <Scene pageKey={PAGE_KEY} />;
}
