export const materialData = {
  'titanium-vapor-chambers': {
    name: 'Titanium Vapor Chambers',
    type: 'Structural Thermal Management',
    thermalConductivity: '400–700 W/mK',
    thickness: '0.3–1 mm',
    flexibility: 'Rigid',
    weight: 'Low',
    transparency: 'Opaque',
    applicationArea: 'Glasses arms, puck housing',
    cost: 'Medium–High',
    uniqueStrength: 'Excellent mechanical strength with low weight, skin-safe and corrosion-resistant',
    summary: 'Ideal for structured, wearable cooling in areas requiring both strength and thermal dissipation. Perfect for mechanical components that need to support device weight while managing heat.'
  },
  'graphene-films': {
    name: 'Graphene Films',
    type: 'Ultra-Thin Thermal Management',
    thermalConductivity: '>1000 W/mK',
    thickness: 'Few nanometers–micrometers',
    flexibility: 'Highly flexible',
    weight: 'Ultra-low',
    transparency: 'Transparent',
    applicationArea: 'Displays, lenses, internal PCBs',
    cost: 'High (but decreasing)',
    uniqueStrength: 'World\'s most thermally conductive material, transparent and ultra-thin',
    summary: 'Perfect for thin, transparent, and flexible surfaces where traditional cooling solutions cannot fit. Ideal for optical systems and displays.'
  }
};

export const filterOptions = {
  name: [
    'Titanium Vapor Chambers',
    'Graphene Films'
  ],
  type: ['Structural Thermal Management', 'Ultra-Thin Thermal Management'],
  flexibility: ['Rigid', 'Highly flexible'],
  weight: ['Low', 'Ultra-low'],
  transparency: ['Opaque', 'Transparent'],
  cost: ['Medium–High', 'High (but decreasing)'],
  applicationArea: ['Glasses arms, puck housing', 'Displays, lenses, internal PCBs']
};

export const comparisonFields = [
  { key: 'name', label: 'Material', type: 'text' },
  { key: 'type', label: 'Type', type: 'text' },
  { key: 'thermalConductivity', label: 'Thermal Conductivity', type: 'text' },
  { key: 'thickness', label: 'Thickness', type: 'text' },
  { key: 'flexibility', label: 'Flexibility', type: 'text' },
  { key: 'weight', label: 'Weight', type: 'text' },
  { key: 'transparency', label: 'Transparency', type: 'text' },
  { key: 'applicationArea', label: 'Application Area', type: 'text' },
  { key: 'cost', label: 'Cost', type: 'text' },
  { key: 'uniqueStrength', label: 'Unique Strength', type: 'text' },
  { key: 'summary', label: 'Summary', type: 'text' }
];

export const ratingColors = {
  Excellent: 'text-green-600',
  Good: 'text-blue-600',
  Moderate: 'text-yellow-600',
  Poor: 'text-red-600',
  Limited: 'text-gray-600',
};
