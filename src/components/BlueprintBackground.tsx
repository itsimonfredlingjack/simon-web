import './BlueprintBackground.css';

export default function BlueprintBackground() {
  return (
    <div className="blueprint-bg-container">
      <svg className="blueprint-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--text-secondary)" strokeWidth="0.5" strokeOpacity="0.08" />
          </pattern>
        </defs>

        {/* Faint Grid covering the right side mostly, or whole screen with a mask */}
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Mask out the left side to keep readability high */}
        <rect width="50%" height="100%" fill="var(--bg-color)" />
        <rect width="100%" height="100%" fill="url(#left-fade)" />

        <defs>
          <linearGradient id="left-fade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="30%" stopColor="var(--bg-color)" stopOpacity="1" />
            <stop offset="60%" stopColor="var(--bg-color)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#left-fade)" />

        {/* Drafting Elements on the Right Side */}
        <g className="drafting-layer">
          {/* Large Architectural Plate Outline */}
          <rect x="60%" y="15%" width="30%" height="60%" fill="none" stroke="var(--text-secondary)" strokeWidth="1" strokeOpacity="0.12" />
          
          {/* Inner Frame */}
          <rect x="62%" y="18%" width="26%" height="54%" fill="none" stroke="var(--text-secondary)" strokeWidth="0.5" strokeOpacity="0.08" />

          {/* Copper Accents - corner markers */}
          <path d="M 60% 15% L 60% 17% M 60% 15% L 62% 15%" fill="none" stroke="var(--accent-copper)" strokeWidth="1.5" strokeOpacity="0.3" />
          <path d="M 90% 75% L 90% 73% M 90% 75% L 88% 75%" fill="none" stroke="var(--accent-copper)" strokeWidth="1.5" strokeOpacity="0.3" />

          {/* Measuring Ticks */}
          <g stroke="var(--text-secondary)" strokeOpacity="0.15" strokeWidth="1">
            <line x1="58%" y1="20%" x2="59%" y2="20%" />
            <line x1="58%" y1="25%" x2="58.5%" y2="25%" />
            <line x1="58%" y1="30%" x2="59%" y2="30%" />
            <line x1="58%" y1="35%" x2="58.5%" y2="35%" />
            <line x1="58%" y1="40%" x2="59%" y2="40%" />
            <line x1="58%" y1="45%" x2="58.5%" y2="45%" />
            <line x1="58%" y1="50%" x2="59%" y2="50%" />
          </g>

          {/* Connecting Lines */}
          <line x1="60%" y1="40%" x2="50%" y2="40%" stroke="var(--text-secondary)" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="50%" cy="40%" r="3" fill="none" stroke="var(--accent-copper)" strokeOpacity="0.2" strokeWidth="1" />

          {/* Technical Data Block Outline */}
          <rect x="75%" y="65%" width="12%" height="8%" fill="none" stroke="var(--text-secondary)" strokeWidth="0.5" strokeOpacity="0.1" />
          <line x1="75%" y1="67%" x2="87%" y2="67%" stroke="var(--text-secondary)" strokeOpacity="0.08" strokeWidth="0.5" />
          <line x1="75%" y1="69%" x2="87%" y2="69%" stroke="var(--text-secondary)" strokeOpacity="0.08" strokeWidth="0.5" />
          <line x1="75%" y1="71%" x2="87%" y2="71%" stroke="var(--text-secondary)" strokeOpacity="0.08" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}
