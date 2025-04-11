import React from 'react';

export default function ResearchPageTemplate({ title, children }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-32">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">{title}</h1>
      <div className="prose prose-lg max-w-none text-gray-800">
        {children}
      </div>
    </div>
  );
}
