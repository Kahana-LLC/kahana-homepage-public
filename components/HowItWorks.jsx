import React from 'react';

const steps = [
  {
    id: 1,
    name: 'Sign Up',
    description: 'Create your account in minutes with our simple onboarding process.',
    icon: '🎯',
  },
  {
    id: 2,
    name: 'Configure',
    description: 'Set up your preferences and customize your workflow settings.',
    icon: '⚙️',
  },
  {
    id: 3,
    name: 'Automate',
    description: 'Let our AI-powered system handle your routine tasks automatically.',
    icon: '🤖',
  },
  {
    id: 4,
    name: 'Optimize',
    description: 'Monitor performance and continuously improve your processes.',
    icon: '📈',
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">How It Works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, powerful, and effective
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get started in minutes and transform your workflow with our intuitive platform.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.id} className="relative pl-16">
                <div className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <span className="text-xl">{step.icon}</span>
                  </div>
                  {step.name}
                </div>
                <div className="mt-2 text-base leading-7 text-gray-600">{step.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 