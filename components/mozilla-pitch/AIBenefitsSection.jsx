import React from 'react';
import Image from 'next/image';

const AIBenefitsSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="w-full max-w-4xl mx-auto mb-8">
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#000B1E]">
          <Image
            src="https://images.pexels.com/photos/34950/pexels-photo.jpg"
            alt="Nature landscape"
            fill
            quality={100}
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Enterprise Browser Intelligence */}
      <div className="mt-12">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Enterprise Browser Intelligence</h4>
        <p className="text-gray-600 mb-6">By integrating our technology into the browser, the following types of enterprise commands will now be possible to accomplish efficiently:</p>
        <ul className="space-y-3">
          <li className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-gray-900 font-medium">"Find all compliance documentation I saved about GDPR requirements"</li>
          <li className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-gray-900 font-medium">"Show me my saved Salesforce dashboards for Q2 performance metrics"</li>
          <li className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-gray-900 font-medium">"Group all my open tabs related to the quarterly security audit"</li>
          <li className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-gray-900 font-medium">"Find my bookmarked Jira tickets for the infrastructure upgrade project"</li>
          <li className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-gray-900 font-medium">"Show me all saved documentation about our API integration with AWS"</li>
          <li className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-gray-900 font-medium">"Find my bookmarked Confluence pages about the new deployment process"</li>
          <li className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-gray-900 font-medium">"Group all open tabs related to the upcoming SOC 2 audit"</li>
          <li className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-gray-900 font-medium">"Show me my saved Tableau reports for customer acquisition metrics"</li>
          <li className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-gray-900 font-medium">"Find all documentation about our enterprise SSO implementation"</li>
          <li className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-gray-900 font-medium">"Group my open tabs about the new employee onboarding process"</li>
          <li className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-gray-900 font-medium">"Show me my bookmarked ServiceNow tickets for the IT infrastructure"</li>
          <li className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-gray-900 font-medium">"Find all saved documentation about our data retention policies"</li>
          <li className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-gray-900 font-medium">"Group all open tabs related to the quarterly business review"</li>
          <li className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-gray-900 font-medium">"Show me my bookmarked Power BI dashboards for sales analytics"</li>
          <li className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-gray-900 font-medium">"Find all saved documentation about our disaster recovery procedures"</li>
          <li className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-gray-900 font-medium">"Group my open tabs about the new vendor security assessment"</li>
          <li className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-gray-900 font-medium">"Show me my bookmarked SharePoint sites for project documentation"</li>
          <li className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-gray-900 font-medium">"Find all saved documentation about our enterprise backup strategy"</li>
          <li className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-gray-900 font-medium">"Group all open tabs related to the annual security training"</li>
          <li className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-gray-900 font-medium">"Show me my bookmarked Workday reports for team performance metrics"</li>
        </ul>
        <p className="text-gray-600 mt-6">These commands showcase how our enterprise browser intelligence integrates your business context to deliver exactly what you need, when you need it—while maintaining enterprise-grade security and compliance.</p>
      </div>
    </div>
  );
};

export default AIBenefitsSection; 