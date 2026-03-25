import { useState, useEffect, useRef, useCallback } from "react";
/* ─── BRAND ──────────────────────────────────────────────────────────────── */
const C = {
  navy:   "#0B1F33",
  amber:  "#C99700",
  white:  "#FFFFFF",
  dim:    "rgba(255,255,255,0.42)",
  faint:  "rgba(255,255,255,0.07)",
  faint2: "rgba(255,255,255,0.12)",
  aGlow:  "rgba(201,151,0,0.14)",
  aFaint: "rgba(201,151,0,0.08)",
  aMid:   "rgba(201,151,0,0.28)",
  red:    "#EF4444",
  green:  "#22C55E",
};
/* ─── FONTS ──────────────────────────────────────────────────────────────── */
const LOGO_URL = "https://storage.googleapis.com/msgsndr/7fFIJC0GfXGlSGfKIuzi/media/6966f948415652622e320969.png";
const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Manrope:wght@300;400;500;600;700;800&display=swap');
`;
/* ─── KEYFRAMES ──────────────────────────────────────────────────────────── */
const KF = `
@keyframes fadeUp   { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
@keyframes fadeIn   { from{opacity:0} to{opacity:1} }
@keyframes spin     { to{transform:rotate(360deg)} }
@keyframes pulse    { 0%,100%{opacity:1} 50%{opacity:0.4} }
@keyframes scanline { 0%{transform:translateY(-100%)} 100%{transform:translateY(400%)} }
@keyframes countUp  { from{opacity:0;transform:scale(0.92)} to{opacity:1;transform:scale(1)} }
@keyframes blink    { 0%,100%{opacity:1} 49%{opacity:1} 50%{opacity:0} 99%{opacity:0} }
@keyframes progress { from{width:0%} to{width:100%} }
@keyframes shimmer  { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
* { box-sizing:border-box; margin:0; padding:0; }
::-webkit-scrollbar { width:3px; }
::-webkit-scrollbar-track { background:transparent; }
::-webkit-scrollbar-thumb { background:${C.aMid}; border-radius:2px; }
`;
/* ─── DEMO DATA ───────────────────────────────────────────────────────────── */
const DEMO = {
  address: "4800 N Federal Hwy, Fort Lauderdale, FL 33308",
  type:    "Retail Strip Center",
  sqft:    42000,
  storms: [
    { date:"Feb 8,  2024", type:"Severe Hailstorm",      tag:"HAIL",  sev:5, note:'1.75" hail · 52mph winds · CAT-coded event' },
    { date:"May 14, 2024", type:"Tropical Wind Event",   tag:"TROP",  sev:3, note:"68mph gusts · moisture infiltration risk" },
    { date:"Aug 3,  2024", type:"Hurricane Remnants",    tag:"HURR",  sev:4, note:"75mph sustained · CAT designation · widespread" },
    { date:"Oct 22, 2024", type:"Severe Thunderstorm",   tag:"WIND",  sev:3, note:"0.5\" hail · 61mph gusts · structural loading" },
    { date:"Jan 15, 2025", type:"Large Hailstorm",       tag:"HAIL",  sev:5, note:'2.25" hail · high density · carrier-catalogued' },
    { date:"Mar 29, 2025", type:"Wind & Rain Event",     tag:"WIND",  sev:2, note:"48mph winds · roof membrane stress" },
  ],
  low:  Math.round(42000 * 10),
  high: Math.round(42000 * 15),
  mid:  Math.round(42000 * 12.5),
};
/* ─── SCENES ─────────────────────────────────────────────────────────────── */
const SCENES = [
  {
    id: "welcome",
    section: null,
    script: null,
  },
  {
    id: "intro",
    section: "INTRODUCTION",
    label: "Welcome",
    script: `By now you're probably curious about the entire StormChecks process and how it works. This walkthrough is designed to give you the full picture — from your first property submission all the way through to receiving your check. We also have detailed portal tutorials, but this is your high-level overview of the complete process. Let's get into it.`,
  },
  {
    id: "portal",
    section: "GETTING STARTED",
    label: "The Portal",
    script: `Everything in StormChecks happens through one portal — app.stormchecks.com. Whether you're submitting a single property or an entire portfolio, managing your agreements, tracking inspection status, or monitoring your claims — it all lives there. When you're ready to get started, that's where you go.`,
  },
  {
    id: "submit",
    section: "GETTING STARTED",
    label: "Step 1 — Submit",
    script: `Your first step is simple: submit a property address. That's it. You can submit a single property or drop us an entire portfolio at once. We just need the address to begin. No policy documents, no financials, nothing else at this stage. Just the address.`,
  },
  {
    id: "lookback",
    section: "THE PROCESS",
    label: "Step 2 — 24hr Assessment",
    script: `Once you submit an address, our team runs a 24-month meteorological lookback against your property's exact coordinates. We're cross-referencing your building against every catalogued storm event in the past two years — hail, wind, tropical systems, everything. This is normally completed within 24 business hours. You'll receive a preliminary assessment showing what we found.`,
  },
  {
    id: "results",
    section: "THE PROCESS",
    label: "Assessment Results",
    script: `Here's an example of what your preliminary assessment looks like. For this Fort Lauderdale retail property — 42,000 square feet — our system identified six qualifying storm events over 24 months, including two large hailstorms and a hurricane remnant. Based on the exposure data, the estimated recoverable damage range is five hundred twenty thousand to six hundred thirty thousand dollars. This is the number that tells you whether it's worth proceeding.`,
  },
  {
    id: "qualify",
    section: "THE PROCESS",
    label: "Does It Qualify?",
    script: `Not every property will have significant exposure. But when it does, the numbers are material. Here's the quick eligibility check we run on every submission. Commercial properties only — multifamily, retail, industrial, self-storage. Ten thousand square feet minimum. We cover all fifty states. The one hard no: single-family residential homes are never eligible.`,
  },
  {
    id: "agreements",
    section: "THE PROCESS",
    label: "Step 3 — Sign",
    script: `If the preliminary assessment shows meaningful opportunity and you want to move forward, the next step is three agreements. The StormChecks agreement covers our twenty percent contingency fee. The Public Adjuster agreement covers their ten percent — they're the licensed professionals who handle the carrier negotiation. And the policy authorization lets us request your policy documents directly. You don't have to track them down yourself.`,
  },
  {
    id: "policyreview",
    section: "THE PROCESS",
    label: "Step 4 — Policy Review",
    script: `With the agreements in place and the policy in hand, our team reviews your coverage for deductibles, limits, and filing deadlines. This step matters because every policy is different. We're looking for anything that affects the recovery strategy before we send engineers to the property. You don't need to understand your policy — we do.`,
  },
  {
    id: "inspection",
    section: "THE PROCESS",
    label: "Step 5 — Forensic Inspection",
    script: `Licensed Professional Engineers come to your property and conduct the forensic inspection. This is a completely different discipline from a standard roof inspection. They're not looking for leaks. They're documenting hail fractures, membrane deformation, HVAC compression damage, cladding impacts — the kind of damage that only shows up under forensic analysis. Your only job is to arrange site access.`,
  },
  {
    id: "costs",
    section: "THE PROCESS",
    label: "We Cover All Costs",
    script: `Here's something important to understand about how StormChecks operates. We absorb every upfront cost. The meteorology report, the engineering report, the building consultant documentation — that's fifty thousand dollars or more that we put in before you see a single dollar. We do that because we're confident in the process. If we don't recover anything, you owe nothing. To anyone. Ever.`,
  },
  {
    id: "expertfile",
    section: "THE PROCESS",
    label: "Step 6 — Expert File",
    script: `The output of the forensic inspection is what we call the Expert File. This is a hundred-and-twenty-plus page forensic documentation package — timestamped photography, engineering analysis, meteorological correlation, Xactimate cost estimates formatted specifically to carrier review standards. This document is built to withstand scrutiny. It's the difference between a claim getting denied and a claim getting paid.`,
  },
  {
    id: "carrier",
    section: "THE PROCESS",
    label: "Step 7 — Insurance Review",
    script: `Once the Expert File is complete, your Public Adjuster presents it to the carrier. This is where your involvement essentially ends. The PA handles all carrier communication and negotiation. You are not in any of those conversations. You're not involved in the back-and-forth. You wait.`,
  },
  {
    id: "fees",
    section: "THE NUMBERS",
    label: "The Fee Structure",
    script: `Here's where the money goes. You keep seventy percent of the recovery. StormChecks receives twenty percent. The Public Adjuster receives ten percent. On a four-hundred-thousand dollar recovery, that means two hundred and eighty thousand dollars to you, eighty thousand to us, forty thousand to the PA. And if there's no recovery — you owe nothing to anyone.`,
  },
  {
    id: "casestudy",
    section: "CASE STUDIES",
    label: "Proof It Works",
    script: `Two real examples. In San Antonio, a retail strip center came to us after the carrier had already denied their claim at zero dollars. Our forensic file changed that. The denial was overturned and the full recovery came in at three point nine million dollars. In Denver, an industrial property owner had no idea damage existed — they'd owned the building for eight years. We documented two point four million dollars in damage they knew nothing about.`,
  },
  {
    id: "premiums",
    section: "COMMON QUESTIONS",
    label: "Premium Risk",
    script: `The number one question we get: will my premiums go up? Here's the honest answer. Most claims we file are tied to catalogued storm events — events your carrier has already priced into everyone's rates. You are paying for that storm whether you file or not. Before we proceed on any property, we ask four qualifying questions to assess the premium risk specific to your situation. If there's meaningful risk, we tell you.`,
  },
  {
    id: "affiliate_bridge",
    section: null,
    label: null,
    script: null,
  },
  {
    id: "affiliate_intro",
    section: "REFERRAL PROGRAM",
    label: "The Affiliate Side",
    script: `Many people who go through this process end up doing both — running their own properties AND referring other owners they know. The referral side is straightforward. Your job on a first conversation is one thing only: get the property address. That's the only close. Everything else is handled by us.`,
  },
  {
    id: "affiliate_open",
    section: "REFERRAL PROGRAM",
    label: "The Opening Line",
    script: `Here's the opening that works right now, during storm season: "Did you feel those storms last week? We reach out to commercial owners after weather events because damage almost never shows up in a normal walkthrough — but it adds up fast. We offer a free assessment. All we need is your property address." That's it. Get the address. Submit it through your affiliate link. We take it from there.`,
  },
  {
    id: "affiliate_commission",
    section: "REFERRAL PROGRAM",
    label: "Commission Structure",
    script: `Your commission comes out of the StormChecks fee — not out of the owner's pocket. At Tier One, zero to ten successful claims, you earn fifteen percent of our fee. Tier Two, eleven to twenty-five claims, twenty percent. Tier Three, twenty-six or more claims, twenty-five percent. At Tier Three on a four-hundred-thousand dollar recovery, your commission is twenty thousand dollars. Per property.`,
  },
  {
    id: "affiliate_targets",
    section: "REFERRAL PROGRAM",
    label: "Who to Call First",
    script: `Three categories to prioritize. First: previously denied claims. Documentation quality is almost always the issue. Our file reopens them. Second: properties listed for sale — recover before it leaves the portfolio. Third: any owner who was told by a roofer or contractor that they had no damage. We've found one point two million dollars in damage after a roofer gave a clean bill of health. Those are your warmest calls.`,
  },
  {
    id: "nextsteps",
    section: "NEXT STEPS",
    label: "Where to Go From Here",
    script: `Your next step is the portal — app.stormchecks.com. If you're submitting your own properties, log in and submit your first address. If you're in affiliate mode, toggle to the affiliate view and start submitting leads. Our team is reachable at info@stormchecks.com or eight-oh-one, eight-two-one, twenty-five-thirty. Welcome to StormChecks.`,
  },
];
/* ─── HELPERS ─────────────────────────────────────────────────────────────── */
const fmt = (n: number) => "$" + n.toLocaleString();
const mono = { fontFamily: "'JetBrains Mono', monospace" };
const disp = { fontFamily: "'Manrope', sans-serif" };
const body = { fontFamily: "'Manrope', sans-serif" };
/* ─── COMPONENT: Tag ─────────────────────────────────────────────────────── */
const Tag = ({ label, hi }: { label: string; hi?: boolean }) => (
  <span style={{
    ...mono, fontSize:9, letterSpacing:"0.1em",
    padding:"2px 7px", borderRadius:3,
    border:`1px solid ${hi ? C.aMid : C.faint2}`,
    color: hi ? C.amber : C.dim,
    background: hi ? C.aFaint : "transparent",
  }}>{label}</span>
);
/* ─── COMPONENT: SceneWrap ───────────────────────────────────────────────── */
const SceneWrap = ({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{
    flex:1, display:"flex", flexDirection:"column",
    padding:"36px 48px 28px", overflowY:"auto", ...style,
  }}>
    {children}
  </div>
);
/* ─── COMPONENT: SectionLabel ────────────────────────────────────────────── */
const SLabel = ({ text }: { text: string }) => (
  <div style={{ ...mono, fontSize:9, color:C.amber, letterSpacing:"0.18em",
    textTransform:"uppercase", marginBottom:20 }}>{text}</div>
);
/* ─── COMPONENT: Headline ────────────────────────────────────────────────── */
const H = ({ children, size=34, mb=18 }: { children: React.ReactNode; size?: number; mb?: number }) => (
  <div style={{ ...disp, fontSize:size, fontWeight:800, lineHeight:1.1,
    marginBottom:mb, color:C.white }}>{children}</div>
);
/* ─── COMPONENT: Body ────────────────────────────────────────────────────── */
const B = ({ children, dim=false, mb=0 }: { children: React.ReactNode; dim?: boolean; mb?: number }) => (
  <div style={{ ...body, fontSize:14, lineHeight:1.85,
    color: dim ? C.dim : C.white, marginBottom:mb }}>{children}</div>
);
/* ─── COMPONENT: AmberLine ───────────────────────────────────────────────── */
const AL = ({ children }: { children: React.ReactNode }) => (
  <div style={{ ...body, fontSize:14, lineHeight:1.7, color:C.amber,
    borderLeft:`2px solid ${C.amber}`, paddingLeft:16, marginTop:18 }}>
    {children}
  </div>
);
/* ─── COMPONENT: Card ────────────────────────────────────────────────────── */
const Card = ({ children, amber=false, style={} }: { children: React.ReactNode; amber?: boolean; style?: React.CSSProperties }) => (
  <div style={{
    background: amber ? C.aFaint : "rgba(255,255,255,0.035)",
    border:`1px solid ${amber ? C.aMid : C.faint}`,
    borderRadius:8, padding:"20px 22px", ...style,
  }}>{children}</div>
);
/* ─── COMPONENT: NarratorBox ─────────────────────────────────────────────── */
const NarratorBox = ({ script }: { script: string | null }) => {
  if (!script) return null;
  return (
    <div style={{
      borderTop:`1px solid ${C.faint}`,
      background:"rgba(0,0,0,0.25)",
      padding:"14px 48px",
      display:"flex", gap:16, alignItems:"flex-start",
      flexShrink:0,
    }}>
      <div style={{
        flexShrink:0, width:34, height:34, borderRadius:"50%",
        background: C.aFaint,
        border:`1px solid ${C.aMid}`,
        display:"flex", alignItems:"center", justifyContent:"center",
      }}>
        <div style={{ width:0, height:0, borderTop:"5px solid transparent", borderBottom:"5px solid transparent", borderLeft:`8px solid ${C.amber}`, marginLeft:3 }} />
      </div>
      <div style={{ flex:1 }}>
        <div style={{ ...mono, fontSize:9, color:C.amber, letterSpacing:"0.12em", marginBottom:6 }}>
          NARRATION
        </div>
        <div style={{ ...body, fontSize:13, color:C.dim, lineHeight:1.75 }}>{script}</div>
      </div>
    </div>
  );
};
/* ─── MAIN COMPONENT ─────────────────────────────────────────────────────── */
export default function GetStarted() {
  const [sceneIdx,    setSceneIdx]    = useState(0);
  const [soundOk,     setSoundOk]     = useState(false);
  const [stormCount,  setStormCount]  = useState(0);
  const [countVal,    setCountVal]    = useState(0);
  const [countDone,   setCountDone]   = useState(false);
  const [, setProgressKey] = useState(0);
  const audioCtx = useRef<AudioContext | null>(null);
  const scene = SCENES[sceneIdx];
  const contentScenes = SCENES.filter(s => s.label);
  // Storm reveal animation when entering results scene
  useEffect(() => {
    if (scene.id !== "results") return;
    setStormCount(0); setCountVal(0); setCountDone(false);
    const ts = DEMO.storms.map((_, i) =>
      setTimeout(() => setStormCount(v => Math.max(v, i+1)), i*280 + 400)
    );
    ts.push(setTimeout(() => {
      let cur = 0;
      const iv = setInterval(() => {
        cur = Math.min(cur + DEMO.mid/70, DEMO.mid);
        setCountVal(Math.round(cur));
        if (cur >= DEMO.mid) { clearInterval(iv); setCountDone(true); }
      }, 20);
    }, DEMO.storms.length*280 + 600));
    return () => ts.forEach(clearTimeout);
  }, [sceneIdx, scene.id]);
  const goTo = useCallback((idx: number) => {
    setSceneIdx(Math.max(0, Math.min(SCENES.length-1, idx)));
    setProgressKey(k => k+1);
  }, []);
  const next = useCallback(() => goTo(sceneIdx + 1), [goTo, sceneIdx]);
  const prev = useCallback(() => goTo(sceneIdx - 1), [goTo, sceneIdx]);
  // Keyboard nav
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [next, prev]);
  // Sound check
  const playTestSound = () => {
    if (!audioCtx.current) audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    const ctx = audioCtx.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = "sine"; osc.frequency.setValueAtTime(440, ctx.currentTime);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
    osc.start(); osc.stop(ctx.currentTime + 0.6);
    setSoundOk(true);
  };
  // ── SCENE: Welcome ────────────────────────────────────────────────────── //
  if (scene.id === "welcome") return (
    <>
      <style>{FONTS + KF}</style>
      <div style={{ background:C.navy, minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", padding:32, position:"relative", overflow:"hidden", ...body }}>
        {/* Ambient grid */}
        <div style={{ position:"absolute", inset:0, backgroundImage:`linear-gradient(${C.faint} 1px,transparent 1px),linear-gradient(90deg,${C.faint} 1px,transparent 1px)`, backgroundSize:"60px 60px", pointerEvents:"none" }} />
        {/* Corner marks */}
        {([[{top:20,left:20},{borderTop:`1px solid ${C.aMid}`,borderLeft:`1px solid ${C.aMid}`}],
          [{top:20,right:20},{borderTop:`1px solid ${C.aMid}`,borderRight:`1px solid ${C.aMid}`}],
          [{bottom:20,left:20},{borderBottom:`1px solid ${C.aMid}`,borderLeft:`1px solid ${C.aMid}`}],
          [{bottom:20,right:20},{borderBottom:`1px solid ${C.aMid}`,borderRight:`1px solid ${C.aMid}`}],
        ] as [React.CSSProperties, React.CSSProperties][]).map(([pos,brd],i) => (
          <div key={i} style={{ position:"absolute", width:24, height:24, ...pos, ...brd }} />
        ))}
        <div style={{ position:"relative", zIndex:1, textAlign:"center", maxWidth:520, animation:"fadeUp 0.8s ease" }}>
          {/* Logo */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", marginBottom:52 }}>
            <img src={LOGO_URL} alt="StormChecks" style={{ height:48 }} />
          </div>
          <div style={{ ...disp, fontSize:42, fontWeight:800, lineHeight:1.1, color:C.white, marginBottom:14 }}>
            Welcome to your<br/><span style={{ color:C.amber }}>onboarding briefing.</span>
          </div>
          <div style={{ ...body, fontSize:15, color:C.dim, lineHeight:1.8, marginBottom:48 }}>
            This walkthrough covers the complete StormChecks process — from your first submission through to payout, plus the referral opportunity. It takes about 12 minutes.
          </div>
          {/* Sound check */}
          <div style={{ background:C.aFaint, border:`1px solid ${C.aMid}`, borderRadius:10, padding:"28px 32px", marginBottom:28 }}>
            <div style={{ ...mono, fontSize:10, color:C.amber, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:14 }}>BEFORE WE BEGIN</div>
            <div style={{ ...body, fontSize:14, color:C.dim, marginBottom:22, lineHeight:1.7 }}>
              This briefing includes narration. Please make sure your sound is on and click the button below to confirm audio is working.
            </div>
            <button onClick={playTestSound} style={{
              background: soundOk ? "rgba(34,197,94,0.15)" : C.aFaint,
              border:`1px solid ${soundOk ? "#22C55E" : C.amber}`,
              borderRadius:6, padding:"13px 28px",
              color: soundOk ? "#22C55E" : C.amber,
              cursor:"pointer", ...mono, fontSize:11, letterSpacing:"0.12em",
              textTransform:"uppercase", transition:"all 0.3s", display:"flex", alignItems:"center", gap:10, margin:"0 auto",
            }}>
              {soundOk
                ? <><span style={{ fontSize:16 }}>✓</span> Sound confirmed — ready to proceed</>
                : <><span style={{ animation:"pulse 1.5s infinite", display:"inline-block" }}>♪</span> Test my audio</>
              }
            </button>
          </div>
          <button onClick={next} style={{
            width:"100%", background: soundOk ? C.amber : "rgba(201,151,0,0.18)",
            border:"none", borderRadius:6, padding:"18px 0",
            color: soundOk ? C.navy : "rgba(255,255,255,0.2)",
            cursor: soundOk ? "pointer" : "default",
            ...disp, fontWeight:800, fontSize:12, letterSpacing:"0.14em", textTransform:"uppercase",
            transition:"all 0.3s",
          }}>
            {soundOk ? "Begin Briefing →" : "Confirm audio first"}
          </button>
        </div>
      </div>
    </>
  );
  // ── SCENE: Affiliate Bridge ───────────────────────────────────────────── //
  if (scene.id === "affiliate_bridge") return (
    <>
      <style>{FONTS + KF}</style>
      <div style={{ background:C.navy, minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:40, textAlign:"center", ...body }}>
        <div style={{ ...mono, fontSize:10, color:C.dim, letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:28 }}>PART TWO</div>
        <div style={{ width:60, height:1, background:C.amber, margin:"0 auto 32px" }} />
        <div style={{ ...disp, fontSize:52, fontWeight:800, lineHeight:1.1, marginBottom:20, animation:"fadeUp 0.6s ease" }}>
          The Referral<br/><span style={{ color:C.amber }}>Opportunity.</span>
        </div>
        <div style={{ ...body, fontSize:16, color:C.dim, maxWidth:440, lineHeight:1.8, marginBottom:52 }}>
          Many people do both — run their own properties through the process and refer other owners they know. Here's how that side works.
        </div>
        <button onClick={next} style={{
          background:C.amber, border:"none", borderRadius:6,
          padding:"17px 48px", color:C.navy, cursor:"pointer",
          ...disp, fontWeight:800, fontSize:12, letterSpacing:"0.14em", textTransform:"uppercase",
        }}>Continue →</button>
      </div>
    </>
  );
  // ── PROGRESS BAR + NAV FRAME ──────────────────────────────────────────── //
  const contentIdx = contentScenes.findIndex(s => s.id === scene.id);
  const isAffiliate = ["affiliate_intro","affiliate_open","affiliate_commission","affiliate_targets","nextsteps"].includes(scene.id);
  return (
    <>
      <style>{FONTS + KF}</style>
      <div style={{ background:C.navy, height:"100vh", display:"flex", flexDirection:"column", ...body, color:C.white, overflow:"hidden" }}>
        {/* ── TOP BAR ── */}
        <div style={{ flexShrink:0, borderBottom:`1px solid ${C.faint}`, background:"rgba(11,31,51,0.97)", backdropFilter:"blur(8px)", padding:"0 48px", height:52, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          {/* Logo */}
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <img src={LOGO_URL} alt="StormChecks" style={{ height:28 }} />
            <span style={{ ...mono, fontSize:9, color:C.dim, letterSpacing:"0.08em", marginLeft:6 }}>/ Onboarding Briefing</span>
          </div>
          {/* Section pill */}
          {scene.section && (
            <div style={{ ...mono, fontSize:9, color: isAffiliate ? "#818cf8" : C.amber, letterSpacing:"0.14em", textTransform:"uppercase", background: isAffiliate ? "rgba(129,140,248,0.1)" : C.aFaint, border:`1px solid ${isAffiliate ? "rgba(129,140,248,0.3)" : C.aMid}`, borderRadius:20, padding:"4px 12px" }}>
              {scene.section}
            </div>
          )}
          {/* Scene counter */}
          <div style={{ ...mono, fontSize:10, color:C.dim }}>
            <span style={{ color:C.white, fontWeight:500 }}>{String(contentIdx + 1).padStart(2,"0")}</span>
            <span style={{ margin:"0 4px" }}>/</span>
            {String(contentScenes.length).padStart(2,"0")}
          </div>
        </div>
        {/* ── PROGRESS STRIP ── */}
        <div style={{ flexShrink:0, height:2, background:C.faint, position:"relative" }}>
          <div style={{
            position:"absolute", left:0, top:0, height:"100%",
            width:`${((contentIdx + 1) / contentScenes.length) * 100}%`,
            background:C.amber, transition:"width 0.5s ease",
          }} />
        </div>
        {/* ── SCENE CONTENT ── */}
        <div style={{ flex:1, overflow:"hidden", display:"flex", flexDirection:"column" }}>
          <SceneContent scene={scene} stormCount={stormCount} countVal={countVal} countDone={countDone} />
        </div>
        {/* ── NARRATOR BOX ── */}
        <NarratorBox script={scene.script} />
        {/* ── BOTTOM NAV ── */}
        <div style={{ flexShrink:0, borderTop:`1px solid ${C.faint}`, padding:"14px 48px", display:"flex", alignItems:"center", justifyContent:"space-between", background:"rgba(11,31,51,0.97)" }}>
          {/* Dot nav */}
          <div style={{ display:"flex", gap:6, flexWrap:"wrap", maxWidth:320 }}>
            {contentScenes.map((s, i) => {
              const active = s.id === scene.id;
              const done   = i < contentIdx;
              const aff    = ["affiliate_intro","affiliate_open","affiliate_commission","affiliate_targets","nextsteps"].includes(s.id);
              return (
                <button key={s.id} onClick={() => goTo(SCENES.findIndex(sc => sc.id === s.id))} title={s.label!} style={{
                  width: active ? 20 : 7, height:7, borderRadius:4,
                  background: active ? (aff ? "#818cf8" : C.amber) : done ? "rgba(201,151,0,0.35)" : C.faint2,
                  border:"none", cursor:"pointer", transition:"all 0.25s", padding:0,
                }} />
              );
            })}
          </div>
          {/* Nav buttons */}
          <div style={{ display:"flex", gap:10, alignItems:"center" }}>
            <button onClick={prev} disabled={sceneIdx <= 1} style={{
              background:"transparent", border:`1px solid ${C.faint2}`, borderRadius:5,
              padding:"9px 18px", color: sceneIdx <= 1 ? "rgba(255,255,255,0.15)" : C.dim,
              cursor: sceneIdx <= 1 ? "default" : "pointer", ...mono, fontSize:10, letterSpacing:"0.08em",
            }}>← PREV</button>
            {sceneIdx < SCENES.length - 1
              ? <button onClick={next} style={{
                  background:C.amber, border:"none", borderRadius:5,
                  padding:"9px 22px", color:C.navy, cursor:"pointer",
                  ...disp, fontWeight:800, fontSize:10, letterSpacing:"0.12em", textTransform:"uppercase",
                }}>NEXT →</button>
              : <a href="https://app.stormchecks.com" target="_blank" rel="noreferrer" style={{
                  background:C.amber, border:"none", borderRadius:5,
                  padding:"9px 22px", color:C.navy, cursor:"pointer",
                  ...disp, fontWeight:800, fontSize:10, letterSpacing:"0.12em", textTransform:"uppercase",
                  textDecoration:"none", display:"inline-block",
                }}>GO TO PORTAL →</a>
            }
          </div>
        </div>
      </div>
    </>
  );
}
/* ─── SCENE CONTENT ROUTER ────────────────────────────────────────────────── */
function SceneContent({ scene, stormCount, countVal, countDone }: { scene: typeof SCENES[number]; stormCount: number; countVal: number; countDone: boolean }) {
  const C2 = C;
  switch (scene.id) {
    /* INTRO */
    case "intro": return (
      <SceneWrap>
        <SLabel text={scene.section!} />
        <H size={40}>The complete<br/><span style={{ color:C2.amber }}>StormChecks walkthrough.</span></H>
        <B dim mb={24}>By now you're probably curious about the entire process and how it works. This briefing covers everything — from your first property submission all the way through to receiving your check.</B>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginTop:8 }}>
          {[
            { n:"01", label:"Property Owner Path", note:"Submit → Assess → Inspect → Recover" },
            { n:"02", label:"The Portal",          note:"app.stormchecks.com — everything lives here" },
            { n:"03", label:"The Numbers",         note:"Fees, recovery estimates, case studies" },
            { n:"04", label:"Referral Side",        note:"Affiliate process and commission structure" },
          ].map(c => (
            <div key={c.n} style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${C2.faint}`, borderRadius:8, padding:"18px 20px", display:"flex", gap:14, animation:"fadeUp 0.5s ease" }}>
              <div style={{ ...mono, fontSize:11, color:C2.amber, flexShrink:0, marginTop:1 }}>{c.n}</div>
              <div>
                <div style={{ fontSize:14, fontWeight:600, marginBottom:5 }}>{c.label}</div>
                <div style={{ fontSize:12, color:C2.dim, lineHeight:1.6 }}>{c.note}</div>
              </div>
            </div>
          ))}
        </div>
      </SceneWrap>
    );
    /* PORTAL */
    case "portal": return (
      <SceneWrap>
        <SLabel text={scene.section!} />
        <H>Everything happens<br/><span style={{ color:C2.amber }}>in one place.</span></H>
        <Card amber style={{ marginBottom:24, textAlign:"center", padding:"32px 24px" }}>
          <div style={{ ...mono, fontSize:13, color:C2.dim, letterSpacing:"0.06em", marginBottom:8 }}>YOUR PORTAL</div>
          <div style={{ ...disp, fontSize:36, fontWeight:800, color:C2.amber, letterSpacing:"-0.01em" }}>app.stormchecks.com</div>
          <div style={{ fontSize:13, color:C2.dim, marginTop:12 }}>Log in here to submit properties, track status, and manage everything</div>
        </Card>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:10 }}>
          {["Submit properties","Track assessment status","Sign agreements","Review inspection updates","Monitor claim progress","Affiliate submissions"].map(f => (
            <div key={f} style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${C2.faint}`, borderRadius:6, padding:"13px 15px", fontSize:12, color:C2.dim, display:"flex", alignItems:"center", gap:9 }}>
              <div style={{ width:5, height:5, borderRadius:"50%", background:C2.amber, flexShrink:0 }} />
              {f}
            </div>
          ))}
        </div>
      </SceneWrap>
    );
    /* SUBMIT */
    case "submit": return (
      <SceneWrap>
        <SLabel text={scene.section!} />
        <H><span style={{ color:C2.amber }}>Step 01</span> — Submit</H>
        <div style={{ display:"flex", gap:24, alignItems:"flex-start" }}>
          <div style={{ flex:1 }}>
            <B dim mb={20}>Submit a property address. That's all we need to start. Single property or entire portfolio — both work the same way through the portal.</B>
            <Card amber>
              <div style={{ ...mono, fontSize:9, color:C2.amber, letterSpacing:"0.14em", marginBottom:12 }}>DEMO PROPERTY</div>
              <div style={{ fontSize:15, fontWeight:600, marginBottom:6 }}>{DEMO.address}</div>
              <div style={{ fontSize:12, color:C2.dim }}>{DEMO.type} · {DEMO.sqft.toLocaleString()} SF</div>
            </Card>
            <AL>Your only job on the first step: provide the address. No policy documents. No financials. Just the address.</AL>
          </div>
          <div style={{ width:180, flexShrink:0 }}>
            <div style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${C2.faint}`, borderRadius:8, padding:"16px" }}>
              <div style={{ ...mono, fontSize:9, color:C2.dim, letterSpacing:"0.12em", marginBottom:14 }}>QUALIFIES IF:</div>
              {[["✓","Commercial property",true],["✓","10,000+ square feet",true],["✓","All 50 states",true],["✗","Single-family homes",false]].map(([ic,txt,ok]) => (
                <div key={txt as string} style={{ display:"flex", gap:8, alignItems:"center", marginBottom:10 }}>
                  <span style={{ fontSize:11, color: ok ? C2.green : C2.red, flexShrink:0 }}>{ic as string}</span>
                  <span style={{ fontSize:11, color: ok ? C2.white : C2.dim }}>{txt as string}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SceneWrap>
    );
    /* LOOKBACK */
    case "lookback": return (
      <SceneWrap>
        <SLabel text={scene.section!} />
        <H><span style={{ color:C2.amber }}>Step 02</span> — 24hr Assessment</H>
        <B dim mb={28}>Once you submit, our team runs a 24-month meteorological lookback against your property's exact coordinates — cross-referencing every catalogued storm event. Completed within 24 business hours.</B>
        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          {[
            { n:"01", label:"Coordinate matching",    note:"Property pinned to NWS grid system" },
            { n:"02", label:"Storm history overlay",  note:"24 months of catalogued event data" },
            { n:"03", label:"CAT event correlation",  note:"Carrier-catalogued events matched to your coordinates" },
            { n:"04", label:"Damage exposure model",  note:"Preliminary recovery range calculated" },
            { n:"05", label:"Report delivered",       note:"You receive results within 24 business hours" },
          ].map(s => (
            <div key={s.n} style={{ display:"flex", gap:16, alignItems:"center", background:"rgba(255,255,255,0.025)", border:`1px solid ${C2.faint}`, borderRadius:6, padding:"13px 18px" }}>
              <div style={{ ...mono, fontSize:11, color:C2.amber, width:24, flexShrink:0 }}>{s.n}</div>
              <div style={{ flex:1, fontSize:13, fontWeight:500 }}>{s.label}</div>
              <div style={{ fontSize:12, color:C2.dim }}>{s.note}</div>
            </div>
          ))}
        </div>
      </SceneWrap>
    );
    /* RESULTS */
    case "results": return (
      <SceneWrap>
        <SLabel text={scene.section!} />
        <div style={{ display:"flex", gap:28 }}>
          {/* Left: storms */}
          <div style={{ flex:1 }}>
            <div style={{ ...mono, fontSize:9, color:C2.dim, letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:16 }}>
              QUALIFYING EVENTS — {DEMO.address.split(",")[0]}
            </div>
            {DEMO.storms.map((st, i) => {
              const vis = i < stormCount;
              return (
                <div key={i} style={{ display:"flex", gap:14, marginBottom:12, opacity:vis?1:0, transform:vis?"translateY(0)":"translateY(8px)", transition:`all 0.35s ease ${i*0.04}s` }}>
                  <div style={{ width:22, height:22, borderRadius:"50%", border:`1.5px solid ${st.sev>=4?C2.amber:C2.faint2}`, background:st.sev>=4?C2.aFaint:"transparent", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, zIndex:1 }}>
                    <div style={{ width:5, height:5, borderRadius:"50%", background:st.sev>=4?C2.amber:"rgba(255,255,255,0.3)" }} />
                  </div>
                  <div style={{ flex:1, borderBottom:`1px solid ${C2.faint}`, paddingBottom:10 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:7, marginBottom:4, flexWrap:"wrap" }}>
                      <span style={{ fontSize:13, fontWeight:500 }}>{st.type}</span>
                      <Tag label={st.tag} hi={st.sev>=4} />
                      {st.sev>=4 && <Tag label="HIGH SEVERITY" hi />}
                    </div>
                    <div style={{ fontSize:11, color:C2.dim }}>{st.note}</div>
                  </div>
                  <div style={{ ...mono, fontSize:9, color:"rgba(255,255,255,0.22)", flexShrink:0, paddingTop:3 }}>{st.date}</div>
                </div>
              );
            })}
          </div>
          {/* Right: estimate */}
          <div style={{ width:200, flexShrink:0 }}>
            <Card amber style={{ textAlign:"center", padding:"28px 20px" }}>
              <div style={{ ...mono, fontSize:9, color:C2.amber, letterSpacing:"0.14em", marginBottom:16 }}>EST. RECOVERY</div>
              <div style={{ ...disp, fontSize:38, fontWeight:800, color:C2.amber, lineHeight:1, marginBottom:10, animation: countVal > 0 ? "countUp 0.3s ease" : "none" }}>
                {countVal > 0 ? fmt(countVal) : "—"}
              </div>
              {countDone && (
                <div style={{ ...mono, fontSize:10, color:C2.dim, lineHeight:1.7, animation:"fadeIn 0.4s ease" }}>
                  Range:<br/>{fmt(DEMO.low)} – {fmt(DEMO.high)}<br/><br/>Based on<br/>$10–$15/SF
                </div>
              )}
            </Card>
          </div>
        </div>
      </SceneWrap>
    );
    /* QUALIFY */
    case "qualify": return (
      <SceneWrap>
        <SLabel text={scene.section!} />
        <H>Does your property<br/><span style={{ color:C2.amber }}>qualify?</span></H>
        <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:24 }}>
          {[
            { ok:true,  icon:"✓", text:"Commercial property — multifamily, retail, industrial, self-storage", note:"All asset classes welcome" },
            { ok:true,  icon:"✓", text:"10,000+ square feet minimum",                                          note:"Larger footprint = larger recovery potential" },
            { ok:true,  icon:"✓", text:"All 50 states — nationwide coverage",                                  note:"No geographic limitations" },
            { ok:false, icon:"✗", text:"Single-family residential homes",                                      note:"Not eligible. Ever." },
          ].map(q => (
            <div key={q.text} style={{ display:"flex", gap:16, alignItems:"center", background: q.ok ? "rgba(34,197,94,0.05)" : "rgba(239,68,68,0.05)", border:`1px solid ${q.ok ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)"}`, borderRadius:7, padding:"16px 20px" }}>
              <span style={{ fontSize:20, color:q.ok?C2.green:C2.red, flexShrink:0, fontWeight:700 }}>{q.icon}</span>
              <div style={{ flex:1, fontSize:14 }}>{q.text}</div>
              <div style={{ ...mono, fontSize:10, color:C2.dim, flexShrink:0 }}>{q.note}</div>
            </div>
          ))}
        </div>
      </SceneWrap>
    );
    /* AGREEMENTS */
    case "agreements": return (
      <SceneWrap>
        <SLabel text={scene.section!} />
        <H><span style={{ color:C2.amber }}>Step 03</span> — Sign 3 Agreements</H>
        <B dim mb={24}>If the preliminary shows meaningful opportunity and you want to move forward, three contingency-based agreements are required. All fees are on recovery only — nothing upfront.</B>
        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          {[
            { icon:"📋", label:"StormChecks Agreement",    fee:"20% on recovery only",        note:"Our forensic documentation fee" },
            { icon:"⚖️",  label:"Public Adjuster Agreement", fee:"10% on recovery only",        note:"PA handles all carrier negotiation" },
            { icon:"🔑",  label:"Policy Authorization",     fee:"No fee — access only",        note:"We request policy docs directly — no work for you" },
          ].map(a => (
            <Card key={a.label} amber>
              <div style={{ display:"flex", gap:16, alignItems:"center" }}>
                <span style={{ fontSize:22 }}>{a.icon}</span>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:14, fontWeight:600, marginBottom:3 }}>{a.label}</div>
                  <div style={{ fontSize:12, color:C2.dim }}>{a.note}</div>
                </div>
                <div style={{ ...mono, fontSize:11, color:C2.amber, flexShrink:0 }}>{a.fee}</div>
              </div>
            </Card>
          ))}
        </div>
      </SceneWrap>
    );
    /* POLICY REVIEW */
    case "policyreview": return (
      <SceneWrap>
        <SLabel text={scene.section!} />
        <H><span style={{ color:C2.amber }}>Step 04</span> — Policy Review</H>
        <B dim mb={24}>With agreements in place, our team reviews your insurance policy. You don't need to understand your policy — we do. This step determines the recovery strategy before engineers go to the property.</B>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
          {[["Deductibles","What you're responsible for before coverage kicks in"],["Coverage limits","Maximum recoverable amount under the policy"],["Filing deadlines","State-specific windows that cannot be missed"],["Policy structure","Blanket vs. individual — affects strategy significantly"]].map(([k,v]) => (
            <Card key={k}>
              <div style={{ fontSize:13, fontWeight:600, color:C2.amber, marginBottom:6 }}>{k}</div>
              <div style={{ fontSize:12, color:C2.dim, lineHeight:1.6 }}>{v}</div>
            </Card>
          ))}
        </div>
        <AL>Your only job: arrange site access for the inspection. We handle everything else.</AL>
      </SceneWrap>
    );
    /* INSPECTION */
    case "inspection": return (
      <SceneWrap>
        <SLabel text={scene.section!} />
        <H><span style={{ color:C2.amber }}>Step 05</span> — Forensic Inspection</H>
        <B dim mb={24}>Licensed Professional Engineers conduct the on-site inspection. This is not a standard roof check — it's forensic analysis.</B>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:20 }}>
          {[
            ["Standard Inspection","Looking for active leaks","Visual walkthrough","General condition notes","Misses forensic damage"],
            ["StormChecks Forensic","Hail fracture analysis","Membrane deformation mapping","HVAC compression damage","Carrier-standard evidence file"],
          ].map((col, ci) => (
            <div key={ci} style={{ background: ci===1 ? C2.aFaint : "rgba(255,255,255,0.02)", border:`1px solid ${ci===1 ? C2.aMid : C2.faint}`, borderRadius:8, padding:"18px 20px" }}>
              <div style={{ fontSize:13, fontWeight:700, color: ci===1 ? C2.amber : C2.dim, marginBottom:14 }}>{col[0]}</div>
              {col.slice(1).map(item => (
                <div key={item} style={{ display:"flex", gap:8, alignItems:"center", marginBottom:9 }}>
                  <div style={{ width:4, height:4, borderRadius:"50%", background: ci===1 ? C2.amber : "rgba(255,255,255,0.2)", flexShrink:0 }} />
                  <span style={{ fontSize:12, color: ci===1 ? C2.white : C2.dim }}>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <AL>We found $1.2M in damage after a roofer gave a property a clean bill of health.</AL>
      </SceneWrap>
    );
    /* COSTS */
    case "costs": return (
      <SceneWrap>
        <SLabel text={scene.section!} />
        <H>We cover <span style={{ color:C2.amber }}>all upfront costs.</span></H>
        <B dim mb={28}>Before you see a single dollar, we're putting serious money into your file. This is why you can trust the process — when we invest this much upfront, it's not a sales pitch. It's a signal.</B>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12, marginBottom:24 }}>
          {[
            { label:"Meteorology Report", range:"$1k – $3k",   note:"Coordinate analysis & storm data" },
            { label:"Engineering Report", range:"$4k – $50k",  note:"PE-led forensic inspection & file" },
            { label:"Building Consultant",range:"$3k – $50k",  note:"Documentation & Xactimate estimates" },
          ].map(c => (
            <Card key={c.label} amber style={{ textAlign:"center", padding:"24px 16px" }}>
              <div style={{ ...mono, fontSize:9, color:C2.dim, letterSpacing:"0.1em", marginBottom:10 }}>{c.label.toUpperCase()}</div>
              <div style={{ ...disp, fontSize:22, fontWeight:800, color:C2.amber, marginBottom:8 }}>{c.range}</div>
              <div style={{ fontSize:11, color:C2.dim, lineHeight:1.6 }}>{c.note}</div>
            </Card>
          ))}
        </div>
        <div style={{ textAlign:"center", padding:"20px 0" }}>
          <div style={{ ...mono, fontSize:11, color:C2.dim, marginBottom:8 }}>TOTAL UPFRONT INVESTMENT</div>
          <div style={{ ...disp, fontSize:48, fontWeight:800, color:C2.amber }}>$50,000+</div>
          <div style={{ fontSize:13, color:C2.dim, marginTop:8 }}>Covered by StormChecks. You pay nothing until you recover.</div>
        </div>
      </SceneWrap>
    );
    /* EXPERT FILE */
    case "expertfile": return (
      <SceneWrap>
        <SLabel text={scene.section!} />
        <H><span style={{ color:C2.amber }}>Step 06</span> — The Expert File</H>
        <B dim mb={24}>The forensic inspection produces the Expert File — a carrier-standard documentation package built specifically to withstand scrutiny and secure approval.</B>
        <Card amber style={{ marginBottom:20 }}>
          <div style={{ display:"flex", gap:20, alignItems:"center" }}>
            <div style={{ ...disp, fontSize:48, fontWeight:800, color:C2.amber, lineHeight:1 }}>120+</div>
            <div>
              <div style={{ fontSize:15, fontWeight:600, marginBottom:4 }}>pages of forensic documentation</div>
              <div style={{ fontSize:13, color:C2.dim }}>Built to carrier review standards</div>
            </div>
          </div>
        </Card>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
          {["Timestamped photography grid","Engineering structural analysis","Meteorological storm correlation","Xactimate cost estimates","Causation narrative","Executive summary for carrier"].map(item => (
            <div key={item} style={{ display:"flex", gap:10, alignItems:"center", fontSize:12, color:C2.dim, background:"rgba(255,255,255,0.02)", border:`1px solid ${C2.faint}`, borderRadius:5, padding:"10px 14px" }}>
              <div style={{ width:5, height:5, borderRadius:"50%", background:C2.amber, flexShrink:0 }} />
              {item}
            </div>
          ))}
        </div>
      </SceneWrap>
    );
    /* CARRIER */
    case "carrier": return (
      <SceneWrap>
        <SLabel text={scene.section!} />
        <H><span style={{ color:C2.amber }}>Step 07</span> — Insurance Review</H>
        <B dim mb={28}>Your Public Adjuster presents the Expert File to the carrier. This is where your involvement ends.</B>
        <div style={{ display:"flex", flexDirection:"column", gap:14, marginBottom:24 }}>
          {[
            { who:"Public Adjuster", does:"Presents Expert File to carrier · handles all negotiation · responds to all requests", you:false },
            { who:"StormChecks",     does:"Available to support PA with additional documentation if needed",                        you:false },
            { who:"You",            does:"Wait. That's it.",                                                                       you:true  },
          ].map(r => (
            <div key={r.who} style={{ display:"flex", gap:16, background: r.you ? C2.aFaint : "rgba(255,255,255,0.025)", border:`1px solid ${r.you ? C2.aMid : C2.faint}`, borderRadius:7, padding:"16px 20px", alignItems:"center" }}>
              <div style={{ ...mono, fontSize:11, color: r.you ? C2.amber : C2.dim, width:120, flexShrink:0 }}>{r.who.toUpperCase()}</div>
              <div style={{ fontSize:13, color: r.you ? C2.white : C2.dim, lineHeight:1.6 }}>{r.does}</div>
            </div>
          ))}
        </div>
        <AL>You are not in any carrier conversations. You're not involved in the back-and-forth. You wait for the outcome.</AL>
      </SceneWrap>
    );
    /* FEES */
    case "fees": return (
      <SceneWrap>
        <SLabel text={scene.section!} />
        <H>Here's where the<br/><span style={{ color:C2.amber }}>money goes.</span></H>
        <div style={{ display:"flex", flexDirection:"column", gap:14, marginBottom:28 }}>
          {[
            { pct:70, label:"You keep",         color:C2.white, barBg:"rgba(255,255,255,0.25)", h:24 },
            { pct:20, label:"StormChecks fee",  color:C2.amber, barBg:C2.aMid,                  h:14 },
            { pct:10, label:"Public Adjuster",  color:C2.dim,   barBg:"rgba(255,255,255,0.1)",  h:9  },
          ].map(f => (
            <div key={f.label} style={{ display:"flex", alignItems:"center", gap:18 }}>
              <div style={{ ...mono, fontSize:13, color:f.color, width:48, textAlign:"right", flexShrink:0 }}>{f.pct}%</div>
              <div style={{ flex:1, height:f.h, background:"rgba(255,255,255,0.05)", borderRadius:3 }}>
                <div style={{ width:`${f.pct}%`, height:"100%", background:f.barBg, borderRadius:3 }} />
              </div>
              <div style={{ fontSize:13, color:f.color, width:140, flexShrink:0 }}>{f.label}</div>
            </div>
          ))}
        </div>
        <Card style={{ marginBottom:16 }}>
          <div style={{ ...mono, fontSize:9, color:C2.dim, letterSpacing:"0.12em", marginBottom:14 }}>EXAMPLE — $400,000 RECOVERY</div>
          {[["You receive (70%)",fmt(280000),true],["StormChecks (20%)",fmt(80000),false],["Public Adjuster (10%)",fmt(40000),false]].map(([l,v,hi]) => (
            <div key={l as string} style={{ display:"flex", justifyContent:"space-between", padding:"8px 0", borderBottom:`1px solid ${C2.faint}` }}>
              <span style={{ fontSize:13, color:hi?C2.white:C2.dim }}>{l as string}</span>
              <span style={{ ...mono, fontSize:13, color:hi?C2.amber:C2.dim }}>{v as string}</span>
            </div>
          ))}
        </Card>
        <div style={{ textAlign:"center", padding:"18px", background:"rgba(239,68,68,0.05)", border:"1px solid rgba(239,68,68,0.15)", borderRadius:8 }}>
          <div style={{ fontSize:14, color:C2.dim, marginBottom:6 }}>If you don't recover —</div>
          <div style={{ ...disp, fontSize:28, fontWeight:800, color:C2.white }}>you owe nothing.</div>
          <div style={{ ...mono, fontSize:9, color:C2.dim, letterSpacing:"0.15em", marginTop:6 }}>TO ANYONE. EVER.</div>
        </div>
      </SceneWrap>
    );
    /* CASE STUDY */
    case "casestudy": return (
      <SceneWrap>
        <SLabel text={scene.section!} />
        <H>Real results.</H>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
          {[
            { city:"San Antonio, TX", type:"Retail Strip Center", sf:"42,000 SF", before:"$0 — Carrier denial on file", after:"$3,900,000", note:"Denial overturned. Documentation changes everything." },
            { city:"Denver, CO",      type:"Industrial / Warehouse", sf:"120,000 SF", before:"$0 — Owner unaware", after:"$2,400,000", note:"8 years of ownership. Had no idea any of it was there." },
          ].map(cs => (
            <Card key={cs.city} amber style={{ padding:"24px 22px" }}>
              <div style={{ ...mono, fontSize:9, color:C2.amber, letterSpacing:"0.12em", marginBottom:12 }}>{cs.city.toUpperCase()}</div>
              <div style={{ fontSize:13, fontWeight:600, marginBottom:3 }}>{cs.type}</div>
              <div style={{ fontSize:11, color:C2.dim, marginBottom:20 }}>{cs.sf}</div>
              <div style={{ marginBottom:12 }}>
                <div style={{ fontSize:11, color:C2.dim, marginBottom:4 }}>Starting point</div>
                <div style={{ fontSize:14, color:C2.red, textDecoration:"line-through" }}>{cs.before}</div>
              </div>
              <div style={{ marginBottom:16 }}>
                <div style={{ fontSize:11, color:C2.dim, marginBottom:4 }}>Recovery</div>
                <div style={{ ...disp, fontSize:32, fontWeight:800, color:C2.amber }}>{cs.after}</div>
              </div>
              <div style={{ fontSize:12, color:C2.dim, fontStyle:"italic", lineHeight:1.6 }}>"{cs.note}"</div>
            </Card>
          ))}
        </div>
      </SceneWrap>
    );
    /* PREMIUMS */
    case "premiums": return (
      <SceneWrap>
        <SLabel text={scene.section!} />
        <H>The premium<br/><span style={{ color:C2.amber }}>question.</span></H>
        <div style={{ fontSize:22, color:C2.amber, fontStyle:"italic", marginBottom:24, lineHeight:1.5 }}>"Will my premiums go up if I file?"</div>
        <B dim mb={20}>Most claims tie to catalogued storm events your carrier has already priced in. You're paying for that storm whether you file or not. But before proceeding on any property, we ask four questions to assess your specific situation:</B>
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {[
            ["01","Has this property already been sold?",     "Lowest risk — claim against prior policy"],
            ["02","Is this property about to be sold?",       "Good candidate — recover before it leaves"],
            ["03","Different carrier at time of the storm?",  "Green light — no current relationship at risk"],
            ["04","On a master or blanket policy?",           "Flag for us — affects the filing strategy"],
          ].map(([n,q,note]) => (
            <div key={n} style={{ display:"flex", gap:14, background:"rgba(255,255,255,0.025)", border:`1px solid ${C2.faint}`, borderRadius:7, padding:"14px 18px" }}>
              <div style={{ ...mono, fontSize:11, color:C2.amber, width:24, flexShrink:0 }}>{n}</div>
              <div style={{ flex:1, fontSize:13 }}>{q}</div>
              <div style={{ fontSize:11, color:C2.dim, flexShrink:0, maxWidth:220, textAlign:"right" }}>{note}</div>
            </div>
          ))}
        </div>
      </SceneWrap>
    );
    /* AFFILIATE INTRO */
    case "affiliate_intro": return (
      <SceneWrap>
        <SLabel text={scene.section!} />
        <H>Many people<br/><span style={{ color:"#818cf8" }}>do both.</span></H>
        <B dim mb={24}>Run their own properties through the process — and refer other owners they know. The referral side pays well and requires almost no time once you understand it.</B>
        <Card style={{ background:"rgba(129,140,248,0.08)", border:"1px solid rgba(129,140,248,0.25)" }}>
          <div style={{ fontSize:15, fontWeight:600, marginBottom:12 }}>Your only job on a first conversation:</div>
          <div style={{ ...disp, fontSize:36, fontWeight:800, color:"#818cf8", lineHeight:1.1 }}>Get the property address.</div>
          <div style={{ fontSize:13, color:C2.dim, marginTop:14, lineHeight:1.7 }}>That is the only close. Submit it through your affiliate link. We run the assessment, handle the inspection, manage the claim. You receive a commission check when the owner gets paid.</div>
        </Card>
      </SceneWrap>
    );
    /* AFFILIATE OPENING */
    case "affiliate_open": return (
      <SceneWrap>
        <SLabel text={scene.section!} />
        <H>The opening<br/><span style={{ color:C2.amber }}>that works.</span></H>
        <div style={{ background:"rgba(201,151,0,0.07)", border:`1px solid ${C2.aMid}`, borderRadius:10, padding:"30px 28px", marginBottom:24 }}>
          <div style={{ ...mono, fontSize:9, color:C2.amber, letterSpacing:"0.14em", marginBottom:16 }}>STORM SEASON OPENING LINE</div>
          <div style={{ fontSize:17, lineHeight:1.85, color:C2.white }}>
            "Did you feel those storms last week? We reach out to commercial owners after weather events because <span style={{ color:C2.amber }}>damage almost never shows up in a normal walkthrough</span> — but it adds up fast. We offer a free assessment. <span style={{ color:C2.amber }}>All we need is your property address.</span>"
          </div>
        </div>
        <AL>Get the address. Submit via your affiliate link. That's your entire job on the call.</AL>
      </SceneWrap>
    );
    /* AFFILIATE COMMISSION */
    case "affiliate_commission": return (
      <SceneWrap>
        <SLabel text={scene.section!} />
        <H>Commission<br/><span style={{ color:C2.amber }}>structure.</span></H>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12, marginBottom:24 }}>
          {[
            { tier:"Tier 1", claims:"0–10 claims",   pct:"15%", note:"of StormChecks fee" },
            { tier:"Tier 2", claims:"11–25 claims",  pct:"20%", note:"of StormChecks fee" },
            { tier:"Tier 3", claims:"26+ claims",    pct:"25%", note:"of StormChecks fee", hi:true },
          ].map(t => (
            <div key={t.tier} style={{ background: t.hi ? C2.aFaint : "rgba(255,255,255,0.025)", border:`1px solid ${t.hi ? C2.aMid : C2.faint}`, borderRadius:8, padding:"20px 18px", textAlign:"center" }}>
              <div style={{ ...mono, fontSize:9, color:C2.dim, letterSpacing:"0.12em", marginBottom:10 }}>{t.tier.toUpperCase()}</div>
              <div style={{ fontSize:11, color:C2.dim, marginBottom:12 }}>{t.claims}</div>
              <div style={{ ...disp, fontSize:36, fontWeight:800, color: t.hi ? C2.amber : C2.white, marginBottom:6 }}>{t.pct}</div>
              <div style={{ fontSize:11, color:C2.dim }}>{t.note}</div>
            </div>
          ))}
        </div>
        <Card amber>
          <div style={{ ...mono, fontSize:9, color:C2.amber, letterSpacing:"0.12em", marginBottom:14 }}>TIER 3 EXAMPLE — $400,000 RECOVERY</div>
          {[["Recovery",fmt(400000),false],["StormChecks fee (20%)",fmt(80000),false],["Your commission (25% of SC fee)",fmt(20000),true]].map(([l,v,hi]) => (
            <div key={l as string} style={{ display:"flex", justifyContent:"space-between", padding:"9px 0", borderBottom:`1px solid ${C2.faint}` }}>
              <span style={{ fontSize:13, color:hi?C2.white:C2.dim }}>{l as string}</span>
              <span style={{ ...mono, fontSize:14, color:hi?C2.amber:C2.dim, fontWeight:hi?500:400 }}>{v as string}</span>
            </div>
          ))}
        </Card>
      </SceneWrap>
    );
    /* AFFILIATE TARGETS */
    case "affiliate_targets": return (
      <SceneWrap>
        <SLabel text={scene.section!} />
        <H>Prioritize<br/><span style={{ color:C2.amber }}>these calls.</span></H>
        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          {[
            { icon:"🔴", label:"Previously denied claims",              note:"Documentation quality was the issue. Our file reopens them.", detail:"A $0 denial became $3.9M in San Antonio." },
            { icon:"🔴", label:"Property listed for sale",              note:"Recover before it leaves the portfolio.",                     detail:"Claim goes against current policy with full owner benefit." },
            { icon:"🔴", label:"Owner told by roofer: no damage",       note:"Different discipline entirely.",                              detail:"We've found $1.2M after a roofer gave a clean bill of health." },
          ].map(t => (
            <Card key={t.label} amber style={{ padding:"18px 20px" }}>
              <div style={{ display:"flex", gap:14, alignItems:"flex-start" }}>
                <span style={{ fontSize:18, flexShrink:0 }}>{t.icon}</span>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:14, fontWeight:600, marginBottom:5 }}>{t.label}</div>
                  <div style={{ fontSize:12, color:C2.dim, marginBottom:6, lineHeight:1.6 }}>{t.note}</div>
                  <div style={{ ...mono, fontSize:10, color:C2.amber }}>{t.detail}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SceneWrap>
    );
    /* NEXT STEPS */
    case "nextsteps": return (
      <SceneWrap>
        <SLabel text={scene.section!} />
        <H>Your next step.</H>
        <Card amber style={{ textAlign:"center", padding:"36px 28px", marginBottom:20 }}>
          <div style={{ ...mono, fontSize:11, color:C2.amber, letterSpacing:"0.14em", marginBottom:12 }}>LOG IN OR SIGN UP AT</div>
          <div style={{ ...disp, fontSize:32, fontWeight:800, color:C2.amber, marginBottom:14 }}>app.stormchecks.com</div>
          <div style={{ fontSize:13, color:C2.dim, lineHeight:1.8 }}>
            Submit your first property address → or toggle to affiliate mode to start submitting leads.<br/>Our team walks you through the portal in the next video series.
          </div>
        </Card>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
          <Card>
            <div style={{ ...mono, fontSize:9, color:C2.dim, letterSpacing:"0.1em", marginBottom:8 }}>EMAIL</div>
            <div style={{ fontSize:14, color:C2.white }}>info@stormchecks.com</div>
          </Card>
          <Card>
            <div style={{ ...mono, fontSize:9, color:C2.dim, letterSpacing:"0.1em", marginBottom:8 }}>PHONE</div>
            <div style={{ fontSize:14, color:C2.white }}>+1 801-821-2530</div>
          </Card>
        </div>
        <div style={{ fontSize:11, color:"rgba(255,255,255,0.16)", lineHeight:1.8, marginTop:24, textAlign:"center" }}>
          StormChecks provides forensic documentation services only. Not a public adjusting firm. Does not file claims, negotiate settlements, or advocate with carriers. All settlements negotiated by independent public adjusters engaged directly by the property owner.
        </div>
      </SceneWrap>
    );
    default: return <SceneWrap><B dim>Scene not found.</B></SceneWrap>;
  }
}
