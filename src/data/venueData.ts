import { ServiceItem, GalleryItem, FeatureHighlight, VenueStat } from '../types';

export const BUSINESS_INFO = {
  name: "Liberty Grand Marquee",
  tagline: "A Grand Venue for Your Most Memorable Celebrations",
  phone: "+92 307 1505555",
  phoneTel: "tel:+923071505555",
  address: "196 Ghona Road, Millat Town, Faisalabad, Pakistan",
  googleMapsUrl: "https://maps.google.com/?q=196+Ghona+Road+Millat+Town+Faisalabad+Pakistan",
  email: "info@libertygrandmarquee.com",
  timing: "Open 7 Days a Week: 9:00 AM - 10:00 PM for inquiries & visits",
  capacity: "Up to 1,500 Guests",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'weddings',
    title: 'Weddings',
    shortDescription: 'Elegant and memorable wedding celebrations with beautiful décor and a grand atmosphere.',
    fullDescription: 'Your wedding day deserves nothing less than perfection. Liberty Grand Marquee provides a majestic setting tailored for Barat and Walima ceremonies. With bespoke floral stages, crystal chandeliers, climate-controlled comfort, and spacious bridal suites, we turn your dream wedding into an unforgettable royal celebration.',
    image: 'https://i.pinimg.com/1200x/ae/eb/3b/aeeb3bbfd213795f38a43d57148961fc.jpg',
    iconName: 'HeartHandshake',
    features: [
      'Bespoke Stage & Mandap Designs',
      'Luxurious Bridal & Groom Preparation Lounges',
      'High-Capacity Banquet Dining Layouts',
      'Customized Ambient & Accent Lighting Systems'
    ]
  },
  {
    id: 'receptions',
    title: 'Receptions',
    shortDescription: 'A sophisticated setting for reception dinners and unforgettable gatherings.',
    fullDescription: 'Host grand reception dinners with sophistication and style. Our flexible hall layouts accommodate both intimate family dinners and massive high-profile galas. We provide premium tableware, carpeted flooring, VIP seating arrangements, and seamless sound setup for speeches and live music.',
    image: 'https://i.pinimg.com/1200x/55/3d/dd/553ddd29ecb342fb1a2a1ceb681cc8c4.jpg',
    iconName: 'Wine',
    features: [
      'Flexible Table Arrangements (Round & Rectangular)',
      'State-of-the-Art Acoustics & Speech Audio',
      'Dedicated VIP Dining Sections',
      'Professional White-Glove Buffet & Service Options'
    ]
  },
  {
    id: 'engagements',
    title: 'Engagements & Family Events',
    shortDescription: 'Perfect for engagements, birthdays, anniversaries and family celebrations.',
    fullDescription: 'From intimate Ring Ceremonies and Mehndi nights to milestone anniversaries and lavish birthday parties, Liberty Grand Marquee offers versatile event zones. Enjoy tailored color themes, festive lighting, specialized dessert setups, and family-friendly hospitality.',
    image: 'https://i.pinimg.com/736x/95/17/2c/95172c2da8ea870e3ad7635d615cac85.jpg',
    objectPosition: 'object-top',
    iconName: 'Sparkles',
    features: [
      'Thematic Color-Coded Décor Packages',
      'Custom Stage Backdrops & Cake Presentation Tables',
      'Interactive Photo Booth & Family Backdrop Zones',
      'Spacious Dance & Performance Space'
    ]
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    shortDescription: 'A professional and spacious environment for corporate gatherings, meetings and special events.',
    fullDescription: 'Elevate your business gatherings with our high-capacity venue equipped for corporate summits, annual award galas, product launches, and dealer conventions. With ample vehicle parking, high-speed power backup, professional podiums, and multimedia projection setups.',
    image: 'https://i.pinimg.com/1200x/29/10/27/2910271e8a7857fe2885f7499cef6dd7.jpg',
    iconName: 'Briefcase',
    features: [
      'HD Multimedia & Projection Capabilities',
      'Uninterrupted Industrial Power Generator Backup',
      'Dedicated Executive Registration Desks',
      'Expansive On-Site Vehicle Parking Area'
    ]
  }
];

