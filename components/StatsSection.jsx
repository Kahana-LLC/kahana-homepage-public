import React from 'react';

const stats = [
  { id: 1, name: 'Active Users', value: '10,000+' },
  { id: 2, name: 'Time Saved', value: '2.5M+ hours' },
  { id: 3, name: 'Success Rate', value: '98%' },
  { id: 4, name: 'Customer Satisfaction', value: '4.9/5' },
];

export default function StatsSection() {
  return (
    <div className="bg-indigo-600">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by thousands of professionals
            </h2>
            <p className="mt-4 text-lg leading-8 text-indigo-200">
              Join the growing community of satisfied users who have transformed their workflow.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-indigo-500/50 p-8">
                <dt className="text-sm leading-6 text-indigo-200">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 