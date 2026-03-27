/**
 * StormChecks — Property Owner Briefing (v4)
 * Route: /getstarted
 *
 * DEPLOY NOTES:
 * 1. No extra deps — uses React only
 * 2. Audio: /public/audio/owner-00.mp3 → owner-09.mp3
 *    PLUS owner-01-pre.mp3 and owner-01-post.mp3
 * 3. Senator clip: /public/videos/senator-hearing.mp4
 * 4. Fonts: Manrope + JetBrains Mono injected on mount.
 *
 * v4 CHANGES:
 * - Slides stripped to visual anchors only — titles and labels, no body paragraphs.
 *   Audio carries all explanation.
 * - Pause button + countdown timer moved INTO the header (right of counter).
 * - Side nav arrows repositioned to hug the content column, not the browser edges.
 *   Uses max(0px, calc(50% - 370px)) so they fall to edges gracefully on mobile.
 * - Center-of-screen pause button removed entirely.
 * - ThreeOptions simplified to 2-col "Without StormChecks / With StormChecks+PA".
 * - ProcessSlide: step titles only, no descriptions.
 * - Timeline: phase + title only, no descriptions.
 * - Objections reordered: Premiums → Getting Dropped → Blanket Policy first.
 *   All three include broker pre-check + honest "advise not to file" nuance.
 * - CTA: dual links — Submit First Property + Already have account? Log in.
 */

import { useState, useEffect, useCallback, useRef } from "react";
const LOGO = "/stormchecks-logo.png";

/* ─── DATA ─────────────────────────────────────────────────────────── */

const CASES = [
  {
    type: "Retail Strip Center",
    location: "San Antonio, TX",
    sqft: "42,000 SF",
    prior: "Carrier denied prior claim",
    found: "$3.9M",
    story:
      "The carrier had denied the original claim for lack of documentation. Our forensic file — timestamped hail-impact photography, PE-signed engineering analysis, and meteorological storm correlation — overturned the denial entirely.",
  },
  {
    type: "Industrial Facility",
    location: "Denver, CO",
    sqft: "120,000 SF",
    prior: "Owner unaware of damage",
    found: "$2.4M",
    story:
      "Building had been owned 8 years with no prior claims. Engineers found systematic membrane compression and HVAC cladding damage invisible to standard maintenance — consistent with two distinct hail events in the prior 24 months.",
  },
  {
    type: "Marina & Covered Storage",
    location: "Texas Coast",
    sqft: "85,000 SF",
    prior: "$0 assessed",
    found: "$2.1M",
    story:
      "Two weeks from initial weather analysis to complete forensic file delivery. Owner had zero indication of damage. The meteorological lookback identified three qualifying storm events that had not triggered any maintenance flags.",
  },
  {
    type: "Self-Storage Facility",
    location: "Oklahoma",
    sqft: "65,000 SF",
    prior: "Suspected minor damage",
    found: "$1.8M",
    story:
      "Owner expected a small roof repair claim. Engineers found systematic hail fractures across the full roof envelope, displaced flashing on all 14 buildings, and HVAC cladding damage across the property.",
  },
];

