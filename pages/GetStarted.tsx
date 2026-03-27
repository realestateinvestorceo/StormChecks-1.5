/**
 * StormChecks — Property Owner Onboarding (v2)
 * Route: /getstarted
 *
 * DEPLOY NOTES:
 * 1. npm install (no extra deps — uses React only)
 * 2. Import and mount at your /getstarted route
 * 3. Intercom: CSS below hides launcher automatically.
 * 4. Audio: place MP3s in /public/audio/ → owner-00.mp3 through owner-09.mp3
 * 5. Senator clip: place video as /public/videos/senator-hearing.mp4 on Vercel (rename/convert 0123__2__1_.mov).
 * 6. Fonts: Manrope + JetBrains Mono injected on mount.
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
    a: "Most claims tie to catalogued storms your carrier already knows about — you're paying for that event whether you file or not. In the rare case where a premium adjustment is possible, we walk through the math before you decide. Most clients see no impact.",
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
    a: "Our files are built to withstand carrier scrutiny — PE-signed engineering, timestamped photography, storm correlation, and Xactimate estimates. One denial we overturned: $0 → $3.9M after the forensic file was delivered.",
  },
];

const OWNER_AUDIO = [
  "/audio/owner-00.mp3",
  "/audio/owner-01.mp3",
  "/audio/owner-02.mp3",
  "/audio/owner-03.mp3",
  "/audio/owner-04.mp3",
  "/audio/owner-05.mp3",
  "/audio/owner-06.mp3",
  "/audio/owner-07.mp3",
  "/audio/owner-08.mp3",
  "/audio/owner-09.mp3",
];

/* ─── COMPONENT ────────────────────────────────────────────────────── */

export default function StormChecksOwnerOnboarding() {
  const [screen, setScreen] = useState(0);
  const [caseIdx, setCaseIdx] = useState(0);
  const [objIdx, setObjIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [muted, setMuted] = useState(false);
  const [introPlaying, setIntroPlaying] = useState(false);
  const mainRef = useRef(null);
  const audioRef = useRef(null);
  const mutedRef = useRef(false);
  const videoRef = useRef(null);
  const LAST = 9;

  useEffect(() => { mutedRef.current = muted; }, [muted]);

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
      if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
    };
  }, []);

  useEffect(() => {
    const fn = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(screen + 1);
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   go(screen - 1);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen]);

  const playAudio = useCallback((idx) => {
    // Always stop any playing audio first
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ""; audioRef.current = null; }
    // Slide 1 audio is handled by the video-first useEffect
    if (idx === 1) return;
    const src = OWNER_AUDIO[idx];
    if (!src) return;
    const audio = new Audio(src);
    audio.volume = 1;
    audio.muted = mutedRef.current;
    audioRef.current = audio;
    audio.play().catch(() => {});
  }, []);

  // Slide 1: auto-play video first (muted), then narration after video ends
  useEffect(() => {
    if (screen !== 1) return;
    const t = setTimeout(() => {
      const v = videoRef.current;
      if (!v) return;
      v.currentTime = 0;
      v.muted = false;
      v.play().then(() => {
        v.addEventListener('ended', () => {
          if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ""; }
          const src = OWNER_AUDIO[1];
          if (!src) return;
          const a = new Audio(src);
          a.volume = 1;
          a.muted = mutedRef.current;
          audioRef.current = a;
          a.play().catch(() => {});
        }, { once: true });
      }).catch(() => {
        // video autoplay blocked, fall back to audio
        if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ""; }
        const src = OWNER_AUDIO[1];
        if (!src) return;
        const a = new Audio(src);
        a.volume = 1;
        a.muted = mutedRef.current;
        audioRef.current = a;
        a.play().catch(() => {});
      });
    }, 100);
    return () => clearTimeout(t);
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

  const pct = screen === 0 ? 0 : screen >= LAST ? 100 : Math.round((screen / (LAST - 1)) * 100);

  return (
    <div style={S.root}>
      <div style={S.gridBg} />

      {/* ── Header ── */}
      <header style={S.header}>
        <Logo />
        {screen > 0 && (
          <div style={S.progressTrack}>
            <div style={{ ...S.progressBar, width: `${pct}%` }} />
          </div>
        )}
        {screen > 0 && screen < LAST && (
          <span style={S.counter}>
            <b style={{ color: "#C99700" }}>{String(screen).padStart(2,"0")}</b>
            <span style={{ color: "#AABBCC" }}> / {String(LAST - 1).padStart(2,"0")}</span>
          </span>
        )}
        {(screen > 0 || introPlaying) && (
          <button onClick={toggleMute} style={S.muteBtn} aria-label={muted ? "Unmute narration" : "Mute narration"}>
            {muted ? "🔇" : "🔊"}
          </button>
        )}
      </header>

      {/* ── Content ── */}
      <main
        ref={mainRef}
        style={{
          ...S.main,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
        }}
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
        {screen === 6 && <Timeline />}
        {screen === 7 && <CaseStudies idx={caseIdx} setIdx={setCaseIdx} />}
        {screen === 8 && <Objections idx={objIdx} setIdx={setObjIdx} />}
        {screen === 9 && <CTA />}
      </main>

      {/* ── Side Nav Arrows ── */}
      {screen > 0 && screen < LAST && (
        <>
          <button
            onClick={() => go(screen - 1)}
            style={{ ...S.sideNav, left: 0, borderRadius:"0 8px 8px 0", opacity: screen > 0 ? 1 : 0.25 }}
            disabled={screen <= 0}
            aria-label="Previous slide"
          >←</button>
          <button
            onClick={() => go(screen + 1)}
            style={{ ...S.sideNav, right: 0, borderRadius:"8px 0 0 8px" }}
            aria-label={screen === LAST - 1 ? "Finish" : "Next slide"}
          >{screen === LAST - 1 ? "✓" : "→"}</button>
        </>
      )}

      {/* ── Bottom Dots ── */}
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
    <div style={{ textAlign:"center", maxWidth:500 }}>
      {/* Speaker prompt */}
      <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(201,151,0,0.08)", border:"2px solid #E2E6EA", borderRadius:8, padding:"6px 14px", marginBottom:20, fontSize:14, color:"#4A5568" }}>
        🔊 <span>Please ensure your speakers are on</span>
      </div>
      <Pill>PROPERTY OWNER BRIEFING</Pill>
      <h1 style={S.h1}>What your insurance company<br /><Em>doesn't want you to know.</Em></h1>
      <p style={S.lead}>StormChecks is a forensic building consultancy. We find hidden storm damage, document it thoroughly, and make sure you actually get what you're owed — at no cost to you.</p>
      <p style={{ ...S.lead, fontSize:14, opacity:0.7, marginBottom:36 }}>About a 4-minute read. No obligation at any point.</p>
      <button onClick={onStart} style={S.cta}>{introPlaying ? "Continue →" : "Start Briefing →"}</button>
      {introPlaying && <p style={{ ...S.hint, color:"#C99700", marginTop:12 }}>🔊 Playing intro…</p>}
      <p style={S.hint}>{introPlaying ? "Listening to intro — or tap Continue to skip ahead" : "Arrow keys or tap dots to navigate"}</p>
    </div>
  );
}

