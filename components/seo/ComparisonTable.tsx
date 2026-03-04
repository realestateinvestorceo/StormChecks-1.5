import React from 'react';

interface ComparisonRow {
  feature: string;
  values: (string | boolean)[];
}

interface ComparisonTableProps {
  headers: string[];
  rows: ComparisonRow[];
  caption?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ headers, rows, caption }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left">
        {caption && (
          <caption className="text-sm text-gray-500 mb-4 text-left">{caption}</caption>
        )}
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                scope="col"
                className={`px-4 py-4 text-sm font-bold uppercase tracking-wider border-b-2 border-gray-200 ${
                  i === 0 ? 'bg-gray-50 text-gray-600' : i === headers.length - 1 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <th scope="row" className="px-4 py-4 font-semibold text-primary text-sm border-b border-gray-100">
                {row.feature}
              </th>
              {row.values.map((val, colIdx) => (
                <td key={colIdx} className="px-4 py-4 text-sm border-b border-gray-100">
                  {typeof val === 'boolean' ? (
                    val ? (
                      <span className="text-green-600 font-bold" aria-label="Yes">&#10003;</span>
                    ) : (
                      <span className="text-red-500 font-bold" aria-label="No">&#10007;</span>
                    )
                  ) : (
                    val
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
