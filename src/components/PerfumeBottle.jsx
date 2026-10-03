// Ilustración vectorial de frasco, usada cuando un producto no tiene fotografía.
// Reemplazable: al cargar `image` en products.js se muestra la foto real.

const SHAPES = {
  tall: {
    body: 'M70 120 h60 a8 8 0 0 1 8 8 v190 a8 8 0 0 1 -8 8 h-60 a8 8 0 0 1 -8 -8 v-190 a8 8 0 0 1 8 -8 z',
    neck: { x: 90, y: 100, w: 20, h: 20 },
    cap: { x: 82, y: 40, w: 36, h: 60 },
    label: { x: 78, y: 200, w: 44, h: 60 },
    shine: 'M76 134 v170',
  },
  round: {
    body: 'M100 150 a78 78 0 1 0 0.01 0 z',
    neck: { x: 90, y: 128, w: 20, h: 22 },
    cap: { x: 76, y: 58, w: 48, h: 70 },
    label: { x: 76, y: 240, w: 48, h: 44 },
    shine: 'M48 250 a60 60 0 0 1 24 -50',
  },
  square: {
    body: 'M52 140 h96 a6 6 0 0 1 6 6 v168 a6 6 0 0 1 -6 6 h-96 a6 6 0 0 1 -6 -6 v-168 a6 6 0 0 1 6 -6 z',
    neck: { x: 88, y: 122, w: 24, h: 18 },
    cap: { x: 72, y: 62, w: 56, h: 60 },
    label: { x: 70, y: 214, w: 60, h: 64 },
    shine: 'M60 154 v152',
  },
}

export default function PerfumeBottle({ shape = 'tall', tone = '#2a2118', label = '', id = 'b' }) {
  const s = SHAPES[shape] || SHAPES.tall
  const glass = `glass-${id}`
  const cap = `cap-${id}`
  return (
    <svg viewBox="0 0 200 360" role="img" aria-label={label} className="bottle-svg">
      <defs>
        <linearGradient id={glass} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#f5f1e9" stopOpacity="0.14" />
          <stop offset="0.45" stopColor={tone} stopOpacity="0.85" />
          <stop offset="1" stopColor="#101010" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id={cap} x1="0" x2="1">
          <stop offset="0" stopColor="#8f7648" />
          <stop offset="0.5" stopColor="#d9bd89" />
          <stop offset="1" stopColor="#7a6238" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="338" rx="70" ry="8" fill="#000" opacity="0.45" />
      <rect x={s.cap.x} y={s.cap.y} width={s.cap.w} height={s.cap.h} rx="3" fill={`url(#${cap})`} />
      <rect x={s.neck.x} y={s.neck.y} width={s.neck.w} height={s.neck.h} fill="#c5a46d" opacity="0.55" />
      <path d={s.body} fill={`url(#${glass})`} stroke="#f5f1e9" strokeOpacity="0.28" strokeWidth="1" />
      <path d={s.shine} stroke="#f5f1e9" strokeOpacity="0.4" strokeWidth="2" fill="none" strokeLinecap="round" />
      <rect
        x={s.label.x}
        y={s.label.y}
        width={s.label.w}
        height={s.label.h}
        fill="#f5f1e9"
        opacity="0.9"
      />
      <line
        x1={s.label.x + 8}
        x2={s.label.x + s.label.w - 8}
        y1={s.label.y + s.label.h / 2}
        y2={s.label.y + s.label.h / 2}
        stroke="#101010"
        strokeWidth="0.8"
        opacity="0.6"
      />
      <line
        x1={s.label.x + 14}
        x2={s.label.x + s.label.w - 14}
        y1={s.label.y + s.label.h / 2 + 8}
        y2={s.label.y + s.label.h / 2 + 8}
        stroke="#101010"
        strokeWidth="0.8"
        opacity="0.35"
      />
    </svg>
  )
}
