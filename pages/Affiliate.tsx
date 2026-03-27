/**
 * StormChecks — Affiliate Onboarding (v3)
 * Route: /affiliate/start
 *
 * DEPLOY NOTES:
 * 1. No extra deps — uses React only
 * 2. Audio: place MP3s in /public/audio/ → affiliate-00.mp3 through affiliate-08.mp3
 * 3. Reference card: place PDF at /public/downloads/StormChecks_Affiliate_Reference.pdf
 * 4. Fonts: Manrope + JetBrains Mono injected on mount.
 * 5. "Copy script" uses navigator.clipboard — works on HTTPS.
 */

import { useState, useEffect, useCallback, useRef } from "react";
const LOGO = "/stormchecks-logo.png";

/* ─── DATA ─────────────────────────────────────────────────────────── */

const OPENING_SCRIPT = `Hey [Name], I work with a company called StormChecks — they help commercial property owners recover money from storm damage that most standard inspections completely miss.

Here's the thing most owners don't realize: insurance companies spend a lot of money convincing you that filing a claim will raise your premiums or get you dropped. That's largely not true — and for peril events like hail and wind, it's actually illegal for carriers to raise your rates.

The math is simple: if there's a potential $1M recovery and premiums go up $20K, the decision is obvious.

StormChecks only moves forward when they're confident there's a real opportunity — they front the engineering and meteorology costs themselves, so if they're proceeding, they believe in it.

They offer a free 2-year weather analysis for any commercial property — no cost, no commitment. If they find potential damage, you decide what to do next.

Can I get your property address so we can run the initial assessment?`;

const STEPS = [
  {
    n:"01",
    phase:"Identify a qualified owner",
    what:"You",
    detail:"Any commercial property owner with a building 10,000+ SF. Not single-family residential — ever. Best lead types: multifamily, retail, industrial, self-storage, office. All 50 states qualify.",
    action:"Find an owner. Cold call, LinkedIn, trade show, networking, referral — any channel works.",
    time:"Ongoing",
  },
  {
    n:"02",
    phase:"Start the conversation and get the address",
    what:"You",
    detail:"Your goal in the first conversation is just to get the property address. Not a full yes — just the address. Use the opening script. If they ask detailed questions you can't answer, tell them you'll find out and follow up. Then check with StormChecks and get back to them.",
    action:"Get the address. Submit it. Keep following up until the owner has signed the agreement.",
    time:"2-minute conversation",
  },
  {
    n:"03",
    phase:"Submit the address in the portal",
    what:"You",
    detail:"Log into app.stormchecks.com. Add the owner's contact info, then add their property address. StormChecks is notified automatically and begins the weather analysis. The owner gets a notification too.",
    action:"Two portal link types: one to recruit sub-affiliates under you, one to add property owners directly. Most of your submissions will use the property owner link.",
    time:"~60 seconds per submission",
  },
  {
    n:"04",
    phase:"StormChecks runs the 2-year weather analysis",
    what:"StormChecks",
    detail:"We pull exact storm history for the property coordinates — hail size, wind speed, dates. If qualifying storm exposure exists, we generate an estimated recovery range specific to that property.",
    action:"Pro tip: once the analysis is done, use the property-specific link when you follow up with the owner. They land on a page that already shows a dollar amount tied to their property — far more compelling than a generic invite.",
    time:"~1 week",
  },
  {
    n:"05",
    phase:"Walk the owner through it — get them to sign",
    what:"You + SC",
    detail:"Once the weather assessment is ready, reach back out to the owner, walk them through what was found, and answer their questions. If something comes up you can't answer, find out and follow up. The goal here is to get them to sign the engagement agreement so StormChecks can proceed.",
    action:"Follow up consistently. The assessment creates urgency — use it.",
    time:"1–2 weeks",
  },
  {
    n:"06",
    phase:"Forensic inspection + Expert File",
    what:"StormChecks",
    detail:"Licensed PE team inspects on-site. Produces the complete forensic documentation package. Owner reviews and approves before anything goes to the PA.",
    action:"Nothing required from you during this phase. Stay in touch with the owner if they have questions.",
    time:"3–6 weeks",
  },
  {
    n:"07",
    phase:"Public adjuster files and negotiates",
    what:"PA",
    detail:"The PA submits the claim using the forensic file and handles all carrier communication. StormChecks keeps you informed on major milestones.",
    action:"Nothing required from you. Keep the owner informed if they reach out.",
    time:"~12 months",
  },
  {
    n:"08",
    phase:"Settlement — you receive your commission",
    what:"You",
    detail:"When the owner receives their settlement, StormChecks pays your commission from our 20% fee. Commission is based on your tier. Top-tier affiliates also earn a 5% override on claims closed by sub-affiliates they've recruited.",
    action:"On a $1M recovery at top tier: SC fee $200K → your commission: $50,000.",
    time:"Upon settlement",
  },
];

