import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { SITE_NAME } from '../../constants';

interface LogoProps {
  className?: string;
  linkToHome?: boolean;
  light?: boolean;
  /** Slightly smaller mark + wordmark for tight navbars (e.g. MacBook widths) */
  compact?: boolean;
}

function LogoMark({ className = '' }: { className?: string }) {
  return (
    <span className="inline-flex items-center justify-center shrink-0 bg-transparent">
      <img
        src={logo}
        alt={`${SITE_NAME} logo`}
        draggable={false}
        className={`object-contain ${className}`}
      />
    </span>
  );
}

export default function Logo({
  className = "",
  linkToHome = true,
  light = false,
  compact = false,
}: LogoProps) {
  const content = (
    <span className={`inline-flex items-center gap-2 sm:gap-2.5 py-1 ${className}`}>
      <LogoMark className={compact ? 'h-8 sm:h-9 xl:h-10 w-auto' : 'h-10 sm:h-12 w-auto'} />

      <span className="flex flex-col leading-none select-none text-left">
        {/* DAYSTAR */}
        <span
          className={`font-bold uppercase ${
            compact
              ? 'text-[14px] sm:text-[15px] xl:text-[17px]'
              : 'text-[15px] sm:text-[18px] md:text-[20px]'
          }`}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: light ? "#FFFFFF" : "#FF7A1A",
            lineHeight: 1,
          }}
        >
          DAYSTAR
        </span>

        {/* PINNACLE */}
        <span
          className={`font-bold uppercase mt-0.5 tracking-wide ${
            compact
              ? 'text-[12px] sm:text-[13px] xl:text-[15px]'
              : 'mt-1 text-[13px] sm:text-[16px] md:text-[18px]'
          }`}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: light ? "rgba(255, 255, 255, 0.85)" : "#0a222d",
            lineHeight: 1,
          }}
        >
          PINNACLE
        </span>
      </span>
    </span>
  );

  if (linkToHome) {
    return (
      <Link
        to="/"
        className="inline-flex items-center"
        aria-label="Daystar Pinnacle"
      >
        {content}
      </Link>
    );
  }

  return content;
}
