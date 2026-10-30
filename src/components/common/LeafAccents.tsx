// Decorative light-green leaf branches pinned to the left and right edges of a section.
// Parent section must be `relative overflow-hidden`.

const LEAF = 'M0 0 C 11 -12, 12 -32, 0 -46 C -12 -32, -11 -12, 0 0 Z';

const leaves = [
  { x: 58, y: 222, r: -48, s: 1 },
  { x: 62, y: 190, r: 42, s: 0.95 },
  { x: 60, y: 150, r: -38, s: 1.05 },
  { x: 60, y: 112, r: 46, s: 0.9 },
  { x: 62, y: 74, r: -30, s: 0.85 },
  { x: 68, y: 40, r: 28, s: 0.75 },
];

function LeafBranch({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 260" fill="none" aria-hidden="true" className={className}>
      <path
        d="M58 258 C 52 210, 68 165, 60 120 S 58 50, 72 8"
        stroke="#72A93B"
        strokeOpacity="0.35"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {leaves.map((l, i) => (
        <g key={i} transform={`translate(${l.x} ${l.y}) rotate(${l.r}) scale(${l.s})`}>
          <path d={LEAF} fill="#72A93B" fillOpacity="0.12" stroke="#72A93B" strokeOpacity="0.4" strokeWidth="1.3" />
          <path d="M0 -2 L0 -40" stroke="#72A93B" strokeOpacity="0.35" strokeWidth="1" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

export default function LeafAccents() {
  return (
    <div className="hidden xl:block pointer-events-none select-none" aria-hidden="true">
      <LeafBranch className="absolute left-2 top-16 w-[110px] h-auto opacity-80 -rotate-6" />
      <LeafBranch className="absolute right-2 bottom-16 w-[110px] h-auto opacity-80 -scale-x-100 rotate-6" />
    </div>
  );
}
