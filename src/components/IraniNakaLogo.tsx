export function IraniNakaLogo({ className = "h-16 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Graphic: Exactly matching Screenshot 2026-10-02 032911.png */}
      <svg 
        viewBox="0 0 420 180" 
        className="h-14 sm:h-16 w-auto" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Irani Wordmark */}
        <text 
          x="165" 
          y="72" 
          fill="#0C4DA2" 
          fontFamily="'Fraunces', 'Playfair Display', Georgia, serif" 
          fontWeight="900" 
          fontSize="72" 
          letterSpacing="-1"
        >
          Irani
        </text>

        {/* Shirorekha (Top bar of Devanagari) */}
        <rect x="160" y="88" width="230" height="7" rx="3.5" fill="#0C4DA2" />

        {/* नाका Devanagari Text */}
        <text 
          x="162" 
          y="152" 
          fill="#0C4DA2" 
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" 
          fontWeight="900" 
          fontSize="68" 
          letterSpacing="4"
        >
          नाका
        </text>

        {/* Taller cutting chai glass */}
        <g transform="translate(10, 80)">
          {/* Glass body */}
          <path d="M10 8L18 84H60L68 8Z" fill="#ffffff" stroke="#0C4DA2" strokeWidth="5.5" strokeLinejoin="round"/>
          <path d="M7 8H71" stroke="#0C4DA2" strokeWidth="6" strokeLinecap="round"/>
          
          {/* Middle band with traditional cut-glass flower rosettes */}
          <path d="M12 24H66V46H14L12 24Z" fill="#0C4DA2"/>
          {/* Left Rosette */}
          <circle cx="26" cy="35" r="8" fill="#ffffff"/>
          <circle cx="26" cy="35" r="4" fill="#0C4DA2"/>
          <path d="M26 27V43M18 35H34" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
          {/* Right Rosette */}
          <circle cx="52" cy="35" r="8" fill="#ffffff"/>
          <circle cx="52" cy="35" r="4" fill="#0C4DA2"/>
          <path d="M52 27V43M44 35H60" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>

          {/* Lower vertical flutes */}
          <path d="M24 52V76M39 52V76M54 52V76" stroke="#0C4DA2" strokeWidth="4.5" strokeLinecap="round"/>
        </g>

        {/* Shorter cutting chai glass */}
        <g transform="translate(85, 96)">
          <path d="M8 6L15 68H49L56 6Z" fill="#ffffff" stroke="#0C4DA2" strokeWidth="4.5" strokeLinejoin="round"/>
          <path d="M5 6H59" stroke="#0C4DA2" strokeWidth="5" strokeLinecap="round"/>
          
          <path d="M10 20H54V38H12L10 20Z" fill="#0C4DA2"/>
          {/* Rosette */}
          <circle cx="23" cy="29" r="6.5" fill="#ffffff"/>
          <circle cx="23" cy="29" r="3" fill="#0C4DA2"/>
          <circle cx="41" cy="29" r="6.5" fill="#ffffff"/>
          <circle cx="41" cy="29" r="3" fill="#0C4DA2"/>

          {/* Lower flutes */}
          <path d="M20 44V62M32 44V62M44 44V62" stroke="#0C4DA2" strokeWidth="3.5" strokeLinecap="round"/>
        </g>
      </svg>
    </div>
  );
}
