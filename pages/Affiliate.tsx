/**
 * StormChecks — Affiliate Onboarding (v4)
 * Route: /affiliate/start
 *
 * DEPLOY NOTES:
 * 1. No extra deps — uses React only
 * 2. Audio: place MP3s in /public/audio/ → affiliate-00.mp3 through affiliate-08.mp3
 * 3. Reference card: place PDF at /public/downloads/StormChecks_Affiliate_Reference.pdf
 * 4. Fonts: Manrope + JetBrains Mono injected on mount.
 * 5. "Copy bullets" uses navigator.clipboard — works on HTTPS.
 */

import { useState, useEffect, useCallback, useRef } from "react";
import SEOHead from '../components/seo/SEOHead';
const LOGO = "/stormchecks-logo.png";

/* ─── DATA ─────────────────────────────────────────────────────────── */

// Bullet points affiliates should internalize — not a script to read verbatim
const OPENING_BULLETS = [
  "Get straight to the point: tell them you work with a forensic engineering company that finds hidden storm damage on commercial buildings.",
  "Lead with the money: most owners don't realize there's unclaimed recovery sitting on their property from storms in the last 2 years.",
  "Defuse the premium fear upfront: for hail and wind, it's actually illegal for carriers to raise your rates — and we verify this with their broker before we ever proceed.",
  "Make it zero-risk: the weather analysis is completely free. No commitment. You just need their property address to get started.",
  "Close on the address: your only goal in the first conversation is the property address — not a signature, not a meeting. Just the address.",
  "If they ask something you can't answer: tell them you'll find out and follow up. Then call StormChecks, get the answer, and get back to them.",
];

const STEPS = [
  {
    n: "01",
    phase: "Identify a qualified owner",
    what: "You",
    detail: "Any commercial property owner with a building 10,000+ SF. Not single-family residential — ever. Best lead types: multifamily, retail, industrial, self-storage, office, portfolio owners. All 50 states qualify.",
    action: "Find an owner. Cold call, LinkedIn, trade show, networking, referral — any channel works.",
    time: "Ongoing",
  },
  {
    n: "02",
    phase: "Start the conversation and get the address",
    what: "You",
    detail: "Your only goal in the first conversation is the property address — not a full commitment. If questions come up you can't answer, tell them you'll find out. Then check with StormChecks and follow up.",
    action: "Get the address. Submit it. Keep following up until the owner has signed.",
    time: "2-minute conversation",
  },
  {
    n: "03",
    phase: "Submit the address in the portal",
    what: "You",
    detail: "Log into app.stormchecks.com. Toggle to Affiliate Mode (bottom-left of screen). Add the owner's contact info and property address. StormChecks is notified automatically.",
    action: "Two portal link types: sub-affiliate recruitment link, and property owner submission link. Most submissions use the property owner link.",
    time: "~60 seconds per submission",
  },
  {
    n: "04",
    phase: "StormChecks runs the 2-year weather analysis",
    what: "StormChecks",
    detail: "We pull exact storm history for the property coordinates — hail size, wind speed, dates. If qualifying storm exposure exists, we generate an estimated recovery range for that specific property.",
    action: "Pro tip: once the analysis is done, share the property-specific link when you follow up. The owner lands on a page showing a dollar amount tied to their address — far more compelling than a generic invite.",
    time: "~1 week",
  },
  {
    n: "05",
    phase: "Walk the owner through it — get them to sign",
    what: "You + SC",
    detail: "Once the weather assessment is ready, reach back out, walk them through what was found, and answer their questions. If something comes up you can't answer, find out and follow up. Goal: get them to sign the engagement agreement.",
    action: "Follow up consistently. The assessment creates urgency — use it.",
    time: "1–2 weeks",
  },
  {
    n: "06",
    phase: "Forensic inspection + Expert File",
    what: "StormChecks",
    detail: "Licensed PE team inspects on-site. Produces the complete forensic documentation package. Owner reviews and approves before anything goes to the PA.",
    action: "Nothing required from you during this phase. Stay in touch if the owner has questions.",
    time: "3–6 weeks",
  },
  {
    n: "07",
    phase: "Public adjuster files and negotiates",
    what: "PA",
    detail: "The PA submits the claim using the forensic file and handles all carrier communication. StormChecks keeps you informed on major milestones.",
    action: "Nothing required from you. Keep the owner informed if they reach out.",
    time: "~12 months",
  },
  {
    n: "08",
    phase: "Settlement — you receive your commission",
    what: "You",
    detail: "When the owner receives their settlement, StormChecks pays your commission from our 20% fee. Commission is based on your tier. Affiliates also earn a sub-affiliate override on deals closed by people they've recruited — the override rate scales with your tier: 2% at Tier 1, 3.5% at Tier 2, 5% at Tier 3.",
    action: "On a $1M recovery at top tier (15%): SC fee $200K → your commission: $30,000.",
    time: "Upon settlement",
  },
];

