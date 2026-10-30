import { motion } from 'framer-motion';
import Container from '../common/Container';

const tips = [
  {
    title: 'Evidence-Based Content',
    description: 'Every article is reviewed by certified nutrition and health professionals.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5.5 h-5.5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 7h8M8 11h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Actionable Advice',
    description: 'Practical tips you can apply to your routine starting today.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5.5 h-5.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Holistic Perspective',
    description: 'Content covering nutrition, movement, sleep, and mental health together.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5.5 h-5.5">
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12h20" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Always Free to Read',
    description: 'No paywalls — our health knowledge is open to everyone.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5.5 h-5.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function WellnessTips() {
  return (
    <section className="py-14 md:py-18 relative z-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF7A1A] bg-[#FAF9F5] px-3.5 py-1.5 rounded-full border border-[#FF7A1A]/10 mb-3.5">
              Why Read Here
            </span>
            <h2 className="text-3xl md:text-[38px] font-serif font-medium text-[#004B57] leading-tight">
              Trusted Health <br className="hidden md:inline" />
              Knowledge Hub
            </h2>
            <p className="text-[#004B57] text-sm md:text-base leading-relaxed mt-4 max-w-sm font-medium">
              Curated content designed to help you make informed decisions about your health and daily habits.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {tips.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4.5 bg-[#FAF9F5] rounded-2xl p-6 border border-[#FAF9F5]/80 hover:border-[#FF7A1A]/30 hover:shadow-lg hover:shadow-[#FF7A1A]/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FAF9F5] flex items-center justify-center text-[#FF7A1A] shrink-0 border border-[#FF7A1A]/15 shadow-xs">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-[17px] text-[#004B57]">{item.title}</h3>
                    <p className="text-sm text-[#004B57] font-medium mt-1.5 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
