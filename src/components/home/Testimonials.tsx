import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials } from '../../assets/data/content';
import {
  sectionBody,
  sectionDotGrid,
  sectionHeadingAccent,
  sectionIntroBadge,
  sectionIntroHeading,
  statLabel,
  statValue,
} from './sectionStyles';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const active = testimonials[current];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="relative w-full bg-[#F3F8EE] overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-8%] top-[10%] w-[45%] h-[45%] rounded-full bg-[#FF7A1A]/4 blur-[100px]" />
        <div className="absolute inset-0" style={sectionDotGrid(0.2)} />
      </div>

      <div className="relative z-10 w-[95%] max-w-8xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left — intro */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 text-center lg:text-left"
          >
            <span className={sectionIntroBadge}>Testimonials</span>
            <h2 className={sectionIntroHeading}>
              What <span className={sectionHeadingAccent}>HR Leaders</span> Say
            </h2>
            <p className={`${sectionBody} mb-6 max-w-md mx-auto lg:mx-0`}>
              Real feedback from people leaders who partnered with us to build healthier,
              more engaged workplaces.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-6 border-t border-[#FAF9F5]">
              {[
                { value: '98%', label: 'Satisfaction' },
                { value: '500+', label: 'Clients' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className={statValue}>{stat.value}</p>
                  <p className={statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — carousel card */}
          <div
            className="lg:col-span-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.article
                  key={active.id}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative bg-[#FAF9F5] rounded-3xl border border-[#FAF9F5] overflow-hidden shadow-[0_16px_48px_rgba(0,75,87,0.08)]"
                >
                  <div className="relative p-7 sm:p-9 md:p-10">
                    {/* Decorative quote */}
                    <Quote
                      className="absolute right-6 top-6 w-16 h-16 text-[#004B57]/[0.06]"
                      strokeWidth={1}
                    />

                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-5">
                      {Array.from({ length: active.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-[#FF7A1A] fill-[#FF7A1A]"
                          strokeWidth={0}
                        />
                      ))}
                    </div>

                    <blockquote className="text-base sm:text-lg md:text-xl text-[#004B57]/85 leading-relaxed font-medium mb-8 pr-4">
                      &ldquo;{active.feedback}&rdquo;
                    </blockquote>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-6 border-t border-[#FAF9F5]/80">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={active.image}
                            alt={active.name}
                            loading="lazy"
                            decoding="async"
                            className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-md"
                          />
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#72A93B] border-2 border-white flex items-center justify-center">
                            <span className="text-white text-[8px] font-bold">✓</span>
                          </div>
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-[#004B57] text-base">{active.name}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3">
                        <button
                          type="button"
                          onClick={prev}
                          className="w-10 h-10 rounded-xl bg-white border border-[#FAF9F5] flex items-center justify-center text-[#004B57] hover:bg-[#004B57] hover:text-white hover:border-[#004B57] transition-all shadow-sm"
                          aria-label="Previous testimonial"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={next}
                          className="w-10 h-10 rounded-xl bg-[#FF7A1A] border border-[#FF7A1A] flex items-center justify-center text-white hover:bg-[#FF7A1A] transition-all shadow-sm shadow-[#FF7A1A]/25"
                          aria-label="Next testimonial"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>

              {/* Thumbnail strip */}
              <div className="flex justify-center gap-3 mt-6">
                {testimonials.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrent(i)}
                    className={`flex items-center gap-2.5 pl-1.5 pr-3 py-1.5 rounded-full border transition-all duration-300 ${
                      i === current
                        ? 'bg-white border-[#FF7A1A]/40 shadow-md scale-105'
                        : 'bg-transparent border-transparent opacity-60 hover:opacity-100'
                    }`}
                    aria-label={`View testimonial from ${item.name}`}
                  >
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className={`w-8 h-8 rounded-full object-cover border-2 ${
                        i === current ? 'border-[#FF7A1A]' : 'border-[#FAF9F5]'
                      }`}
                    />
                    <span
                      className={`text-xs font-bold hidden sm:block ${
                        i === current ? 'text-[#004B57]' : 'text-[#004B57]'
                      }`}
                    >
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
