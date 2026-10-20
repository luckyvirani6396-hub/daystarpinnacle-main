import type { Stat, Service, Program, Testimonial, BlogPost, TimelineStep, SuccessStory, QuizQuestion } from '../../types';

export const stats: Stat[] = [
  { value: 500, suffix: '+', label: 'Corporate Clients' },
  { value: 50000, suffix: '+', label: 'Employees Impacted' },
  { value: 250, suffix: '+', label: 'Health Camps Conducted' },
  { value: 98, suffix: '%', label: 'Client Satisfaction Rate' },
];

export const coreServices: Service[] = [
  {
    id: 'health-checkups',
    title: 'Health Checkups',
    description: 'Annual health screenings & preventive health checkup camps at your workplace.',
    icon: 'clinical',
  },
  {
    id: 'mental-wellness',
    title: 'Mental Wellness',
    description: 'Counselling, stress management & mindfulness programs for employees.',
    icon: 'mental',
  },
  {
    id: 'nutrition-programs',
    title: 'Nutrition Programs',
    description: 'Diet consultations, nutrition workshops & healthy eating programs.',
    icon: 'nutrition',
  },
  {
    id: 'fitness-activities',
    title: 'Fitness & Activities',
    description: 'Yoga, Zumba, fitness challenges & fun activities to keep employees active.',
    icon: 'yoga',
  },
  {
    id: 'occupational-health',
    title: 'Occupational Health',
    description: 'Workplace risk assessment, ergonomic evaluation & industrial health services.',
    icon: 'lifestyle',
  },
  {
    id: 'health-workshops',
    title: 'Health Awareness Workshops',
    description: 'Sessions on chronic diseases, women\'s health, wellness & preventive care.',
    icon: 'workshop',
  },
];

export const timelineSteps: TimelineStep[] = [
  {
    step: 1,
    title: 'Initial Assessment',
    description: 'Comprehensive health evaluation including medical history, lifestyle, and goals.',
  },
  {
    step: 2,
    title: 'Health Consultation',
    description: 'One-on-one session with our certified experts to understand your unique needs.',
  },
  {
    step: 3,
    title: 'Customized Plan',
    description: 'Personalized nutrition and health plan designed specifically for you.',
  },
  {
    step: 4,
    title: 'Progress Tracking',
    description: 'Regular check-ins and adjustments to ensure you stay on track.',
  },
  {
    step: 5,
    title: 'Sustainable Results',
    description: 'Long-term lifestyle changes that lead to lasting health improvements.',
  },
];