const OBJECTIONS = [
  {
    tag: "Premiums",
    q: "Will my premiums go up?",
    a: "Before we file anything, we run through your specific policy with your broker to understand the realistic premium impact. In most cases, claims tied to catalogued storms have no impact — your carrier already priced in that event. In the rare case a premium adjustment is possible, we lay out the math together. If filing doesn't make financial sense for your situation, we'll tell you not to file. We're not here to push a claim that doesn't benefit you.",
  },
  {
    tag: "Getting Dropped",
    q: "What if my carrier drops me for filing?",
    a: "This is a legitimate concern and we treat it seriously. Before filing anything, we review your policy, your carrier's history, and your market options with your broker. If being dropped is a real risk with no viable replacement carrier, we'll advise you not to file. We've seen situations where filing isn't the right move — and we'll tell you that straight.",
  },
  {
    tag: "Blanket Policy",
    q: "I have a blanket / master policy across multiple properties.",
    a: "Blanket policies require a more careful review before filing — particularly around how claims aggregate and the impact on the master policy. We work through this with your broker before any claim is initiated. In some structures the math still works clearly in your favor. In others it may not. Either way, we'll give you an honest answer before you commit to anything.",
  },
  {
    tag: "No upfront cost?",
    q: "How does StormChecks get paid if there's nothing upfront?",
    a: "We front all costs — meteorology report, engineering, building consultant. That can be $50,000 or more out of our pocket. Our fee is 20% of recovery only. The PA takes 10%. You keep 70%. If there's no recovery, nobody gets paid — including us.",
  },
  {
    tag: "Timeline",
    q: "How long does this actually take?",
    a: "The weather assessment takes about a week. Inspection and forensic file take a few more weeks. The insurance process typically runs about 12 months from there. Your total involvement is a few hours across the whole process — StormChecks handles everything else.",
  },
  {
    tag: "Already inspected",
    q: "My property manager says everything is fine.",
    a: "Contractors look for leaks. Forensic engineers look for hail fractures, membrane compression, and HVAC cladding impacts — an entirely different discipline. We've found $1.2M on a property that received a written clean bill of health six months prior.",
  },
  {
    tag: "No damage belief",
    q: "I don't think I have any damage.",
    a: "Storm damage doesn't show as leaks — it shows as microscopic fractures and compressed flashing only forensic analysis catches. We consistently find $10–$15/SF that maintenance teams never flag. The assessment is free.",
  },
  {
    tag: "Carrier denial",
    q: "What if the carrier denies the claim?",
    a: "Our files are built to withstand carrier scrutiny — PE-signed engineering, timestamped photography, storm correlation, and Xactimate estimates. One denial we overturned: $0 to $3.9M after the forensic file was delivered.",
  },
];

const OWNER_AUDIO = [
  "/audio/owner-00.mp3",
  "/audio/owner-01-pre.mp3", // plays BEFORE senator clip
  "/audio/owner-02.mp3",
  "/audio/owner-03.mp3",
  "/audio/owner-04.mp3",
  "/audio/owner-05.mp3",
  "/audio/owner-06.mp3",   // Case Studies (was owner-07, timeline slide removed)
  "/audio/owner-07.mp3",   // Objections   (was owner-08)
  "/audio/owner-08.mp3",   // CTA          (was owner-09)
];
const OWNER_AUDIO_01_POST = "/audio/owner-01-post.mp3";

/* ─── COMPONENT ────────────────────────────────────────────────────── */

