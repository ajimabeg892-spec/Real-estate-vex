import { Property, Stat, Testimonial, Service } from './types';

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'The Sovereign Crest Villa',
    location: 'Hennur Road, Bangalore, India',
    price: '₹4.50 Crore onwards',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    beds: 5,
    baths: 6,
    sqft: 5200, // 5200 Sq Ft
    tag: 'Luxury Villas',
    description: 'An architectural marvel located in Hennur Road, Bangalore. Features a private glass elevator, customizable home theatre, automated home-iot decks, and continuous verdant views.'
  },
  {
    id: 'prop-2',
    title: 'The Marina Horizon Sky-Suites',
    location: 'Dubai Marina, UAE (Alba Collaboration)',
    price: '₹12.80 Crore (AED 5.6M)',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    beds: 3,
    baths: 3.5,
    sqft: 2850,
    tag: 'Apartments & Flats',
    description: 'Superb high-rise residences overlooking the Arabian Gulf. Curated in collaboration with Alba Real Estate, Dubai, featuring custom Italian marble accents and smart climate boundaries.'
  },
  {
    id: 'prop-3',
    title: 'Nirvana Corporate Hub',
    location: 'Sector 62, Noida, Delhi NCR',
    price: '₹8.40 Lakhs/month rent',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    beds: 0,
    baths: 0,
    sqft: 12000,
    tag: 'Commercial Spaces',
    description: 'Premium fully loaded commercial space featuring high-speed elevator arrays, double-height executive boardrooms, absolute redundant power backups, and private cafeteria sectors.'
  },
  {
    id: 'prop-4',
    title: 'Alba Sanctuary Penthouse',
    location: 'Downtown Dubai, UAE',
    price: '₹24.00 Crore (AED 10.5M)',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    beds: 4,
    baths: 5,
    sqft: 6100,
    tag: 'Investment Opportunities',
    description: 'Pristine penthouse in Downtown Dubai. Panoramic Burj Khalifa views, triple-glazed acoustics, temperature-controlled indoor-outdoor pool, and high appreciation yield profile.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'service-1',
    title: 'Luxury Villas',
    description: 'Bespoke custom-designed independent villas and royal mansions featuring curated layouts in premium sectors of Bangalore and Dubai.',
    iconName: 'Home'
  },
  {
    id: 'service-2',
    title: 'Apartments & Flats',
    description: 'High-end multi-tier condominiums, builder-floors, and penthouses integrated with automated systems and top-tier amenities.',
    iconName: 'Building'
  },
  {
    id: 'service-3',
    title: 'Commercial Spaces',
    description: 'Redundant power Grade-A IT offices, corporate showrooms, and commercial retail setups across prime financial corridors.',
    iconName: 'Briefcase'
  },
  {
    id: 'service-4',
    title: 'Property Buying & Selling',
    description: 'Zero-hassle legally verified property transfer advisory, full paper registries, and transparent pricing structures.',
    iconName: 'Compass'
  },
  {
    id: 'service-5',
    title: 'Property Rentals',
    description: 'Direct elite landlord rental agreements, comprehensive security checks, and corporate leasing assistance.',
    iconName: 'Key'
  },
  {
    id: 'service-6',
    title: 'Real Estate Consultation',
    description: 'Strategic deployment of private capital assets, legal verification checks, and market liquidity assessments.',
    iconName: 'TrendingUp'
  }
];

export const STATS: Stat[] = [
  {
    id: 'stat-1',
    value: 1250,
    suffix: '+',
    label: 'Properties Delivered'
  },
  {
    id: 'stat-2',
    value: 15,
    suffix: 'B+',
    label: 'Asset Transactions (₹)'
  },
  {
    id: 'stat-3',
    value: 13,
    suffix: '+',
    label: 'Years of Trust (Since 2013)'
  },
  {
    id: 'stat-4',
    value: 2,
    suffix: ' Countries',
    label: 'India & UAE Presence'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rajesh Ramakrishnan',
    role: 'Founder',
    company: 'Fintech Partners',
    content: 'Citihomez redefined our entire home buying experience. From selecting a bespoke luxury villa on Hennur Road to obtaining bank approvals, their transparency and dedication were absolute.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Sarah Al-Mansoori',
    role: 'Investment Director',
    company: 'Capital Crescent Dubai',
    content: 'The collaboration between Citihomez and Alba Real Estate is seamless. They structured our cross-border real estate investment pipeline with deep strategic intelligence and immaculate professional care.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Anuj Gupta',
    role: 'NRI Venture Investor',
    company: 'Inventure Corp',
    content: 'We acquired prime corporate commercial spaces through Citihomez. Their deep research, clear pricing channels, and instant response make them the finest real estate advisory firm in Bangalore.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  }
];
