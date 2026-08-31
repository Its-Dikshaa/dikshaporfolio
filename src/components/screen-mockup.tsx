import React, { useState } from "react";

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  className?: string;
  fallback: React.ReactNode;
}

export function ImageWithFallback({ src, alt, className = "", fallback }: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return <>{fallback}</>;
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
      className={`object-cover ${className}`}
    />
  );
}

interface PhoneFrameProps {
  label?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
  image?: string;
  accentColor?: string;
  variant?: "home" | "breathe" | "write" | "generic";
  className?: string;
}

export function PhoneFrame({
  label,
  title,
  subtitle,
  badge,
  image,
  accentColor = "#C9A84C",
  variant = "generic",
  className = "",
}: PhoneFrameProps) {
  const fallbackScreen = (
    <div className="bg-[#1C1C20] rounded-[16px] h-full p-3 flex flex-col justify-between border border-white/5 relative overflow-hidden">
      {/* Header Bar */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-mono tracking-wider text-sepia/70 uppercase font-medium">
            {badge || "11:42 PM"}
          </span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-sepia/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-sepia/30" />
          </div>
        </div>
        <div
          className="h-1.5 rounded-full w-2/3"
          style={{ backgroundColor: accentColor, opacity: 0.8 }}
        />
      </div>

      {/* Screen Content based on variant */}
      {variant === "home" && (
        <div className="my-auto text-center space-y-2 py-2">
          <div className="w-9 h-9 rounded-full bg-sepia/20 mx-auto flex items-center justify-center border border-sepia/40">
            <span className="text-sepia text-xs font-serif italic">✨</span>
          </div>
          <p className="text-[11px] font-serif italic text-cream leading-tight">
            {title || "I want to feel a little better."}
          </p>
          <p className="text-[9px] text-cream/50 max-w-[120px] mx-auto">
            {subtitle || "No streaks. Single tap calm."}
          </p>
        </div>
      )}

      {variant === "breathe" && (
        <div className="my-auto text-center space-y-2 py-1">
          <div className="w-14 h-14 rounded-full border-2 border-dashed border-sepia/60 mx-auto flex items-center justify-center animate-pulse">
            <span className="text-[10px] text-sepia uppercase tracking-widest font-mono">4-7-8</span>
          </div>
          <p className="text-[10px] text-cream/80 font-serif italic">Exhale slowly...</p>
        </div>
      )}

      {variant === "write" && (
        <div className="my-auto space-y-1.5 px-1">
          <div className="h-1 bg-white/10 rounded w-full" />
          <div className="h-1 bg-white/10 rounded w-4/5" />
          <div className="h-1 bg-white/10 rounded w-3/5" />
          <div className="mt-3 p-2 bg-white/5 rounded border border-white/10 text-[9px] text-sepia italic">
            "Releasing thoughts without judgement..."
          </div>
        </div>
      )}

      {variant === "generic" && (
        <div className="my-auto p-2.5 rounded-lg bg-sepia/10 border border-dashed border-sepia/40 text-center space-y-1">
          <p className="text-[10px] font-serif italic text-cream">{title || "Screen Preview"}</p>
          {subtitle && <p className="text-[8px] text-cream/60">{subtitle}</p>}
        </div>
      )}

      {/* Action Button Footer */}
      <div className="pt-2 border-t border-white/10 flex items-center justify-between">
        <div className="h-1.5 bg-white/20 rounded w-1/3" />
        <div
          className="h-3 w-8 rounded-full border border-sepia/40"
          style={{ backgroundColor: `${accentColor}33` }}
        />
      </div>
    </div>
  );

  return (
    <div className={`flex flex-col items-center group ${className}`}>
      <div className="w-[160px] sm:w-[170px] border-2 border-sepia/30 hover:border-sepia/70 transition-all rounded-[24px] p-2.5 bg-[#141416] shadow-xl relative overflow-hidden">
        {/* Top Speaker / Notch */}
        <div className="w-12 h-1.5 bg-ink/50 rounded-full mx-auto mb-2 opacity-60" />
        
        {/* Screen Container */}
        <div className="h-[240px] sm:h-[260px] rounded-[16px] overflow-hidden relative">
          <ImageWithFallback
            src={image}
            alt={title || "Mobile screen preview"}
            className="w-full h-full object-cover rounded-[16px]"
            fallback={fallbackScreen}
          />
        </div>
      </div>
      
      {label && (
        <span className="mt-2.5 text-xs font-serif italic text-sepia tracking-wide">
          {label}
        </span>
      )}
    </div>
  );
}

export function ProjectThumbnail({
  slug,
  title,
  thumbnailImage,
}: {
  slug: string;
  title: string;
  thumbnailImage?: string;
}) {
  const getFallbackContent = () => {
    switch (slug) {
      case "ease-well":
        return (
          <div className="h-full w-full bg-gradient-to-br from-[#1C1C20] to-[#25232A] p-4 flex flex-col justify-between border-b border-sepia/20">
            <div className="flex items-center justify-between text-[10px] text-sepia font-mono">
              <span>EASE WELL · APP</span>
              <span className="px-1.5 py-0.5 rounded bg-sepia/10 border border-sepia/30">iOS</span>
            </div>
            <div className="space-y-1.5 text-center">
              <div className="w-7 h-7 rounded-full bg-sepia/20 mx-auto flex items-center justify-center border border-sepia/40">
                <span className="text-sepia text-xs font-serif italic">🌿</span>
              </div>
              <p className="text-xs font-serif italic text-cream">Calm-first home screen</p>
            </div>
            <div className="flex gap-1">
              <div className="h-1 bg-sepia/40 rounded flex-1" />
              <div className="h-1 bg-sepia/20 rounded flex-1" />
            </div>
          </div>
        );
      case "brokerpad":
        return (
          <div className="h-full w-full bg-gradient-to-br from-[#181C24] to-[#1E2430] p-4 flex flex-col justify-between border-b border-sepia/20">
            <div className="flex items-center justify-between text-[10px] text-sepia font-mono">
              <span>BROKERPAD · CRM</span>
              <span className="px-1.5 py-0.5 rounded bg-sepia/10 border border-sepia/30">MOBILE + WEB</span>
            </div>
            <div className="space-y-2">
              <div className="p-2 rounded bg-white/5 border border-white/10 text-[9px] text-cream/70 flex items-center justify-between">
                <span>WhatsApp Lead Parser</span>
                <span className="text-emerald-400 text-[8px]">✓ Auto Parsed</span>
              </div>
              <div className="h-1 bg-sepia/40 rounded w-2/3" />
            </div>
            <div className="flex justify-between text-[9px] text-sepia">
              <span>8 Matches Found</span>
              <span>Fast Handoff →</span>
            </div>
          </div>
        );
      case "pawpulse":
        return (
          <div className="h-full w-full bg-gradient-to-br from-[#1F191D] to-[#2B2127] p-4 flex flex-col justify-between border-b border-sepia/20">
            <div className="flex items-center justify-between text-[10px] text-sepia font-mono">
              <span>PAWPULSE · PET HEALTH</span>
              <span className="px-1.5 py-0.5 rounded bg-sepia/10 border border-sepia/30">AI TRIAGE</span>
            </div>
            <div className="space-y-1.5">
              <div className="p-2 rounded bg-amber-500/10 border border-amber-500/30 text-[9px] text-amber-200">
                Severity: Amber · Monitor
              </div>
              <p className="text-[10px] text-cream/80 font-serif italic">AI Symptom Translator</p>
            </div>
            <div className="h-1 bg-amber-500/30 rounded w-full" />
          </div>
        );
      case "luxpay":
        return (
          <div className="h-full w-full bg-gradient-to-br from-[#1A1814] to-[#26221B] p-4 flex flex-col justify-between border-b border-sepia/20">
            <div className="flex items-center justify-between text-[10px] text-amber-400/80 font-mono">
              <span>LUXPAY · FINTECH</span>
              <span className="px-1.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/30">NDA</span>
            </div>
            <div className="space-y-1.5 text-center">
              <span className="text-xs text-amber-300 font-serif italic">Custody Timeline</span>
              <div className="flex justify-around text-[8px] text-amber-200/60 pt-1">
                <span>Pickup</span>
                <span>→</span>
                <span>Vault</span>
                <span>→</span>
                <span>Return</span>
              </div>
            </div>
            <div className="h-1 bg-amber-400/40 rounded w-full" />
          </div>
        );
      default:
        return (
          <div className="h-full w-full bg-gradient-to-br from-[#1A1A1D] to-[#24242A] p-4 flex flex-col justify-between border-b border-sepia/20">
            <div className="flex items-center justify-between text-[10px] text-sepia font-mono">
              <span>{title.toUpperCase()}</span>
              <span className="px-1.5 py-0.5 rounded bg-sepia/10 border border-sepia/30">UI/UX</span>
            </div>
            <div className="my-auto space-y-1.5 text-center">
              <p className="text-xs font-serif italic text-cream">{title} Preview</p>
              <div className="w-12 h-0.5 bg-sepia/40 mx-auto" />
            </div>
            <div className="h-1 bg-white/10 rounded w-full" />
          </div>
        );
    }
  };

  return (
    <div className="w-full aspect-[486/288] overflow-hidden relative bg-[#121214] border-b hairline group-hover:border-sepia/30 transition-colors flex items-start justify-center pt-4 sm:pt-5 px-3 sm:px-4 pb-0">
      <ImageWithFallback
        src={thumbnailImage}
        alt={`${title} project thumbnail`}
        className="w-full h-full object-cover object-top drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]"
        fallback={getFallbackContent()}
      />
    </div>
  );
}

export function ClosingGridShowcase({ images }: { images?: string[] }) {
  const fallbackScreens = [
    { title: "Calm-First Home", subtitle: "Single tap relief" },
    { title: "Breathing Exercise", subtitle: "4-7-8 sync haptics" },
    { title: "Journaling Flow", subtitle: "No clinical labels" },
    { title: "Grounding Prompts", subtitle: "Zero friction open" },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {fallbackScreens.map((s, i) => (
          <div
            key={i}
            className="h-36 border border-sepia/25 rounded-xl bg-[#17171A] overflow-hidden hover:border-sepia/60 transition-colors group shadow-md relative"
          >
            <ImageWithFallback
              src={images && images[i]}
              alt={s.title}
              className="w-full h-full object-cover rounded-xl"
              fallback={
                <div className="p-3 h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[9px] text-sepia font-mono">
                    <span>0{i + 1}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-sepia/40 group-hover:bg-sepia" />
                  </div>
                  <div className="my-auto space-y-1">
                    <div className="w-full h-12 border border-dashed border-sepia/30 bg-sepia/5 rounded-md flex items-center justify-center p-1">
                      <span className="text-[9px] text-cream/70 font-serif italic text-center">
                        {s.title}
                      </span>
                    </div>
                  </div>
                  <div className="text-[8px] text-sepia/70 truncate">{s.subtitle}</div>
                </div>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