function IntroSlide({ videoRef }) {
  return (
    <Wrap>
      <Tag>The Reality</Tag>
      <h2 style={S.h2}>They're not on your side.<br /><Em>We are.</Em></h2>
      <p style={{ ...S.body, marginBottom:20 }}>
        Insurance companies spend billions in advertising to sign you up. Once you're a customer, their entire claims operation is designed to pay out as little as possible — or nothing at all.
      </p>

      <div style={{ borderRadius:14, overflow:"hidden", marginBottom:20, background:"#000", border:"2px solid #E2E6EA" }}>
        <video
          ref={videoRef}
          controls
          playsInline
          style={{ width:"100%", display:"block", borderRadius:0 }}
        >
          <source src="/videos/senator-hearing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
        {[
          { icon:"⏱", t:"There's a short window to act", d:"Most policies give you 1–2 years from the storm date to file. After that, your right to claim is gone — permanently, even if the damage is real and documented." },
          { icon:"👁", t:"Damage you can't see", d:"Storm damage hides in roofing membranes and mechanical systems. It doesn't show as leaks. Standard inspections don't find it. Forensic engineers do." },
          { icon:"🛡", t:"StormChecks is the fix", d:"We document your property so you're protected before the window closes — and so you come out ahead when you file." },
        ].map(item => (
          <div key={item.t} style={{ ...S.card, display:"flex", gap:14, alignItems:"flex-start" }}>
            <span style={{ fontSize:20, flexShrink:0, paddingTop:2 }}>{item.icon}</span>
            <div>
              <div style={{ fontSize:15, fontWeight:700, color:"#0B1F33", marginBottom:4 }}>{item.t}</div>
              <div style={{ fontSize:14, color:"#555F6D", lineHeight:1.6 }}>{item.d}</div>
            </div>
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
      <h2 style={S.h2}>We wear a lot of hats.<br /><Em>Just like you do.</Em></h2>
      <p style={{ ...S.body, marginBottom:20 }}>
        Running a commercial property isn't one job — it's ten. We get that. StormChecks is the same way. We're not just a roofing consultant or just a weather service. Here's what we actually bring to the table:
      </p>

      <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:14 }}>
        {[
          { n:"01", t:"Meteorological Analysts",    d:"We pull exact storm history for your property coordinates — hail size, wind speed, path, and date — going back two years. We know what hit your building and when." },
          { n:"02", t:"Forensic Engineers",          d:"Licensed PEs inspect on-site for hail fractures, membrane compression, and cladding impact. This isn't a roof inspection. It's a completely different discipline." },
          { n:"03", t:"Building Consultants",        d:"We assess every storm-exposed system on your property — roofing, HVAC, envelope — and compile findings into a complete expert file in carrier-recognized format." },
        ].map(d => (
          <div key={d.n} style={S.card}>
            <div style={S.cardNum}>{d.n}</div>
            <div style={S.cardTitle}>{d.t}</div>
            <div style={S.cardDesc}>{d.d}</div>
          </div>
        ))}
      </div>

      <Note>
        <b style={{ color:"#C99700" }}>Our relationship with public adjusters:</b>{" "}
        We love PAs. Filing a claim with a good PA is like bringing your own attorney instead of trusting the other side's. The problem is most PAs are a one-person operation — they don't have our meteorological and forensic team behind them. We hand them everything they need to not just win, but maximize your recovery.
      </Note>
    </Wrap>
  );
}

function ThreeOptions() {
  const options = [
    {
      rank: "Worst",
      title: "Do nothing",
      color: "rgba(255,80,80,0.15)",
      border: "rgba(255,80,80,0.3)",
      accent: "#FF5050",
      body: "You've already paid for coverage. Every month you pay premiums for protection you're not using. If the window closes before you file, that money is gone — there's no coming back.",
    },
    {
      rank: "Bad",
      title: "File directly with your carrier",
      color: "rgba(255,140,0,0.1)",
      border: "rgba(255,140,0,0.25)",
      accent: "#FF8C00",
      body: "You show up with no documentation, no engineering report, no storm correlation data. The adjuster denies it or lowballs you, and you have no basis to push back. You lose.",
    },
    {
      rank: "Better",
      title: "Use a public adjuster",
      color: "rgba(100,180,255,0.1)",
      border: "rgba(100,180,255,0.2)",
      accent: "#6B9FE4",
      body: "Smart move. It's like bringing your own attorney versus trusting the insurance company's. A good PA fights for you. But without forensic documentation, they're filing on instinct — not evidence.",
    },
    {
      rank: "Best",
      title: "StormChecks + a public adjuster",
      color: "rgba(201,151,0,0.1)",
      border: "rgba(201,151,0,0.35)",
      accent: "#C99700",
      body: "We give the PA everything they need — forensic file, engineering reports, storm correlation, Xactimate estimates. They don't just file. They file with evidence. That's the difference between a denied claim and a $3.9M recovery.",
    },
  ];
  return (
    <Wrap>
      <Tag>Your Options</Tag>
      <h2 style={S.h2}>Four ways this can go.<br /><Em>One of them wins.</Em></h2>
      <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
        {options.map(o => (
          <div key={o.rank} style={{ background:o.color, border:`1px solid ${o.border}`, borderRadius:12, padding:"16px 18px" }}>
            <div style={{ display:"flex", gap:10, alignItems:"center", marginBottom:8 }}>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:o.accent, letterSpacing:"0.1em", flexShrink:0 }}>{o.rank.toUpperCase()}</span>
              <div style={{ fontSize:15, fontWeight:700, color:"#0B1F33" }}>{o.title}</div>
            </div>
            <p style={{ fontSize:14, color:"#555F6D", lineHeight:1.65 }}>{o.body}</p>
          </div>
        ))}
      </div>
    </Wrap>
  );
}

