import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface RelatedLink {
  title: string;
  path: string;
  description: string;
}

interface RelatedPagesProps {
  pages: RelatedLink[];
}

const RelatedPages: React.FC<RelatedPagesProps> = ({ pages }) => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center">
          Related Resources
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pages.map((page, i) => (
            <Link
              key={i}
              to={page.path}
              className="bg-gray-50 p-6 rounded-lg border-l-4 border-accent hover:shadow-lg transition-all group"
            >
              <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {page.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{page.description}</p>
              <span className="text-accent font-semibold text-sm flex items-center gap-1">
                Read more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPages;
