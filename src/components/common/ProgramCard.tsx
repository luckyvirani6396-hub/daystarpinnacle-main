import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { Check } from 'lucide-react';
import ServiceIcon from './ServiceIcon';
import { fadeUp } from '../../utils/animations';

const MotionLink = motion.create(Link);

interface ProgramCardProps {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  icon: string;
  features: string[];
  to?: string;
  compact?: boolean;
  image?: string;
  featured?: boolean;
}

export default function ProgramCard({
  id,
  title,
  description,
  duration,
  icon,
  features,
  to = '/contact',
  compact = false,
  image,
  featured = false,
}: ProgramCardProps) {
  const card = (
    <div
      className={`group relative flex flex-col h-full rounded-3xl border p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] ${
        featured
          ? 'bg-[#004B57] border-[#004B57] text-white shadow-[0_20px_60px_rgba(0,75,87,0.2)] md:scale-[1.03] z-10 pt-8'
          : 'bg-white border-[#E2E8E4]/60 hover:border-[#FF7A1A]/40 hover:shadow-xl hover:shadow-[#FF7A1A]/5 text-dark'
      }`}
    >
      {featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-extrabold uppercase tracking-[0.14em] bg-[#FF7A1A] text-white px-4 py-1.5 rounded-full shadow-md shadow-[#FF7A1A]/30 whitespace-nowrap z-20">
          Most Popular
        </span>
      )}

      {/* Hero Image Section (If explicitly passed and not featured) */}
      {image && !featured && (
        <div className="relative w-full aspect-[4/3] min-h-[200px] overflow-hidden shrink-0 rounded-2xl bg-[#FEF3E8] mb-6">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-xl bg-white/95 text-[#004B57] text-[10px] font-extrabold uppercase tracking-widest shadow-sm border border-[#E2E8E4]/20">
            {duration}
          </span>
        </div>
      )}

      {/* Card Header Section */}
      <div
        className={`mb-6 pb-5 border-b ${
          featured ? 'border-white/15' : 'border-[#E2E8E4]/80'
        }`}
      >
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
            featured ? 'bg-white/12 text-[#FF7A1A]' : 'bg-[#FEF3E8] text-[#FF7A1A] border border-[#FF7A1A]/10'
          }`}
        >
          <ServiceIcon name={icon} className="w-6 h-6" />
        </div>

        <h3
          className={`text-xl sm:text-2xl font-serif font-semibold tracking-tight leading-tight mb-2 ${
            featured ? 'text-white' : 'text-[#004B57] group-hover:text-[#FF7A1A] transition-colors'
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-[11px] font-extrabold uppercase tracking-[0.16em] ${
            featured ? 'text-[#FF7A1A]' : 'text-[#004B57]/70'
          }`}
        >
          Best for {duration}
        </p>
      </div>

      {/* Description text */}
      <p
        className={`leading-relaxed text-sm mb-6 ${
          featured ? 'text-white/80' : 'text-[#5F6B6E]'
        } font-medium line-clamp-3`}
      >
        {description}
      </p>

      {/* Features list */}
      <ul className="space-y-2.5 mb-8 flex-1">
        {features.slice(0, compact ? 4 : 8).map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check
              className={`w-4 h-4 shrink-0 mt-0.5 ${
                featured ? 'text-[#FF7A1A]' : 'text-[#FF7A1A]'
              }`}
              strokeWidth={2.5}
            />
            <span className={featured ? 'text-white/85' : 'text-[#1A2E32]/75 font-medium'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button Link */}
      <div className="mt-auto">
        <div
          className={`inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
            featured
              ? 'bg-[#FF7A1A] hover:bg-[#E86800] text-white shadow-lg shadow-[#FF7A1A]/15'
              : 'bg-[#FAF9F5] hover:bg-[#FF7A1A] hover:text-white text-[#004B57] hover:text-white border border-[#E2E8E4] shadow-sm'
          }`}
        >
          <span>Request Pricing</span>
          <HiArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );

  return (
    <motion.div id={id} variants={fadeUp} className="block h-full">
      <MotionLink to={to} className="block h-full no-underline">
        {card}
      </MotionLink>
    </motion.div>
  );
}
