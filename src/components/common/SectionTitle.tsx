import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animations';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  const renderTitle = () => {
    if (title.includes('*')) {
      const parts = title.split('*');
      return parts.map((part, index) => {
        if (index % 2 === 1) {
          return (
            <span key={index} className="text-[#FF7A1A] italic font-normal">
              {part}
            </span>
          );
        }
        return part;
      });
    }

    const words = title.trim().split(/\s+/);
    if (words.length <= 1) {
      return title;
    }

    const numHighlight = words.length >= 4 ? 2 : 1;
    const normalPart = words.slice(0, words.length - numHighlight).join(' ');
    const highlightPart = words.slice(words.length - numHighlight).join(' ');

    return (
      <>
        {normalPart}{' '}
        <span className="text-[#FF7A1A] italic font-normal">
          {highlightPart}
        </span>
      </>
    );
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`max-w-3xl mb-8 md:mb-10 ${alignClass}`}
    >
      {subtitle && (
        <div className="mb-4">
          <span
            className={`inline-flex text-[10px] sm:text-[11px] font-extrabold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full ${light
                ? 'text-white bg-white/10 border border-white/20'
                : 'text-[#FF7A1A] bg-[#FAF9F5] border border-[#FF7A1A]/20 shadow-sm'
              }`}
          >
            {subtitle}
          </span>
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3.0rem] font-serif font-medium leading-[1.12] tracking-tight mb-4 ${light ? 'text-white' : 'text-[#004B57]'
          }`}
      >
        {renderTitle()}
      </h2>

      {description && (
        <p
          className={`text-[13px] sm:text-sm leading-relaxed font-medium ${light ? 'text-white/80' : 'text-[#004B57]/85'
            } max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