export default function StormChecksOwnerOnboarding() {
  const [screen, setScreen]         = useState(0);
  const [caseIdx, setCaseIdx]       = useState(0);
  const [objIdx, setObjIdx]         = useState(0);
  const [visible, setVisible]       = useState(true);
  const [muted, setMuted]           = useState(false);
  const [paused, setPaused]         = useState(false);
  const [introPlaying, setIntroPlaying] = useState(false);
  const [audioRemaining, setAudioRemaining] = useState(null);
  const mainRef  = useRef(null);
  const audioRef = useRef(null);
  const mutedRef = useRef(false);
  const videoRef = useRef(null);
  const timerRef = useRef(null);
  const LAST = 8;

  useEffect(() => { mutedRef.current = muted; }, [muted]);

  /* fonts + global styles */
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    const s = document.createElement("style");
    s.id = "sc-owner-style";
    s.textContent = `
      *{box-sizing:border-box;margin:0;padding:0}
      body{background:#F8F9FA;overscroll-behavior:none}
      .intercom-launcher,.intercom-namespace .intercom-lightweight-app{display:none!important}
      ::-webkit-scrollbar{width:3px}
      ::-webkit-scrollbar-thumb{background:#C99700;border-radius:2px}
    `;
    if (!document.getElementById("sc-owner-style")) document.head.appendChild(s);
    return () => {
      document.getElementById("sc-owner-style")?.remove();
      stopAudio();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* keyboard nav */
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(screen + 1);
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   go(screen - 1);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen]);

  /* countdown tick */
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const a = audioRef.current;
      if (a && !a.paused && isFinite(a.duration) && a.duration > 0) {
        setAudioRemaining(Math.max(0, Math.ceil(a.duration - a.currentTime)));
      } else if (!a || a.ended) {
        setAudioRemaining(null);
        if (timerRef.current) clearInterval(timerRef.current);
      }
    }, 400);
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    setAudioRemaining(null);
  }, []);

  const stopAudio = useCallback(() => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ""; audioRef.current = null; }
    stopTimer();
    setPaused(false);
  }, [stopTimer]);

  const playAudioFile = useCallback((src, onEnded) => {
    stopAudio();
    const audio = new Audio(src);
    audio.volume = 1;
    audio.muted = mutedRef.current;
    audioRef.current = audio;
    setPaused(false);
    audio.addEventListener("loadedmetadata", () => {
      setAudioRemaining(Math.ceil(audio.duration));
      startTimer();
    });
    audio.addEventListener("ended", () => {
      stopTimer();
      setPaused(false);
      onEnded?.();
    }, { once: true });
    audio.play().catch(() => {});
  }, [stopAudio, startTimer, stopTimer]);

  const playAudio = useCallback((idx) => {
    if (idx === 1) return; // handled by slide-1 useEffect
    const src = OWNER_AUDIO[idx];
    if (!src) { stopAudio(); return; }
    playAudioFile(src);
  }, [playAudioFile, stopAudio]);

  /* Slide 1: pre-audio → senator clip → post-audio */
  useEffect(() => {
    if (screen !== 1) return;
    playAudioFile(OWNER_AUDIO[1], () => {
      const v = videoRef.current;
      if (!v) { playAudioFile(OWNER_AUDIO_01_POST); return; }
      v.currentTime = 0;
      v.muted = false;
      stopTimer();
      setAudioRemaining(null);
      v.play().then(() => {
        v.addEventListener("ended", () => playAudioFile(OWNER_AUDIO_01_POST), { once: true });
      }).catch(() => playAudioFile(OWNER_AUDIO_01_POST));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen]);

  const go = useCallback((idx) => {
    if (idx < 0 || idx > LAST) return;
    setVisible(false);
    setTimeout(() => {
      setScreen(idx);
      setVisible(true);
      mainRef.current?.scrollTo({ top: 0, behavior: "smooth" });
      playAudio(idx);
    }, 190);
  }, [playAudio]);

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    mutedRef.current = next;
    if (audioRef.current) audioRef.current.muted = next;
  };

  const togglePause = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) { a.play().catch(() => {}); setPaused(false); startTimer(); }
    else          { a.pause(); setPaused(true); if (timerRef.current) clearInterval(timerRef.current); }
  };

  const fmt = (secs) => `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}`;
  const pct = screen === 0 ? 0 : screen >= LAST ? 100 : Math.round((screen / (LAST - 1)) * 100);
  const showControls = screen > 0 || introPlaying;

  return (
    <div style={S.root}>
      <div style={S.gridBg} />

      {/* ── Header ── */}
      <header style={S.header}>
        <Logo />
        {screen > 0 && <div style={S.progressTrack}><div style={{ ...S.progressBar, width: `${pct}%` }} /></div>}
        {screen > 0 && screen < LAST && (
          <span style={S.counter}>
            <b style={{ color: "#C99700" }}>{String(screen).padStart(2, "0")}</b>
            <span style={{ color: "#AABBCC" }}> / {String(LAST - 1).padStart(2, "0")}</span>
          </span>
        )}
        {/* Pause + timer — live in the header */}
        {showControls && (
          <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
            {audioRemaining !== null && audioRemaining > 0 && (
              <span style={S.countdown}>{fmt(audioRemaining)}</span>
            )}
            <button
              onClick={togglePause}
              style={S.pauseBtn}
              aria-label={paused ? "Resume narration" : "Pause narration"}
            >
              {paused ? "▶" : "⏸"}
            </button>
            <button onClick={toggleMute} style={S.muteBtn} aria-label={muted ? "Unmute" : "Mute"}>
              {muted ? "🔇" : "🔊"}
            </button>
          </div>
        )}
      </header>

      {/* ── Content ── */}
      <main
        ref={mainRef}
        style={{ ...S.main, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(8px)" }}
      >
        {screen === 0 && <Welcome introPlaying={introPlaying} onStart={() => {
          if (introPlaying) { go(1); return; }
          setIntroPlaying(true);
          playAudio(0);
          const a = audioRef.current;
          if (a) a.addEventListener("ended", () => go(1), { once: true });
        }} />}
        {screen === 1 && <IntroSlide videoRef={videoRef} />}
        {screen === 2 && <WhoWeAre />}
        {screen === 3 && <ThreeOptions />}
        {screen === 4 && <ProcessSlide />}
        {screen === 5 && <Fees />}
        {screen === 6 && <CaseStudies idx={caseIdx} setIdx={setCaseIdx} />}
        {screen === 7 && <Objections idx={objIdx} setIdx={setObjIdx} />}
        {screen === 8 && <CTA />}
      </main>

      {/* ── Side arrows — hug the 620px content column ── */}
      {screen > 0 && screen < LAST && (
        <>
          <button
            onClick={() => go(screen - 1)}
            style={{ ...S.sideNav, left: "max(0px, calc(50% - 370px))", borderRadius: "0 8px 8px 0" }}
            aria-label="Previous"
          >←</button>
          <button
            onClick={() => go(screen + 1)}
            style={{ ...S.sideNav, right: "max(0px, calc(50% - 370px))", borderRadius: "8px 0 0 8px" }}
            aria-label={screen === LAST - 1 ? "Finish" : "Next"}
          >{screen === LAST - 1 ? "✓" : "→"}</button>
        </>
      )}

      {/* ── Bottom dots ── */}
      {screen > 0 && screen < LAST && (
        <div style={S.dotsBar}>
          {Array.from({ length: LAST - 1 }, (_, i) => (
            <button key={i} onClick={() => go(i + 1)} style={{
              ...S.dot,
              width: i + 1 === screen ? 20 : 6,
              background: i + 1 === screen ? "#C99700" : i + 1 < screen ? "rgba(201,151,0,0.35)" : "#D1D9E0",
            }} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── SCREENS ───────────────────────────────────────────────────────── */

function Welcome({ onStart, introPlaying }) {
  return (
    <div style={{ textAlign: "center", maxWidth: 500 }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(201,151,0,0.08)", border: "2px solid #E2E6EA", borderRadius: 8, padding: "6px 14px", marginBottom: 20, fontSize: 14, color: "#4A5568" }}>
        🔊 <span>Please ensure your speakers are on</span>
      </div>
      <Pill>PROPERTY OWNER BRIEFING</Pill>
      <h1 style={S.h1}>What your insurance company<br /><Em>doesn't want you to know.</Em></h1>

      <button onClick={onStart} style={{ ...S.ctaBtn, marginBottom: 28 }}>
        {introPlaying ? "Continue →" : "Start Briefing →"}
      </button>
      {introPlaying && <p style={{ ...S.hint, color: "#C99700", marginBottom: 10 }}>🔊 Playing intro…</p>}

      <p style={S.lead}>StormChecks is a forensic building consultancy. We find hidden storm damage, document it thoroughly, and make sure you actually get what you're owed — at no cost to you.</p>
      <p style={{ ...S.lead, fontSize: 14, opacity: 0.7, marginBottom: 20 }}>About a 4-minute briefing. No obligation at any stage.</p>
      <p style={S.hint}>{introPlaying ? "Listening to intro — or tap Continue to skip" : "Arrow keys or tap dots to navigate"}</p>
    </div>
  );
}

function IntroSlide({ videoRef }) {
  return (
    <Wrap>
      <Tag>The Reality</Tag>
      <h2 style={S.h2}>They're not on your side.<br /><Em>We are.</Em></h2>

      {/* Senator clip */}
      <div style={{ borderRadius: 14, overflow: "hidden", marginBottom: 20, background: "#000", border: "2px solid #E2E6EA" }}>
        <video ref={videoRef} controls playsInline style={{ width: "100%", display: "block" }}>
          <source src="/videos/senator-hearing.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Icon anchors — titles only, audio explains */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          { icon: "⏱", t: "There's a short window to act." },
          { icon: "👁", t: "The damage you can't see." },
          { icon: "🛡", t: "StormChecks closes the gap." },
        ].map(item => (
          <div key={item.t} style={{ ...S.card, display: "flex", gap: 14, alignItems: "center", padding: "14px 16px" }}>
            <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#0B1F33" }}>{item.t}</div>
          </div>
        ))}
      </div>
    </Wrap>
  );
}

function WhoWeAre() {
  return (
    <Wrap>
      <Tag>Who We Are</Tag>
      <h2 style={S.h2}>Three disciplines.<br /><Em>One forensic file.</Em></h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
        {[
          { n: "01", t: "Meteorological Analysts" },
          { n: "02", t: "Forensic Engineers (licensed PE)" },
          { n: "03", t: "Building Consultants" },
        ].map(d => (
          <div key={d.n} style={{ ...S.card, display: "flex", alignItems: "center", gap: 16, padding: "16px 18px" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: "#C99700", fontWeight: 600, flexShrink: 0 }}>{d.n}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#0B1F33" }}>{d.t}</div>
          </div>
        ))}
      </div>

      <Note>
        We work <b style={{ color: "#C99700" }}>alongside the public adjuster</b> — not instead of one. We hand them the forensic file they need to win.
      </Note>
    </Wrap>
  );
}

function ThreeOptions() {
  return (
    <Wrap>
      <Tag>Your Options</Tag>
      <h2 style={S.h2}>Without us vs.<br /><Em>With StormChecks + PA.</Em></h2>

      {/* Two-column contrast */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
        {/* Without column */}
        <div style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 12, padding: "16px" }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#EF4444", letterSpacing: "0.1em", marginBottom: 12 }}>WITHOUT US</div>
          {[
            "No forensic documentation",
            "No storm correlation data",
            "No PE-signed engineering",
            "Carrier lowballs or denies",
            "No basis to push back",
          ].map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 7 }}>
              <span style={{ color: "#EF4444", fontSize: 13, flexShrink: 0, paddingTop: 2 }}>✗</span>
              <span style={{ fontSize: 13, color: "#555F6D", lineHeight: 1.4 }}>{t}</span>
            </div>
          ))}
        </div>
        {/* With column */}
        <div style={{ background: "rgba(201,151,0,0.07)", border: "1px solid rgba(201,151,0,0.28)", borderRadius: 12, padding: "16px" }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#C99700", letterSpacing: "0.1em", marginBottom: 12 }}>WITH US + PA</div>
          {[
            "Complete forensic file",
            "2-year storm correlation",
            "PE-signed engineering report",
            "Xactimate estimates",
            "PA files with full evidence",
          ].map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 7 }}>
              <span style={{ color: "#C99700", fontSize: 13, flexShrink: 0, paddingTop: 2, fontWeight: 700 }}>✓</span>
              <span style={{ fontSize: 13, color: "#0B1F33", lineHeight: 1.4, fontWeight: 500 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>

      <Note>
        <b style={{ color: "#C99700" }}>$0 → $3.9M.</b> That's what the forensic file is worth on a carrier denial.
      </Note>
    </Wrap>
  );
}

function ProcessSlide() {
  const ownerSteps = [
    "Submit your property address",
    "Sign the engagement agreement",
  ];
  const scSteps = [
    "Run the 2-year weather analysis",
    "Forensic on-site inspection (PE team)",
    "Compile the complete expert file",
    "Work with the public adjuster",
    "Handle all carrier communications — hundreds of emails, for months, on your behalf",
  ];
  return (
    <Wrap>
      <Tag>How It Works</Tag>
      <h2 style={S.h2}>Two things from you.<br /><Em>Everything else is on us.</Em></h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
        {/* Owner column */}
        <div style={{ background: "rgba(201,151,0,0.07)", border: "1px solid rgba(201,151,0,0.22)", borderRadius: 12, padding: "16px" }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#C99700", letterSpacing: "0.1em", marginBottom: 14 }}>YOUR ROLE</div>
          {ownerSteps.map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
              <div style={{ background: "#C99700", color: "#fff", borderRadius: "50%", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#0B1F33", lineHeight: 1.45 }}>{t}</span>
            </div>
          ))}
          <div style={{ marginTop: 8, fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#C99700" }}>Total: a few hours</div>
        </div>
        {/* SC column */}
        <div style={{ background: "#F0F2F5", border: "1px solid #E2E6EA", borderRadius: 12, padding: "16px" }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#8A9AB0", letterSpacing: "0.1em", marginBottom: 14 }}>STORMCHECKS HANDLES</div>
          {scSteps.map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#8A9AB0", flexShrink: 0, marginTop: 6 }} />
              <span style={{ fontSize: 13, color: "#555F6D", lineHeight: 1.45 }}>{t}</span>
            </div>
          ))}
          <div style={{ marginTop: 8, fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#8A9AB0" }}>Duration: ~12 months</div>
        </div>
      </div>
    </Wrap>
  );
}

function Fees() {
  return (
    <Wrap>
      <Tag>Fee Structure</Tag>
      <h2 style={S.h2}>$0 upfront. Ever.<br /><Em>Everything comes from recovery.</Em></h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginBottom: 14 }}>
        {[
          { pct: "20%", lbl: "StormChecks",    sub: "Forensic work", hi: false },
          { pct: "10%", lbl: "Public Adjuster", sub: "Filing + negotiation", hi: false },
          { pct: "70%", lbl: "You Keep",        sub: "Paid directly to you", hi: true  },
        ].map(f => (
          <div key={f.lbl} style={{
            background: f.hi ? "rgba(201,151,0,0.1)" : "#FFFFFF",
            border: `1px solid ${f.hi ? "#C99700" : "#E2E6EA"}`,
            borderRadius: 14, padding: "18px 10px", textAlign: "center",
          }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "clamp(22px,5vw,30px)", fontWeight: 600, color: f.hi ? "#C99700" : "#0B1F33", marginBottom: 5 }}>{f.pct}</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: f.hi ? "#C99700" : "#0B1F33", marginBottom: 3 }}>{f.lbl}</div>
            <div style={{ fontSize: 11, color: "#8A9AB0" }}>{f.sub}</div>
          </div>
        ))}
      </div>

      {/* Worked example */}
      <div style={{ ...S.card, padding: "14px 16px", marginBottom: 12 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#8A9AB0", letterSpacing: "0.1em", marginBottom: 10 }}>$400K RECOVERY — EXAMPLE</div>
        {[["Recovery", "$400,000"], ["StormChecks (20%)", "−$80,000"], ["Public Adjuster (10%)", "−$40,000"], ["You receive", "$280,000"]].map(([k, v], i) => (
          <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 14, padding: "5px 0", borderTop: i === 3 ? "1px solid rgba(201,151,0,0.2)" : "none", marginTop: i === 3 ? 6 : 0 }}>
            <span style={{ color: i === 3 ? "#0B1F33" : "#555F6D", fontWeight: i === 3 ? 600 : 400 }}>{k}</span>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", color: i === 3 ? "#C99700" : i > 0 ? "#6B7280" : "#0B1F33", fontWeight: i === 3 ? 600 : 400 }}>{v}</span>
          </div>
        ))}
      </div>

      <Note><b style={{ color: "#C99700" }}>No recovery — no fee.</b> Not us. Not the PA. Nobody.</Note>
    </Wrap>
  );
}

function CaseStudies({ idx, setIdx }) {
  const c = CASES[idx];
  return (
    <Wrap>
      <Tag>Real Outcomes</Tag>
      <h2 style={{ ...S.h2, marginBottom: 6 }}>Properties we've worked.<br /><Em>Not cherry-picked.</Em></h2>
      <p style={{ fontSize: 13, color: "#8A9AB0", lineHeight: 1.5, marginBottom: 16 }}>
        In most cases, the owner had <b style={{ color: "#555F6D" }}>no idea they had damage</b> before the assessment.
      </p>
      <div style={{ background: "rgba(201,151,0,0.07)", border: "1px solid rgba(201,151,0,0.22)", borderRadius: 14, padding: "20px 18px", marginBottom: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#0B1F33", marginBottom: 4 }}>{c.type}</div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: "#8A9AB0" }}>{c.location} · {c.sqft}</div>
          </div>
          <div style={{ background: "rgba(201,151,0,0.15)", border: "1px solid rgba(201,151,0,0.3)", borderRadius: 8, padding: "5px 14px", fontFamily: "'JetBrains Mono',monospace", fontSize: 20, fontWeight: 600, color: "#C99700", flexShrink: 0 }}>{c.found}</div>
        </div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 14 }}>
          {[["Before", c.prior, "#EF4444"], ["Documented", c.found, "#C99700"]].map(([l, v, col]) => (
            <div key={l} style={{ flex: "1 1 100px" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#8A9AB0", letterSpacing: "0.1em", marginBottom: 3 }}>{l.toUpperCase()}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: col }}>{v}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 14, color: "#555F6D", fontStyle: "italic", lineHeight: 1.65 }}>"{c.story}"</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6, marginBottom: 12 }}>
        {CASES.map((cs, i) => (
          <button key={i} onClick={() => setIdx(i)} style={{
            background: i === idx ? "rgba(201,151,0,0.12)" : "#FFFFFF",
            border: `1px solid ${i === idx ? "#C99700" : "#E2E6EA"}`,
            borderRadius: 10, padding: "10px 6px", cursor: "pointer", textAlign: "center",
          }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: i === idx ? "#C99700" : "#8A9AB0", lineHeight: 1.4, marginBottom: 3 }}>{cs.type.split(" ")[0]}</div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: i === idx ? "#C99700" : "#8A9AB0" }}>{cs.found}</div>
          </button>
        ))}
      </div>
      <div style={{ fontSize: 12, color: "#8A9AB0", padding: "8px 12px", background: "#F0F2F5", borderRadius: 8 }}>
        All recoveries negotiated by independent public adjusters using our forensic files.
      </div>
    </Wrap>
  );
}

function Objections({ idx, setIdx }) {
  const o = OBJECTIONS[idx];
  return (
    <Wrap>
      <Tag>Common Questions</Tag>
      <h2 style={{ ...S.h2, marginBottom: 20 }}>The questions everyone asks<br /><Em>before they decide.</Em></h2>
      <div style={{ ...S.card, minHeight: 180, marginBottom: 12 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 14, flexWrap: "wrap" }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#0B1F33", flex: 1, lineHeight: 1.4 }}>"{o.q}"</div>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#C99700", background: "rgba(201,151,0,0.08)", borderRadius: 4, padding: "3px 8px", flexShrink: 0 }}>{o.tag}</span>
        </div>
        <p style={{ fontSize: 14, color: "#555F6D", lineHeight: 1.75 }}>{o.a}</p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {OBJECTIONS.map((ob, i) => (
          <button key={i} onClick={() => setIdx(i)} style={{
            flex: "1 1 calc(50% - 3px)",
            background: i === idx ? "rgba(201,151,0,0.1)" : "#F0F2F5",
            border: `1px solid ${i === idx ? "#C99700" : "#E2E6EA"}`,
            borderRadius: 8, padding: "8px 10px", fontSize: 12, fontFamily: "'Manrope',sans-serif",
            color: i === idx ? "#C99700" : "#8A9AB0", cursor: "pointer", textAlign: "left", lineHeight: 1.4,
          }}>{ob.tag}</button>
        ))}
      </div>
    </Wrap>
  );
}

function CTA() {
  return (
    <div style={{ textAlign: "center", maxWidth: 460 }}>
      <div style={{ fontSize: 38, marginBottom: 20 }}>🏢</div>
      <h2 style={{ ...S.h2, marginBottom: 12 }}>The weather assessment is<br /><Em>completely free.</Em></h2>
      <p style={{ ...S.lead, maxWidth: 360, margin: "0 auto 28px", fontSize: 15 }}>
        No obligation to proceed at any stage. Submit your address and we'll take it from there.
      </p>

      <a href="https://app.stormchecks.com" target="_blank" rel="noopener noreferrer" style={S.ctaLink}>
        Submit Your First Property →
      </a>
      <div style={{ marginTop: 12, marginBottom: 24 }}>
        <a href="https://app.stormchecks.com/login" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 14, color: "#8A9AB0", textDecoration: "none", borderBottom: "1px solid #D1D9E0", paddingBottom: 2 }}>
          Already have an account? Log in →
        </a>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 28, flexWrap: "wrap" }}>
        {["$0 upfront", "2-year lookback", "You keep 70%"].map(t => (
          <span key={t} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: "#8A9AB0" }}>✓ {t}</span>
        ))}
      </div>
      <div style={{ marginBottom: 24, fontSize: 13, color: "#8A9AB0" }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: "#AABBCC", letterSpacing: "0.1em", marginBottom: 8 }}>QUESTIONS FIRST?</div>
        <a href="tel:+18018212530" style={{ color: "#555F6D", textDecoration: "none" }}>+1 801-821-2530</a>
        <span style={{ color: "#D1D9E0", margin: "0 8px" }}>·</span>
        <a href="mailto:info@stormchecks.com" style={{ color: "#555F6D", textDecoration: "none" }}>info@stormchecks.com</a>
      </div>
      <p style={{ fontSize: 11, color: "#AABBCC", lineHeight: 1.65, maxWidth: 400, margin: "0 auto" }}>
        StormChecks provides forensic documentation services only. Not a public adjusting firm or claims negotiator. All settlements negotiated by independent public adjusters.
      </p>
    </div>
  );
}