function ProcessSlide() {
  const ownerSteps = [
    { t:"Submit your property address", d:"Go to stormchecks.com/contact and enter your address. Takes about 60 seconds." },
    { t:"Sign the engagement agreement", d:"Once we confirm the weather assessment looks promising, a short digital contract — review and sign." },
    { t:"Share your insurance policy", d:"Email us a copy of your commercial property policy. We review coverage, deductibles, and filing deadlines before anyone commits." },
  ];
  const scSteps = [
    { t:"Run the 2-year weather analysis",   d:"Pull exact storm history for your coordinates — hail size, wind speed, dates. Takes about a week." },
    { t:"Forensic on-site inspection",       d:"Licensed PE team on-site for 2–6 hours. You don't need to be there." },
    { t:"Compile the complete expert file",  d:"Full forensic documentation package with engineering analysis, storm correlation, timestamped photos, and Xactimate estimates." },
    { t:"Hand off to the public adjuster",   d:"We connect you with a vetted PA and deliver the entire file. They file and negotiate." },
    { t:"Handle all carrier back-and-forth", d:"Hundreds of emails, follow-ups, and carrier communications over roughly 12 months. All handled by StormChecks and the PA." },
  ];
  return (
    <Wrap>
      <Tag>How It Works</Tag>
      <h2 style={S.h2}>Your time: a few hours.<br /><Em>Our time: about 12 months.</Em></h2>
      <p style={{ ...S.body, marginBottom:18 }}>
        Here's the clean breakdown — what you do, and what we handle.
      </p>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:14 }}>
        {/* Owner column */}
        <div style={{ background:"rgba(201,151,0,0.07)", border:"1px solid rgba(201,151,0,0.22)", borderRadius:12, padding:"16px" }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:"#C99700", letterSpacing:"0.1em", marginBottom:12 }}>YOUR ROLE</div>
          {ownerSteps.map((s, i) => (
            <div key={i} style={{ marginBottom:12 }}>
              <div style={{ fontSize:15, fontWeight:700, color:"#0B1F33", marginBottom:3 }}>{s.t}</div>
              <div style={{ fontSize:14, color:"#555F6D", lineHeight:1.55 }}>{s.d}</div>
            </div>
          ))}
          <div style={{ marginTop:10, borderTop:"1px solid rgba(201,151,0,0.2)", paddingTop:10, fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:"#C99700" }}>Total: a few hours</div>
        </div>
        {/* SC column */}
        <div style={{ background:"#F0F2F5", border:"1px solid #E2E6EA", borderRadius:12, padding:"16px" }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:"#8A9AB0", letterSpacing:"0.1em", marginBottom:12 }}>STORMCHECKS HANDLES</div>
          {scSteps.map((s, i) => (
            <div key={i} style={{ marginBottom:12 }}>
              <div style={{ fontSize:15, fontWeight:700, color:"#0B1F33", marginBottom:3 }}>{s.t}</div>
              <div style={{ fontSize:13, color:"#8A9AB0", lineHeight:1.55 }}>{s.d}</div>
            </div>
          ))}
          <div style={{ marginTop:10, borderTop:"1px solid #E2E6EA", paddingTop:10, fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:"#8A9AB0" }}>Duration: ~12 months</div>
        </div>
      </div>
      <Note>The highlighted (amber) items are the only things that require your attention. Everything else is on us.</Note>
    </Wrap>
  );
}

