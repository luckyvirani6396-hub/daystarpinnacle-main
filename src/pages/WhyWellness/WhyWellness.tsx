import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Shield, CheckCircle, BarChart2, Briefcase, Zap } from 'lucide-react';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Button from '../../components/common/Button';
import CorporateROICalculator from '../../components/calculators/CorporateROICalculator';
import { fadeUp, staggerContainer } from '../../utils/animations';

export default function WhyWellness() {
  const painPoints = [
    {
      icon: Zap,
      title: 'Loss of Focus & Engagement',
      description: 'Burned-out employees operate at 50% capacity, costing organizations billions in lost productivity and project delays.',
    },
    {
      icon: Briefcase,
      title: 'Voluntary Resignations',
      description: 'Workplace stress is a top driver of resignations. Replacing a specialized employee costs 1.5x to 2x their annual salary.',
    },
    {
      icon: Shield,
      title: 'Escalating Insurance Claims',
      description: 'Stress-related chronic illnesses inflate employer-paid health claims and push premiums up year-over-year.',
    },
  ];

  const benefits = [
    {
      metric: '3.27x',
      label: 'Average ROI',
      source: 'Harvard University Study',
      description: 'Research shows that for every dollar invested in wellness programs, medical and absenteeism costs fall by $3.27.',
    },
    {
      metric: '28%',
      label: 'Reduced Absenteeism',
      source: 'World Health Organization',
      description: 'Proactive fitness, ergonomics, and nutrition initiatives reduce the total number of sick days taken per employee.',
    },
    {
      metric: '82%',
      label: 'Engagement Score',
      source: 'Internal Client Metrics',
      description: 'Daystar Pinnacle clients report an 82% program utilization rate, driven by our highly interactive and customized team challenges.',
    },
  ];

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-[#F8F7F2] to-[#EEF5E8] pt-8 pb-16 lg:pt-12 lg:pb-24">
        {/* Blurry decorations */}
        <div className="absolute left-[-120px] top-0 w-[520px] h-[520px] rounded-full bg-[#DDEFCF] blur-[140px] opacity-70" />
        <div className="absolute right-[-180px] bottom-[-150px] w-[420px] h-[420px] rounded-full bg-[#EAF4DD] blur-[120px] opacity-80" />

        <Container className="relative z-10 w-full px-6">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Tagline */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-8 rounded-full bg-[#5c8730]/10 flex items-center justify-center text-[#5c8730]">
                <BarChart2 className="w-4.5 h-4.5" />
              </div>
              <span className="text-xs font-extrabold tracking-wider uppercase text-[#004B57]">
                Proven ROI Dashboard
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#153B24] leading-tight mb-6"
            >
              Workplace Wellness is a <br />
              <span className="italic font-normal text-[#5c8730]">Strategic High-Return</span> Investment
            </motion.h1>

            {/* Underline divider */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-6 flex justify-center">
              <svg className="w-48 h-2.5 text-[#5c8730]/75" viewBox="0 0 300 10" fill="currentColor">
                <path d="M1 5C50 2 150 2 299 5C150 7 50 7 1 5Z" />
              </svg>
            </motion.div>

            {/* Subhead */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[#2c4033] text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed mb-8 font-medium"
            >
              Absenteeism, healthcare inflation, and voluntary employee turnover cost organizations millions annually. Our B2B packages are designed to optimize health metrics, reduce healthcare premiums, and bolster employee loyalty.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap justify-center gap-4 w-full sm:w-auto">
              <Button href="/contact" variant="primary" size="lg" className="font-bold flex items-center gap-2">
                <span>Book Corporate Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="#roi-calculator" variant="outline" size="lg" className="font-bold text-[#0e261a] border-[#0e261a] hover:bg-[#0e261a]/5">
                <span>Calculate Your ROI</span>
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Corporate Challenges Section ── */}
      <section className="py-20 bg-white z-10 relative">
        <Container>
          <SectionTitle
            subtitle="The Challenge"
            title="The Modern Workplace Crisis"
            description="Workplace stress has graduated from an individual grievance to an executive challenge."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {painPoints.map((point) => (
              <motion.div
                key={point.title}
                variants={fadeUp}
                className="bg-[#F8FAF6]/60 border border-[#E2E8E4]/60 rounded-3xl p-8 flex flex-col items-start hover:border-secondary/40 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#5c8730]/15 flex items-center justify-center text-[#5c8730] mb-6">
                  <point.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-dark mb-3">{point.title}</h4>
                <p className="text-muted text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── B2B ROI & Data-backed Benefits Section ── */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F8FAF6] z-10 relative">
        <Container>
          <SectionTitle
            subtitle="Data-Backed Case"
            title="Why Health Programs Deliver ROI"
            description="Our solutions are built on empirical evidence from leading academic and global health institutions."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit) => (
              <div key={benefit.label} className="bg-white rounded-3xl border border-[#E2E8E4]/80 p-8 shadow-sm flex flex-col">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#72A93B] bg-[#E8F2EA] rounded-full px-3 py-1 mb-4 w-fit">
                  {benefit.source}
                </span>
                <div className="text-4xl font-extrabold text-[#153B24] mb-2">{benefit.metric}</div>
                <h4 className="text-base font-bold text-dark mb-3">{benefit.label}</h4>
                <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{benefit.description}</p>
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mt-auto pt-4 border-t border-border">
                  <CheckCircle className="w-4 h-4" />
                  <span>Validated Indicator</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Interactive ROI Estimator Section ── */}
      <section id="roi-calculator" className="py-20 md:py-24 bg-white z-10 relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Calculator explanation */}
            <div className="lg:col-span-5 text-left">
              <span className="text-xs font-bold text-[#5c8730] uppercase tracking-wider block mb-3">Simulation</span>
              <h3 className="text-3xl font-extrabold text-dark leading-tight mb-5 font-serif">
                Calculate Employee Wellness Cost Savings
              </h3>
              <p className="text-[#2c4033] text-sm md:text-[15px] leading-relaxed mb-6">
                Turnover and employee replacement are one of the highest silent costs of modern business. When a staff member suffers from severe stress or lack of health support, they are 2.6x more likely to look for another job.
              </p>
              <p className="text-[#2c4033] text-sm md:text-[15px] leading-relaxed mb-8">
                Adjust the sliders on the simulator to calculate the baseline wellness loss for your company and see how our tailored B2B solutions immediately save costs.
              </p>
              <ul className="space-y-3.5">
                <li className="flex items-center gap-2.5 text-sm font-semibold text-dark">
                  <CheckCircle className="w-5 h-5 text-[#72A93B] shrink-0" />
                  <span>Absence Rate drop benchmark: 28%</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm font-semibold text-dark">
                  <CheckCircle className="w-5 h-5 text-[#72A93B] shrink-0" />
                  <span>Retention Improvement target: 15-20%</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm font-semibold text-dark">
                  <CheckCircle className="w-5 h-5 text-[#72A93B] shrink-0" />
                  <span>On-demand HR engagement reports included</span>
                </li>
              </ul>
            </div>

            {/* ROI Calculator input/output cards */}
            <div className="lg:col-span-7">
              <CorporateROICalculator />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Bottom Call To Action ── */}
      <section className="py-20 bg-gradient-to-br from-[#003D34] to-[#01231E] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#72A93B]/10 via-transparent to-transparent pointer-events-none" />
        <Container className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
          <Leaf className="w-12 h-12 text-[#cce452] mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mb-6 leading-tight">
            Protect Your Workplace Capital
          </h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mb-10 max-w-2xl font-medium">
            Join 150+ organizations prioritizing healthy workplaces. Request a customized workspace assessment and discover packages mapped for your corporate goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button href="/contact" variant="secondary" size="lg" className="font-bold flex items-center justify-center gap-2 group">
              <span>Request Corporate Proposal</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button href="/programs" variant="outline" size="lg" className="font-bold border-white text-white hover:bg-white/10 flex items-center justify-center">
              <span>View Package Tiers</span>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