const OBJECTIONS = [
  {
    tag:"Premiums",
    q:"Won't this raise my premiums?",
    script:"That's actually the #1 thing insurance companies want you to believe — and it keeps billions in their pocket every year. For peril events like hail and wind, it's illegal for carriers to raise your rates. And even if premiums nudged up slightly, run the math: if you recover $1M and premiums go up $20K, the decision is obvious. You're already paying for this coverage.",
  },
  {
    tag:"Too good to be true",
    q:"This sounds too good to be true.",
    script:"StormChecks only moves forward when they're confident there's a real opportunity — they front the engineering and meteorology costs themselves, which can run $50K or more. If they're investing that, they believe in the claim. Our fee is 20% of recovery only. Nothing upfront. Nothing if there's no recovery.",
  },
  {
    tag:"Just inspected",
    q:"I just had my roof inspected.",
    script:"Roofers look for leaks. Forensic engineers look for hail fractures, membrane compression, and impact patterns — a completely different discipline. We've found over $1M in damage after a roofer gave a clean bill of health six months prior.",
  },
  {
    tag:"Use a PA instead",
    q:"Why not just call a public adjuster directly?",
    script:"PAs file for damage you already know about — they don't find it. StormChecks identifies damage that wasn't visible to the naked eye, then hands a complete forensic file to the PA. PAs who work with our files close faster and for significantly more.",
  },
  {
    tag:"Already denied",
    q:"My carrier already denied a claim.",
    script:"Denials are almost always documentation failures, not damage failures. Our forensic file gives the PA exactly what they need to reopen it. We've overturned a $0 denial and recovered $3.9M for that same property.",
  },
  {
    tag:"No damage",
    q:"I don't think I have any damage.",
    script:"Storm damage doesn't show as leaks — it hides in roofing membranes and HVAC systems. We consistently find $10–$15 per square foot that maintenance teams never flag. The weather assessment is completely free. 60 seconds to start.",
  },
];

const LEADS = [
  {
    icon:"🚫",
    rank:"#1",
    type:"Previously denied claims",
    why:"A denial is almost always a documentation failure, not a damage failure. Our forensic file gives the PA exactly what's needed to reopen it. Highest conversion rate of any lead type.",
    how:"Ask: 'Have you ever had a claim denied or underpaid?' If yes, that's your strongest lead.",
  },
  {
    icon:"🏷",
    rank:"#2",
    type:"Property about to be sold",
    why:"The owner recovers value before the asset leaves their portfolio. The claim goes against their current policy — the full benefit stays with them, not the buyer.",
    how:"Ask: 'Are you planning to sell any assets in the next 12–18 months?' Recovery before close is a compelling hook.",
  },
  {
    icon:"🌀",
    rank:"#3",
    type:"Storm-prone markets",
    why:"Texas, Midwest, Southeast, Mountain West. Recent hail events = high probability of qualifying damage that nobody's looked for yet.",
    how:"Cold call owners in zip codes with recent NOAA hail reports. Very high qualification rate.",
  },
  {
    icon:"🔨",
    rank:"#4",
    type:"Roofer gave a clean bill of health",
    why:"Roofers aren't forensic engineers. High probability of real damage that wasn't found with the wrong methodology.",
    how:"Ask: 'Has anyone ever assessed for hail impact specifically — not just leaks?' Most say no.",
  },
  {
    icon:"📋",
    rank:"#5",
    type:"Long-hold portfolios",
    why:"5+ year holds in storm-prone regions have almost certainly been through qualifying events. One relationship, multiple submissions.",
    how:"Target asset managers, family office principals, and portfolio directors.",
  },
];

const TIERS = [
  { tier:"Tier 1", desc:"Getting started",     rate:"15%", ex1:"$1M recovery → SC fee $200K → your commission: $30,000",   override:false },
  { tier:"Tier 2", desc:"Building momentum",   rate:"20%", ex1:"$1M recovery → SC fee $200K → your commission: $40,000",   override:false },
  { tier:"Tier 3", desc:"Top affiliate",        rate:"25%", ex1:"$1M recovery → SC fee $200K → your commission: $50,000",   override:true, overrideEx:"+ 5% override on sub-affiliates: $1M sub-close → additional $10,000 to you" },
];

const AFFILIATE_AUDIO = [
  "/audio/affiliate-00.mp3",
  "/audio/affiliate-01.mp3",
  "/audio/affiliate-02.mp3",
  "/audio/affiliate-03.mp3",
  "/audio/affiliate-04.mp3",
  "/audio/affiliate-05.mp3",
  "/audio/affiliate-06.mp3",
  "/audio/affiliate-07.mp3",
  "/audio/affiliate-08.mp3",
];

/* ─── COMPONENT ────────────────────────────────────────────────────── */

