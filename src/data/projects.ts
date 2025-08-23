export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  colors: {
    name: string;
    value: string;
    textColor?: string;
  }[];
  images: string[];
}

export const projects: Project[] = [
  {
    id: 'ruby',
    title: 'Ruby',
    shortDescription: 'Reimagining website for B2B banking solution with a mature look and feel to meet modern e-commerce needs.',
    longDescription: `Ruby, a recent graduate of YC, reached out to revamp their fintech brand, which is focused on e-commerce, SMEs and corporate clients. The three tech founders wanted a look that was both modern and professional.

I laid down a strong brand foundation and refined their initial symbol to fit this new image. After two rounds of tweaks, they had a mature and modern-looking brand. I then built a new website for Ruby using Framer, specifically designed to engage B2B clients.

Ruby now stands as a mature fintech entity, ready to draw in bigger clients and transform their banking experience.`,
    tags: ['ui/ux research', 'design system', 'app design', 'web app design', 'extension design', 'mobile design'],
    colors: [
      { name: 'Soft white', value: '#F8F9FA', textColor: '#000' },
      { name: 'Premium yellow', value: '#F4D03F', textColor: '#000' },
      { name: 'Velvet green', value: '#1B4332', textColor: '#FFF' },
      { name: 'Deep black', value: '#0D1117', textColor: '#FFF' }
    ],
    images: [
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 'nexus',
    title: 'Nexus',
    shortDescription: 'Building a comprehensive design system for a Web3 trading platform with focus on user experience and accessibility.',
    longDescription: `Nexus approached us to create a modern trading platform that would stand out in the competitive Web3 space. The challenge was to make complex trading interfaces intuitive while maintaining the sophisticated look that professional traders expect.

We developed a comprehensive design system that prioritizes clarity and speed. Every component was crafted with accessibility in mind, ensuring that both novice and expert traders could navigate the platform efficiently.

The result is a sleek, professional platform that has increased user engagement by 40% and reduced support tickets by 60%.`,
    tags: ['web3 design', 'trading platform', 'design system', 'user research', 'accessibility'],
    colors: [
      { name: 'Arctic white', value: '#FFFFFF', textColor: '#000' },
      { name: 'Electric blue', value: '#0066FF', textColor: '#FFF' },
      { name: 'Midnight navy', value: '#1A1B23', textColor: '#FFF' },
      { name: 'Neon green', value: '#00FF88', textColor: '#000' }
    ],
    images: [
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 'aurora',
    title: 'Aurora',
    shortDescription: 'Creating a modern SaaS dashboard for project management with emphasis on team collaboration and productivity.',
    longDescription: `Aurora needed a complete redesign of their project management platform to compete with industry leaders. The existing interface was cluttered and users were struggling with basic tasks.

We conducted extensive user research and created a clean, intuitive interface that puts the most important features front and center. The new design reduces cognitive load while providing powerful functionality for teams of all sizes.

Since launch, Aurora has seen a 75% increase in user retention and consistently receives praise for their intuitive interface.`,
    tags: ['saas design', 'dashboard design', 'user experience', 'team collaboration', 'productivity tools'],
    colors: [
      { name: 'Pure white', value: '#FFFFFF', textColor: '#000' },
      { name: 'Sunset orange', value: '#FF6B35', textColor: '#FFF' },
      { name: 'Deep purple', value: '#6B46C1', textColor: '#FFF' },
      { name: 'Charcoal', value: '#374151', textColor: '#FFF' }
    ],
    images: [
      'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184640/pexels-photo-3184640.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  }
];