import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Leadership from './pages/Leadership';
import CaseWork from './pages/CaseWork';
import ExpertFile from './pages/ExpertFile';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowItWorks';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Resources from './pages/Resources';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';

// SEO Pages — lazy loaded for code splitting
const WhatToDoAfterStormDamage = lazy(() => import('./pages/seo/WhatToDoAfterStormDamage'));
const WhyClaimsGetDenied = lazy(() => import('./pages/seo/WhyClaimsGetDenied'));
const HiddenCostOfStormDamage = lazy(() => import('./pages/seo/HiddenCostOfStormDamage'));
const InsuranceClaimProcessGuide = lazy(() => import('./pages/seo/InsuranceClaimProcessGuide'));
const ForensicVsStandardInspection = lazy(() => import('./pages/seo/ForensicVsStandardInspection'));
const ForensicDocVsContractorEstimate = lazy(() => import('./pages/seo/ForensicDocVsContractorEstimate'));
const IndependentVsInsuranceAdjuster = lazy(() => import('./pages/seo/IndependentVsInsuranceAdjuster'));
const WhatIsForensicBuildingConsulting = lazy(() => import('./pages/seo/WhatIsForensicBuildingConsulting'));
const HailDamageCommercialRoofs = lazy(() => import('./pages/seo/HailDamageCommercialRoofs'));
const WindDamageCommercialBuildings = lazy(() => import('./pages/seo/WindDamageCommercialBuildings'));
const StateFilingDeadlines = lazy(() => import('./pages/seo/StateFilingDeadlines'));
const StormDamageIndustrial = lazy(() => import('./pages/seo/StormDamageIndustrial'));
const StormDamageRetail = lazy(() => import('./pages/seo/StormDamageRetail'));
const StormDamageSelfStorage = lazy(() => import('./pages/seo/StormDamageSelfStorage'));
const StormDamageOfficeBuildings = lazy(() => import('./pages/seo/StormDamageOfficeBuildings'));
const StormDamageTexas = lazy(() => import('./pages/seo/StormDamageTexas'));
const StormDamageColorado = lazy(() => import('./pages/seo/StormDamageColorado'));
const StormDamageKansas = lazy(() => import('./pages/seo/StormDamageKansas'));
const StormDamageOklahoma = lazy(() => import('./pages/seo/StormDamageOklahoma'));
const StormDamageNebraska = lazy(() => import('./pages/seo/StormDamageNebraska'));
const StormDamageMissouri = lazy(() => import('./pages/seo/StormDamageMissouri'));
const StormDamageMinnesota = lazy(() => import('./pages/seo/StormDamageMinnesota'));
const StormDamageNorthCarolina = lazy(() => import('./pages/seo/StormDamageNorthCarolina'));

declare global {
  interface Window {
    Intercom: any;
  }
}

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    if (window.Intercom) {
      window.Intercom("boot", {
        api_base: "https://api-iam.intercom.io",
        app_id: "onchtmjc",
      });
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/case-work" element={<CaseWork />} />
            <Route path="/expert-file" element={<ExpertFile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:id" element={<BlogPost />} />

            {/* SEO Pages */}
            <Route path="/what-to-do-after-storm-damage-commercial-property" element={<Suspense fallback={null}><WhatToDoAfterStormDamage /></Suspense>} />
            <Route path="/why-commercial-property-insurance-claims-get-denied" element={<Suspense fallback={null}><WhyClaimsGetDenied /></Suspense>} />
            <Route path="/hidden-cost-of-undetected-storm-damage" element={<Suspense fallback={null}><HiddenCostOfStormDamage /></Suspense>} />
            <Route path="/commercial-property-insurance-claim-process-guide" element={<Suspense fallback={null}><InsuranceClaimProcessGuide /></Suspense>} />
            <Route path="/forensic-assessment-vs-standard-inspection" element={<Suspense fallback={null}><ForensicVsStandardInspection /></Suspense>} />
            <Route path="/forensic-documentation-vs-contractor-estimate" element={<Suspense fallback={null}><ForensicDocVsContractorEstimate /></Suspense>} />
            <Route path="/independent-assessment-vs-insurance-adjuster" element={<Suspense fallback={null}><IndependentVsInsuranceAdjuster /></Suspense>} />
            <Route path="/what-is-forensic-building-consulting" element={<Suspense fallback={null}><WhatIsForensicBuildingConsulting /></Suspense>} />
            <Route path="/how-to-identify-hail-damage-commercial-roofs" element={<Suspense fallback={null}><HailDamageCommercialRoofs /></Suspense>} />
            <Route path="/how-to-identify-wind-damage-commercial-buildings" element={<Suspense fallback={null}><WindDamageCommercialBuildings /></Suspense>} />
            <Route path="/state-by-state-insurance-claim-filing-deadlines" element={<Suspense fallback={null}><StateFilingDeadlines /></Suspense>} />
            <Route path="/storm-damage-assessment-industrial-properties" element={<Suspense fallback={null}><StormDamageIndustrial /></Suspense>} />
            <Route path="/storm-damage-assessment-retail-centers" element={<Suspense fallback={null}><StormDamageRetail /></Suspense>} />
            <Route path="/storm-damage-assessment-self-storage-facilities" element={<Suspense fallback={null}><StormDamageSelfStorage /></Suspense>} />
            <Route path="/storm-damage-assessment-office-buildings" element={<Suspense fallback={null}><StormDamageOfficeBuildings /></Suspense>} />
            <Route path="/storm-damage-assessment-texas" element={<Suspense fallback={null}><StormDamageTexas /></Suspense>} />
            <Route path="/storm-damage-assessment-colorado" element={<Suspense fallback={null}><StormDamageColorado /></Suspense>} />
            <Route path="/storm-damage-assessment-kansas" element={<Suspense fallback={null}><StormDamageKansas /></Suspense>} />
            <Route path="/storm-damage-assessment-oklahoma" element={<Suspense fallback={null}><StormDamageOklahoma /></Suspense>} />
            <Route path="/storm-damage-assessment-nebraska" element={<Suspense fallback={null}><StormDamageNebraska /></Suspense>} />
            <Route path="/storm-damage-assessment-missouri" element={<Suspense fallback={null}><StormDamageMissouri /></Suspense>} />
            <Route path="/storm-damage-assessment-minnesota" element={<Suspense fallback={null}><StormDamageMinnesota /></Suspense>} />
            <Route path="/storm-damage-assessment-north-carolina" element={<Suspense fallback={null}><StormDamageNorthCarolina /></Suspense>} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;