export default function StormChecksAffiliateOnboarding() {
  const [screen, setScreen] = useState(0);
  const [objIdx, setObjIdx]   = useState(0);
  const [leadIdx, setLeadIdx] = useState(0);
  const [copied, setCopied]   = useState(false);
  const [visible, setVisible] = useState(true);
  const [muted, setMuted]     = useState(false);
  const [introPlaying, setIntroPlaying] = useState(false);
  const mainRef  = useRef(null);
  const audioRef = useRef(null);
  const mutedRef = useRef(false);
  const loomRef  = useRef(null);
  const LAST = 8;

  useEffect(() => { mutedRef.current = muted; }, [muted]);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    const s = document.createElement("style");
    s.id = "sc-aff-style";
    s.textContent = `
      *{box-sizing:border-box;margin:0;padding:0}
      body{background:#F8F9FA;overscroll-behavior:none}
      .intercom-launcher,.intercom-namespace .intercom-lightweight-app{display:none!important}
      ::-webkit-scrollbar{width:4px}
      ::-webkit-scrollbar-thumb{background:#C99700;border-radius:2px}
    `;
    if (!document.getElementById("sc-aff-style")) document.head.appendChild(s);
    return () => {
      document.getElementById("sc-aff-style")?.remove();
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
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ""; }
    const src = AFFILIATE_AUDIO[idx];
    if (!src) return;
    const audio = new Audio(src);
    audio.volume = 1;
    audio.muted = mutedRef.current;
    audioRef.current = audio;
    audio.play().catch(() => {});
    // Auto-play Loom video after screen 7 narration ends
    if (idx === 7) {
      audio.addEventListener('ended', () => {
        const iframe = loomRef.current;
        if (iframe) {
          const base = "https://www.loom.com/embed/8aa6323281744a71b41b2a85b735151b";
          iframe.src = base + "?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&autoplay=1";
        }
      }, { once: true });
    }
  }, []);

  const go = useCallback((idx) => {
    if (idx < 0 || idx > LAST) return;
    setVisible(false);
    setTimeout(() => {
      setScreen(idx);
      setVisible(true);
      mainRef.current?.scrollTo({ top:0, behavior:"smooth" });
      if (idx > 0) playAudio(idx);
      else { if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ""; } setIntroPlaying(false); }
    }, 190);
  }, [playAudio]);

  const copyScript = () => {
    navigator.clipboard?.writeText(OPENING_SCRIPT).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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

      <header style={S.header}>
        <Logo />
        {screen > 0 && <div style={S.progressTrack}><div style={{ ...S.progressBar, width:`${pct}%` }} /></div>}
        {screen > 0 && <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:"#C99700", background:"rgba(201,151,0,0.1)", border:"1px solid rgba(201,151,0,0.25)", borderRadius:10, padding:"3px 10px", letterSpacing:"0.08em", flexShrink:0 }}>AFFILIATE</span>}
        {screen > 0 && screen < LAST && (
          <span style={S.counter}>
            <b style={{ color:"#C99700" }}>{String(screen).padStart(2,"0")}</b>
            <span style={{ color:"#AABBCC" }}> / {String(LAST-1).padStart(2,"0")}</span>
          </span>
        )}
        {(screen > 0 || introPlaying) && (
          <button onClick={toggleMute} style={S.muteBtn} aria-label={muted ? "Unmute narration" : "Mute narration"}>
            {muted ? "🔇" : "🔊"}
          </button>
        )}
      </header>

      <main ref={mainRef} style={{ ...S.main, opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(8px)" }}>
        {screen === 0 && <Welcome introPlaying={introPlaying} onStart={() => {
          if (introPlaying) { go(1); return; }
          setIntroPlaying(true);
          playAudio(0);
          const a = audioRef.current;
          if (a) a.addEventListener('ended', () => go(1), { once: true });
        }} />}
        {screen === 1 && <YourRole />}
        {screen === 2 && <Script copied={copied} onCopy={copyScript} />}
        {screen === 3 && <FullProcess />}
        {screen === 4 && <Commission />}
        {screen === 5 && <BestLeads idx={leadIdx} setIdx={setLeadIdx} />}
        {screen === 6 && <Objections idx={objIdx} setIdx={setObjIdx} />}
        {screen === 7 && <PortalWalkthrough loomRef={loomRef} />}
        {screen === 8 && <StartNow onBack={() => go(7)} />}
      </main>

      {/* ── Side Nav Arrows ── */}
      {screen > 0 && screen < LAST && (
        <>
          <button
            onClick={() => go(screen - 1)}
            style={{ ...S.sideNav, left: 0, borderRadius:"0 10px 10px 0" }}
            aria-label="Previous slide"
          >←</button>
          <button
            onClick={() => go(screen + 1)}
            style={{ ...S.sideNav, right: 0, borderRadius:"10px 0 0 10px" }}
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
              width: i + 1 === screen ? 22 : 7,
              background: i + 1 === screen ? "#C99700" : i + 1 < screen ? "rgba(201,151,0,0.4)" : "#D1D9E0",
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
    <div style={{ textAlign:"center", maxWidth:540 }}>
      <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(201,151,0,0.08)", border:"1px solid rgba(201,151,0,0.25)", borderRadius:8, padding:"7px 16px", marginBottom:22, fontSize:13, color:"#7A6000" }}>
        🔊 <span>Please ensure your speakers are on</span>
      </div>
      <Pill>AFFILIATE PARTNER BRIEFING</Pill>
      <h1 style={S.h1}>Welcome to the<br /><Em>StormChecks Affiliate Network.</Em></h1>
      <p style={S.lead}>We're excited to have you. The opportunity here is massive — every commercial property that's been through a storm event is a potential lead.</p>
      <div style={{ display:"flex", flexDirection:"column", gap:10, margin:"20px 0 28px", textAlign:"left" }}>
        {[
          { icon:"💰", t:"The money is already there", d:"Owners are leaving real recovery money on the table — not because damage doesn't exist, but because no one pointed them to the right process." },
          { icon:"⏱", t:"The #1 opportunity", d:"Property owners who've had a storm event but don't realize they can — and should — file a claim before the 1–2 year filing window closes." },
          { icon:"🚫", t:"The lie insurance companies tell", d:"They spend enormous amounts convincing owners that filing will raise premiums or get them dropped. For peril events, raising premiums is actually illegal. The math is simple: $1M recovery vs. $20K premium bump — there's no decision to make." },
          { icon:"✅", t:"StormChecks only pursues real opportunities", d:"We front the engineering and meteorology costs ourselves — that can be $50K+ per property. If we're moving forward, we believe in the claim." },
        ].map(item => (
          <div key={item.t} style={{ ...S.card, display:"flex", gap:14, alignItems:"flex-start" }}>
            <span style={{ fontSize:22, flexShrink:0 }}>{item.icon}</span>
            <div>
              <div style={{ fontSize:15, fontWeight:700, color:"#0B1F33", marginBottom:4 }}>{item.t}</div>
              <div style={{ fontSize:14, color:"#555F6D", lineHeight:1.6 }}>{item.d}</div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={onStart} style={S.cta}>{introPlaying ? "Continue →" : "Start Briefing →"}</button>
      {introPlaying && <p style={{ ...S.hint, color:"#C99700", marginTop:12 }}>🔊 Playing intro…</p>}
      <p style={S.hint}>{introPlaying ? "Listening to intro — or tap Continue to skip ahead" : "Arrow keys or tap dots to navigate · ~4 minutes"}</p>
    </div>
  );
}

function YourRole() {
  return (
    <Wrap>
      <Tag>Your Role</Tag>
      <h2 style={S.h2}>Here's exactly what<br /><Em>you need to do.</Em></h2>
      <p style={{ ...S.body, marginBottom:20 }}>
        Get the property address, submit it, and follow through until the owner signs the agreement. If an owner has questions, get them answered — either from what you know or by checking with StormChecks. Keep the conversation going until they're across the line. After that, StormChecks and the PA take it from there.
      </p>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:16 }}>
        <div style={{ background:"#FFFBEA", border:"2px solid #C99700", borderRadius:12, padding:"18px 16px" }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:"#9B7300", letterSpacing:"0.1em", marginBottom:12, fontWeight:700 }}>YOUR JOB</div>
          {[
            "Identify a commercial property owner",
            "Start the conversation",
            "Get the property address",
            "Submit it via the portal",
            "Answer questions or get answers from StormChecks",
            "Follow up until the owner signs",
          ].map((t,i)=>(
            <div key={i} style={{ display:"flex", gap:8, alignItems:"flex-start", marginBottom:8 }}>
              <span style={{ color:"#C99700", fontSize:13, flexShrink:0, paddingTop:1, fontWeight:700 }}>✓</span>
              <span style={{ fontSize:13, color:"#0B1F33", lineHeight:1.5 }}>{t}</span>
            </div>
          ))}
        </div>
        <div style={{ background:"#F8F9FA", border:"1px solid #E2E6EA", borderRadius:12, padding:"18px 16px" }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:"#8A9AB0", letterSpacing:"0.1em", marginBottom:12 }}>NOT YOUR JOB</div>
          {[
            "Explain the engineering in depth",
            "Negotiate with anyone",
            "Be on-site for inspections",
            "Manage the insurance process",
          ].map((t,i)=>(
            <div key={i} style={{ display:"flex", gap:8, alignItems:"flex-start", marginBottom:8 }}>
              <span style={{ color:"#AABBCC", fontSize:13, flexShrink:0, paddingTop:1 }}>✗</span>
              <span style={{ fontSize:13, color:"#8A9AB0", lineHeight:1.5 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
      <Note>
        <b style={{ color:"#9B7300" }}>If an owner asks something you can't answer:</b>{" "}
        Tell them you'll find out and follow up. Check with StormChecks, get the answer, and get back to the owner. You don't need to know everything — you just need to keep the conversation moving until they sign.
      </Note>
      <Note>
        <b style={{ color:"#9B7300" }}>Qualifying criteria:</b>{" "}
        Commercial property, 10,000+ SF, any US state. Never single-family residential — under any circumstances.
      </Note>
    </Wrap>
  );
}

function Script({ copied, onCopy }) {
  return (
    <Wrap>
      <Tag>The Opening</Tag>
      <h2 style={S.h2}>One script.<br /><Em>Memorize it.</Em></h2>
      <p style={{ ...S.body, marginBottom:16 }}>
        Works for cold calls, LinkedIn, trade shows, and networking. Your only goal in the first conversation is the property address. If deeper questions come up that you can't answer, tell them you'll find out and follow up — then do it.
      </p>
      <div style={{ background:"#FFFBEA", border:"2px solid #C99700", borderRadius:14, padding:"24px 22px", marginBottom:12 }}>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:"#9B7300", letterSpacing:"0.12em", marginBottom:16, fontWeight:700 }}>OPENING SCRIPT — COLD CALL / NETWORKING</div>
        <p style={{ fontSize:15, color:"#2D3748", lineHeight:1.9, fontStyle:"italic", whiteSpace:"pre-line" }}>{`"${OPENING_SCRIPT}"`}</p>
        <button
          onClick={onCopy}
          style={{
            marginTop:18,
            background: copied ? "rgba(34,197,94,0.1)" : "#FFFFFF",
            border:`2px solid ${copied?"#22C55E":"#D1D9E0"}`,
            borderRadius:8, padding:"8px 16px",
            fontFamily:"'JetBrains Mono',monospace", fontSize:11,
            color: copied?"#16A34A":"#555F6D",
            cursor:"pointer", letterSpacing:"0.06em", transition:"all 0.2s", fontWeight:600,
          }}
        >{copied ? "✓ COPIED TO CLIPBOARD" : "COPY SCRIPT"}</button>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8 }}>
        {[["📞","Cold Call"],["💼","LinkedIn DM"],["🤝","Trade Show / Networking"]].map(([icon,label])=>(
          <div key={label} style={S.miniCard}>
            <div style={{ fontSize:20, marginBottom:6 }}>{icon}</div>
            <div style={{ fontSize:12, color:"#555F6D", fontWeight:600 }}>{label}</div>
          </div>
        ))}
      </div>
    </Wrap>
  );
}

function FullProcess() {
  return (
    <Wrap>
      <Tag>The Process</Tag>
      <h2 style={S.h2}>Your steps are highlighted.<br /><Em>Everything else is handled.</Em></h2>
      <p style={{ ...S.body, fontSize:14, marginBottom:8 }}>
        Amber = <b style={{ color:"#9B7300" }}>your responsibility</b>. Gray = StormChecks. Blue = Public Adjuster.
      </p>
      <p style={{ ...S.body, fontSize:13, marginBottom:18 }}>
        Settlement typically arrives about 12 months after submission. Your active involvement is concentrated in the first few weeks.
      </p>
      <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
        {STEPS.map((step, i) => {
          const isYou = step.what === "You" || step.what === "You + SC";
          const isPA  = step.what === "PA";
          const isSC  = step.what === "StormChecks";
          return (
            <div key={i} style={{
              borderRadius:12, overflow:"hidden", border:"2px solid",
              background:isYou?"#FFFBEA":"#FFFFFF",
              borderColor:isYou?"#C99700":"#E2E6EA",
              boxShadow:isYou?"0 2px 8px rgba(201,151,0,0.1)":"0 1px 3px rgba(0,0,0,0.04)",
            }}>
              <div style={{ display:"flex" }}>
                <div style={{
                  display:"flex", flexDirection:"column", alignItems:"center", gap:5,
                  padding:"16px 12px 16px 16px", minWidth:56, flexShrink:0,
                  background:isYou?"rgba(201,151,0,0.12)":"#F8F9FA",
                  borderRight:`2px solid ${isYou?"#C99700":"#E2E6EA"}`,
                }}>
                  <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:"#9B7300", fontWeight:700 }}>{step.n}</span>
                  <span style={{
                    fontFamily:"'JetBrains Mono',monospace", fontSize:9, borderRadius:4,
                    padding:"3px 6px", letterSpacing:"0.06em", fontWeight:700,
                    color: isYou?"#9B7300":isPA?"#1D4ED8":isSC?"#374151":"#555F6D",
                    background:isYou?"rgba(201,151,0,0.15)":isPA?"rgba(59,130,246,0.1)":"rgba(0,0,0,0.05)",
                  }}>{step.what.replace("You + SC","YOU").toUpperCase().replace("STORMCHECKS","SC")}</span>
                </div>
                <div style={{ padding:"16px 18px", flex:1 }}>
                  <div style={{ fontSize:15, fontWeight:700, color:isYou?"#7A5500":"#0B1F33", marginBottom:6 }}>{step.phase}</div>
                  <div style={{ fontSize:13, color:"#555F6D", lineHeight:1.65, marginBottom:isYou&&step.action?8:0 }}>{step.detail}</div>
                  {isYou && step.action && (
                    <div style={{ display:"flex", gap:7, alignItems:"flex-start", background:"rgba(201,151,0,0.08)", borderRadius:8, padding:"8px 12px" }}>
                      <span style={{ fontSize:12, color:"#C99700", flexShrink:0, paddingTop:1, fontWeight:700 }}>→</span>
                      <span style={{ fontSize:13, color:"#9B7300", lineHeight:1.5, fontWeight:600 }}>{step.action}</span>
                    </div>
                  )}
                  <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:"#AABBCC", letterSpacing:"0.04em", marginTop:8 }}>⏱ {step.time}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrap>
  );
}

function Commission() {
  return (
    <Wrap>
      <Tag>How You Get Paid</Tag>
      <h2 style={S.h2}>Commission from recovery only.<br /><Em>Three tiers + sub-affiliate override.</Em></h2>
      <p style={{ ...S.body, marginBottom:18 }}>
        Your commission comes from StormChecks' 20% fee — the owner's 70% is never affected by your tier. No recovery means no commission for anyone.
      </p>
      <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:18 }}>
        {TIERS.map((t,i) => (
          <div key={t.tier} style={{
            borderRadius:12, padding:"18px 20px",
            background:t.override?"#FFFBEA":"#FFFFFF",
            border:`2px solid ${t.override?"#C99700":"#E2E6EA"}`,
            boxShadow:t.override?"0 2px 10px rgba(201,151,0,0.12)":"0 1px 3px rgba(0,0,0,0.04)",
          }}>
            <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:t.override?10:0 }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:28, fontWeight:700, color:t.override?"#C99700":"#0B1F33", minWidth:56, flexShrink:0 }}>{t.rate}</div>
              <div>
                <div style={{ display:"flex", gap:8, alignItems:"center", marginBottom:4 }}>
                  <span style={{ fontSize:16, fontWeight:700, color:"#0B1F33" }}>{t.tier}</span>
                  <span style={{ fontSize:11, color:"#8A9AB0", background:"#F0F2F5", borderRadius:4, padding:"2px 7px", fontFamily:"'JetBrains Mono',monospace" }}>{t.desc}</span>
                </div>
                <div style={{ fontSize:13, color:t.override?"#9B7300":"#555F6D", fontWeight:t.override?600:400 }}>{t.ex1}</div>
              </div>
            </div>
            {t.override && (
              <div style={{ background:"rgba(201,151,0,0.1)", border:"1px solid rgba(201,151,0,0.3)", borderRadius:8, padding:"10px 14px" }}>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:"#9B7300", letterSpacing:"0.08em", marginBottom:4, fontWeight:700 }}>SUB-AFFILIATE OVERRIDE</div>
                <div style={{ fontSize:13, color:"#7A5500", fontWeight:600 }}>{t.overrideEx}</div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={{ background:"#FFFFFF", border:"2px solid #E2E6EA", borderRadius:12, padding:"18px 20px", marginBottom:14 }}>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:"#8A9AB0", letterSpacing:"0.12em", marginBottom:14, fontWeight:700 }}>WORKED EXAMPLE — $1,000,000 RECOVERY · TOP TIER</div>
        {[
          ["Total recovery","$1,000,000"],
          ["StormChecks fee (20%)","$200,000"],
          ["PA fee (10%)","$100,000"],
          ["Owner receives (70%)","$700,000"],
          ["Your commission (25% of SC fee)","$50,000"],
        ].map(([k,v],i)=>(
          <div key={k} style={{
            display:"flex", justifyContent:"space-between", fontSize:14, padding:"6px 0",
            borderTop:i===4?"2px solid #E2E6EA":"none",
            marginTop:i===4?8:0, paddingTop:i===4?12:6,
          }}>
            <span style={{ color:i===4?"#9B7300":i===0?"#0B1F33":"#555F6D", fontWeight:i===4||i===0?700:400 }}>{k}</span>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", color:i===4?"#C99700":i===0?"#0B1F33":"#8A9AB0", fontWeight:i===4||i===0?700:400 }}>{v}</span>
          </div>
        ))}
      </div>
      <Note>
        <b style={{ color:"#9B7300" }}>Sub-affiliate override:</b>{" "}
        When you recruit another affiliate and they close a claim, you earn 5% of StormChecks' fee on that recovery — in addition to your own commissions. Build a team, multiply your earnings.
      </Note>
    </Wrap>
  );
}

