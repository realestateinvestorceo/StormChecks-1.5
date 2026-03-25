import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from 'react-router-dom';
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
import GetStarted from './pages/GetStarted';

// SEO Pages — direct imports for Google indexability
import WhatToDoAfterStormDamage from './pages/seo/WhatToDoAfterStormDamage';
import WhyClaimsGetDenied from './pages/seo/WhyClaimsGetDenied';
import HiddenCostOfStormDamage from './pages/seo/HiddenCostOfStormDamage';
import InsuranceClaimProcessGuide from './pages/seo/InsuranceClaimProcessGuide';
import ForensicVsStandardInspection from './pages/seo/ForensicVsStandardInspection';
import ForensicDocVsContractorEstimate from './pages/seo/ForensicDocVsContractorEstimate';
import IndependentVsInsuranceAdjuster from './pages/seo/IndependentVsInsuranceAdjuster';
import WhatIsForensicBuildingConsulting from './pages/seo/WhatIsForensicBuildingConsulting';
import HailDamageCommercialRoofs from './pages/seo/HailDamageCommercialRoofs';
import WindDamageCommercialBuildings from './pages/seo/WindDamageCommercialBuildings';
import StateFilingDeadlines from './pages/seo/StateFilingDeadlines';
import StormDamageIndustrial from './pages/seo/StormDamageIndustrial';
import StormDamageRetail from './pages/seo/StormDamageRetail';
import StormDamageSelfStorage from './pages/seo/StormDamageSelfStorage';
import StormDamageOfficeBuildings from './pages/seo/StormDamageOfficeBuildings';
import StormDamageTexas from './pages/seo/StormDamageTexas';
import StormDamageColorado from './pages/seo/StormDamageColorado';
import StormDamageKansas from './pages/seo/StormDamageKansas';
import StormDamageOklahoma from './pages/seo/StormDamageOklahoma';
import StormDamageNebraska from './pages/seo/StormDamageNebraska';
import StormDamageMissouri from './pages/seo/StormDamageMissouri';
import StormDamageMinnesota from './pages/seo/StormDamageMinnesota';
import StormDamageNorthCarolina from './pages/seo/StormDamageNorthCarolina';

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
      <Routes>
        {/* Full-screen pages without Navbar/Footer */}
        <Route path="/getstarted" element={<GetStarted />} />

        {/* Standard layout with Navbar/Footer */}
        <Route element={<MainLayout />}>
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
            <Route path="/what-to-do-after-storm-damage-commercial-property" element={<WhatToDoAfterStormDamage />} />
            <Route path="/why-commercial-property-insurance-claims-get-denied" element={<WhyClaimsGetDenied />} />
            <Route path="/hidden-cost-of-undetected-storm-damage" element={<HiddenCostOfStormDamage />} />
            <Route path="/commercial-property-insurance-claim-process-guide" element={<InsuranceClaimProcessGuide />} />
            <Route path="/forensic-assessment-vs-standard-inspection" element={<ForensicVsStandardInspection />} />
            <Route path="/forensic-documentation-vs-contractor-estimate" element={<ForensicDocVsContractorEstimate />} />
            <Route path="/independent-assessment-vs-insurance-adjuster" element={<IndependentVsInsuranceAdjuster />} />
            <Route path="/what-is-forensic-building-consulting" element={<WhatIsForensicBuildingConsulting />} />
            <Route path="/how-to-identify-hail-damage-commercial-roofs" element={<HailDamageCommercialRoofs />} />
            <Route path="/how-to-identify-wind-damage-commercial-buildings" element={<WindDamageCommercialBuildings />} />
            <Route path="/state-by-state-insurance-claim-filing-deadlines" element={<StateFilingDeadlines />} />
            <Route path="/storm-damage-assessment-industrial-properties" element={<StormDamageIndustrial />} />
            <Route path="/storm-damage-assessment-retail-centers" element={<StormDamageRetail />} />
            <Route path="/storm-damage-assessment-self-storage-facilities" element={<StormDamageSelfStorage />} />
            <Route path="/storm-damage-assessment-office-buildings" element={<StormDamageOfficeBuildings />} />
            <Route path="/storm-damage-assessment-texas" element={<StormDamageTexas />} />
            <Route path="/storm-damage-assessment-colorado" element={<StormDamageColorado />} />
            <Route path="/storm-damage-assessment-kansas" element={<StormDamageKansas />} />
            <Route path="/storm-damage-assessment-oklahoma" element={<StormDamageOklahoma />} />
            <Route path="/storm-damage-assessment-nebraska" element={<StormDamageNebraska />} />
            <Route path="/storm-damage-assessment-missouri" element={<StormDamageMissouri />} />
            <Route path="/storm-damage-assessment-minnesota" element={<StormDamageMinnesota />} />
            <Route path="/storm-damage-assessment-north-carolina" element={<StormDamageNorthCarolina />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

const MainLayout: React.FC = () => (
  <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50">
    <Navbar />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default App;
