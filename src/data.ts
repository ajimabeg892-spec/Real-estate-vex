import { Property, Service, Stat, Testimonial } from './types';

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'The Obsidian Canopy',
    location: 'Pacific Palisades, CA',
    price: '$18,450,000',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    beds: 5,
    baths: 6.5,
    sqft: 8200,
    tag: 'Architectural Masterpiece',
    description: 'A cantilevered steel-and-glass pavilion floating above the canyon, framing endless ocean views with dramatic floor-to-ceiling glass screens.'
  },
  {
    id: 'prop-2',
    title: 'Minimalist Monolith Suite',
    location: 'Aspen, CO',
    price: '$14,200,000',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    beds: 4,
    baths: 4,
    sqft: 6100,
    tag: 'Alpine Luxury',
    description: 'Engineered into the mountain granite, integrating hand-hammered concrete surfaces, direct ski-in access, and custom geothermal thermal chambers.'
  },
  {
    id: 'prop-3',
    title: 'Aether Water Pavilion',
    location: 'Miami, FL',
    price: '$22,500,000',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    beds: 6,
    baths: 8,
    sqft: 10400,
    tag: 'Oceanfront Estate',
    description: 'Featuring dynamic over-water bridges, 360-degree glass partitions, and a massive dual-level infinity pool that blends seamlessly into the ocean skyline.'
  },
  {
    id: 'prop-4',
    title: 'The Concrete Canopy',
    location: 'Austin, TX',
    price: '$8,950,000',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    beds: 4,
    baths: 5,
    sqft: 5800,
    tag: 'Brutalist Retreat',
    description: 'Surrounded by mature live oaks, this home uses structural raw board-formed concrete and structural glass channels to merge pure geometry with nature.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'service-1',
    title: 'Property Acquisition',
    description: 'Uncovering off-market architectural masterpieces and negotiating high-value acquisitions with absolute confidentiality.',
    iconName: 'Compass'
  },
  {
    id: 'service-2',
    title: 'Venture Selling',
    description: 'Curation of immersive visual narratives, digital staging, and premium placement to appeal to global ultra-high-net-worth investors.',
    iconName: 'ArrowUpRight'
  },
  {
    id: 'service-3',
    title: 'Portfolio Advisory',
    description: 'Strategic deployment of capital into premium real estate and high-yielding boutique developments across major global metros.',
    iconName: 'TrendingUp'
  },
  {
    id: 'service-4',
    title: 'Asset Governance',
    description: 'Flawless preservation, passive yield generation, security, and administrative oversight of your prime physical asset base.',
    iconName: 'Shield'
  }
];

export const STATS: Stat[] = [
  {
    id: 'stat-1',
    value: 500,
    suffix: '+',
    label: 'Managed Assets'
  },
  {
    id: 'stat-2',
    value: 300,
    suffix: '+',
    label: 'Exclusive Clients'
  },
  {
    id: 'stat-3',
    value: 10,
    suffix: '+',
    label: 'Years of Vision'
  },
  {
    id: 'stat-4',
    value: 4.8,
    suffix: 'B',
    label: 'Total Transaction Volume'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Helena Sterling',
    role: 'Principal Architect',
    company: 'Sterling & Co.',
    content: 'VEX approaches real estate as high art. Their level of service is comparable to none; they did not just list our residential sculpture, they framed it in the correct visual language to target curators, not mere buyers.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    role: 'Managing Partner',
    company: 'Vance Capital',
    content: 'The advisory arm is exceptional. They navigated a highly complex off-market portfolio transition in Beverly Hills with flawless efficiency and absolute privacy. Highly professional advisors.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Sofia Chevalier',
    role: 'Creative Director',
    company: 'Aether Collective',
    content: 'Buying a property in Aspen was completely friction-free. They handled everything from physical architectural validation to high-level trust setups. A rare team with immaculate taste.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  }
];
