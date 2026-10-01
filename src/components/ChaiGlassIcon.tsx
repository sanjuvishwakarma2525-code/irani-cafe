export function ChaiGlassIcon({ className = "w-6 h-6", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Authentic Mumbai cutting chai fluted glass silhouette */}
      <path 
        d="M10 8L14 42C14.2 43.1 15.1 44 16.3 44H31.7C32.9 44 33.8 43.1 34 42L38 8H10Z" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Rim top */}
      <path 
        d="M8 8H40" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
      />
      {/* Fluted cuts */}
      <path d="M19 14V38" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeDasharray="1 3" />
      <path d="M24 14V38" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeDasharray="1 3" />
      <path d="M29 14V38" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeDasharray="1 3" />
      {/* Warm tea level */}
      <path 
        d="M13 22C16 23 32 23 35 22" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      {/* Steam curves */}
      <path 
        d="M20 5C19 3 20 2 21 1" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
      />
      <path 
        d="M27 6C26 4 27 3 28 2" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
      />
    </svg>
  );
}

export function TwinChaiGlasses({ className = "h-8 w-auto text-blue-700" }: { className?: string }) {
  return (
    <div className={`flex items-end gap-1 ${className}`}>
      <ChaiGlassIcon className="w-6 h-6" />
      <ChaiGlassIcon className="w-5 h-5 opacity-80" />
    </div>
  );
}