function Fees() {
  return (
    <Wrap>
      <Tag>Fee Structure</Tag>
      <h2 style={S.h2}>$0 upfront. Ever.<br /><Em>Everything comes from recovery.</Em></h2>
      <p style={{ ...S.body, marginBottom:16 }}>
        The meteorology report, the engineering inspection, the building consultant — those reports alone can run <b style={{ color:"#0B1F33" }}>$50,000 or more</b>. We front all of it. You never write a check.
      </p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, marginBottom:14 }}>
        {[
          { pct:"20%", lbl:"StormChecks",    sub:"Forensic documentation", hi:false },
          { pct:"10%", lbl:"Public Adjuster",sub:"Filing & negotiation",   hi:false },
          { pct:"70%", lbl:"You Keep",       sub:"Paid directly to you",   hi:true  },
        ].map(f => (
          <div key={f.lbl} style={{
            background: f.hi ? "rgba(201,151,0,0.1)" : "#FFFFFF",
            border:`1px solid ${f.hi ? "#C99700" : "#E2E6EA"}`,
            borderRadius:14, padding:"18px 10px", textAlign:"center",
          }}>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"clamp(22px,5vw,30px)", fontWeight:600, color:f.hi?"#C99700":"#0B1F33", marginBottom:5 }}>{f.pct}</div>
            <div style={{ fontSize:12, fontWeight:700, color:f.hi?"#C99700":"#0B1F33", marginBottom:3 }}>{f.lbl}</div>
            <div style={{ fontSize:11, color:"#8A9AB0" }}>{f.sub}</div>
          </div>
        ))}
      </div>
      <div style={{ ...S.card, padding:"15px 16px", marginBottom:12 }}>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:"#8A9AB0", letterSpacing:"0.12em", marginBottom:10 }}>WORKED EXAMPLE — $400K RECOVERY</div>
        {[["Recovery","$400,000"],["StormChecks (20%)","−$80,000"],["Public Adjuster (10%)","−$40,000"],["You receive","$280,000"]].map(([k,v],i) => (
          <div key={k} style={{
            display:"flex", justifyContent:"space-between", fontSize:14, padding:"5px 0",
            borderTop: i===3 ? "1px solid rgba(201,151,0,0.25)" : "none",
            marginTop: i===3 ? 6 : 0, paddingTop: i===3 ? 10 : 5,
          }}>
            <span style={{ color: i===3?"#0B1F33":"#555F6D", fontWeight:i===3?600:400 }}>{k}</span>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", color:i===3?"#C99700":i>0?"#6B7280":"#0B1F33", fontWeight:i===3?600:400 }}>{v}</span>
          </div>
        ))}
      </div>
      <Note>
        <b style={{ color:"#C99700" }}>If no recovery — nobody gets paid.</b>{" "}
        Not us, not the PA, not anyone. Zero recovery means zero cost to you — period.
      </Note>
    </Wrap>
  );
}