function BestLeads({ idx, setIdx }) {
  const l = LEADS[idx];
  return (
    <Wrap>
      <Tag>Lead Quality</Tag>
      <h2 style={S.h2}>Not all leads convert equally.<br /><Em>Start with the top two.</Em></h2>
      <p style={{ ...S.body, marginBottom:18 }}>Ranked by conversion rate. Categories 1 and 2 are your fastest path to commission — start there.</p>
      <div style={{ background:"#FFFBEA", border:"2px solid #C99700", borderRadius:14, padding:"22px 20px", marginBottom:14, minHeight:220 }}>
        <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:18 }}>
          <div style={{ background:"#C99700", color:"#fff", borderRadius:8, width:40, height:40, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:800, flexShrink:0 }}>{l.rank}</div>
          <div style={{ fontSize:26, flexShrink:0 }}>{l.icon}</div>
          <div style={{ fontSize:17, fontWeight:700, color:"#0B1F33" }}>{l.type}</div>
        </div>
        <p style={{ fontSize:14, color:"#555F6D", lineHeight:1.7, marginBottom:16 }}>{l.why}</p>
        <div style={{ background:"#FFFFFF", borderLeft:"3px solid #C99700", borderRadius:"0 10px 10px 0", padding:"12px 16px" }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:"#9B7300", letterSpacing:"0.1em", marginBottom:7, fontWeight:700 }}>HOW TO START THE CONVERSATION</div>
          <p style={{ fontSize:14, color:"#0B1F33", fontStyle:"italic", lineHeight:1.65 }}>{l.how}</p>
        </div>
      </div>
      <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
        {LEADS.map((ld,i) => (
          <button key={i} onClick={() => setIdx(i)} style={{
            flex:"1 1 calc(33% - 6px)",
            background:i===idx?"#FFFBEA":"#FFFFFF",
            border:`2px solid ${i===idx?"#C99700":"#E2E6EA"}`,
            borderRadius:10, padding:"10px 8px", cursor:"pointer", textAlign:"center", transition:"all 0.2s",
            boxShadow:i===idx?"0 2px 8px rgba(201,151,0,0.15)":"none",
          }}>
            <div style={{ fontSize:14, fontWeight:800, color:"#C99700", marginBottom:3 }}>{ld.rank}</div>
            <div style={{ fontSize:18, marginBottom:4 }}>{ld.icon}</div>
            <div style={{ fontSize:11, color:i===idx?"#9B7300":"#8A9AB0", lineHeight:1.3, fontWeight:i===idx?600:400 }}>{ld.type.split(" ").slice(0,3).join(" ")}</div>
          </button>
        ))}
      </div>
    </Wrap>
  );
}