const OBJECTIONS = [
  {
    tag: "Premiums",
    q: "Won't this raise my premiums?",
    script: "This is the #1 thing insurance companies want you to believe — it keeps billions in their pocket. For peril events like hail and wind, it's actually illegal for carriers to raise your rates. And even in edge cases where a modest adjustment is possible, run the math: $500K recovery vs. $15K premium bump — there's no real decision. Before we ever proceed, StormChecks coordinates with the owner's broker to verify it's in their best interest. If it isn't, we'll tell them not to file.",
  },
  {
    tag: "Getting dropped",
    q: "What if I get dropped by my carrier?",
    script: "StormChecks takes this seriously and is honest about it. Before moving forward, they analyze whether another carrier would pick up the property at comparable rates. If the owner is in a high-risk area with no viable alternatives, they'll advise not to file. That doesn't happen often — but it does happen, and they'll be straight about it.",
  },
  {
    tag: "Blanket policy",
    q: "My buildings are on one master policy.",
    script: "That changes the math, and StormChecks knows it. They run that specific scenario through the owner's broker before recommending they proceed. In some cases, they'll advise holding off on certain buildings under a blanket policy — because the right answer for a single property isn't always right for a portfolio.",
  },
  {
    tag: "Just inspected",
    q: "I just had my roof inspected.",
    script: "Roofers look for leaks. Forensic engineers look for hail fractures, membrane compression, and impact patterns — a completely different discipline. StormChecks has found over $1M in damage after a roofer gave a written clean bill of health six months prior.",
  },
  {
    tag: "Already denied",
    q: "My carrier already denied a claim.",
    script: "Denials are almost always documentation failures, not damage failures. StormChecks' forensic file gives the PA exactly what they need to reopen it. They've overturned a $0 denial and recovered $3.9M for that same property.",
  },
  {
    tag: "No damage",
    q: "I don't think I have any damage.",
    script: "Storm damage doesn't show as leaks — it hides in roofing membranes and HVAC systems. StormChecks consistently finds $10–$15 per square foot that maintenance teams never flag. The weather assessment is completely free. 60 seconds to start.",
  },
];

// 4 premium screening questions to qualify before pitching
const PREMIUM_SCREENING = [
  { q: "Has this property already been sold?",           why: "Lowest risk — claim goes against prior policy, zero current carrier impact." },
  { q: "Is this property about to be sold?",             why: "Good candidate — recover before it leaves the portfolio." },
  { q: "Was there a different carrier at the time of the storm?", why: "Green light — no current carrier relationship at risk." },
  { q: "Is this on a master/blanket policy?",            why: "Flag for StormChecks — filing multiple claims on one policy raises carrier flags." },
];

const LEADS = [
  {
    icon: "🏢",
    rank: "#1",
    type: "Large portfolio owners",
    why: "Multiple properties, often in different markets. High probability that several have qualifying storm exposure that nobody's looked for. One relationship = multiple submissions. These owners are also usually unaware — they're not being approached by anyone.",
    how: "Target asset managers, family office principals, and commercial property directors. Lead with: 'Do you manage properties in multiple markets? I'd like to run a free weather analysis across your portfolio.'",
  },
  {
    icon: "🔑",
    rank: "#2",
    type: "Property about to be sold",
    why: "Zero premium risk — the claim goes against the policy that was active at storm time. The owner recovers real value before the asset leaves their portfolio. The filing window still applies, so timing is urgent and compelling.",
    how: "Ask: 'Are you planning to sell any assets in the next 12–18 months?' If yes: 'There may be recoverable value before you close that deal — at no risk to your current coverage.'",
  },
  {
    icon: "🏷",
    rank: "#3",
    type: "Currently listed properties",
    why: "Same logic as sold properties — owner can recover value before the asset transfers. Creates urgency. Clean premium story. High motivation to act quickly.",
    how: "Search listings in storm-prone areas. Contact the listing agent or owner directly. The pitch: recover value before close, no premium impact on the buyer's future policy.",
  },
  {
    icon: "🚫",
    rank: "#4",
    type: "Previously denied claims",
    why: "A denial is almost always a documentation failure, not a damage failure. These owners are often frustrated and already looking for options. Highest motivation of any lead type.",
    how: "Ask: 'Have you ever had a claim denied or underpaid?' If yes, that's your strongest lead.",
  },
  {
    icon: "🔨",
    rank: "#5",
    type: "Roofer gave clean bill of health",
    why: "Roofers aren't forensic engineers. High probability of real damage that was never found with the right methodology.",
    how: "Ask: 'Has anyone ever assessed for hail impact specifically — not just leaks?' Most say no.",
  },
  {
    icon: "📈",
    rank: "#6",
    type: "Owners working to improve their numbers",
    why: "Owners who are actively trying to refinance, raise capital, improve NOI, or recapitalize have a specific, practical reason to care about uncovering a hidden asset. An unclaimed insurance recovery can materially improve their position — often six or seven figures — without additional debt, dilution, or operational change. They're already motivated to find value. You're showing them where it is.",
    how: "Listen for owners who mention a refinance, a capital raise, a DSCR squeeze, or a need to improve cash position. The pitch: 'Before you go that route, there may be an asset on your property you haven't looked at. Takes 60 seconds to check.' Do not target, qualify, or pitch based on someone's financial distress — pitch based on the unclaimed asset. The conversation is about what they're owed, not about what they need.",
  },
];