function Timeline() {
  const items = [
    { phase:"Day 1",           who:"YOU", t:"Submit property address",       d:"Go to stormchecks.com/contact and enter your address. Takes about 60 seconds." },
    { phase:"Week 1–2",        who:"SC",  t:"Weather assessment delivered",  d:"You receive a report showing which storms hit your property and an estimated recovery range." },
    { phase:"Week 2–3",        who:"YOU", t:"Policy review call",            d:"15–30 minutes together. We look at your coverage, deductibles, and filing deadlines. You decide whether to proceed — no pressure." },
    { phase:"Week 3–7",        who:"SC",  t:"Forensic inspection on-site",   d:"Our PE team inspects the property. You arrange access; you don't need to be there." },
    { phase:"Week 7–11",       who:"YOU", t:"Expert File review",            d:"You receive the full documentation package, we walk through it together, you approve before anything goes to the PA." },
    { phase:"~12 months",      who:"PA",  t:"PA files and negotiates",       d:"The PA handles all carrier communication. Your involvement this phase: zero. You'll get updates." },
    { phase:"Upon settlement",  who:"YOU", t:"You receive payment",          d:"Settlement paid directly to you. 20% to StormChecks, 10% to PA, 70% to you. If no settlement — no one is owed anything." },
  ];
  const colors = { YOU:"#C99700", SC:"#8A9AB0", PA:"#6B9FE4" };
  return (
    <Wrap>
      <Tag>After You Start</Tag>
      <h2 style={S.h2}>What a typical claim looks like,<br /><Em>start to finish.</Em></h2>
      <p style={{ ...S.body, marginBottom:16 }}>
        Settlement typically arrives about <b style={{ color:"#0B1F33" }}>12 months</b> after we start. Your total time investment across that entire period: <b style={{ color:"#0B1F33" }}>a few hours.</b>
      </p>
      <p style={{ ...S.body, fontSize:13, marginBottom:20 }}>
        <span style={{ color:"#C99700" }}>Amber</span> = requires action from you.{" "}
        <span style={{ color:"#555F6D" }}>Gray</span> = StormChecks.{" "}
        <span style={{ color:"#6B9FE4" }}>Blue</span> = public adjuster.
      </p>
      {items.map((item, i) => (
        <div key={i} style={{ display:"flex", gap:0, position:"relative" }}>
          <div style={{ display:"flex", flexDirection:"column", alignItems:"center", width:28, flexShrink:0, paddingTop:4 }}>
            <div style={{ width:10, height:10, borderRadius:"50%", background:colors[item.who]||"#D1D9E0", border:`2px solid ${colors[item.who]||"#E2E6EA"}`, flexShrink:0, zIndex:1 }} />
            {i < items.length-1 && <div style={{ width:1, flex:1, minHeight:20, background:"#FFFFFF", margin:"4px 0" }} />}
          </div>
          <div style={{ paddingLeft:8, paddingBottom:20, flex:1 }}>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:colors[item.who], letterSpacing:"0.07em", marginBottom:3 }}>{item.phase}</div>
            <div style={{ fontSize:15, fontWeight:700, color:"#0B1F33", marginBottom:4 }}>{item.t}</div>
            <p style={{ fontSize:14, color:"#555F6D", lineHeight:1.65 }}>{item.d}</p>
          </div>
        </div>
      ))}
    </Wrap>
  );
}