export const FEATURES_DATA: FeatureHighlight[] = [
  {
    id: '1',
    title: 'Elegant & Grand Ambience',
    description: 'Bespoke crystal chandeliers, high ceilings, plush carpeting, and warm ambient lighting create a truly royal experience.',
    iconName: 'Crown',
    image: 'https://i.pinimg.com/1200x/4f/7b/73/4f7b738dacd5bb6dfdce67b2ffba1786.jpg'
  },
  {
    id: '2',
    title: 'Spacious Event Area',
    description: 'Comfortably hosts large weddings and corporate summits up to 1,500 guests with non-crowded seating and wide aisles.',
    iconName: 'Maximize2',
    image: 'https://i.pinimg.com/1200x/a2/91/a9/a291a9cb71981f7ec9df099dd57a077f.jpg'
  },
  {
    id: '3',
    title: 'Beautiful Décor',
    description: 'Handcrafted floral backdrops, luxury table linens, designer centerpieces, and customizable theme palettes.',
    iconName: 'Flower2',
    image: 'https://i.pinimg.com/736x/2c/2d/28/2c2d28ede1c16eb0ccc5992017a081e1.jpg'
  },
  {
    id: '4',
    title: 'Professional Event Experience',
    description: 'Our experienced management team ensures flawless coordination, timely service execution, and stress-free hosting.',
    iconName: 'UserCheck',
    image: 'https://i.pinimg.com/736x/17/19/74/17197475dba6baffad7b712ab4f6a11f.jpg'
  },
  {
    id: '5',
    title: 'Convenient Faisalabad Location',
    description: 'Situated at 196 Ghona Road, Millat Town, offering easy accessibility, wide approach roads, and valet parking.',
    iconName: 'MapPin',
    image: 'https://i.pinimg.com/736x/39/c5/7e/39c57ed28a2c90f109986c5c96a2294b.jpg'
  },
  {
    id: '6',
    title: 'Perfect for Weddings & Celebrations',
    description: 'Tailored event packages designed for Barat, Walima, Qawwali nights, corporate dinners, and family milestones.',
    iconName: 'Award',
    image: 'https://i.pinimg.com/1200x/d1/59/f8/d159f8516616606676fab8a60facca12.jpg'
  }
];

export const STATS_DATA: VenueStat[] = [
  { value: '1,500+', label: 'Guest Capacity', sublabel: 'Spacious & Air-Conditioned' },
  { value: '100%', label: 'Power Backup', sublabel: 'Heavy Duty Generators' },
  { value: '500+', label: 'Successful Events', sublabel: 'Unforgettable Memories' },
  { value: '4.9★', label: 'Client Rating', sublabel: 'Trusted in Faisalabad' },
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Royal Wedding Hall Entrance & Stage',
    category: 'Stage & Decor',
    image: 'https://i.pinimg.com/1200x/ae/eb/3b/aeeb3bbfd213795f38a43d57148961fc.jpg',
    alt: 'Grand wedding stage with floral arrangements and chandeliers',
    description: 'Illuminated wedding stage featuring handcrafted floral arches and warm golden lighting.'
  },
  {
    id: 'g2',
    title: 'Luxury Banquet Seating Layout',
    category: 'Grand Hall',
    image: 'https://i.pinimg.com/1200x/55/3d/dd/553ddd29ecb342fb1a2a1ceb681cc8c4.jpg',
    alt: 'Spacious banquet seating with round tables and satin chair covers',
    description: 'Elegantly arranged dining layout equipped for multi-course wedding feasts.'
  },
  {
    id: 'g3',
    title: 'Bespoke Floral Stage Decoration',
    category: 'Stage & Decor',
    image: 'https://i.pinimg.com/736x/95/17/2c/95172c2da8ea870e3ad7635d615cac85.jpg',
    alt: 'Intimate stage setup with floral backdrop and ambient lighting',
    description: 'Sophisticated stage setup ideal for engagements, Barat, and Walima couples.'
  },
  {
    id: 'g4',
    title: 'Marquee Canopy & Entrance View',
    category: 'Exterior',
    image: 'https://i.pinimg.com/736x/33/85/02/3385023982f6f491913ff4776d86e248.jpg',
    alt: 'Liberty Grand Marquee exterior night view with decorative lighting',
    description: 'Illuminated exterior entrance creating a grand first impression for arriving guests.'
  },
  {
    id: 'g5',
    title: 'Gourmet Buffet & Catering Arrangement',
    category: 'Receptions',
    image: 'https://i.pinimg.com/736x/01/d0/a8/01d0a8914ce15d8f5a8a83bcedeb15c7.jpg',
    alt: 'Hygienic and stylish buffet line setup for reception guests',
    description: 'Organized live food stations and chafing dishes maintained by attentive staff.'
  },
  {
    id: 'g6',
    title: 'Grand Hall Atmosphere & Royal Setup',
    category: 'Weddings',
    image: 'https://i.pinimg.com/1200x/af/cd/1a/afcd1ab258d3d6ed773dcf7893141c15.jpg',
    alt: 'High ceiling marquee architecture decorated with imported lights and drapery',
    description: 'High ceiling architecture decorated with imported crystal lights and drapery.'
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 't1',
    name: 'Chaudhry Salman & Family',
    event: 'Barat Ceremony',
    quote: 'Liberty Grand Marquee exceeded our highest expectations for my brother’s wedding. The hall was so spacious, air conditioning was top-notch, and the stage floral work was mesmerizing. Best marquee in Millat Town!',
    rating: 5
  },
  {
    id: 't2',
    name: 'Dr. Ayesha & Hamza',
    event: 'Walima Reception',
    quote: 'We hosted 900+ guests without any feeling of crowding. The management handled guest entry, food service timing, and stage photos with supreme professionalism. Highly recommended venue in Faisalabad.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Tariq Textiles Ltd.',
    event: 'Annual Corporate Gala',
    quote: 'Extremely well-organized venue for corporate functions. The sound system, stage podium, and generator backup during power cut were flawless. 10/10 experience.',
    rating: 5
  }
];