// Corrected tiers: 5%, 10%, 15% of SC's 20% fee
const TIERS = [
  { tier: "Tier 1", desc: "Getting started",   rate: "5%",  overrideRate: "2%",   networkVol: "First $2M in network volume",    ex1: "$1M recovery → SC fee $200K → your commission: $10,000", override: true },
  { tier: "Tier 2", desc: "Building momentum", rate: "10%", overrideRate: "3.5%", networkVol: "Next $10M in network volume",      ex1: "$1M recovery → SC fee $200K → your commission: $20,000", override: true },
  { tier: "Tier 3", desc: "Top affiliate",     rate: "15%", overrideRate: "5%",   networkVol: "Any amount over $12M network vol", ex1: "$1M recovery → SC fee $200K → your commission: $30,000", override: true },
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
  const [screen, setScreen]     = useState(0);
  const [objIdx, setObjIdx]     = useState(0);
  const [leadIdx, setLeadIdx]   = useState(0);
  const [copied, setCopied]     = useState(false);
  const [visible, setVisible]   = useState(true);
  const [muted, setMuted]       = useState(false);
  const [introPlaying, setIntroPlaying] = useState(false);
  const [audioPaused, setAudioPaused]   = useState(false);
  const [audioRemaining, setAudioRemaining] = useState<number | null>(null);
  const mainRef  = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const mutedRef = useRef(false);
  const loomRef  = useRef<HTMLIFrameElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
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
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(screen + 1);
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   go(screen - 1);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen]);

  // Countdown timer
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const a = audioRef.current;
      if (a && !a.paused && !isNaN(a.duration) && isFinite(a.duration)) {
        setAudioRemaining(Math.ceil(a.duration - a.currentTime));
      } else {
        setAudioRemaining(null);
      }
    }, 250);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const playAudio = useCallback((idx: number) => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ""; }
    setAudioPaused(false);
    setAudioRemaining(null);
    const src = AFFILIATE_AUDIO[idx];
    if (!src) return;
    const audio = new Audio(src);
    audio.volume = 1;
    audio.muted = mutedRef.current;
    audioRef.current = audio;
    audio.play().catch(() => {});
    if (idx === 7) {
      audio.addEventListener("ended", () => {
        const iframe = loomRef.current;
        if (iframe) {
          const base = "https://www.loom.com/embed/8aa6323281744a71b41b2a85b735151b";
          iframe.src = base + "?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&autoplay=1";
        }
      }, { once: true });
    }
  }, []);

  const go = useCallback((idx: number) => {
    if (idx < 0 || idx > LAST) return;
    setVisible(false);
    setTimeout(() => {
      setScreen(idx);
      setVisible(true);
      mainRef.current?.scrollTo({ top: 0, behavior: "smooth" });
      if (idx > 0) playAudio(idx);
      else {
        if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ""; }
        setIntroPlaying(false);
      }
    }, 190);
  }, [playAudio]);

  const copyBullets = () => {
    const text = OPENING_BULLETS.map((b, i) => `${i + 1}. ${b}`).join("\n\n");
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    mutedRef.current = next;
    if (audioRef.current) audioRef.current.muted = next;
  };

  const togglePause = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play().catch(() => {});
      setAudioPaused(false);
    } else {
      a.pause();
      setAudioPaused(true);
    }
  };

  const formatRemaining = (secs: number | null): string => {
    if (secs === null || secs <= 0) return "";
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
  };

  const pct = screen === 0 ? 0 : screen >= LAST ? 100 : Math.round((screen / (LAST - 1)) * 100);
  const showAudioControls = screen > 0 || introPlaying;
  const remaining = formatRemaining(audioRemaining);

  return (
    <div style={S.root}>
      <SEOHead
        title="Affiliate Program"
        description="Join the StormChecks affiliate program. Earn referral income by connecting commercial property owners with forensic storm damage assessments."
        canonicalPath="/affiliate"
      />
      <div style={S.gridBg} />

      <header style={S.header}>
        <Logo />
        {screen > 0 && <div style={S.progressTrack}><div style={{ ...S.progressBar, width: `${pct}%` }} /></div>}
        {screen > 0 && (
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#C99700", background: "rgba(201,151,0,0.1)", border: "1px solid rgba(201,151,0,0.25)", borderRadius: 10, padding: "3px 10px", letterSpacing: "0.08em", flexShrink: 0 }}>AFFILIATE</span>
        )}
        {screen > 0 && screen < LAST && (
          <span style={S.counter}>
            <b style={{ color: "#C99700" }}>{String(screen).padStart(2, "0")}</b>
            <span style={{ color: "#AABBCC" }}> / {String(LAST - 1).padStart(2, "0")}</span>
          </span>
        )}
        {showAudioControls && (
          <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
            {remaining && (
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#C99700", background: "rgba(201,151,0,0.1)", border: "1px solid rgba(201,151,0,0.25)", borderRadius: 6, padding: "2px 8px", letterSpacing: "0.06em" }}>
                {remaining}
              </span>
            )}
            <button
              onClick={togglePause}
              style={{ background: "rgba(201,151,0,0.1)", border: "1px solid rgba(201,151,0,0.3)", color: "#C99700", width: 30, height: 30, borderRadius: "50%", cursor: "pointer", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.2s" }}
              aria-label={audioPaused ? "Resume narration" : "Pause narration"}
            >
              {audioPaused ? "▶" : "⏸"}
            </button>
            <button onClick={toggleMute} style={S.muteBtn} aria-label={muted ? "Unmute" : "Mute"}>
              {muted ? "🔇" : "🔊"}
            </button>
          </div>
        )}
      </header>

      <main ref={mainRef} style={{ ...S.main, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(8px)" }}>
        {screen === 0 && <Welcome introPlaying={introPlaying} onStart={() => {
          if (introPlaying) { go(1); return; }
          setIntroPlaying(true);
          playAudio(0);
          const a = audioRef.current;
          if (a) a.addEventListener("ended", () => go(1), { once: true });
        }} />}
        {screen === 1 && <YourRole />}
        {screen === 2 && <OpeningApproach copied={copied} onCopy={copyBullets} />}
        {screen === 3 && <FullProcess />}
        {screen === 4 && <Commission />}
        {screen === 5 && <BestLeads idx={leadIdx} setIdx={setLeadIdx} />}
        {screen === 6 && <Objections idx={objIdx} setIdx={setObjIdx} />}
        {screen === 7 && <PortalWalkthrough loomRef={loomRef} />}
        {screen === 8 && <StartNow onBack={() => go(7)} />}
      </main>

      {/* ── Nav: ← → hug content column ── */}
      {screen > 0 && screen < LAST && (
        <>
          <button
            onClick={() => go(screen - 1)}
            style={{ ...S.sideNav, left: "max(0px, calc(50% - 370px))", borderRadius: "0 10px 10px 0" }}
            aria-label="Previous slide"
          >←</button>
          <button
            onClick={() => go(screen + 1)}
            style={{ ...S.sideNav, right: "max(0px, calc(50% - 370px))", borderRadius: "10px 0 0 10px" }}
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

function Welcome({ onStart, introPlaying }: { onStart: () => void; introPlaying: boolean }) {
  return (
    <div style={{ textAlign: "center", maxWidth: 520 }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(201,151,0,0.08)", border: "1px solid rgba(201,151,0,0.25)", borderRadius: 8, padding: "7px 16px", marginBottom: 22, fontSize: 13, color: "#7A6000" }}>
        🔊 <span>Please ensure your speakers are on</span>
      </div>
      <Pill>AFFILIATE PARTNER BRIEFING</Pill>
      <h1 style={S.h1}>You're in.<br /><Em>Here's how to get started.</Em></h1>
      <p style={{ ...S.lead, fontSize: 15, marginBottom: 8 }}>
        This takes about 4 minutes. By the end you'll know exactly what to do — and what not to do.
      </p>
      <p style={{ ...S.lead, fontSize: 13, opacity: 0.65, marginBottom: 32 }}>
        Quick recap: StormChecks is a forensic building consultancy. We find hidden storm damage on commercial properties, document it completely, and work with public adjusters to recover what owners are owed — at no cost to them.
      </p>

      {/* CTA first */}
      <button onClick={onStart} style={{ ...S.cta, marginBottom: 12, fontSize: 17, padding: "18px 48px" }}>
        {introPlaying ? "Continue →" : "Start Briefing →"}
      </button>
      {introPlaying && <p style={{ ...S.hint, color: "#C99700", marginTop: 8 }}>🔊 Playing intro…</p>}
      <p style={{ ...S.hint, marginBottom: 32 }}>
        {introPlaying ? "Listening to intro — or tap Continue to skip ahead" : "Arrow keys or tap dots to navigate · ~4 minutes"}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "left" }}>
        {[
          { icon: "💰", t: "The money is already there", d: "Owners are leaving real recovery money on the table — not because damage doesn't exist, but because no one pointed them to the right process." },
          { icon: "🏢", t: "Your best leads aren't who you think", d: "Portfolio owners and owners about to sell are your highest-conversion targets — not just properties in storm zones." },
          { icon: "📋", t: "Your job is simple", d: "Get the property address. Submit it. Follow up until the owner signs. Everything else is handled." },
        ].map(item => (
          <div key={item.t} style={{ ...S.card, display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#0B1F33", marginBottom: 3 }}>{item.t}</div>
              <div style={{ fontSize: 13, color: "#555F6D", lineHeight: 1.55 }}>{item.d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function YourRole() {
  return (
    <Wrap>
      <Tag>Your Role</Tag>
      <h2 style={S.h2}>You're the relationship.<br /><Em>StormChecks handles everything else.</Em></h2>

      {/* Phased role — not a single task */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
        {[
          { phase: "Find", t: "Identify qualified commercial property owners", detail: "10,000+ SF, any US state. Not single-family residential — ever." },
          { phase: "Open", t: "Start the conversation and get the address", detail: "Your goal in the first conversation is the address — not a full commitment. Just the address." },
          { phase: "Submit", t: "Log the property in the portal", detail: "Toggle to Affiliate Mode. Add owner contact + address. StormChecks is notified automatically." },
          { phase: "Shepherd", t: "Follow up until they sign", detail: "Use the property-specific link with the dollar estimate. Answer questions or loop in StormChecks." },
          { phase: "Collect", t: "Receive your commission on settlement", detail: "Your involvement after signing: minimal. Check in on milestones. Commission paid from SC's 20%." },
        ].map((item, i) => (
          <div key={i} style={{ ...S.card, display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 16px" }}>
            <div style={{ background: "rgba(201,151,0,0.12)", border: "1px solid rgba(201,151,0,0.3)", borderRadius: 6, padding: "3px 8px", fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: "#9B7300", fontWeight: 700, letterSpacing: "0.08em", flexShrink: 0, marginTop: 2 }}>{item.phase.toUpperCase()}</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#0B1F33", marginBottom: 3 }}>{item.t}</div>
              <div style={{ fontSize: 12, color: "#8A9AB0", lineHeight: 1.5 }}>{item.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
        <div style={{ background: "#F8F9FA", border: "1px solid #E2E6EA", borderRadius: 10, padding: "14px" }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#8A9AB0", letterSpacing: "0.1em", marginBottom: 10 }}>NOT YOUR JOB</div>
          {["Explain the engineering", "Negotiate with anyone", "Be on-site for inspections", "Manage the insurance process"].map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 7 }}>
              <span style={{ color: "#AABBCC", fontSize: 12, flexShrink: 0 }}>✗</span>
              <span style={{ fontSize: 12, color: "#8A9AB0", lineHeight: 1.45 }}>{t}</span>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(201,151,0,0.06)", border: "1px solid rgba(201,151,0,0.2)", borderRadius: 10, padding: "14px" }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#9B7300", letterSpacing: "0.1em", marginBottom: 10 }}>YOUR SUPPORT</div>
          {["StormChecks answers questions", "Field guide PDF for reference", "Property-specific dollar links", "Direct access to the SC team"].map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 7 }}>
              <span style={{ color: "#C99700", fontSize: 12, flexShrink: 0, fontWeight: 700 }}>✓</span>
              <span style={{ fontSize: 12, color: "#0B1F33", lineHeight: 1.45 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>

      <Note>
        <b style={{ color: "#9B7300" }}>When an owner asks something you can't answer:</b>{" "}
        Tell them you'll find out and follow up. Reach out to StormChecks directly — they're there to help you close. You are not alone on this.
      </Note>
    </Wrap>
  );
}

function OpeningApproach({ copied, onCopy }: { copied: boolean; onCopy: () => void }) {
  return (
    <Wrap>
      <Tag>Starting The Conversation</Tag>
      <h2 style={S.h2}>Not a script.<br /><Em>Key points to own.</Em></h2>
      <p style={{ ...S.body, marginBottom: 16, fontSize: 14 }}>
        Works for cold calls, LinkedIn, trade shows, and referrals. Your only goal in the first conversation is the property address — not a commitment, not a meeting.
      </p>
      <div style={{ background: "#FFFBEA", border: "2px solid #C99700", borderRadius: 14, padding: "22px 20px", marginBottom: 12 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#9B7300", letterSpacing: "0.12em", marginBottom: 16, fontWeight: 700 }}>KEY POINTS — FIRST CONVERSATION</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {OPENING_BULLETS.map((b, i) => (
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ background: "#C99700", color: "#fff", borderRadius: "50%", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
              <p style={{ fontSize: 14, color: "#2D3748", lineHeight: 1.7 }}>{b}</p>
            </div>
          ))}
        </div>
        <button
          onClick={onCopy}
          style={{
            marginTop: 18,
            background: copied ? "rgba(34,197,94,0.1)" : "#FFFFFF",
            border: `2px solid ${copied ? "#22C55E" : "#D1D9E0"}`,
            borderRadius: 8, padding: "8px 16px",
            fontFamily: "'JetBrains Mono',monospace", fontSize: 11,
            color: copied ? "#16A34A" : "#555F6D",
            cursor: "pointer", letterSpacing: "0.06em", transition: "all 0.2s", fontWeight: 600,
          }}
        >{copied ? "✓ COPIED TO CLIPBOARD" : "COPY BULLET POINTS"}</button>
      </div>
      <Note>
        <b style={{ color: "#9B7300" }}>The close:</b>{" "}
        "The weather analysis is completely free — takes 60 seconds. Can I get your property address so we can run it?"
      </Note>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginTop: 14 }}>
        {[["📞", "Cold Call"], ["💼", "LinkedIn DM"], ["🤝", "Trade Show / Networking"]].map(([icon, label]) => (
          <div key={label} style={S.miniCard}>
            <div style={{ fontSize: 20, marginBottom: 6 }}>{icon}</div>
            <div style={{ fontSize: 12, color: "#555F6D", fontWeight: 600 }}>{label}</div>
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
      <p style={{ ...S.body, fontSize: 13, marginBottom: 18 }}>
        <b style={{ color: "#9B7300" }}>Amber</b> = your responsibility. Gray = StormChecks. Blue = Public Adjuster.
        Settlement typically arrives ~12 months after submission. Your active involvement is the first few weeks.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {STEPS.map((step, i) => {
          const isYou = step.what === "You" || step.what === "You + SC";
          const isPA  = step.what === "PA";
          return (
            <div key={i} style={{
              borderRadius: 12, overflow: "hidden", border: "2px solid",
              background: isYou ? "#FFFBEA" : "#FFFFFF",
              borderColor: isYou ? "#C99700" : "#E2E6EA",
              boxShadow: isYou ? "0 2px 8px rgba(201,151,0,0.1)" : "0 1px 3px rgba(0,0,0,0.04)",
            }}>
              <div style={{ display: "flex" }}>
                <div style={{
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 5,
                  padding: "16px 12px 16px 16px", minWidth: 56, flexShrink: 0,
                  background: isYou ? "rgba(201,151,0,0.12)" : "#F8F9FA",
                  borderRight: `2px solid ${isYou ? "#C99700" : "#E2E6EA"}`,
                }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#9B7300", fontWeight: 700 }}>{step.n}</span>
                  <span style={{
                    fontFamily: "'JetBrains Mono',monospace", fontSize: 9, borderRadius: 4,
                    padding: "3px 6px", letterSpacing: "0.06em", fontWeight: 700,
                    color: isYou ? "#9B7300" : isPA ? "#1D4ED8" : "#374151",
                    background: isYou ? "rgba(201,151,0,0.15)" : isPA ? "rgba(59,130,246,0.1)" : "rgba(0,0,0,0.05)",
                  }}>{step.what.replace("You + SC", "YOU").toUpperCase().replace("STORMCHECKS", "SC")}</span>
                </div>
                <div style={{ padding: "16px 18px", flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: isYou ? "#7A5500" : "#0B1F33", marginBottom: 5 }}>{step.phase}</div>
                  <div style={{ fontSize: 13, color: "#555F6D", lineHeight: 1.6, marginBottom: isYou && step.action ? 8 : 0 }}>{step.detail}</div>
                  {isYou && step.action && (
                    <div style={{ display: "flex", gap: 7, alignItems: "flex-start", background: "rgba(201,151,0,0.08)", borderRadius: 8, padding: "8px 12px" }}>
                      <span style={{ fontSize: 12, color: "#C99700", flexShrink: 0, paddingTop: 1, fontWeight: 700 }}>→</span>
                      <span style={{ fontSize: 13, color: "#9B7300", lineHeight: 1.5, fontWeight: 600 }}>{step.action}</span>
                    </div>
                  )}
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#AABBCC", letterSpacing: "0.04em", marginTop: 8 }}>⏱ {step.time}</div>
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
      <h2 style={S.h2}>Commission from recovery only.<br /><Em>Three tiers. Sub-affiliate override at every tier.</Em></h2>
      <p style={{ ...S.body, marginBottom: 18 }}>
        Your commission comes from StormChecks' 20% fee — the owner always keeps 70%. No recovery means no commission for anyone.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 18 }}>
        {TIERS.map((t) => (
          <div key={t.tier} style={{
            borderRadius: 12, padding: "16px 20px",
            background: "#FFFFFF", border: "1px solid #E2E6EA",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
              <div style={{
                fontFamily: "'JetBrains Mono',monospace", fontSize: 26, fontWeight: 600,
                color: "#C99700", minWidth: 56,
              }}>{t.rate}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0B1F33", marginBottom: 2 }}>{t.tier} — {t.desc}</div>
                <div style={{ fontSize: 12, color: "#8A9AB0", fontFamily: "'JetBrains Mono',monospace" }}>{t.ex1}</div>
              </div>
            </div>
            <div style={{ background: "rgba(201,151,0,0.07)", border: "1px solid rgba(201,151,0,0.2)", borderRadius: 8, padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 12, color: "#9B7300" }}>Sub-affiliate override: <b>{t.overrideRate}</b></span>
              <span style={{ fontSize: 11, color: "#AABBCC", fontFamily: "'JetBrains Mono',monospace" }}>{t.networkVol}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Worked example */}
      <div style={{ ...S.card, padding: "16px", marginBottom: 14 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#8A9AB0", letterSpacing: "0.12em", marginBottom: 12 }}>WORKED EXAMPLE — $1M RECOVERY (TIER 3)</div>
        {[
          ["Total recovery", "$1,000,000"],
          ["StormChecks fee (20%)", "$200,000"],
          ["PA fee (10%)", "$100,000"],
          ["Owner receives (70%)", "$700,000"],
          ["Your commission (15% of SC fee)", "$30,000"],
        ].map(([k, v], i) => (
          <div key={k} style={{
            display: "flex", justifyContent: "space-between", fontSize: 14, padding: "6px 0",
            borderTop: i === 4 ? "2px solid #E2E6EA" : "none",
            marginTop: i === 4 ? 8 : 0, paddingTop: i === 4 ? 12 : 6,
          }}>
            <span style={{ color: i === 4 ? "#9B7300" : i === 0 ? "#0B1F33" : "#555F6D", fontWeight: i === 4 || i === 0 ? 700 : 400 }}>{k}</span>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", color: i === 4 ? "#C99700" : i === 0 ? "#0B1F33" : "#8A9AB0", fontWeight: i === 4 || i === 0 ? 700 : 400 }}>{v}</span>
          </div>
        ))}
      </div>

      <Note>
        <b style={{ color: "#9B7300" }}>The override explained:</b>{" "}
        When someone you recruited closes a deal, you earn an override on StormChecks' fee from that recovery. The override rate scales with your tier: 2% at Tier 1, 3.5% at Tier 2, 5% at Tier 3 — based on your Total Network Volume. The override only applies to sub-affiliate deals, not your own. You earn one or the other on any single property, never both.
      </Note>
    </Wrap>
  );
}

function BestLeads({ idx, setIdx }: { idx: number; setIdx: (i: number) => void }) {
  const l = LEADS[idx];
  return (
    <Wrap>
      <Tag>Lead Quality</Tag>
      <h2 style={S.h2}>Start with the top two.<br /><Em>They convert fastest.</Em></h2>
      <p style={{ ...S.body, marginBottom: 18, fontSize: 14 }}>Lead categories ranked by conversion rate and speed to commission.</p>
      <div style={{ background: "#FFFBEA", border: "2px solid #C99700", borderRadius: 14, padding: "22px 20px", marginBottom: 14, minHeight: 220 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
          <div style={{ background: "#C99700", color: "#fff", borderRadius: 8, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, flexShrink: 0 }}>{l.rank}</div>
          <div style={{ fontSize: 24, flexShrink: 0 }}>{l.icon}</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#0B1F33" }}>{l.type}</div>
        </div>
        <p style={{ fontSize: 14, color: "#555F6D", lineHeight: 1.7, marginBottom: 14 }}>{l.why}</p>
        <div style={{ background: "#FFFFFF", borderLeft: "3px solid #C99700", borderRadius: "0 10px 10px 0", padding: "12px 16px" }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#9B7300", letterSpacing: "0.1em", marginBottom: 7, fontWeight: 700 }}>HOW TO START THE CONVERSATION</div>
          <p style={{ fontSize: 14, color: "#0B1F33", fontStyle: "italic", lineHeight: 1.65 }}>{l.how}</p>
        </div>
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {LEADS.map((ld, i) => (
          <button key={i} onClick={() => setIdx(i)} style={{
            flex: "1 1 calc(33% - 6px)",
            background: i === idx ? "#FFFBEA" : "#FFFFFF",
            border: `2px solid ${i === idx ? "#C99700" : "#E2E6EA"}`,
            borderRadius: 10, padding: "10px 8px", cursor: "pointer", textAlign: "center", transition: "all 0.2s",
            boxShadow: i === idx ? "0 2px 8px rgba(201,151,0,0.15)" : "none",
          }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#C99700", marginBottom: 3 }}>{ld.rank}</div>
            <div style={{ fontSize: 18, marginBottom: 4 }}>{ld.icon}</div>
            <div style={{ fontSize: 11, color: i === idx ? "#9B7300" : "#8A9AB0", lineHeight: 1.3, fontWeight: i === idx ? 600 : 400 }}>{ld.type.split(" ").slice(0, 3).join(" ")}</div>
          </button>
        ))}
      </div>
    </Wrap>
  );
}

function Objections({ idx, setIdx }: { idx: number; setIdx: (i: number) => void }) {
  const o = OBJECTIONS[idx];
  return (
    <Wrap>
      <Tag>Handling Objections</Tag>
      <h2 style={S.h2}>Lead with premiums.<br /><Em>It's the #1 barrier.</Em></h2>

      {/* Premium screening questions — always visible at top */}
      <div style={{ ...S.card, marginBottom: 16, background: "#FFFBEA", border: "2px solid rgba(201,151,0,0.4)" }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#9B7300", letterSpacing: "0.12em", marginBottom: 12, fontWeight: 700 }}>4 PREMIUM SCREENING QUESTIONS — ASK THESE FIRST</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {PREMIUM_SCREENING.map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ background: "#C99700", color: "#fff", borderRadius: "50%", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#0B1F33", marginBottom: 2 }}>{s.q}</div>
                <div style={{ fontSize: 12, color: "#9B7300", lineHeight: 1.5 }}>If yes: {s.why}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Objection response card */}
      <div style={{ ...S.card, minHeight: 200, marginBottom: 14 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 14, flexWrap: "wrap" }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#0B1F33", flex: 1, lineHeight: 1.4 }}>"{o.q}"</div>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#9B7300", background: "rgba(201,151,0,0.1)", borderRadius: 5, padding: "3px 9px", flexShrink: 0, fontWeight: 700 }}>{o.tag}</span>
        </div>
        <div style={{ background: "#FFFBEA", borderLeft: "3px solid #C99700", borderRadius: "0 10px 10px 0", padding: "14px 16px" }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#9B7300", letterSpacing: "0.1em", marginBottom: 9, fontWeight: 700 }}>YOUR RESPONSE</div>
          <p style={{ fontSize: 14, color: "#2D3748", lineHeight: 1.8 }}>{o.script}</p>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
        {OBJECTIONS.map((ob, i) => (
          <button key={i} onClick={() => setIdx(i)} style={{
            flex: "1 1 calc(50% - 4px)",
            background: i === idx ? "#FFFBEA" : "#FFFFFF",
            border: `2px solid ${i === idx ? "#C99700" : "#E2E6EA"}`,
            borderRadius: 9, padding: "9px 12px", fontSize: 13, fontFamily: "'Manrope',sans-serif",
            color: i === idx ? "#9B7300" : "#555F6D", cursor: "pointer", textAlign: "left",
            lineHeight: 1.4, transition: "all 0.18s", fontWeight: i === idx ? 700 : 400,
          }}>{ob.tag}</button>
        ))}
      </div>
    </Wrap>
  );
}

function PortalWalkthrough({ loomRef }: { loomRef: React.RefObject<HTMLIFrameElement> }) {
  return (
    <Wrap>
      <Tag>The Portal</Tag>
      <h2 style={S.h2}>Watch the walkthrough video.<br /><Em>Then follow these 4 steps.</Em></h2>
      <Note>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#9B7300", letterSpacing: "0.1em", marginBottom: 12, fontWeight: 700 }}>GETTING STARTED IN THE PORTAL</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { n: "1", t: "Go to app.stormchecks.com", d: "Log in with your affiliate account credentials." },
            { n: "2", t: "Switch to Affiliate Mode", d: "Toggle at the bottom-left of the screen. This unlocks your affiliate dashboard and submission links." },
            { n: "3", t: "Submit a property owner", d: "Use the property owner link (not the sub-affiliate link) to add a lead. Enter their contact info and property address." },
            { n: "4", t: "Follow up with a property-specific link", d: "After the weather analysis runs (~1 week), share the owner's personalized link. They see a dollar amount tied to their address — much stronger than a generic invite." },
          ].map(item => (
            <div key={item.n} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ background: "#C99700", color: "#fff", borderRadius: "50%", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, flexShrink: 0, marginTop: 1 }}>{item.n}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0B1F33", marginBottom: 2 }}>{item.t}</div>
                <div style={{ fontSize: 13, color: "#555F6D", lineHeight: 1.55 }}>{item.d}</div>
              </div>
            </div>
          ))}
        </div>
      </Note>
      <p style={{ fontSize: 13, fontWeight: 700, color: "#0B1F33", marginTop: 18, marginBottom: 10 }}>👇 Watch the portal walkthrough video</p>
      <div style={{ borderRadius: 14, overflow: "hidden", marginTop: 4, background: "#000", border: "2px solid #E2E6EA", position: "relative", paddingTop: "56.25%" }}>
        <iframe
          ref={loomRef}
          src="https://www.loom.com/embed/8aa6323281744a71b41b2a85b735151b?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
          frameBorder="0"
          allowFullScreen
          allow="autoplay"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          title="StormChecks Affiliate Portal Walkthrough"
        />
      </div>
      <p style={{ fontSize: 12, color: "#8A9AB0", marginTop: 10, textAlign: "center" }}>3-minute portal walkthrough · plays after narration finishes</p>
    </Wrap>
  );
}

function StartNow({ onBack }: { onBack: () => void }) {
  return (
    <div style={{ textAlign: "center", maxWidth: 480 }}>
      <div style={{ fontSize: 42, marginBottom: 20 }}>🎯</div>
      <h2 style={{ ...S.h2, marginBottom: 12 }}>You're ready.<br /><Em>Submit your first lead.</Em></h2>
      <p style={{ ...S.lead, maxWidth: 380, margin: "0 auto 10px", fontSize: 16 }}>
        Log into the portal, toggle to Affiliate Mode, add the owner and property address, and submit. Follow up until they sign — StormChecks and the PA handle everything after.
      </p>
      <p style={{ ...S.lead, maxWidth: 380, margin: "0 auto 28px", fontSize: 14, color: "#8A9AB0" }}>
        Questions? Call or text — details below.
      </p>
      <a href="https://app.stormchecks.com" target="_blank" rel="noopener noreferrer" style={S.ctaLink}>Go to Affiliate Portal →</a>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", margin: "16px 0 28px" }}>
        <a
          href="/downloads/StormChecks_Affiliate_Reference.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#FFFFFF", border: "2px solid #E2E6EA", borderRadius: 9, padding: "9px 18px", fontSize: 14, color: "#0B1F33", textDecoration: "none", fontWeight: 600 }}
        >
          📄 Download Reference Card
        </a>
      </div>
      <div style={{ ...S.card, textAlign: "left", marginBottom: 16 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#8A9AB0", letterSpacing: "0.12em", marginBottom: 14, fontWeight: 700 }}>QUICK REFERENCE</div>
        {[
          ["Portal", "app.stormchecks.com"],
          ["Affiliate mode toggle", "Bottom-left of portal screen"],
          ["Minimum property size", "10,000+ SF commercial"],
          ["Never submit", "Single-family residential"],
          ["Tier 1 commission", "5% of SC's 20% fee"],
          ["Tier 2 commission", "10% of SC's 20% fee"],
          ["Top tier commission", "15% of SC's 20% fee"],
          ["Sub-affiliate override", "2% / 3.5% / 5% by tier"],
          ["Payout timing", "Upon owner's settlement"],
          ["Phone", "+1 801-821-2530"],
          ["Email", "info@stormchecks.com"],
        ].map(([k, v]) => (
          <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, padding: "6px 0", borderBottom: "1px solid #F0F2F5" }}>
            <span style={{ color: "#8A9AB0" }}>{k}</span>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", color: "#0B1F33", textAlign: "right", maxWidth: "55%", fontWeight: 600 }}>{v}</span>
          </div>
        ))}
      </div>
      <button
        onClick={onBack}
        style={{ background: "none", border: "2px solid #E2E6EA", borderRadius: 9, padding: "9px 20px", fontSize: 13, color: "#555F6D", cursor: "pointer", fontFamily: "'Manrope',sans-serif", fontWeight: 600 }}
      >
        ← Back to Portal Walkthrough
      </button>
    </div>
  );
}

/* ─── PRIMITIVES ────────────────────────────────────────────────────── */
function Logo() { return <img src={LOGO} alt="StormChecks" style={{ height: 30, width: "auto", flexShrink: 0 }} />; }
function Em({ children }: { children: React.ReactNode }) { return <span style={{ color: "#C99700" }}>{children}</span>; }
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(201,151,0,0.1)", border: "1px solid rgba(201,151,0,0.3)", borderRadius: 20, padding: "6px 16px", marginBottom: 20 }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C99700", display: "inline-block" }} />
      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#9B7300", letterSpacing: "0.1em", fontWeight: 700 }}>{children}</span>
    </div>
  );
}
function Wrap({ children }: { children: React.ReactNode }) { return <div style={{ width: "100%", maxWidth: 640 }}>{children}</div>; }
function Tag({ children }: { children: React.ReactNode }) { return <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#9B7300", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10, fontWeight: 700 }}>{children}</div>; }
function Note({ children }: { children: React.ReactNode }) {
  return <div style={{ background: "#FFFBEA", border: "1px solid rgba(201,151,0,0.35)", borderRadius: 10, padding: "14px 18px", fontSize: 14, color: "#555F6D", lineHeight: 1.65, marginTop: 14 }}>{children}</div>;
}

/* ─── STYLES ────────────────────────────────────────────────────────── */
const S: Record<string, React.CSSProperties> = {
  root: { minHeight: "100dvh", width: "100%", background: "#F8F9FA", display: "flex", flexDirection: "column", fontFamily: "'Manrope',sans-serif", color: "#0B1F33", position: "relative", overflowX: "hidden" },
  gridBg: { position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(11,31,51,0.03)1px,transparent 1px),linear-gradient(90deg,rgba(11,31,51,0.03)1px,transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none", zIndex: 0 },
  header: { position: "sticky", top: 0, zIndex: 20, background: "rgba(248,249,250,0.97)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", display: "flex", alignItems: "center", gap: 12, padding: "0 24px", height: 56, borderBottom: "1px solid #E2E6EA", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" },
  progressTrack: { flex: 1, height: 3, background: "#E2E6EA", borderRadius: 2, overflow: "hidden" },
  progressBar: { height: "100%", background: "#C99700", borderRadius: 2, transition: "width 0.4s ease" },
  counter: { fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.08em", flexShrink: 0, color: "#555F6D" },
  muteBtn: { background: "none", border: "none", cursor: "pointer", fontSize: 18, opacity: 0.6, flexShrink: 0, padding: "4px", lineHeight: 1, transition: "opacity 0.2s" },
  main: { flex: 1, zIndex: 1, padding: "36px 56px 90px", transition: "opacity 0.19s ease,transform 0.19s ease", display: "flex", flexDirection: "column", alignItems: "center", overflowY: "auto" },
  sideNav: { position: "fixed", top: "50%", transform: "translateY(-50%)", zIndex: 30, background: "#C99700", border: "none", color: "#fff", width: 42, height: 74, cursor: "pointer", fontSize: 18, fontFamily: "monospace", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", boxShadow: "0 2px 10px rgba(201,151,0,0.35)" },
  dotsBar: { position: "fixed", bottom: 18, left: "50%", transform: "translateX(-50%)", zIndex: 30, display: "flex", gap: 7, alignItems: "center", background: "rgba(248,249,250,0.95)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", padding: "10px 18px", borderRadius: 22, border: "1px solid #E2E6EA", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" },
  dot: { height: 7, borderRadius: 4, border: "none", cursor: "pointer", padding: 0, transition: "all 0.25s ease" },
  h1: { fontFamily: "'Manrope',sans-serif", fontSize: "clamp(30px,7vw,50px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 18, letterSpacing: "-0.02em", color: "#0B1F33" },
  h2: { fontFamily: "'Manrope',sans-serif", fontSize: "clamp(22px,5vw,34px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 14, letterSpacing: "-0.01em", color: "#0B1F33" },
  lead: { fontSize: 17, color: "#4A5568", lineHeight: 1.75, marginBottom: 12 },
  body: { fontSize: 16, color: "#555F6D", lineHeight: 1.75, marginBottom: 10 },
  hint: { fontSize: 13, color: "#AABBCC", marginTop: 16 },
  card: { background: "#FFFFFF", border: "1px solid #E2E6EA", borderRadius: 12, padding: "18px 16px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" },
  miniCard: { background: "#FFFFFF", border: "1px solid #E2E6EA", borderRadius: 10, padding: "16px 10px", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" },
  cta: { display: "inline-block", background: "#C99700", color: "#fff", border: "none", borderRadius: 10, padding: "16px 40px", fontFamily: "'Manrope',sans-serif", fontSize: 16, fontWeight: 700, cursor: "pointer", letterSpacing: "0.02em", marginBottom: 10, boxShadow: "0 2px 10px rgba(201,151,0,0.35)" },
  ctaLink: { display: "inline-block", background: "#C99700", color: "#fff", border: "none", borderRadius: 10, padding: "16px 40px", fontFamily: "'Manrope',sans-serif", fontSize: 16, fontWeight: 700, cursor: "pointer", letterSpacing: "0.02em", marginBottom: 10, textDecoration: "none", width: "100%", maxWidth: 320, textAlign: "center", boxShadow: "0 2px 10px rgba(201,151,0,0.35)" },
};
