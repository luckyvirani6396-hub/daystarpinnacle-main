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
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=700&fit=crop',
    date: 'Oct 14, 2026',
    readTime: '6 min read',
    author: {
      name: 'Dr. Ananya Sharma',
      role: 'Head of Preventive Healthcare & Corporate Wellness',
      credentials: 'MD (Preventive Medicine), Certified Corporate Health Architect',
      avatar: '/images/team-doctor.png',
    },
    keyTakeaways: [
      'Superficial perks like gym passes fail to resolve root-cause burnout; organizations need structured, ongoing wellness ecosystems.',
      'Anonymous workplace health diagnostics identify real fatigue triggers without jeopardizing employee psychological safety.',
      'Active leadership modeling and executive participation grant implicit permission for teams to engage without career guilt.',
      'Measure quantifiable outcomes: quarterly engagement, eNPS, and reduced sick leave days to prove real financial ROI.',
    ],
    tags: ['Corporate Wellness', 'Burnout Prevention', 'Executive Leadership', 'Preventative Health', 'HR Strategy'],
    sections: [
      {
        id: 'beyond-superficial-perks',
        heading: '01. Beyond Superficial Perks: The Shift to Root-Cause Wellness',
        paragraphs: [
          'For decades, corporate wellness was treated as a cosmetic checklist: subsidizing gym memberships that only 8% of employees utilized, stocking office breakrooms with fruit bowls, or hosting a lone annual sports day. While well-intentioned, these superficial perks fail to address the systemic drivers of workplace exhaustion.',
          'Modern enterprises operate under unprecedented cognitive strain. Long screen hours, blurred hybrid work boundaries, irregular eating patterns, and chronic deadline pressure quietly erode employee health long before symptoms show up on medical insurance claims.',
          'High-performing organizations recognize that workforce vitality requires a structured, preventative health ecosystem. Rather than waiting for burnout to trigger attrition or prolonged medical leave, forward-thinking leaders integrate physical ergonomics, clinical nutrition, and stress resilience into the everyday rhythm of corporate life.',
        ],
        callout: 'Corporate wellness fails when treated as a calendar checklist. It thrives when embedded as an organizational habit supported by executive permission.',
      },
      {
        id: 'phase-1-diagnostic-discovery',
        heading: '02. Phase 1: Diagnostic Discovery & Anonymous Health Audits',
        paragraphs: [
          'Every company has a unique cultural fingerprint and distinct physiological stressors. An engineering team pulling sprint deadlines experiences severe eye fatigue, cervical spine tension, and erratic sleep, whereas a field sales organization grapples with travel exhaustion and inconsistent nutrition.',
          'A successful initiative begins with a comprehensive, 100% anonymized workplace health audit. Employees are invited to share their true pain points—ranging from 3 PM cognitive slumps to work-from-home back pain—without fear of appraisal bias.',
          'By cross-referencing audit data with organizational shift patterns and peak business quarters, HR leaders can craft targeted quarterly calendars that employees eagerly anticipate rather than viewing as another mandatory obligation.',
        ],
        checklist: [
          'Deploy an anonymous 3-minute pulse survey on physical energy, sleep, and desk strain',
          'Identify top 3 department-specific burnout triggers without exposing individual identities',
          'Align program delivery formats (hybrid, onsite, virtual) with actual workforce distribution',
        ],
      },
      {
        id: 'phase-2-leadership-permission',
        heading: '03. Phase 2: Leadership Modeling & Organizational Permission',
        paragraphs: [
          'The single most critical factor in corporate wellness adoption is not the quality of the speaker—it is the visible participation of department leadership.',
          'If a VP of Engineering or Head of Operations announces a mindfulness masterclass but continues scheduling back-to-back crisis meetings during that window, junior staff receive a clear implicit message: prioritize wellness and you risk being seen as uncommitted.',
          'When leadership actively participates—blocking out calendar slots for posture workshops or speaking openly about boundary management—it dispels the stigma of taking a health break. Permission becomes cultural, and attendance surges naturally.',
        ],
        stat: {
          value: '3.4x',
          label: 'Higher employee participation rate when senior leaders actively join and endorse sessions',
        },
      },
      {
        id: 'phase-3-multidisciplinary-delivery',
        heading: '04. Phase 3: Multidisciplinary, Non-Intrusive Delivery',
        paragraphs: [
          'Employees are overwhelmed by informational overload. They do not need complex biochemical lectures or extreme 60-day diet plans that disrupt their families.',
          'Effective workplace programs deliver practical, bite-sized micro-habits that take 2 to 5 minutes: seated desk stretches to decompress the lumbar spine, evidence-based meal pairing rules to stabilize 3 PM blood glucose, and 4-second box-breathing routines to down-regulate acute meeting stress.',
          'By rotating between certified clinical nutritionists, licensed counseling psychologists, and ergonomic specialists, organizations keep the experience fresh, holistic, and immediately applicable.',
        ],
      },
      {
        id: 'phase-4-measuring-roi',
        heading: '05. Phase 4: Proving ROI & Quantitative Analytics',
        paragraphs: [
          'To sustain board-level funding and long-term momentum, corporate wellness programs must demonstrate measurable business value. HR teams should track both qualitative sentiment and quantitative health metrics.',
          'Quarterly review decks should highlight active session attendance, Net Promoter Scores (eNPS), self-reported reductions in workday fatigue, and correlations with decreased unplanned sick leave.',
          'When leadership observes a tangible drop in absenteeism and elevated team retention, wellbeing transitions from a perceived HR cost center into a documented strategic driver of company performance.',
        ],
        stat: {
          value: '28%',
          label: 'Average reduction in unplanned health-related sick leave across structured annual programs',
        },
      },
    ],
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
    slug: 'desk-ergonomics-and-posture-correction-for-office-workers',
    title: 'Desk Ergonomics & Posture Correction for Long Screen Hours',
    category: 'Ergonomics',
    excerpt: 'Practical workstation adjustments, biomechanical alignment rules, and micro-stretch routines that eliminate chronic neck, shoulder, and lower back strain.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=700&fit=crop',
    date: 'Oct 06, 2026',
    readTime: '5 min read',
    author: {
      name: 'Rajesh Varma',
      role: 'Lead Ergonomist & Biomechanics Specialist',
      credentials: 'Certified Professional Ergonomist (CPE), Master of Physical Therapy',
      avatar: '/images/team-yoga.png',
    },
    keyTakeaways: [
      'Forward-head posture dramatically increases cervical spine compressive load, causing chronic tension and headaches.',
      'Aligning workstation geometry to the 90-90-90 ergonomic rule removes passive ligament strain during screen hours.',
      'Two-minute seated micro-stretches promote spinal decompression and lymphatic circulation without interrupting workflows.',
      'Conducting regular department ergonomics audits prevents repetitive strain injuries and boosts daily physical vitality.',
    ],
    tags: ['Desk Ergonomics', 'Postural Health', 'Chair Mobility', 'Musculoskeletal Relief', 'Office Health'],
    sections: [
      {
        id: 'biomechanics-forward-head',
        heading: '01. The Modern Desk Dilemma: Biomechanics of Forward-Head Posture',
        paragraphs: [
          'In an era defined by dual monitors, laptops, and continuous digital communications, prolonged static sitting has emerged as a primary driver of musculoskeletal disorders in modern office environments.',
          'The human head weighs approximately 5 kilograms in a neutral vertical position. However, as an employee leans forward by just 30 to 45 degrees to inspect spreadsheets or code, gravitational torque multiplies that effective load up to 22 to 27 kilograms on the cervical vertebrae and upper trapezius muscles.',
          'Over weeks and months, this sustained tension leads to chronic tension headaches, cervical radiculopathy, and persistent mid-back spasms that severely degrade concentration and workday stamina.',
        ],
        callout: 'Every inch the head tilts forward doubles the compressive load on cervical vertebrae, turning static desk work into chronic physical trauma.',
      },
      {
        id: 'workstation-geometry-rule',
        heading: '02. Workstation Geometry: The 90-90-90 Ergonomic Rule',
        paragraphs: [
          'Ergonomic remediation does not require expensive luxury furniture; it requires strict adherence to natural human biomechanics.',
          'The gold standard of ergonomic geometry is the 90-90-90 rule: elbows resting comfortably at a 90 to 100-degree open angle, hips positioned slightly above knees with a 90-degree bend, and feet planted firmly flat on the floor or an adjustable angled footrest.',
          'Equally critical is monitor placement. The top third of the active computer display must align directly with horizontal eye gaze. When employees gaze forward without flexing their necks, the cervical spine retains its natural lordotic curve, preventing neuromuscular fatigue.',
        ],
        checklist: [
          'Elevate your primary display so the top third meets straight-ahead eye level',
          'Keep keyboard and mouse close enough to maintain relaxed, dropped shoulders',
          'Ensure lower back lumbar support fills the natural curvature of the spine',
        ],
      },
      {
        id: 'seated-mobility-routines',
        heading: '03. Seated Micro-Stretches: Decompressing Fascial Tension in Two Minutes',
        paragraphs: [
          'Even an ergonomically calibrated workstation cannot counteract continuous, motionless sitting. Static postures restrict peripheral circulation and cause muscle fascia to tighten.',
          'Daystar Pinnacle instructs corporate teams in simple, seated micro-mobility routines that take less than 120 seconds: seated spinal twists to hydrate intervertebral discs, doorway pectoral openings to counteract hunched shoulders, and seated figure-four hip stretches.',
          'These micro-breaks do not disrupt workflow momentum; rather, they replenish oxygen delivery to the brain, leaving professionals physically refreshed and mentally sharp for their next deliverable.',
        ],
        stat: {
          value: '41%',
          label: 'Reduction in reported lower back tension after implementing structured daily chair mobility breaks',
        },
      },
      {
        id: 'ergonomic-office-audits',
        heading: '04. Conducting High-Impact Workplace Ergonomic Audits',
        paragraphs: [
          'Progressive organizations make workstation assessments an integral component of employee onboarding and annual health reviews.',
          'Through expert-led on-site posture clinics or live virtual desk consultations, certified ergonomists identify individualized risk factors—such as improper chair heights, glare reflections, and reach strain—providing instant, customized adjustments.',
          'By proactively protecting employee physical health, companies witness an immediate reduction in ergonomic complaints and an enduring rise in overall workplace satisfaction.',
        ],
      },
    ],
    content: [
      'Sedentary desk work is one of the leading contributors to musculoskeletal disorders among corporate professionals today. Hours spent hunched over laptops with forward-head posture create immense strain on the cervical spine and trapezoid muscle groups.',
      'Workplace ergonomic audits reveal that simple alterations yield monumental relief: adjusting monitor eye-level so the top third of the screen meets straight-ahead gaze, positioning keyboards to allow a relaxed 90-degree elbow bend, and maintaining feet flat on the ground.',
      'Incorporating 5-minute seated yoga stretches—such as seated cat-cow movements, gentle spinal twists, and doorway pectoral stretches—breaks prolonged static postures and promotes lymphatic drainage.',
      'Organizations implementing regular ergonomic workshops see an immediate decline in repetitive strain complaints, leading to elevated comfort and sharper daily focus.',
      'Daystar Pinnacle conducts on-site workstation ergonomics audits, desk posture workshops, and guided desk yoga flows designed for corporate offices.',
    ],
  },
  {
    id: '3',
    slug: 'corporate-nutrition-beating-the-afternoon-energy-slump',
    title: 'Corporate Nutrition: Beating the 3 PM Office Energy Crash',
    category: 'Corporate Nutrition',
    excerpt: 'Science-backed dietary strategies to stabilize blood glucose, eliminate post-lunch brain fog, and fuel sustained productivity across afternoon meetings.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=700&fit=crop',
    date: 'Sep 29, 2026',
    readTime: '6 min read',
    author: {
      name: 'Pooja Sundaram',
      role: 'Senior Clinical Nutritionist & Metabolic Health Lead',
      credentials: 'Registered Dietitian (RD), M.Sc. Clinical Nutrition & Dietetics',
      avatar: '/images/team-nutritionist.png',
    },
    keyTakeaways: [
      'The 3 PM energy slump is a physiological consequence of rapid glycemic swings, not a personal lack of motivation.',
      'Structuring lunches around the Balanced Desk Plate formula maintains steady glucose and prevents reactive hypoglycemia.',
      'Proactive cellular hydration directly prevents the cognitive fatigue commonly mistaken for afternoon hunger.',
      'Replacing refined office pantry snacks with nutrient-dense alternatives stabilizes metabolic stamina all afternoon.',
    ],
    tags: ['Corporate Nutrition', 'Metabolic Health', 'Blood Sugar Balance', 'Energy Optimization', 'Healthy Snacking'],
    sections: [
      {
        id: 'biology-afternoon-slump',
        heading: '01. The Biology of the Afternoon Slump: Glycemic Spikes & Crashes',
        paragraphs: [
          'Almost every corporate professional is familiar with the dreaded 3 PM energy crash: heavy eyelids, sluggish cognitive processing, and an overwhelming craving for sugary snacks or another shot of espresso.',
          'This afternoon dip is rarely an issue of discipline; it is a direct metabolic reaction to lunch composition. When a meal contains excess refined starches, simple sugars, or heavy fried items without sufficient dietary fiber and protein, blood glucose surges rapidly.',
          'In response, the pancreas secretes a substantial bolus of insulin to clear the bloodstream. This rapid clearance triggers reactive hypoglycemia, plunging cellular energy levels and depriving the brain of its steady glucose supply right when high-stakes afternoon meetings begin.',
        ],
        callout: 'The afternoon slump is not a failure of willpower or lack of coffee. It is a predictable metabolic crash triggered by refined lunch starches and dehydration.',
      },
      {
        id: 'balanced-desk-plate',
        heading: '02. The Balanced Desk Plate Formula: Sustained 4-Hour Cellular Fuel',
        paragraphs: [
          'To maintain steady executive performance, professionals must learn to engineer their workday meals for slow, sustained energy release.',
          'The clinical foundation is the Balanced Desk Plate framework: half the plate dedicated to colorful fibrous vegetables or raw salads, one quarter devoted to high-quality lean protein (such as grilled paneer, lentils, tofu, chicken, or eggs), and the final quarter reserved for complex slow-burning carbohydrates like quinoa, brown rice, or whole grain rotis.',
          'Protein and soluble fiber slow gastric emptying and blunt the insulin curve, providing an even, consistent stream of cellular energy for four to five hours without the post-prandial stupor.',
        ],
        checklist: [
          'Anchor your lunch with 25 to 30 grams of clean protein to prevent insulin surges',
          'Fill half your meal container with fiber-dense vegetables and fresh greens',
          'Drink 500 ml of water 20 minutes before eating to support digestive enzymatic function',
        ],
      },
      {
        id: 'pantry-desk-snack-audit',
        heading: '03. Pantry & Desk Snack Audits: Swapping Sugar for High-Density Fuel',
        paragraphs: [
          'When fatigue hits, convenient office vending machines offering biscuits, chips, and sugary beverages exacerbate the metabolic rollercoaster.',
          'Our corporate nutrition masterclasses guide teams through practical pantry upgrades: stocking desk drawers with dry-roasted chickpeas, raw almonds, pumpkin seeds, walnuts, and single-origin dark chocolate.',
          'These whole-food options supply magnesium, healthy omega fats, and trace minerals that support neurotransmitter synthesis and sustained mental clarity throughout long strategy sessions.',
        ],
        stat: {
          value: '35%',
          label: 'Improvement in self-reported afternoon cognitive focus following metabolic meal restructuring',
        },
      },
      {
        id: 'corporate-cafeteria-partnerships',
        heading: '04. Corporate Cafeteria Partnerships: Healthy Food Accessibility at Scale',
        paragraphs: [
          'Individual intention is powerful, but environmental design is paramount. Organizations that partner with cafeteria caterers to offer clean, wholesome meal choices see widespread, effortless health adoption.',
          'Daystar Pinnacle conducts corporate cafeteria nutrition audits, curating balanced meal tags, clean salad bars, and healthy beverage stations that make the nourishing choice the easiest choice for employees.',
          'When nutritious food is readily accessible across campus, workforce vitality, immunity, and overall productivity thrive simultaneously.',
        ],
      },
    ],
    content: [
      'The dreaded 3 PM corporate energy crash is rarely a lack of willpower; it is almost always a metabolic reaction to refined carbohydrates, insulin spikes, and inadequate cellular hydration.',
      'When lunch consists predominantly of simple starches and sugary drinks, blood glucose surges and subsequently plummets, starving the brain of its steady fuel source and causing profound drowsiness and executive fatigue.',
      'Our corporate clinical nutritionists recommend the Balanced Desk Plate formula: pairing high-fiber leafy greens or cruciferous vegetables with clean lean proteins and healthy fats like nuts, seeds, or avocado. This slows gastric emptying and provides an even, sustained release of glucose over 4 to 5 hours.',
      'Replacing sugary pantry snacks with raw almonds, roasted chickpeas, and green tea keeps energy levels consistent, allowing team members to breeze through afternoon strategy sessions with clarity.',
      'Daystar Pinnacle provides corporate cafeteria nutrition audits, employee nutrition masterclasses, and personalized meal planning for busy professionals.',
    ],
  },
];

export const blogPosts: BlogPost[] = blogPostsData;
export const allBlogPosts: BlogPost[] = blogPostsData;

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(slug: string, limit = 2): BlogPost[] {
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
