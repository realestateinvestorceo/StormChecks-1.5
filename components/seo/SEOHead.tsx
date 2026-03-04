import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  schemas?: object[];
}

function upsertMeta(attrName: string, attrValue: string, content: string) {
  let el = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, canonicalPath, schemas = [] }) => {
  useEffect(() => {
    const fullTitle = `${title} | StormChecks`;
    const canonicalUrl = `https://stormchecks.com${canonicalPath}`;

    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:type', 'article');
    upsertLink('canonical', canonicalUrl);

    const scriptElements = schemas.map(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      scriptElements.forEach(el => el.remove());
    };
  }, [title, description, canonicalPath, schemas]);

  return null;
};

export default SEOHead;
