/** Shared home-section design tokens — logo palette */
export const brand = {
  cream: '#FAF9F5',
  teal: '#004B57',
  orange: '#FF7A1A',
  green: '#72A93B',
  body: '#1A2E32',
  muted: '#5F6B6E',
  border: '#E2E8E4',
} as const;

export const sectionBadge =
  'inline-flex items-center text-[10.5px] sm:text-[11px] font-extrabold tracking-[0.16em] uppercase px-3.5 py-1.5 rounded-full bg-[#FEF3E8] border border-[#FF7A1A]/25 text-[#FF7A1A]';

export const sectionHeading =
  'text-2xl sm:text-3xl md:text-[2.1rem] lg:text-[2.35rem] font-serif font-medium text-[#004B57] leading-[1.2] tracking-tight';

export const sectionHeadingAccent = 'text-[#FF7A1A] italic font-normal';

export const sectionBody =
  'text-[13px] sm:text-sm md:text-[14.5px] text-[#1A2E32]/75 leading-relaxed font-medium';

export const statValue =
  'text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-[#004B57] leading-none';

export const statLabel =
  'text-[10px] sm:text-[11px] uppercase tracking-wider text-[#5F6B6E] font-bold mt-1.5';

export const quoteText =
  'text-sm sm:text-base md:text-lg text-[#1A2E32]/80 leading-relaxed font-medium';

export const cardTitle = 'text-sm font-bold text-[#004B57]';
export const cardDescription = 'text-xs sm:text-sm text-[#5F6B6E] leading-relaxed font-medium';

export const sectionIntroBadge = `${sectionBadge} mb-2.5`;
export const sectionIntroHeading = `${sectionHeading} mb-2.5 md:mb-3`;
export const sectionIntroBlock = 'text-center mb-8 md:mb-10 max-w-3xl mx-auto flex flex-col items-center';

export const cardOnWhite =
  'bg-white border border-[#E2E8E4] rounded-2xl shadow-[0_2px_16px_rgba(0,75,87,0.06)] hover:shadow-[0_8px_32px_rgba(0,75,87,0.1)] hover:border-[#004B57]/15 transition-all duration-300';

export const cardOnCream =
  'bg-white border border-[#E2E8E4] rounded-2xl shadow-[0_2px_16px_rgba(0,75,87,0.06)] hover:shadow-[0_8px_32px_rgba(0,75,87,0.1)] hover:border-[#004B57]/15 transition-all duration-300';

export const calloutBox =
  'bg-[#FAF9F5] border-l-4 border-[#FF7A1A] rounded-r-2xl rounded-l-sm shadow-[0_4px_20px_rgba(0,75,87,0.06)] px-5 py-4';

export const btnPrimary =
  'inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF7A1A] hover:bg-[#E86800] text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-[#FF7A1A]/20 hover:-translate-y-0.5';

export const btnSecondary =
  'inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#004B57]/20 text-[#004B57] hover:border-[#FF7A1A] hover:text-[#FF7A1A] font-bold text-sm transition-all duration-300 shadow-sm';

export const iconAccentCycle = [
  { accent: '#FF7A1A', accentBg: '#FEF3E8' },
  { accent: '#004B57', accentBg: '#E6F2F4' },
  { accent: '#72A93B', accentBg: '#EEF6E6' },
] as const;

export function sectionDotGrid(opacity = 0.22) {
  return {
    backgroundImage: 'radial-gradient(circle, #00000008 1px, transparent 1px)',
    backgroundSize: '36px 36px',
    opacity,
  };
}
