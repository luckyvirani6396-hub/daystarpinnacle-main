import { motion } from 'framer-motion';
import Container from '../common/Container';
import { allBlogPosts } from '../../assets/data/content';
import { HEALTH_CATEGORIES } from '../../constants';
import { fadeUp, staggerContainer } from '../../utils/animations';

const hubStats = [
  { value: `${allBlogPosts.length}`, label: 'Executive Guides' },
  { value: `${HEALTH_CATEGORIES.length - 1}`, label: 'Core Categories' },
  { value: 'Strategic', label: 'Corporate Focus' },
  { value: '100%', label: 'Research-Backed' },
];

export default function HubStatsBar() {
  return (
    <section className="py-14 md:py-16 bg-gradient-to-r from-[#003C46] via-[#004B57] to-[#003C46] relative overflow-hidden text-white">
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#FF7A1A] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-white rounded-full blur-[90px]" />
      </div>
      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10"
        >
          {hubStats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center px-4 pt-4 sm:pt-0">
              <span className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#FF9A4A] block">
                {stat.value}
              </span>
              <p className="text-[#E2E8E4] mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
