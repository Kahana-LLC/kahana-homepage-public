import React from 'react';
import Image from 'next/image';

const ImplementationSection = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          The Hermes Project implementation is designed for seamless integration with Meta's existing infrastructure, ensuring a smooth rollout while maintaining platform stability and user experience. Our phased approach allows for careful testing, optimization, and user feedback at each stage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Implementation Strategy</h3>
          <p className="text-gray-600">
            A carefully planned, phased rollout that prioritizes user experience and platform stability. Each phase builds upon the previous one, allowing for continuous improvement and optimization based on real-world usage and feedback.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">Technical Integration</h3>
          <p className="text-gray-600">
            Seamless integration with Meta's existing AI infrastructure and platform services. Our implementation leverages existing APIs and services while introducing new capabilities that enhance the overall ecosystem.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Implementation Phases</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Phase 1: Foundation</h4>
            <p className="text-gray-300">
              Initial integration of core AI capabilities, focusing on basic content understanding and recommendation features. This phase establishes the technical foundation and gathers initial user feedback.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Phase 2: Enhancement</h4>
            <p className="text-gray-300">
              Introduction of advanced features like multimodal understanding and cross-platform content management. This phase expands the AI capabilities and improves the user experience.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Phase 3: Optimization</h4>
            <p className="text-gray-300">
              Fine-tuning of AI models and features based on user feedback and performance data. This phase focuses on improving accuracy, speed, and user satisfaction.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Key Implementation Aspects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Infrastructure Setup</h4>
            <p className="text-gray-600">
              Deployment of necessary AI infrastructure, including model servers, data pipelines, and monitoring systems. This ensures reliable performance and scalability.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Platform Integration</h4>
            <p className="text-gray-600">
              Integration with Meta's existing platforms and services, ensuring seamless operation and consistent user experience across all touchpoints.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Testing & Validation</h4>
            <p className="text-gray-600">
              Comprehensive testing of AI features, performance, and user experience. This includes A/B testing, user studies, and performance monitoring.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Success Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Performance Metrics</h4>
            <p className="text-gray-600">
              Track key performance indicators including response times, accuracy rates, and system reliability. These metrics help ensure optimal performance and user satisfaction.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">User Engagement</h4>
            <p className="text-gray-600">
              Monitor user engagement metrics such as feature adoption, content discovery rates, and user satisfaction scores. These insights guide ongoing improvements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationSection; 