function CaseStudies({ idx, setIdx }) {
  const c = CASES[idx];
  return (
    <Wrap>
      <Tag>Real Outcomes</Tag>
      <h2 style={{ ...S.h2, marginBottom:6 }}>Properties our team has documented.</h2>
      <p style={{ fontSize:14, color:"#4A5568", lineHeight:1.6, marginBottom:8 }}>
        In most cases, the owner had <b style={{ color:"#0B1F33" }}>no idea they had damage</b> before we ran the assessment.
      </p>
      <p style={{ fontSize:13, color:"#8A9AB0", lineHeight:1.5, marginBottom:16 }}>
        We only move forward if we're confident the benefit outweighs the cost — for everyone involved.
      </p>
      <div style={{ background:"rgba(201,151,0,0.07)", border:"1px solid rgba(201,151,0,0.22)", borderRadius:14, padding:"20px 18px", marginBottom:12 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:10, marginBottom:14 }}>
          <div>
            <div style={{ fontSize:16, fontWeight:700, color:"#0B1F33", marginBottom:4 }}>{c.type}</div>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:13, color:"#8A9AB0" }}>{c.location} · {c.sqft}</div>
          </div>
          <div style={{ background:"rgba(201,151,0,0.15)", border:"1px solid rgba(201,151,0,0.3)", borderRadius:8, padding:"5px 14px", fontFamily:"'JetBrains Mono',monospace", fontSize:20, fontWeight:600, color:"#C99700", flexShrink:0 }}>{c.found}</div>
        </div>
        <div style={{ display:"flex", gap:16, flexWrap:"wrap", marginBottom:14 }}>
          {[["Before",c.prior],["Documented",c.found]].map(([l,v],i)=>(
            <div key={l} style={{ flex:"1 1 100px" }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:"#8A9AB0", letterSpacing:"0.1em", marginBottom:3 }}>{l.toUpperCase()}</div>
              <div style={{ fontSize:13, fontWeight:600, color:i===1?"#C99700":"#fff" }}>{v}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize:14, color:"#555F6D", fontStyle:"italic", lineHeight:1.65 }}>"{c.story}"</p>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:6, marginBottom:14 }}>
        {CASES.map((cs,i) => (
          <button key={i} onClick={() => setIdx(i)} style={{
            background: i===idx?"rgba(201,151,0,0.12)":"#FFFFFF",
            border:`1px solid ${i===idx?"#C99700":"#E2E6EA"}`,
            borderRadius:10, padding:"10px 6px", cursor:"pointer", textAlign:"center", transition:"all 0.2s",
          }}>
            <div style={{ fontSize:13, fontWeight:600, color:i===idx?"#C99700":"#8A9AB0", lineHeight:1.4, marginBottom:4 }}>{cs.type.split(" ")[0]}</div>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:i===idx?"#C99700":"#8A9AB0" }}>{cs.found}</div>
          </button>
        ))}
      </div>
      <div style={{ fontSize:13, color:"#8A9AB0", lineHeight:1.65, padding:"10px 14px", background:"#F0F2F5", borderRadius:8 }}>
        All recoveries were negotiated by independent public adjusters using our forensic files — not by StormChecks directly.
      </div>
    </Wrap>
  );
}

function Objections({ idx, setIdx }) {
  const o = OBJECTIONS[idx];
  return (
    <Wrap>
      <Tag>Common Questions</Tag>
      <h2 style={{ ...S.h2, marginBottom:20 }}>The questions everyone asks<br /><Em>before they decide.</Em></h2>
      <div style={{ ...S.card, minHeight:190, marginBottom:12 }}>
        <div style={{ display:"flex", gap:10, alignItems:"flex-start", marginBottom:14, flexWrap:"wrap" }}>
          <div style={{ fontSize:16, fontWeight:700, color:"#0B1F33", flex:1, lineHeight:1.4 }}>"{o.q}"</div>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:"#C99700", background:"rgba(201,151,0,0.08)", borderRadius:4, padding:"3px 8px", flexShrink:0, letterSpacing:"0.06em" }}>{o.tag}</span>
        </div>
        <p style={{ fontSize:14, color:"#555F6D", lineHeight:1.75 }}>{o.a}</p>
      </div>
      <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
        {OBJECTIONS.map((ob,i) => (
          <button key={i} onClick={() => setIdx(i)} style={{
            flex:"1 1 calc(50% - 3px)",
            background: i===idx?"rgba(201,151,0,0.1)":"#F0F2F5",
            border:`1px solid ${i===idx?"#C99700":"#E2E6EA"}`,
            borderRadius:8, padding:"8px 10px", fontSize:12, fontFamily:"'Manrope',sans-serif",
            color: i===idx?"#C99700":"#8A9AB0", cursor:"pointer", textAlign:"left", lineHeight:1.4, transition:"all 0.18s",
          }}>{ob.tag}</button>
        ))}
      </div>
    </Wrap>
  );
}

