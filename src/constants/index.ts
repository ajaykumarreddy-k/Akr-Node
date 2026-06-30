export const SITE_CONFIG = {
  name: 'AKR SaaS',
  description: 'The universal starter template for modern SaaS applications.',
  links: {
    github: 'https://github.com',
    twitter: 'https://twitter.com',
  },
};

export const FEATURES = [
  {
    title: 'Lightning Fast',
    description: 'Built on the edge with Bun, delivering sub-millisecond response times for your global user base.',
    icon: 'Zap'
  },
  {
    title: 'Secure by Default',
    description: 'Enterprise-grade security built-in with automatic encryption and compliance standards out of the box.',
    icon: 'Shield'
  },
  {
    title: 'Global Scale',
    description: 'Deploy instantly to 35+ regions worldwide with zero configuration required.',
    icon: 'Globe'
  },
  {
    title: 'Real-time Sync',
    description: 'Keep your team aligned with instant state synchronization across all connected clients.',
    icon: 'RefreshCw'
  },
  {
    title: 'Advanced Analytics',
    description: 'Gain deep insights into your business metrics with our powerful, integrated dashboard.',
    icon: 'BarChart3'
  },
  {
    title: 'Automated Workflows',
    description: 'Connect your favorite tools and automate repetitive tasks with our visual builder.',
    icon: 'Workflow'
  }
];

export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for small teams and early-stage startups.',
    features: ['Up to 5 team members', 'Basic analytics', '24-hour support SLA', '10GB Storage'],
    popular: false,
    cta: 'Start Free Trial'
  },
  {
    name: 'Pro',
    price: '$99',
    description: 'Advanced features for scaling businesses.',
    features: ['Unlimited team members', 'Advanced analytics', '1-hour support SLA', '100GB Storage', 'Custom integrations'],
    popular: true,
    cta: 'Get Started'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Dedicated support and infrastructure for large organizations.',
    features: ['Dedicated infrastructure', 'Custom reporting', '15-minute support SLA', 'Unlimited Storage', 'SSO & Advanced Security'],
    popular: false,
    cta: 'Contact Sales'
  }
];

export const FAQS = [
  {
    question: 'How quickly can I get started?',
    answer: 'You can be up and running in less than 5 minutes. Our automated onboarding process gets your workspace ready instantly.'
  },
  {
    question: 'Do you offer custom integrations?',
    answer: 'Yes, our Pro and Enterprise plans include access to our robust API and webhook system for custom integrations.'
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Absolutely. You can upgrade or downgrade your plan at any time. Prorated charges will be applied automatically.'
  },
  {
    question: 'Is my data secure?',
    answer: 'We use industry-standard AES-256 encryption for data at rest and TLS 1.3 for data in transit. We are fully SOC2 compliant.'
  }
];

export const STATISTICS = [
  { label: 'Active Users', value: '100K+' },
  { label: 'Global Servers', value: '35+' },
  { label: 'Uptime SLA', value: '99.99%' },
  { label: 'Customer Satisfaction', value: '4.9/5' },
];
