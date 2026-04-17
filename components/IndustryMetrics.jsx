import React from 'react';

const IndustryMetrics = ({ data, industry }) => {
  const metricInsights = {
    patientSatisfaction: {
      description: 'Patient satisfaction scores impact HCAHPS ratings and Medicare reimbursements',
      benchmark: 'Industry Average: 75%',
      impact: 'High'
    },
    operationalEfficiency: {
      description: 'Measures resource utilization and workflow optimization',
      benchmark: 'Industry Average: 65%',
      impact: 'High'
    },
    securityCompliance: {
      description: 'HIPAA compliance and security posture assessment',
      benchmark: 'Industry Standard: 100%',
      impact: 'Critical'
    },
    costPerPatient: {
      description: 'Average cost per patient encounter',
      benchmark: 'Industry Average: $3,500',
      impact: 'High'
    },
    revenueGrowth: {
      description: 'Year-over-year revenue growth rate',
      benchmark: 'Industry Average: 5.8%',
      impact: 'High'
    },
    staffProductivity: {
      description: 'Clinical and administrative staff efficiency',
      benchmark: 'Industry Average: 70%',
      impact: 'Medium'
    },
    averageLengthOfStay: {
      description: 'Average patient length of stay',
      benchmark: 'Industry Average: 4.5 days',
      impact: 'Medium'
    },
    readmissionRate: {
      description: '30-day readmission rate',
      benchmark: 'Industry Average: 15%',
      impact: 'High'
    },
    cybersecurityScore: {
      description: 'Overall cybersecurity posture score',
      benchmark: 'Industry Standard: 85%',
      impact: 'Critical'
    },
    dataBreachRisk: {
      description: 'Risk assessment for potential data breaches',
      benchmark: 'Industry Target: <5%',
      impact: 'Critical'
    }
  };

  const formatMetricValue = (value, metric) => {
    if (!value) return 'N/A';
    
    // Format based on metric type
    switch (metric) {
      case 'costPerPatient':
        return `$${parseFloat(value).toLocaleString()}`;
      case 'operationalEfficiency':
      case 'patientSatisfaction':
      case 'securityCompliance':
      case 'revenueGrowth':
      case 'staffProductivity':
        return `${value}%`;
      case 'averageLengthOfStay':
        return `${value} days`;
      default:
        return value;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(metricInsights).map(([key, insight]) => (
          <div key={key} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                insight.impact === 'Critical' ? 'bg-red-100 text-red-800' :
                insight.impact === 'High' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {insight.impact}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Current Value</span>
                <span className="text-lg font-semibold text-brand-link">
                  {formatMetricValue(data[key], key)}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Benchmark</span>
                <span className="text-sm font-medium text-gray-900">
                  {insight.benchmark}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mt-4">
                {insight.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Recommendations</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-link rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Enhance Security Posture</h4>
              <p className="text-sm text-gray-600">Implement comprehensive security measures to maintain HIPAA compliance and protect patient data.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-link rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Optimize Operations</h4>
              <p className="text-sm text-gray-600">Streamline workflows and resource allocation to improve operational efficiency and reduce costs.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-link rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Monitor Performance</h4>
              <p className="text-sm text-gray-600">Regularly track key metrics and compare against industry benchmarks to identify improvement areas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryMetrics; 