function CTA() {
  return (
    <div style={{ textAlign:"center", maxWidth:460 }}>
      <div style={{ fontSize:38, marginBottom:20 }}>🏢</div>
      <h2 style={{ ...S.h2, marginBottom:12 }}>The weather assessment is<br /><Em>completely free.</Em></h2>
      <p style={{ ...S.lead, maxWidth:380, margin:"0 auto 12px", fontSize:15 }}>
        No obligation to proceed at any stage. Submit your property address and we'll take it from there.
      </p>
      <p style={{ ...S.lead, maxWidth:380, margin:"0 auto 28px", fontSize:14, opacity:0.7 }}>
        If you have questions before starting, call or email — details are below.
      </p>
      <a href="https://www.stormchecks.com/contact?focus=true" target="_blank" rel="noopener noreferrer" style={S.ctaLink}>Submit Your Property →</a>
      <div style={{ display:"flex", justifyContent:"center", gap:20, margin:"18px 0 28px", flexWrap:"wrap" }}>
        {["$0 upfront","2-year lookback","You keep 70%"].map(t => (
          <span key={t} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:13, color:"#8A9AB0", letterSpacing:"0.04em" }}>✓ {t}</span>
        ))}
      </div>
      <div style={{ marginBottom:24, fontSize:13, color:"#8A9AB0" }}>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, color:"#AABBCC", letterSpacing:"0.1em", marginBottom:8 }}>QUESTIONS FIRST?</div>
        <a href="tel:+18018212530" style={{ color:"#555F6D", textDecoration:"none" }}>+1 801-821-2530</a>
        <span style={{ color:"#D1D9E0", margin:"0 8px" }}>·</span>
        <a href="mailto:info@stormchecks.com" style={{ color:"#555F6D", textDecoration:"none" }}>info@stormchecks.com</a>
      </div>
      <p style={{ fontSize:11, color:"#AABBCC", lineHeight:1.65, maxWidth:400, margin:"0 auto" }}>StormChecks provides forensic documentation services only. Not a public adjusting firm, claims negotiator, or settlement advocate. All settlements negotiated by independent public adjusters engaged directly by the property owner.</p>
    </div>
  );
}

/* ─── PRIMITIVES ────────────────────────────────────────────────────── */
function Logo() {
  return (
    <img
      src={LOGO}
      alt="StormChecks"
      style={{ height:28, width:"auto", flexShrink:0 }}
    />
  );
}
function Em({ children }) { return <span style={{ color:"#C99700" }}>{children}</span>; }
function Pill({ children }) {
  return (
    <div style={{ display:"inline-flex", alignItems:"center", gap:7, background:"rgba(201,151,0,0.08)", border:"1px solid rgba(201,151,0,0.25)", borderRadius:20, padding:"5px 14px", marginBottom:20 }}>
      <span style={{ width:5, height:5, borderRadius:"50%", background:"#C99700", display:"inline-block" }} />
      <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:"#C99700", letterSpacing:"0.1em" }}>{children}</span>
    </div>
  );
}
function Wrap({ children }) { return <div style={{ width:"100%", maxWidth:620 }}>{children}</div>; }
function Tag({ children }) { return <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:"#C99700", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:10 }}>{children}</div>; }
function Note({ children }) {
  return <div style={{ background:"rgba(201,151,0,0.07)", border:"1px solid rgba(201,151,0,0.18)", borderRadius:10, padding:"13px 16px", fontSize:14, color:"#555F6D", lineHeight:1.65, marginTop:14 }}>{children}</div>;
}

