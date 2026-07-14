import { motion } from 'framer-motion';
import Container from '../common/Container';
import ServiceIcon from '../common/ServiceIcon';
import { whyChooseUs } from '../../assets/data/content';

export default function CareApproach() {
  return (
    <section className="py-14 md:py-18 bg-white relative z-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full text-[#FF7A1A] bg-[#FEF3E8] border border-[#FF7A1A]/20 shadow-sm mb-4 inline-block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-[38px] font-serif font-medium text-[#004B57] leading-tight">
              Corporate Wellness <br className="hidden md:inline" />
              <span className="text-[#FF7A1A] italic font-normal">You Can Trust</span>
            </h2>
            <p className="text-muted text-sm md:text-base leading-relaxed mt-4 max-w-sm font-medium">
              Every service is delivered by certified professionals using evidence-based methods tailored to your organization and goals.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4.5 bg-[#FEF3E8]/35 rounded-2xl p-5 border border-[#E2E8E4]/60 hover:border-[#FF7A1A]/30 hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#FF7A1A]/10 flex items-center justify-center text-[#FF7A1A] shrink-0 border border-[#FF7A1A]/5 shadow-sm">
                    <ServiceIcon name={item.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-[17px] text-[#004B57]">{item.title}</h3>
                    <p className="text-sm text-[#2c4033]/85 font-medium mt-1.5 leading-relaxed">{item.description}</p>
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
