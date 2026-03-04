import React from 'react';
import SEOPageLayout from '../../components/seo/SEOPageLayout';
import FAQSection, { buildFAQSchema } from '../../components/seo/FAQSection';
import RelatedPages from '../../components/seo/RelatedPages';

const faqs = [
  {
    question: 'What size hail causes damage to commercial roofs?',
    answer: 'Hail as small as 1 inch in diameter can cause functional damage to many commercial roofing systems. Single-ply membranes (TPO, PVC, EPDM) can sustain micro-fractures from hail as small as 3/4 inch. Metal roofing shows cosmetic damage at 1 inch but functional damage at 1.5+ inches. The damage threshold depends on roofing material, age, and condition.',
  },
  {
    question: 'Can hail damage a commercial roof without being visible?',
    answer: 'Yes. This is one of the most important things to understand about hail damage. Hail can create micro-fractures in roofing membrane, compress insulation beneath the surface, and break the granule bond on modified bitumen — all without visible signs from the ground or even from the roof surface. Forensic testing (core samples, moisture scans) is often required to identify this hidden damage.',
  },
  {
    question: 'How long after a hailstorm should I have my roof inspected?',
    answer: 'Ideally within 30 days of the storm event, but sooner is better. Evidence of hail damage can be obscured by subsequent weather, foot traffic, and UV exposure. Insurance policies also have notification deadlines that vary by state. Early assessment preserves both the physical evidence and your right to file a claim.',
  },
  {
    question: 'Does my commercial property insurance cover hail damage?',
    answer: 'Most commercial property insurance policies cover hail damage as a named peril. However, some policies have hail-specific deductibles (often 1-5% of building value) or exclude cosmetic damage. Review your policy carefully, and understand that "functional damage" — which affects the roof\'s ability to perform — is covered even when cosmetic exclusions apply.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Identify Hail Damage on Commercial Roofs',
  description: 'Learn how to identify hail damage on different commercial roofing systems including TPO, EPDM, metal, BUR, and modified bitumen.',
  author: { '@type': 'Organization', name: 'StormChecks' },
  publisher: { '@type': 'Organization', name: 'StormChecks' },
};

const HailDamageCommercialRoofs: React.FC = () => {
  return (
    <SEOPageLayout
      title="How to Identify Hail Damage on Commercial Roofs"
      subtitle="A guide to recognizing hail damage across different commercial roofing systems — and why most damage is invisible without forensic assessment."
      metaTitle="How to Identify Hail Damage on Commercial Roofs"
      metaDescription="Learn how to identify hail damage on TPO, EPDM, metal, and built-up commercial roofs. Understand what hidden damage looks like and when forensic assessment is needed."
      canonicalPath="/how-to-identify-hail-damage-commercial-roofs"
      schemas={[articleSchema, buildFAQSchema(faqs)]}
      breadcrumbs={[{ label: 'How to Identify Hail Damage on Commercial Roofs' }]}
    >
      {/* Overview */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Hail Damage Is Not Always What You Expect</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Most people think of hail damage as dents and holes. On commercial roofing systems, the reality is more nuanced. Hail impacts create different damage patterns depending on the roofing material, hail size, and impact angle. Many of the most costly forms of hail damage are invisible from the surface.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Understanding what hail damage looks like on your specific roofing system helps you know when to seek a professional assessment — and helps you understand why the carrier adjuster's surface-level inspection may be missing significant damage.
            </p>
          </div>
        </div>
      </section>

      {/* TPO/PVC */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Single-Ply Membrane (TPO, PVC)</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              TPO and PVC are the most common commercial roofing membranes. Hail damage to these systems is often the hardest to identify visually because the membrane is flexible and absorbs impact without obvious surface marks.
            </p>
            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
              <h3 className="font-bold text-primary mb-3">What to Look For</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Circular depressions or marks on the membrane surface</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Fractures or splits in the membrane visible under magnification</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Compromised weld seams where hail impact stressed the bond</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Insulation compression beneath impact points (requires core sample)</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Punctures at flashing terminations and penetration points</li>
              </ul>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-accent">
              <p className="text-primary text-sm font-semibold">Forensic note: Micro-fractures in TPO membrane can be invisible on the surface but create pathways for water infiltration. Core sampling and dye testing are the most reliable methods for detecting this type of damage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EPDM */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">EPDM (Rubber) Roofing</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              EPDM is a synthetic rubber membrane commonly used on low-slope commercial roofs. Its flexibility and dark color make hail damage particularly difficult to see.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
              <h3 className="font-bold text-primary mb-3">What to Look For</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Circular impact marks that may only be visible when the membrane is wet or at specific light angles</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Tears or punctures at seams and penetration details</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Accelerated weathering and crazing around impact sites</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Adhesive failure on fully adhered systems from impact shock</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metal */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Metal Roofing</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Metal roofing shows hail damage more visibly than membrane systems. Dents, dimples, and paint damage are often apparent. However, the functional impact goes beyond cosmetics.
            </p>
            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
              <h3 className="font-bold text-primary mb-3">What to Look For</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Dents and dimples on flat panel surfaces</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Paint or coating fractures at impact points exposing bare metal to corrosion</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Seam separation from panel distortion</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Damaged ridge caps, trim, and flashing details</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Gutter and downspout damage</li>
              </ul>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-accent">
              <p className="text-primary text-sm font-semibold">Important: Many carriers argue that metal roof dents are "cosmetic only" and not covered. However, when impact fractures the protective coating, it creates a corrosion pathway that is functional damage — not cosmetic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BUR / Modified Bitumen */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Built-Up Roofing (BUR) and Modified Bitumen</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Built-up roofs and modified bitumen systems are multi-layer assemblies. Hail damage to these systems primarily shows as granule loss, mat fractures, and membrane displacement.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
              <h3 className="font-bold text-primary mb-3">What to Look For</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Circular patterns of granule loss (distinguish from foot traffic and weathering)</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Mat fractures visible when the granule surface is brushed</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Membrane displacement or "bruising" at impact points</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Cracking at blister or wrinkle locations where hail impact stressed existing conditions</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">&#8226;</span> Flashing and edge metal damage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When to Get Professional Assessment */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">When to Get a Professional Forensic Assessment</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If your commercial property has been in the path of hail — even if you do not see obvious damage from the ground — a forensic assessment is the only way to know the true condition of your roof. Surface-level inspections miss the majority of hail damage.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              StormChecks provides free weather exposure analysis for commercial properties. We monitor your property's storm exposure and proactively notify you when a forensic assessment is warranted — before hidden damage has time to compound.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
                <div className="text-3xl font-bold text-accent mb-2">$10B+</div>
                <p className="text-gray-600 text-sm">In property damage assessed</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
                <div className="text-3xl font-bold text-accent mb-2">$0</div>
                <p className="text-gray-600 text-sm">Upfront cost for assessment</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
                <div className="text-3xl font-bold text-accent mb-2">Free</div>
                <p className="text-gray-600 text-sm">Weather monitoring for your property</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <RelatedPages
        pages={[
          { title: 'How to Identify Wind Damage', path: '/how-to-identify-wind-damage-commercial-buildings', description: 'Learn the signs of wind damage on commercial building components.' },
          { title: 'Hidden Cost of Undetected Damage', path: '/hidden-cost-of-undetected-storm-damage', description: 'Why surface-level inspections miss costly hidden damage.' },
          { title: 'What to Do After Storm Damage', path: '/what-to-do-after-storm-damage-commercial-property', description: 'Step-by-step guide for commercial property owners after a storm.' },
        ]}
      />
    </SEOPageLayout>
  );
};

export default HailDamageCommercialRoofs;
