import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  to?: string;
  image?: string;
}

export default function ServiceCard({ title, description, to, image }: ServiceCardProps) {
  const cardClass =
    'group relative flex flex-col h-full bg-white rounded-2xl border border-border hover:border-[#FF7A1A]/40 transition-all duration-500 no-underline overflow-hidden hover:shadow-xl hover:shadow-[#FF7A1A]/5';

  const cardContent = (
    <>
      {/* Image section with overlay animations */}
      {image && (
        <div className="relative w-full h-56 overflow-hidden shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          {/* Dark gradient overlay — slides up on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          {/* Centered CTA on image — fades in on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <span className="px-6 py-2.5 rounded-xl bg-white/95 text-[#FF7A1A] text-sm font-bold shadow-lg backdrop-blur-sm flex items-center gap-2 scale-75 group-hover:scale-100 transition-transform duration-500 delay-150 border border-[#FF7A1A]/10">
              View Details
              <HiArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      )}

      {/* Content section */}
      <div className={`flex flex-col flex-1 ${image ? 'p-6 sm:p-7' : 'p-8'}`}>
        {/* Accent line — expands on hover */}
        <div className="w-8 h-0.5 bg-[#FF7A1A] rounded-full mb-4 transition-all duration-500 group-hover:w-14 group-hover:bg-[#FF7A1A]" />

        <h3 className="text-xl md:text-[22px] font-serif font-bold text-[#004B57] mb-2.5 transition-colors duration-300 group-hover:text-[#FF7A1A]">
          {title}
        </h3>
        <p className="text-[#5F6B6E] leading-relaxed text-[13px] sm:text-sm flex-1 font-medium">{description}</p>
      </div>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cardClass}>
        {cardContent}
      </Link>
    );
  }

  return <div className={cardClass}>{cardContent}</div>;
}
