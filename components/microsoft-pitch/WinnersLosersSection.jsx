import React from 'react';
import Image from 'next/image';

const WinnersLosersSection = () => {
  return (
    <div className="space-y-8">
      {/* Cover Photo */}
      <div className="relative h-[32rem] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src="/images-microsoft/winners-losers.jpg"
          alt="Enterprise software competitive landscape"
          fill
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {/* Top Left - Salesforce */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-tl-xl rounded-tr-xl md:rounded-tr-none rounded-bl-xl md:rounded-bl-none border border-gray-100">
          <h3 className="text-2xl font-semibold text-black">Salesforce: CRM Leadership</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              Salesforce's Einstein AI delivers strong value in customer relationship management, with 90% of enterprise CRM functionality. 
              Their focus on customer data and AI-powered insights gives them a significant advantage in the CRM space, 
              commanding 75% market share in enterprise CRM.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a href="https://www.techcrunch.com/salesforce-einstein-ai-analysis" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">TechCrunch Analysis</a>
              <a href="https://www.zdnet.com/salesforce-einstein-enterprise-review" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">ZDNet Review</a>
            </div>
          </div>
        </div>

        {/* Top Right - Oracle */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-tr-xl rounded-tl-xl md:rounded-tl-none rounded-br-xl md:rounded-br-none border border-gray-100">
          <h3 className="text-2xl font-semibold text-black">Oracle: Database Dominance</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              Oracle's AI features focus on database optimization and enterprise resource planning, enabling efficient data management 
              and business process automation. Their deep integration with enterprise systems gives them a strong position in the 
              database market.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a href="https://www.infoworld.com/oracle-ai-database-analysis" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">InfoWorld Report</a>
            </div>
          </div>
        </div>

        {/* Bottom Left - SAP */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-bl-xl rounded-br-xl md:rounded-br-none rounded-tl-xl md:rounded-tl-none border border-gray-100">
          <h3 className="text-2xl font-semibold text-black">SAP: ERP Innovation</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              SAP's AI-powered enterprise resource planning introduces intelligent process automation and real-time analytics, 
              with 80% of enterprise users reporting significant efficiency gains. Their focus on business process optimization 
              is creating new standards for AI-assisted operations.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <a href="https://www.enterpriseirregulars.com/sap-ai-erp-analysis" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Enterprise Irregulars</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnersLosersSection; 