"use client";

export default function AnimatedCranes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
      {/* Crane 1 - Left side */}
      <div className="absolute left-[10%] bottom-0 animate-crane-sway-1">
        <svg
          width="80"
          height="200"
          viewBox="0 0 80 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base */}
          <rect x="35" y="180" width="10" height="20" fill="#175442" />

          {/* Tower */}
          <rect x="37" y="60" width="6" height="120" fill="#175442" />

          {/* Horizontal arm */}
          <rect x="0" y="58" width="80" height="4" fill="#175442" />

          {/* Cable */}
          <line x1="65" y1="62" x2="65" y2="100" stroke="#175442" strokeWidth="1" className="animate-crane-cable" />

          {/* Hook */}
          <rect x="62" y="100" width="6" height="4" fill="#175442" className="animate-crane-hook" />

          {/* Counterweight */}
          <rect x="2" y="62" width="10" height="8" fill="#175442" />
        </svg>
      </div>

      {/* Crane 2 - Right side */}
      <div className="absolute right-[15%] bottom-0 animate-crane-sway-2" style={{ animationDelay: '1s' }}>
        <svg
          width="100"
          height="240"
          viewBox="0 0 100 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base */}
          <rect x="45" y="220" width="10" height="20" fill="#175442" />

          {/* Tower */}
          <rect x="47" y="60" width="6" height="160" fill="#175442" />

          {/* Horizontal arm */}
          <rect x="0" y="58" width="100" height="4" fill="#175442" />

          {/* Cable */}
          <line x1="75" y1="62" x2="75" y2="120" stroke="#175442" strokeWidth="1" className="animate-crane-cable" style={{ animationDelay: '0.5s' }} />

          {/* Hook */}
          <rect x="72" y="120" width="6" height="4" fill="#175442" className="animate-crane-hook" style={{ animationDelay: '0.5s' }} />

          {/* Counterweight */}
          <rect x="2" y="62" width="12" height="10" fill="#175442" />
        </svg>
      </div>

      {/* Crane 3 - Center (smaller, background) */}
      <div className="absolute left-[50%] bottom-0 animate-crane-sway-3" style={{ animationDelay: '2s' }}>
        <svg
          width="60"
          height="150"
          viewBox="0 0 60 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base */}
          <rect x="27" y="135" width="6" height="15" fill="#175442" />

          {/* Tower */}
          <rect x="28" y="40" width="4" height="95" fill="#175442" />

          {/* Horizontal arm */}
          <rect x="0" y="38" width="60" height="3" fill="#175442" />

          {/* Cable */}
          <line x1="45" y1="41" x2="45" y2="70" stroke="#175442" strokeWidth="1" className="animate-crane-cable" style={{ animationDelay: '1.5s' }} />

          {/* Hook */}
          <rect x="43" y="70" width="4" height="3" fill="#175442" className="animate-crane-hook" style={{ animationDelay: '1.5s' }} />

          {/* Counterweight */}
          <rect x="2" y="41" width="8" height="6" fill="#175442" />
        </svg>
      </div>
    </div>
  );
}