function Objections({ idx, setIdx }) {
  const o = OBJECTIONS[idx];
  return (
    <Wrap>
      <Tag>Handling Objections</Tag>
      <h2 style={S.h2}>The six you'll hear most.<br /><Em>Word-for-word responses.</Em></h2>
      <p style={{ ...S.body, marginBottom:16 }}>
        When an objection comes up, address it directly. You don't need to know everything — if you're unsure, say "Let me get you an answer on that" and follow up. The goal is to keep the conversation going, not close it.
      </p>
      <div style={{ ...S.card, minHeight:210, marginBottom:14 }}>
        <div style={{ display:"flex", gap:10, alignItems:"flex-start", marginBottom:16, flexWrap:"wrap" }}>
          <div style={{ fontSize:16, fontWeight:700, color:"#0B1F33", flex:1, lineHeight:1.4 }}>"{o.q}"</div>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:"#9B7300", background:"rgba(201,151,0,0.1)", borderRadius:5, padding:"3px 9px", flexShrink:0, fontWeight:700 }}>{o.tag}</span>
        </div>
        <div style={{ background:"#FFFBEA", borderLeft:"3px solid #C99700", borderRadius:"0 10px 10px 0", padding:"14px 16px" }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:"#9B7300", letterSpacing:"0.1em", marginBottom:9, fontWeight:700 }}>YOUR RESPONSE</div>
          <p style={{ fontSize:14, color:"#2D3748", lineHeight:1.8, fontStyle:"italic" }}>"{o.script}"</p>
        </div>
      </div>
      <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
        {OBJECTIONS.map((ob,i) => (
          <button key={i} onClick={() => setIdx(i)} style={{
            flex:"1 1 calc(50% - 4px)",
            background:i===idx?"#FFFBEA":"#FFFFFF",
            border:`2px solid ${i===idx?"#C99700":"#E2E6EA"}`,
            borderRadius:9, padding:"9px 12px", fontSize:13, fontFamily:"'Manrope',sans-serif",
            color:i===idx?"#9B7300":"#555F6D", cursor:"pointer", textAlign:"left",
            lineHeight:1.4, transition:"all 0.18s", fontWeight:i===idx?700:400,
          }}>{ob.tag}</button>
        ))}
      </div>
    </Wrap>
  );
}

