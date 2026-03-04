import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import SEOHead from './SEOHead';

interface Breadcrumb {
  label: string;
  path?: string;
}

interface SEOPageLayoutProps {
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  schemas?: object[];
  breadcrumbs: Breadcrumb[];
  children: React.ReactNode;
}

const SEOPageLayout: React.FC<SEOPageLayoutProps> = ({
  title,
  subtitle,
  metaTitle,
  metaDescription,
  canonicalPath,
  schemas = [],
  breadcrumbs,
  children,
}) => {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stormchecks.com/' },
      ...breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: b.label,
        ...(b.path ? { item: `https://stormchecks.com${b.path}` } : {}),
      })),
    ],
  };

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonicalPath={canonicalPath}
        schemas={[breadcrumbSchema, ...schemas]}
      />

      {/* Hero */}
      <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-[10%] -top-[10%] w-[600px] h-[600px] bg-white opacity-[0.03] rounded-full blur-3xl"></div>
          <div className="absolute right-[5%] top-[30%] w-[400px] h-[400px] bg-accent opacity-[0.04] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center text-sm text-gray-400 mb-8 flex-wrap">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            {breadcrumbs.map((b, i) => (
              <React.Fragment key={i}>
                <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
                {b.path ? (
                  <Link to={b.path} className="hover:text-accent transition-colors">{b.label}</Link>
                ) : (
                  <span className="text-gray-300">{b.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      {children}

      {/* CTA Section */}
      <section className="bg-primary py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start with a Free Assessment
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            We'll analyze your property's weather exposure for the past 2 years and monitor it going forward. No cost, no obligation.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Link
              to="/contact?focus=true"
              className="group inline-flex items-center gap-2 bg-accent text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#E6AC00] transition-all shadow-lg hover:-translate-y-1"
            >
              Get Free Assessment
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="text-gray-500 text-sm font-medium">
              Takes 2 minutes. We just need your property address.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SEOPageLayout;
