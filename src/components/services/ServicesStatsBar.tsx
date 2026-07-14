import { motion } from 'framer-motion';
import Container from '../common/Container';
import { fadeUp, staggerContainer } from '../../utils/animations';

const serviceStats = [
  { value: '10', label: 'Wellness Dimensions' },
  { value: '85%+', label: 'Employee Engagement' },
  { value: '15,000+', label: 'Employees Supported' },
  { value: '50+', label: 'Corporate Partners' },
];

export default function ServicesStatsBar() {
  return (
    <section className="py-14 md:py-16 bg-[#004B57] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-secondary rounded-full blur-3xl" />
      </div>
      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {serviceStats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center">
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white block">{stat.value}</span>
              <p className="text-white/80 mt-2 text-sm md:text-base font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