function PortalWalkthrough({ loomRef }) {
  return (
    <Wrap>
      <Tag>The Portal</Tag>
      <h2 style={S.h2}>Two link types.<br /><Em>One smart workflow.</Em></h2>
      <p style={{ ...S.body, marginBottom:18 }}>
        The portal has two main link types. Understanding the difference is key to maximizing your conversions.
      </p>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:18 }}>
        <div style={{ background:"#FFFFFF", border:"2px solid #E2E6EA", borderRadius:12, padding:"18px 16px" }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:"#8A9AB0", letterSpacing:"0.1em", marginBottom:10, fontWeight:700 }}>LINK TYPE 1</div>
          <div style={{ fontSize:15, fontWeight:700, color:"#0B1F33", marginBottom:6 }}>Sub-affiliate signup</div>
          <div style={{ fontSize:13, color:"#555F6D", lineHeight:1.6 }}>Share this link to recruit affiliates under you. When they close deals, you earn the 5% override on those recoveries.</div>
        </div>
        <div style={{ background:"#FFFBEA", border:"2px solid #C99700", borderRadius:12, padding:"18px 16px" }}>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:"#9B7300", letterSpacing:"0.1em", marginBottom:10, fontWeight:700 }}>LINK TYPE 2 ← USE THIS</div>
          <div style={{ fontSize:15, fontWeight:700, color:"#0B1F33", marginBottom:6 }}>Property owner submission</div>
          <div style={{ fontSize:13, color:"#555F6D", lineHeight:1.6 }}>This is your primary tool. Add an owner and their property address directly. Most of your activity will be here.</div>
        </div>
      </div>
      <Note>
        <b style={{ color:"#9B7300" }}>The recommended workflow — don't just send a generic link:</b>
        <div style={{ marginTop:10, display:"flex", flexDirection:"column", gap:8 }}>
          {[
            { n:"1", t:"Add the lead yourself first", d:"Submit the property address in the portal before reaching back out to the owner." },
            { n:"2", t:"Let StormChecks run the analysis", d:"Within ~1 week, you'll get an estimated recovery value for that specific property." },
            { n:"3", t:"Share the property-specific link", d:"When you follow up, the owner lands on a page that already shows a dollar amount tied to their property. That's far more compelling than a blank invite." },
            { n:"4", t:"Walk them through it", d:"Your job is to make the owner aware, answer their questions, and get them to sign the agreement. StormChecks handles everything after that — but getting the owner across the line is yours." },
          ].map(item => (
            <div key={item.n} style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
              <div style={{ background:"#C99700", color:"#fff", borderRadius:"50%", width:22, height:22, display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:800, flexShrink:0, marginTop:1 }}>{item.n}</div>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:"#0B1F33", marginBottom:2 }}>{item.t}</div>
                <div style={{ fontSize:13, color:"#555F6D", lineHeight:1.5 }}>{item.d}</div>
              </div>
            </div>
          ))}
        </div>
      </Note>
      <div style={{ borderRadius:14, overflow:"hidden", marginTop:18, background:"#000", border:"2px solid #E2E6EA", position:"relative", paddingTop:"56.25%" }}>
        <iframe
          ref={loomRef}
          src="https://www.loom.com/embed/8aa6323281744a71b41b2a85b735151b?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
          frameBorder="0"
          webkitAllowFullScreen
          mozAllowFullScreen
          allowFullScreen
          allow="autoplay"
          style={{ position:"absolute", top:0, left:0, width:"100%", height:"100%" }}
          title="StormChecks Affiliate Portal Walkthrough"
        />
      </div>
      <p style={{ fontSize:12, color:"#8A9AB0", marginTop:10, textAlign:"center" }}>3-minute portal walkthrough video above</p>
    </Wrap>
  );
}

