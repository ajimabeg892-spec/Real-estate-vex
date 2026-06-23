import { Property, Service, Stat, Testimonial } from './types';

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'The Gold Crest Plots',
    location: 'Sector 150, Noida',
    price: '₹1.25 Crore onwards',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    beds: 0,
    baths: 0,
    sqft: 2250, // 250 Sq Yd
    tag: 'Premium Freehold Plots',
    description: 'Bespoke freehold residential plots in Sector 150, Noida. Designed with wide arterial roads, deep landscape buffers, high security, and high appreciation lanes.'
  },
  {
    id: 'prop-2',
    title: 'The Whispering Farmhouses',
    location: 'Greater Noida Expressway',
    price: '₹2.80 Crore',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    beds: 4,
    baths: 4.5,
    sqft: 9000, // 1000 Sq Yd
    tag: 'Farmhouse Projects',
    description: 'An elite reserve of pre-curated green estate blocks. Each comes with custom perimeter trees, smart soil management, deep water connections, and customized retreat houses.'
  },
  {
    id: 'prop-3',
    title: 'Aether Brick Boulevard',
    location: 'Delhi NCR, Yamuna Expressway',
    price: '₹12,500 per sq yd',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    beds: 0,
    baths: 0,
    sqft: 4500, // 500 Sq Yd
    tag: 'Strategic Land Investment',
    description: 'Premium freehold land plots situated near the upcoming Noida International Airport. High liquidity, rapid developmental trajectory, and immediate registry options.'
  },
  {
    id: 'prop-4',
    title: 'Royal Brick Horizon Suites',
    location: 'Sector 143, Noida',
    price: '₹85 Lakhs',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    beds: 3,
    baths: 3,
    sqft: 1850,
    tag: 'Residential Apartments',
    description: 'Exquisite ultra-premium apartments featuring expansive private sun-decks, integrated smart lighting controls, modular Italian layouts, and continuous security.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'service-1',
    title: 'Premium Freehold Plots',
    description: 'Exclusive, highly appreciated freehold land packages inside secured premium clusters in Noida and Greater Noida with immediate registry.',
    iconName: 'Compass'
  },
  {
    id: 'service-2',
    title: 'Farmhouse Projects',
    description: 'Elite layout planning, terrain sculpting, and customized development of sprawling luxury farmhouses and rural retreat estates in scenic margins of Delhi NCR.',
    iconName: 'ArrowUpRight'
  },
  {
    id: 'service-3',
    title: 'Residential Apartments',
    description: 'Curated premium high-rise residences and custom luxury builder floors with high-end specifications and top-tier amenities.',
    iconName: 'TrendingUp'
  },
  {
    id: 'service-4',
    title: 'Land Investment',
    description: 'Strategic market research, bulk plot acquisitions, and reliable legal advisory to secure high-yield land parcels near high-growth transport hubs.',
    iconName: 'Shield'
  }
];

export const STATS: Stat[] = [
  {
    id: 'stat-1',
    value: 1200,
    suffix: '+',
    label: 'Acres Developed'
  },
  {
    id: 'stat-2',
    value: 2500,
    suffix: '+',
    label: 'Happy Investors'
  },
  {
    id: 'stat-3',
    value: 12,
    suffix: '+',
    label: 'Years of Trust'
  },
  {
    id: 'stat-4',
    value: 950,
    suffix: 'Cr+',
    label: 'Portfolio Valuation'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rajesh Malhotra',
    role: 'Managing Director',
    company: 'Malhotra Group',
    content: 'MY FIRSTBRICK INFRA approaches land investment with absolute transparency. Their level of legal diligence is exceptional; they did not just show us a plot, they guaranteed title security and smooth registries in Sector 150.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Dr. Ananya Sharma',
    role: 'Senior Consultant',
    company: 'Max Healthcare',
    content: 'Acquiring an elite farmhouse plot in Delhi NCR was completely transparent. Under MY FIRSTBRICK INFRA’s expert guidance, every milestone of registry and power deployment was executed ahead of schedule.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Amit Chaudhary',
    role: 'NRI Investor',
    company: 'Chaudhary Capital UK',
    content: 'Superb advisory. They helped me structure my land investment near Noida International Airport Expressway with extreme precision. The appreciation potential here is truly massive.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  }
];