/* ─── STYLES ────────────────────────────────────────────────────────── */
const S = {
  root:{ minHeight:"100dvh", width:"100%", background:"#F8F9FA", display:"flex", flexDirection:"column", fontFamily:"'Manrope',sans-serif", color:"#0B1F33", position:"relative", overflowX:"hidden" },
  gridBg:{ position:"fixed", inset:0, backgroundImage:"linear-gradient(rgba(11,31,51,0.03)1px,transparent 1px),linear-gradient(90deg,rgba(11,31,51,0.03)1px,transparent 1px)", backgroundSize:"48px 48px", pointerEvents:"none", zIndex:0 },
  header:{ position:"sticky", top:0, zIndex:20, background:"rgba(248,249,250,0.97)", backdropFilter:"blur(14px)", WebkitBackdropFilter:"blur(14px)", display:"flex", alignItems:"center", gap:12, padding:"0 24px", height:56, borderBottom:"1px solid #E2E6EA", boxShadow:"0 1px 4px rgba(0,0,0,0.04)" },
  progressTrack:{ flex:1, height:3, background:"#E2E6EA", borderRadius:2, overflow:"hidden" },
  progressBar:{ height:"100%", background:"#C99700", borderRadius:2, transition:"width 0.4s ease" },
  counter:{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, letterSpacing:"0.08em", flexShrink:0, color:"#555F6D" },
  muteBtn:{ background:"none", border:"none", cursor:"pointer", fontSize:18, opacity:0.6, flexShrink:0, padding:"4px", lineHeight:1, transition:"opacity 0.2s" },
  main:{ flex:1, zIndex:1, padding:"36px 56px 90px", transition:"opacity 0.19s ease,transform 0.19s ease", display:"flex", flexDirection:"column", alignItems:"center", overflowY:"auto" },
  sideNav:{ position:"fixed", top:"50%", transform:"translateY(-50%)", zIndex:30, background:"#C99700", border:"none", color:"#0B1F33", width:42, height:74, cursor:"pointer", fontSize:18, fontFamily:"monospace", display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.2s", boxShadow:"0 2px 10px rgba(201,151,0,0.35)" },
  dotsBar:{ position:"fixed", bottom:18, left:"50%", transform:"translateX(-50%)", zIndex:30, display:"flex", gap:7, alignItems:"center", background:"rgba(248,249,250,0.95)", backdropFilter:"blur(10px)", WebkitBackdropFilter:"blur(10px)", padding:"10px 18px", borderRadius:22, border:"1px solid #E2E6EA", boxShadow:"0 2px 8px rgba(0,0,0,0.06)" },
  dot:{ height:7, borderRadius:4, border:"none", cursor:"pointer", padding:0, transition:"all 0.25s ease" },
  h1:{ fontFamily:"'Manrope',sans-serif", fontSize:"clamp(30px,7vw,50px)", fontWeight:800, lineHeight:1.1, marginBottom:18, letterSpacing:"-0.02em", color:"#0B1F33" },
  h2:{ fontFamily:"'Manrope',sans-serif", fontSize:"clamp(22px,5vw,34px)", fontWeight:800, lineHeight:1.2, marginBottom:14, letterSpacing:"-0.01em", color:"#0B1F33" },
  lead:{ fontSize:17, color:"#4A5568", lineHeight:1.75, marginBottom:12 },
  body:{ fontSize:16, color:"#555F6D", lineHeight:1.75, marginBottom:10 },
  hint:{ fontSize:13, color:"#AABBCC", marginTop:16 },
  card:{ background:"#FFFFFF", border:"1px solid #E2E6EA", borderRadius:12, padding:"16px", boxShadow:"0 1px 3px rgba(0,0,0,0.04)" },
  cardNum:{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:"#C99700", letterSpacing:"0.1em", marginBottom:8 },
  cardTitle:{ fontSize:15, fontWeight:700, color:"#0B1F33", marginBottom:6 },
  cardDesc:{ fontSize:14, color:"#555F6D", lineHeight:1.6 },
  statCard:{ background:"#FFFFFF", border:"1px solid #E2E6EA", borderRadius:12, padding:"16px 14px", textAlign:"center", boxShadow:"0 1px 3px rgba(0,0,0,0.04)" },
  statNum:{ fontFamily:"'JetBrains Mono',monospace", fontSize:"clamp(18px,4vw,24px)", fontWeight:600, color:"#C99700", marginBottom:6 },
  statLbl:{ fontSize:14, color:"#555F6D", lineHeight:1.5 },
  cta:{ display:"inline-block", background:"#C99700", color:"#fff", border:"none", borderRadius:10, padding:"16px 40px", fontFamily:"'Manrope',sans-serif", fontSize:16, fontWeight:700, cursor:"pointer", letterSpacing:"0.02em", marginBottom:10, boxShadow:"0 2px 10px rgba(201,151,0,0.35)" },
  ctaLink:{ display:"inline-block", background:"#C99700", color:"#fff", border:"none", borderRadius:10, padding:"16px 40px", fontFamily:"'Manrope',sans-serif", fontSize:16, fontWeight:700, cursor:"pointer", letterSpacing:"0.02em", marginBottom:10, textDecoration:"none", width:"100%", maxWidth:320, textAlign:"center", boxShadow:"0 2px 10px rgba(201,151,0,0.35)" },
};
