import LeafAccents from './LeafAccents';

export default function SectionDecorations() {
  return (
    <>
      <div className="absolute left-0 top-1/4 w-[280px] h-[450px] bg-gradient-to-r from-[#FAF9F5]/70 to-transparent rounded-r-full blur-xl -z-10 pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-[280px] h-[450px] bg-gradient-to-l from-[#FAF9F5]/70 to-transparent rounded-l-full blur-xl -z-10 pointer-events-none" />
      <LeafAccents />
    </>
  );
}
