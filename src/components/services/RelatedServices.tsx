import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ClinicalService } from '../../types';
import Container from '../common/Container';
import ServiceCard from '../common/ServiceCard';

interface RelatedServicesProps {
  services: ClinicalService[];
  currentTitle?: string;
}

export default function RelatedServices({ services }: RelatedServicesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth continuous auto-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || services.length === 0) return;

    let animId: number;
    const speed = 0.75;

    const step = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;
        // When halfway through the duplicated items, loop seamlessly
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, services.length]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const offset = 360;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -offset : offset,
      behavior: 'smooth',
    });
  };

  if (!services || services.length === 0) return null;

  // Duplicate items for seamless infinite marquee loop
  const displayServices = [...services, ...services];

  return (
    <section className="py-14 md:py-20 relative overflow-hidden bg-[#FAF9F5]/40 select-none">
      <Container>
        {/* Header with Heading 'More Services' and navigation controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8">
          <div>
            <span className="inline-flex text-[10px] sm:text-[11px] font-extrabold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-[#FF7A1A]/25 text-[#FF7A1A] mb-3">
              Explore More
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium text-[#004B57] leading-[1.12] tracking-tight">
              More <span className="text-[#FF7A1A] italic font-normal">Services</span>
            </h2>
            <p className="text-[13px] sm:text-sm text-[#004B57]/80 leading-relaxed font-medium mt-2 max-w-xl">
              Explore our complete suite of corporate wellness solutions designed to empower, energize, and retain your workforce.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-xl bg-white border border-[#FAF9F5] flex items-center justify-center text-[#004B57] hover:bg-[#004B57] hover:text-white hover:border-[#004B57] transition-all shadow-xs cursor-pointer"
              aria-label="Previous services"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-xl bg-[#FF7A1A] border border-[#FF7A1A] flex items-center justify-center text-white hover:bg-[#FF7A1A] transition-all shadow-xs shadow-[#FF7A1A]/20 cursor-pointer"
              aria-label="Next services"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Auto-scrolling carousel track */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto scrollbar-none py-3 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayServices.map((service, index) => (
            <div
              key={`${service.id}-${index}`}
              className="w-[290px] sm:w-[330px] md:w-[350px] shrink-0"
            >
              <ServiceCard
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                image={service.image}
                to={`/services/${service.slug}`}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