function StartNow({ onBack }) {
  return (
    <div style={{ textAlign:"center", maxWidth:480 }}>
      <div style={{ fontSize:42, marginBottom:20 }}>🎯</div>
      <h2 style={{ ...S.h2, marginBottom:12 }}>You're ready.<br /><Em>Submit your first lead.</Em></h2>
      <p style={{ ...S.lead, maxWidth:380, margin:"0 auto 10px", fontSize:16 }}>
        Log into the portal, add the owner and property address, and submit. Follow up with the owner until they sign — then StormChecks and the PA handle the rest.
      </p>
      <p style={{ ...S.lead, maxWidth:380, margin:"0 auto 28px", fontSize:14, color:"#8A9AB0" }}>
        Questions before getting started? Call or email — details below.
      </p>
      <a href="https://app.stormchecks.com" target="_blank" rel="noopener noreferrer" style={S.ctaLink}>Go to Affiliate Portal →</a>
      <div style={{ display:"flex", gap:10, justifyContent:"center", margin:"16px 0 28px" }}>
        <a
          href="/downloads/StormChecks_Affiliate_Reference.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display:"inline-flex", alignItems:"center", gap:7, background:"#FFFFFF", border:"2px solid #E2E6EA", borderRadius:9, padding:"9px 18px", fontSize:14, color:"#0B1F33", textDecoration:"none", fontWeight:600 }}
        >
          📄 Download Reference Card
        </a>
      </div>
      <div style={{ ...S.card, textAlign:"left", marginBottom:16 }}>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, color:"#8A9AB0", letterSpacing:"0.12em", marginBottom:14, fontWeight:700 }}>QUICK REFERENCE</div>
        {[
          ["Portal","app.stormchecks.com"],
          ["Minimum property size","10,000+ SF commercial"],
          ["Never submit","Single-family residential"],
          ["Tier 1 commission","15% of SC's 20% fee"],
          ["Top tier override","+ 5% on sub-affiliate recoveries"],
          ["Payout timing","Upon owner's settlement"],
          ["Phone","+1 801-821-2530"],
          ["Email","info@stormchecks.com"],
        ].map(([k,v])=>(
          <div key={k} style={{ display:"flex", justifyContent:"space-between", fontSize:13, padding:"6px 0", borderBottom:"1px solid #F0F2F5" }}>
            <span style={{ color:"#8A9AB0" }}>{k}</span>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", color:"#0B1F33", textAlign:"right", maxWidth:"55%", fontWeight:600 }}>{v}</span>
          </div>
        ))}
      </div>
      <button
        onClick={onBack}
        style={{ background:"none", border:"2px solid #E2E6EA", borderRadius:9, padding:"9px 20px", fontSize:13, color:"#555F6D", cursor:"pointer", fontFamily:"'Manrope',sans-serif", fontWeight:600 }}
      >
        ← Back to Portal Walkthrough
      </button>
    </div>
  );
}