export const featuredPrograms: Program[] = [
  {
    id: 'weight-transformation',
    title: 'Rebuild & Reset',
    subtitle: 'Full Body Reset',
    description: 'A complete 12-week journey combining nutrition, coaching, and habit building for lasting weight change.',
    duration: '12 WEEKS',
    icon: 'weight',
    features: ['Weekly coaching calls', 'Custom meal plans', 'Progress tracking'],
    image: '/images/program-weight-new.png',
  },
  {
    id: 'mind-body',
    title: 'Balance & Align',
    subtitle: 'Yoga + Meditation',
    description: 'Harmonize physical and mental health through guided yoga, meditation, and breathwork practices.',
    duration: '8 WEEKS',
    icon: 'mindfulness',
    features: ['Daily yoga sessions', 'Guided meditations', 'Breathwork training'],
    image: '/images/program-mind-new.png',
  },
  {
    id: 'lifestyle-reset',
    title: 'Transform & Thrive',
    subtitle: 'Complete Overhaul',
    description: 'A 90-day program to rebuild your nutrition, sleep, fitness, and stress management from the ground up.',
    duration: '90 DAYS',
    icon: 'lifestyle',
    features: ['Full health audit', 'Bi-weekly coaching', 'Habit tracking tools'],
    image: '/images/program-reset-new.png',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'HR Manager',
    role: 'Finance & Banking Sector',
    rating: 5,
    feedback: 'Our wellness program significantly improved employee participation and team engagement. The sessions were well organized, practical, and easy to implement.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: '2',
    name: 'Head of People & Culture',
    role: 'Technology Enterprise',
    rating: 5,
    feedback: 'The customized wellness strategy aligned perfectly with our company culture. Employees appreciated the flexibility and variety of programs.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: '3',
    name: 'Operations Director',
    role: 'Logistics Corporate',
    rating: 5,
    feedback: 'Our leadership team noticed improvements in morale, communication, and overall workplace energy after launching the wellness initiative.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
];


const blogPostsData: BlogPost[] = [
  {
    id: '1',
    slug: 'building-a-high-impact-corporate-wellness-program',
    title: 'Building a High-Impact Corporate Wellness Program: The Executive Playbook',
    category: 'Workplace Wellness',
    excerpt: 'How modern enterprises design structured health initiatives that measurably decrease burnout, reduce unplanned absenteeism, and elevate workforce retention.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
    date: 'Oct 14, 2026',
    readTime: '6 min read',
    content: [
      'Designing a successful corporate wellness program is no longer about offering gym discounts or occasional fruit bowls. Modern HR leaders recognize that high-performing organizations require structured, continuous health ecosystems that address physical, mental, and ergonomic wellbeing.',
      'The most successful programs begin with an organizational diagnostic. Surveying employees to understand real pain points—whether it is high screen fatigue, irregular lunch habits, or post-pandemic burnout—allows companies to tailor initiatives that employees actively look forward to.',
      'A key factor in long-term participation is leadership endorsement. When department heads and team leads actively join guided mindfulness sessions or block out lunch hours for physical movement, it grants organizational permission for team members to prioritize their own health without career anxiety.',
      'Finally, measurement is crucial. Tracking quarterly engagement rates, health risk assessment metrics, and correlating them with reduced sick days provides clear data on the tangible return on investment from workforce wellness initiatives.',
      'Daystar Pinnacle partners with corporate leadership teams across India to implement turnkey wellness roadmaps, live interactive sessions, and executive coaching tailored to modern workforces.',
    ],
  },
  {
    id: '2',
    slug: 'combating-workplace-burnout-mindfulness-stress-resilience',
    title: 'Combating Workplace Burnout: Stress Resilience Frameworks for High-Pressure Teams',
    category: 'Stress & Burnout',
    excerpt: 'Proven cognitive resilience techniques, mindful breathing habits, and leadership practices to protect mental health in demanding corporate environments.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop',
    date: 'Oct 10, 2026',
    readTime: '5 min read',
    content: [
      'Workplace burnout rarely happens overnight. It manifests as a slow, insidious depletion of emotional reserves, characterized by persistent exhaustion, feelings of cynicism towards projects, and reduced professional efficacy.',
      'Daystar Pinnacle\'s corporate stress management sessions introduce micro-resilience tools that professionals can practice right at their desks. Box breathing—four seconds in, four seconds hold, four seconds exhale, and four seconds hold—physiologically triggers the parasympathetic nervous system to down-regulate acute fight-or-flight spikes during intense deadlines.',
      'Equally vital is structuring buffer zones between back-to-back virtual meetings. Encouraging teams to finish calls 5 minutes early gives minds time to reset, hydrate, and maintain cognitive bandwidth throughout the workday.',
      'When organizations invest in structured mental wellbeing workshops, they cultivate psychological safety, enabling employees to vocalize workload bottlenecks before they spiral into severe burnout or medical leave.',
      'Daystar Pinnacle delivers interactive stress resilience seminars and 1-on-1 confidential executive mental health coaching to empower teams under pressure.',
    ],
  },
  {
    id: '3',
    slug: 'desk-ergonomics-and-posture-correction-for-office-workers',
    title: 'Desk Ergonomics & Posture Correction for Long Screen Hours',
    category: 'Ergonomics',
    excerpt: 'Practical workstation adjustments and desk-mobility stretches that eliminate chronic neck, shoulder, and lower-back strain for corporate teams.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
    date: 'Oct 06, 2026',
    readTime: '5 min read',
    content: [
      'Sedentary desk work is one of the leading contributors to musculoskeletal disorders among corporate professionals today. Hours spent hunched over laptops with forward-head posture create immense strain on the cervical spine and trapezoid muscle groups.',
      'Workplace ergonomic audits reveal that simple alterations yield monumental relief: adjusting monitor eye-level so the top third of the screen meets straight-ahead gaze, positioning keyboards to allow a relaxed 90-degree elbow bend, and maintaining feet flat on the ground.',
      'Incorporating 5-minute seated yoga stretches—such as seated cat-cow movements, gentle spinal twists, and doorway pectoral stretches—breaks prolonged static postures and promotes lymphatic drainage.',
      'Organizations implementing regular ergonomic workshops see an immediate decline in repetitive strain complaints, leading to elevated comfort and sharper daily focus.',
      'Daystar Pinnacle conducts on-site workstation ergonomics audits, desk posture workshops, and guided desk yoga flows designed for corporate offices.',
    ],
  },
  {
    id: '4',
    slug: 'corporate-nutrition-beating-the-afternoon-energy-slump',
    title: 'Corporate Nutrition: Beating the 3 PM Office Energy Slump',
    category: 'Corporate Nutrition',
    excerpt: 'Science-backed dietary strategies to stabilize blood glucose, eliminate post-lunch brain fog, and fuel sustained productivity across afternoon meetings.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop',
    date: 'Sep 29, 2026',
    readTime: '6 min read',
    content: [
      'The dreaded 3 PM corporate energy crash is rarely a lack of willpower; it is almost always a metabolic reaction to refined carbohydrates, insulin spikes, and inadequate cellular hydration.',
      'When lunch consists predominantly of simple starches and sugary drinks, blood glucose surges and subsequently plummets, starving the brain of its steady fuel source and causing profound drowsiness and executive fatigue.',
      'Our corporate clinical nutritionists recommend the Balanced Desk Plate formula: pairing high-fiber leafy greens or cruciferous vegetables with clean lean proteins and healthy fats like nuts, seeds, or avocado. This slows gastric emptying and provides an even, sustained release of glucose over 4 to 5 hours.',
      'Replacing sugary pantry snacks with raw almonds, roasted chickpeas, and green tea keeps energy levels consistent, allowing team members to breeze through afternoon strategy sessions with clarity.',
      'Daystar Pinnacle provides corporate cafeteria nutrition audits, employee nutrition masterclasses, and personalized meal planning for busy professionals.',
    ],
  },
  {
    id: '5',
    slug: 'executive-sleep-hygiene-and-cognitive-performance',
    title: 'Executive Sleep Hygiene: Sleep Optimization for Strategic Decision-Making',
    category: 'Leadership Health',
    excerpt: 'How restorative sleep cycles safeguard executive mental acuity, emotional regulation, and high-stakes problem solving for corporate leaders.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=500&fit=crop',
    date: 'Sep 22, 2026',
    readTime: '6 min read',
    content: [
      'In fast-paced corporate landscapes, late-night emails and sleep deprivation have historically been worn as misguided badges of honor. Neuroscience, however, confirms that sleep loss directly impairs the prefrontal cortex—the command center for risk calculation, ethical judgment, and emotional stability.',
      'During deep non-REM and REM sleep phases, the brain\'s glymphatic system flushes out metabolic neurotoxins accumulated during intense analytical work, effectively consolidating strategic memory and creative problem-solving capabilities.',
      'Executive wellness coaching focuses on non-negotiable sleep hygiene protocols: digital sunsetting 60 minutes before bed, dimming blue-light emitting devices, keeping the sleeping room cool and dark, and replacing midnight screen time with restorative breathwork.',
      'When leadership prioritizes high-quality sleep, decision latency decreases, irritability subsides, and executive teams set a sustainable precedent for the entire company.',
      'Daystar Pinnacle offers targeted executive wellness coaching, circadian rhythm restoration, and lifestyle leadership retreats.',
    ],
  },
  {
    id: '6',
    slug: 'hybrid-team-wellness-keeping-remote-workforces-connected',
    title: 'Hybrid Team Wellness: Keeping Distributed Workforces Connected & Active',
    category: 'Workplace Wellness',
    excerpt: 'Strategies to combat remote isolation, promote physical activity, and foster community through digital wellness challenges and virtual wellness sessions.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop',
    date: 'Sep 15, 2026',
    readTime: '5 min read',
    content: [
      'While hybrid and remote work models offer undeniable flexibility, they often introduce unexpected workplace challenges: blurred work-life boundaries, sedentary habits from staying indoors, and subtle feelings of social isolation.',
      'Virtual wellness programs bridge this physical gap by bringing distributed colleagues together for live-streamed, interactive experiences. Group desk yoga, guided breathwork, and virtual coffee-and-nutrition talks create casual social touchpoints outside of project deadlines.',
      'Gamified monthly fitness and step challenges organized through digital leaderboards encourage friendly inter-departmental competition, motivating employees to take walking breaks during their workdays.',
      'By investing in dedicated hybrid wellness initiatives, organizations demonstrate genuine care for remote staff, driving stronger cultural cohesion and mutual loyalty regardless of geographic distance.',
      'Daystar Pinnacle delivers high-definition virtual fitness, meditation streams, and pan-India multi-location hybrid corporate wellness packages.',
    ],
  },
];

export const blogPosts: BlogPost[] = blogPostsData.slice(0, 3);
export const allBlogPosts: BlogPost[] = blogPostsData;

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(slug: string, limit = 3): BlogPost[] {
  const current = getBlogPostBySlug(slug);
  if (!current) return [];
  const sameCategory = allBlogPosts.filter((post) => post.slug !== slug && post.category === current.category);
  if (sameCategory.length > 0) {
    return sameCategory.slice(0, limit);
  }
  return allBlogPosts.filter((post) => post.slug !== slug).slice(0, limit);
}

export const nutritionServices: Service[] = [
  { id: 'wm', title: 'Weight Management', description: 'Sustainable weight loss and maintenance programs.', icon: 'weight', category: 'nutrition' },
  { id: 'cn', title: 'Clinical Nutrition', description: 'Therapeutic nutrition for medical conditions.', icon: 'clinical', category: 'nutrition' },
  { id: 'sn', title: 'Sports Nutrition', description: 'Performance-focused nutrition for athletes.', icon: 'sports', category: 'nutrition' },
  { id: 'chn', title: 'Child Nutrition', description: 'Healthy eating habits for growing children.', icon: 'child', category: 'nutrition' },
  { id: 'wh', title: "Women's Health", description: 'Specialized nutrition for women\'s health needs.', icon: 'women', category: 'nutrition' },
];

export const healthServices: Service[] = [
  { id: 'ys', title: 'Yoga Sessions', description: 'Group and private yoga classes for all levels.', icon: 'yoga', category: 'health' },
  { id: 'mp', title: 'Meditation Programs', description: 'Guided meditation for stress relief and focus.', icon: 'meditation', category: 'health' },
  { id: 'sm', title: 'Stress Management', description: 'Techniques to manage and reduce daily stress.', icon: 'stress', category: 'health' },
  { id: 'lc', title: 'Lifestyle Coaching', description: 'Holistic coaching for lasting lifestyle changes.', icon: 'lifestyle', category: 'health' },
  { id: 'so', title: 'Sleep Optimization', description: 'Improve sleep quality through proven strategies.', icon: 'sleep', category: 'health' },
];

export const corporateServices: Service[] = [
  { id: 'ewp', title: 'Employee Health Programs', description: 'Comprehensive health initiatives for teams.', icon: 'corporate', category: 'corporate' },
  { id: 'ws', title: 'Workshops', description: 'Interactive health workshops and seminars.', icon: 'workshop', category: 'corporate' },
  { id: 'mws', title: 'Mental Health Sessions', description: 'Mental health support for employees.', icon: 'mental', category: 'corporate' },
  { id: 'ha', title: 'Health Assessments', description: 'On-site health screenings and evaluations.', icon: 'assessment', category: 'corporate' },
];

export const pagePrograms: Program[] = [
  {
    id: 'kickstart',
    title: 'Kickstart Package',
    subtitle: 'Best For: 20–50 Employees',
    description: 'Introduce essential healthy habits to your team with monthly yoga, meditation, step challenges, and basic engagement metrics.',
    duration: '20–50 Employees',
    icon: 'lifestyle',
    features: ['Monthly Yoga Session', 'Guided Meditation', 'Wellness Newsletter', 'Monthly Fitness Challenge', 'Employee Wellness Resources', 'Basic Reporting'],
    image: '/images/program-reset-new.png',
  },
  {
    id: 'growth',
    title: 'Growth Package',
    subtitle: 'Best For: 50–250 Employees',
    description: 'Drive higher employee engagement and reduce stress with workshops, custom challenges, and participation reports.',
    duration: '50–250 Employees',
    icon: 'mindfulness',
    features: ['Everything in Kickstart, plus:', 'Nutrition Workshop', 'Mental Wellness Workshop', 'Quarterly Wellness Events', 'Health Awareness Campaigns', 'Employee Participation Reports', 'Wellness Challenges'],
    image: '/images/program-mind-new.png',
  },
  {
    id: 'total-transformation',
    title: 'Total Transformation Package',
    subtitle: 'Best For: 250+ Employees',
    description: 'Establish a premium wellness culture with dedicated consultants, custom calendars, and advanced analytics.',
    duration: '250+ Employees',
    icon: 'corporate',
    features: ['Everything in Growth, plus:', 'Dedicated Wellness Consultant', 'Monthly Wellness Calendar', 'Leadership Wellbeing Coaching', 'Executive Wellness Sessions', 'Company-wide Challenges', 'Annual Wellness Strategy', 'Advanced Reporting & Analytics'],
    image: '/images/program-corporate-new.png',
  },
  {
    id: 'enterprise-solutions',
    title: 'Enterprise Solutions',
    subtitle: 'Best For: Custom Workforce Size',
    description: 'Bespoke corporate wellness solutions customized around your workforce size, business objectives, workplace culture, and budget.',
    duration: 'Custom Solutions',
    icon: 'women',
    features: ['Bespoke Program Design & Schedules', 'Tailored In-Person/Virtual Mix', 'Custom Systems & API Integration', 'Quarterly Executive Business Reviews'],
    image: '/images/program-weight-new.png',
  },
];

export const successStories: SuccessStory[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    program: 'VP of People, TechFlow Inc.',
    beforeImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=400&fit=crop',
    result: 'burnout rate dropped by 24%',
  },
  {
    id: '2',
    name: 'Marcus Vance',
    program: 'Chief HR Officer, Apex Global',
    beforeImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=400&fit=crop',
    result: '82% program utilization rate',
  },
  {
    id: '3',
    name: 'Deepika Sharma',
    program: 'Founder & CEO, Daystar Solutions',
    beforeImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop',
    result: 'health insurance claims decreased 15%',
  },
];