/* ─── PRIMITIVES ────────────────────────────────────────────────────── */
function Logo() { return <img src={LOGO} alt="StormChecks" style={{ height: 28, width: "auto", flexShrink: 0 }} />; }
function Em({ children }) { return <span style={{ color: "#C99700" }}>{children}</span>; }
function Pill({ children }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(201,151,0,0.08)", border: "1px solid rgba(201,151,0,0.25)", borderRadius: 20, padding: "5px 14px", marginBottom: 20 }}>
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#C99700", display: "inline-block" }} />
      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#C99700", letterSpacing: "0.1em" }}>{children}</span>
    </div>
  );
}
function Wrap({ children }) { return <div style={{ width: "100%", maxWidth: 620 }}>{children}</div>; }
function Tag({ children }) { return <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#C99700", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10 }}>{children}</div>; }
function Note({ children }) {
  return <div style={{ background: "rgba(201,151,0,0.07)", border: "1px solid rgba(201,151,0,0.18)", borderRadius: 10, padding: "13px 16px", fontSize: 14, color: "#555F6D", lineHeight: 1.65, marginTop: 14 }}>{children}</div>;
}

/* ─── STYLES ────────────────────────────────────────────────────────── */
const S = {
  root: { minHeight: "100dvh", width: "100%", background: "#F8F9FA", display: "flex", flexDirection: "column", fontFamily: "'Manrope',sans-serif", color: "#0B1F33", position: "relative", overflowX: "hidden" },
  gridBg: { position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(11,31,51,0.03)1px,transparent 1px),linear-gradient(90deg,rgba(11,31,51,0.03)1px,transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none", zIndex: 0 },
  header: { position: "sticky", top: 0, zIndex: 20, background: "rgba(248,249,250,0.97)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", display: "flex", alignItems: "center", gap: 10, padding: "0 20px", height: 54, borderBottom: "1px solid #E2E6EA", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" },
  progressTrack: { flex: 1, height: 3, background: "#E2E6EA", borderRadius: 2, overflow: "hidden" },
  progressBar: { height: "100%", background: "#C99700", borderRadius: 2, transition: "width 0.4s ease" },
  counter: { fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.08em", flexShrink: 0, color: "#555F6D" },
  countdown: { fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#C99700", background: "rgba(201,151,0,0.1)", border: "1px solid rgba(201,151,0,0.25)", borderRadius: 6, padding: "2px 8px", letterSpacing: "0.06em" },
  pauseBtn: { background: "rgba(201,151,0,0.1)", border: "1px solid rgba(201,151,0,0.3)", color: "#C99700", width: 30, height: 30, borderRadius: "50%", cursor: "pointer", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.2s" },
  muteBtn: { background: "none", border: "none", cursor: "pointer", fontSize: 16, opacity: 0.6, flexShrink: 0, padding: "4px", lineHeight: 1 },
  main: { flex: 1, zIndex: 1, padding: "32px 56px 90px", transition: "opacity 0.19s ease,transform 0.19s ease", display: "flex", flexDirection: "column", alignItems: "center", overflowY: "auto" },
  /* Arrows hug the 620px content column */
  sideNav: { position: "fixed", top: "50%", transform: "translateY(-50%)", zIndex: 30, background: "#C99700", border: "none", color: "#0B1F33", width: 40, height: 68, cursor: "pointer", fontSize: 17, fontFamily: "monospace", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", boxShadow: "0 2px 10px rgba(201,151,0,0.3)" },
  dotsBar: { position: "fixed", bottom: 16, left: "50%", transform: "translateX(-50%)", zIndex: 30, display: "flex", gap: 7, alignItems: "center", background: "rgba(248,249,250,0.95)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", padding: "9px 16px", borderRadius: 22, border: "1px solid #E2E6EA", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" },
  dot: { height: 7, borderRadius: 4, border: "none", cursor: "pointer", padding: 0, transition: "all 0.25s ease" },
  h1: { fontFamily: "'Manrope',sans-serif", fontSize: "clamp(28px,6vw,48px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 18, letterSpacing: "-0.02em", color: "#0B1F33" },
  h2: { fontFamily: "'Manrope',sans-serif", fontSize: "clamp(22px,5vw,32px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 14, letterSpacing: "-0.01em", color: "#0B1F33" },
  lead: { fontSize: 16, color: "#4A5568", lineHeight: 1.75, marginBottom: 12 },
  hint: { fontSize: 13, color: "#AABBCC", marginTop: 14 },
  card: { background: "#FFFFFF", border: "1px solid #E2E6EA", borderRadius: 12, padding: "16px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" },
  ctaBtn: { display: "inline-block", background: "#C99700", color: "#fff", border: "none", borderRadius: 10, padding: "16px 40px", fontFamily: "'Manrope',sans-serif", fontSize: 16, fontWeight: 700, cursor: "pointer", letterSpacing: "0.02em", boxShadow: "0 2px 10px rgba(201,151,0,0.35)" },
  ctaLink: { display: "inline-block", background: "#C99700", color: "#fff", borderRadius: 10, padding: "16px 40px", fontFamily: "'Manrope',sans-serif", fontSize: 16, fontWeight: 700, textDecoration: "none", width: "100%", maxWidth: 320, textAlign: "center", boxShadow: "0 2px 10px rgba(201,151,0,0.35)" },
};