/* ─── PRIMITIVES ────────────────────────────────────────────────────── */
function Logo() {
  return <img src={LOGO} alt="StormChecks" style={{ height:30, width:"auto", flexShrink:0 }} />;
}
function Em({ children }) { return <span style={{ color:"#C99700" }}>{children}</span>; }
function Pill({ children }) {
  return (
    <div style={{ display:"inline-flex", alignItems:"center", gap:7, background:"rgba(201,151,0,0.1)", border:"1px solid rgba(201,151,0,0.3)", borderRadius:20, padding:"6px 16px", marginBottom:20 }}>
      <span style={{ width:6, height:6, borderRadius:"50%", background:"#C99700", display:"inline-block" }} />
      <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:"#9B7300", letterSpacing:"0.1em", fontWeight:700 }}>{children}</span>
    </div>
  );
}
function Wrap({ children }) { return <div style={{ width:"100%", maxWidth:640 }}>{children}</div>; }
function Tag({ children }) { return <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:"#9B7300", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:10, fontWeight:700 }}>{children}</div>; }
function Note({ children }) {
  return <div style={{ background:"#FFFBEA", border:"1px solid rgba(201,151,0,0.35)", borderRadius:10, padding:"14px 18px", fontSize:14, color:"#555F6D", lineHeight:1.65, marginTop:14 }}>{children}</div>;
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
  sideNav:{ position:"fixed", top:"50%", transform:"translateY(-50%)", zIndex:30, background:"#C99700", border:"none", color:"#fff", width:42, height:74, cursor:"pointer", fontSize:18, fontFamily:"monospace", display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.2s", boxShadow:"0 2px 10px rgba(201,151,0,0.35)" },
  dotsBar:{ position:"fixed", bottom:18, left:"50%", transform:"translateX(-50%)", zIndex:30, display:"flex", gap:7, alignItems:"center", background:"rgba(248,249,250,0.95)", backdropFilter:"blur(10px)", WebkitBackdropFilter:"blur(10px)", padding:"10px 18px", borderRadius:22, border:"1px solid #E2E6EA", boxShadow:"0 2px 8px rgba(0,0,0,0.06)" },
  dot:{ height:7, borderRadius:4, border:"none", cursor:"pointer", padding:0, transition:"all 0.25s ease" },
  h1:{ fontFamily:"'Manrope',sans-serif", fontSize:"clamp(30px,7vw,50px)", fontWeight:800, lineHeight:1.1, marginBottom:18, letterSpacing:"-0.02em", color:"#0B1F33" },
  h2:{ fontFamily:"'Manrope',sans-serif", fontSize:"clamp(22px,5vw,34px)", fontWeight:800, lineHeight:1.2, marginBottom:14, letterSpacing:"-0.01em", color:"#0B1F33" },
  lead:{ fontSize:17, color:"#4A5568", lineHeight:1.75, marginBottom:12 },
  body:{ fontSize:16, color:"#555F6D", lineHeight:1.75, marginBottom:10 },
  hint:{ fontSize:13, color:"#AABBCC", marginTop:16 },
  card:{ background:"#FFFFFF", border:"1px solid #E2E6EA", borderRadius:12, padding:"18px 16px", boxShadow:"0 1px 3px rgba(0,0,0,0.04)" },
  miniCard:{ background:"#FFFFFF", border:"1px solid #E2E6EA", borderRadius:10, padding:"16px 10px", textAlign:"center", boxShadow:"0 1px 3px rgba(0,0,0,0.04)" },
  cta:{ display:"inline-block", background:"#C99700", color:"#fff", border:"none", borderRadius:10, padding:"16px 40px", fontFamily:"'Manrope',sans-serif", fontSize:16, fontWeight:700, cursor:"pointer", letterSpacing:"0.02em", marginBottom:10, boxShadow:"0 2px 10px rgba(201,151,0,0.35)" },
  ctaLink:{ display:"inline-block", background:"#C99700", color:"#fff", border:"none", borderRadius:10, padding:"16px 40px", fontFamily:"'Manrope',sans-serif", fontSize:16, fontWeight:700, cursor:"pointer", letterSpacing:"0.02em", marginBottom:10, textDecoration:"none", width:"100%", maxWidth:320, textAlign:"center", boxShadow:"0 2px 10px rgba(201,151,0,0.35)" },
};