export const whyChooseUs = [
  { title: 'Seamless HR Onboarding', description: 'Zero administrative overhead. We manage notifications, calendar scheduling, and tech deployment.', icon: 'expert' },
  { title: 'Proven Business ROI', description: 'Actionable health insights mapped directly to reduced employee absenteeism and burnout metrics.', icon: 'personalized' },
  { title: 'Flexible Delivery', description: 'Fully customized schedules supporting in-person office visits, hybrid structures, and global remote employees.', icon: 'science' },
  { title: 'Certified Corporate Experts', description: 'Our consultants hold certifications in clinical nutrition, workplace safety, yoga instruction, and executive coaching.', icon: 'holistic' },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: 'How would you rate your current energy levels throughout the day?',
    options: [
      { label: 'Consistently high', value: 4 },
      { label: 'Moderate with afternoon dips', value: 3 },
      { label: 'Often tired', value: 2 },
      { label: 'Constantly exhausted', value: 1 },
    ],
  },
  {
    id: '2',
    question: 'How many servings of fruits and vegetables do you eat daily?',
    options: [
      { label: '5 or more', value: 4 },
      { label: '3-4 servings', value: 3 },
      { label: '1-2 servings', value: 2 },
      { label: 'Rarely any', value: 1 },
    ],
  },
  {
    id: '3',
    question: 'How often do you engage in physical activity?',
    options: [
      { label: '5+ times per week', value: 4 },
      { label: '3-4 times per week', value: 3 },
      { label: '1-2 times per week', value: 2 },
      { label: 'Rarely or never', value: 1 },
    ],
  },
  {
    id: '4',
    question: 'How would you describe your stress levels?',
    options: [
      { label: 'Well managed', value: 4 },
      { label: 'Occasionally stressed', value: 3 },
      { label: 'Frequently stressed', value: 2 },
      { label: 'Overwhelmed daily', value: 1 },
    ],
  },
  {
    id: '5',
    question: 'How many hours of sleep do you get on average?',
    options: [
      { label: '7-9 hours', value: 4 },
      { label: '6-7 hours', value: 3 },
      { label: '5-6 hours', value: 2 },
      { label: 'Less than 5 hours', value: 1 },
    ],
  },
];
