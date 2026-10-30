import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  TrendingUp,
  Award,
  ShieldCheck,
} from 'lucide-react';
import Container from '../../components/common/Container';
import ServiceDetailHero from '../../components/services/ServiceDetailHero';
import RelatedServices from '../../components/services/RelatedServices';
import { clinicalServices, getServiceBySlug } from '../../assets/data/clinicalServices';
import { fadeUp } from '../../utils/animations';
import { sectionDotGrid } from '../../components/home/sectionStyles';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = clinicalServices.filter((s) => s.slug !== service.slug);

  const workflowSteps = [
    {
      num: '01',
      title: 'Discovery & Needs Analysis',
      desc: 'We assess team demographics, stress points, and scheduling windows to tailor the focus.',
    },
    {
      num: '02',
      title: 'Custom Program Design',
      desc: 'Our directors build the schedule, select expert facilitators, and deliver promo materials.',
    },
    {
      num: '03',
      title: 'Interactive Delivery',
      desc: 'Engaging onsite or virtual sessions packed with hands-on practice, guides, and takeaways.',
    },
    {
      num: '04',
      title: 'Metrics & Next Steps',
      desc: 'Post-event attendance numbers, employee feedback surveys, and leadership summary reports.',
    },
  ];

  return (
    <>
      <ServiceDetailHero service={service} />

      <section id="service-details" className="py-16 md:py-24 bg-[#FAF9F5]/60 relative overflow-hidden">
        {/* Subtle background dot grid & ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-[-6%] top-[15%] w-[42%] h-[42%] rounded-full bg-[#FF7A1A]/4 blur-[100px]" />
          <div className="absolute left-[-6%] bottom-[20%] w-[38%] h-[38%] rounded-full bg-[#004B57]/4 blur-[100px]" />
          <div className="absolute inset-0" style={sectionDotGrid(0.12)} />
        </div>

        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-8xl mx-auto space-y-8 relative z-10"
          >
            {/* Card 1: Overview & Value Proposition */}
            <div className="relative bg-white rounded-3xl p-8 md:p-10 border border-[#FAF9F5]/80 shadow-[0_4px_24px_rgba(0,75,87,0.04)] overflow-hidden">
              {/* Top brand gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF7A1A] via-[#FF7A1A]/70 to-[#004B57]" />

              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 text-[10.5px] font-extrabold uppercase tracking-widest text-[#FF7A1A] bg-[#FAF9F5] rounded-full px-3.5 py-1.5 border border-[#FF7A1A]/20">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF7A1A]" />
                  About This Solution
                </span>
                <span className="text-[11px] font-bold text-[#004B57] flex items-center gap-1.5 bg-[#FAF9F5] px-3 py-1 rounded-full border border-[#FAF9F5]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#72A93B]" />
                  Corporate Grade Standard
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-[2.1rem] font-serif font-medium text-[#004B57] leading-snug tracking-tight mb-4">
                How Our {service.title} Drives Real Workplace Change
              </h2>

              <p className="text-[#004B57]/85 leading-relaxed text-base md:text-[17px] font-medium mb-8">
                {service.description}
              </p>

              {/* 3 Quick highlights pill grid */}
              <div className="grid sm:grid-cols-3 gap-3.5 pt-6 border-t border-[#FAF9F5]">
                <div className="bg-[#FAF9F5] rounded-2xl p-4 border border-[#FAF9F5]/70 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF9F5] text-[#FF7A1A] flex items-center justify-center shrink-0 border border-[#FF7A1A]/20">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#004B57]">Flexible Formats</p>
                    <p className="text-[11px] text-[#004B57] leading-tight mt-0.5 font-medium">Onsite, virtual & hybrid</p>
                  </div>
                </div>

                <div className="bg-[#FAF9F5] rounded-2xl p-4 border border-[#FAF9F5]/70 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF9F5] text-[#004B57] flex items-center justify-center shrink-0 border border-[#004B57]/20">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#004B57]">Certified Leads</p>
                    <p className="text-[11px] text-[#004B57] leading-tight mt-0.5 font-medium">Qualified facilitators</p>
                  </div>
                </div>

                <div className="bg-[#FAF9F5] rounded-2xl p-4 border border-[#FAF9F5]/70 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF9F5] text-[#72A93B] flex items-center justify-center shrink-0 border border-[#72A93B]/20">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#004B57]">Measured ROI</p>
                    <p className="text-[11px] text-[#004B57] leading-tight mt-0.5 font-medium">Attendance & feedback</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards 2 & 3: Two Distinct Pillars (Benefits & What's Included) */}
            <div className="grid sm:grid-cols-2 gap-6 items-stretch">

              {/* Key Benefits Card */}
              <div className="bg-white rounded-3xl p-7 md:p-8 border border-[#FAF9F5] shadow-sm hover:shadow-md hover:border-[#FF7A1A]/30 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#FAF9F5] text-[#FF7A1A] flex items-center justify-center border border-[#FF7A1A]/20 shrink-0">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#004B57] font-serif">Key Strategic Benefits</h3>
                      <p className="text-xs text-[#004B57] font-medium">Measurable outcomes for your team</p>
                    </div>
                  </div>

                  <div className="h-px w-full bg-[#FAF9F5] mb-5" />

                  <ul className="space-y-3.5">
                    {service.benefits.map((benefit, idx) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3.5 p-2 rounded-xl hover:bg-[#FAF9F5] transition-colors"
                      >
                        <span className="w-6 h-6 rounded-lg bg-[#FAF9F5] text-[#FF7A1A] text-[11px] font-extrabold flex items-center justify-center shrink-0 mt-0.5 border border-[#FF7A1A]/20">
                          0{idx + 1}
                        </span>
                        <span className="text-sm font-semibold text-[#004B57]/90 leading-snug">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#FAF9F5]/60">
                  <span className="text-[11px] font-bold text-[#FF7A1A] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Validated in corporate wellness audits
                  </span>
                </div>
              </div>

              {/* What's Included Card */}
              <div className="bg-white rounded-3xl p-7 md:p-8 border border-[#FAF9F5] shadow-sm hover:shadow-md hover:border-[#004B57]/30 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#FAF9F5] text-[#004B57] flex items-center justify-center border border-[#004B57]/20 shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#004B57] font-serif">What&apos;s Included</h3>
                      <p className="text-xs text-[#004B57] font-medium">Turnkey toolkits &amp; session modules</p>
                    </div>
                  </div>

                  <div className="h-px w-full bg-[#FAF9F5] mb-5" />

                  <ul className="space-y-3.5">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3.5 p-2 rounded-xl hover:bg-[#FAF9F5] transition-colors"
                      >
                        <div className="w-6 h-6 rounded-lg bg-[#FAF9F5] text-[#004B57] flex items-center justify-center shrink-0 mt-0.5 border border-[#004B57]/15">
                          <Check className="w-3.5 h-3.5" strokeWidth={3} />
                        </div>
                        <span className="text-sm font-semibold text-[#004B57]/90 leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#FAF9F5]/60">
                  <span className="text-[11px] font-bold text-[#004B57] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Includes materials &amp; follow-up resources
                  </span>
                </div>
              </div>

            </div>

            {/* Card 4: 4-Step Rollout Process */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#FAF9F5] shadow-sm">
              <div className="max-w-xl mb-7">
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#004B57] bg-[#FAF9F5] rounded-full px-3 py-1 mb-3 border border-[#004B57]/15">
                  Structured Rollout
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#004B57] tracking-tight">
                  How We Implement This In 4 Simple Steps
                </h3>
                <p className="text-xs sm:text-sm text-[#004B57] mt-1 font-medium">
                  A frictionless corporate delivery framework managed end-to-end by Daystar Pinnacle.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {workflowSteps.map((step) => (
                  <div
                    key={step.num}
                    className="bg-[#FAF9F5] rounded-2xl p-5 border border-[#FAF9F5]/80 flex flex-col justify-between hover:border-[#FF7A1A]/30 hover:bg-white hover:shadow-sm transition-all duration-300"
                  >
                    <div>
                      <span className="text-xl font-serif font-bold text-[#FF7A1A] block mb-2">
                        {step.num}
                      </span>
                      <h4 className="font-bold text-sm text-[#004B57] mb-2 leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-xs text-[#004B57] leading-relaxed font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <RelatedServices services={otherServices} currentTitle={service.title} />

      {/* Program CTA block */}
      <section className="py-14 md:py-18 bg-[#FAF9F5]/40">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#FAF9F5]/65 rounded-[24px] p-8 md:p-12 border border-[#FAF9F5]/60 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-center md:text-left">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#FF7A1A] bg-white rounded-full px-4 py-2 mb-4 border border-[#FF7A1A]/15 shadow-sm">
                Full Programs
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#004B57] mb-3 font-serif">
                Want a Complete Transformation Plan?
              </h3>
              <p className="text-muted text-sm md:text-base leading-relaxed max-w-lg font-medium">
                Our structured multi-week programs bundle coaching, meal plans, and milestones for lasting results.
              </p>
            </div>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FF7A1A] hover:bg-[#FF7A1A] text-white font-bold text-sm transition-all duration-300 shrink-0 shadow-lg shadow-[#FF7A1A]/15 hover:scale-[1.02] hover:-translate-y-0.5"
            >
              <span>View Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
