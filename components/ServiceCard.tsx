"use client";

import { useState } from "react";

interface ServiceCardProps {
  title: string;
  bullets: string[];
  price: string;
  originalPrice?: string; // Optional strikethrough price
  ctaLabel: string;
  ctaUrl: string;
  details: {
    intro: string;
    outcomes: string[];
    includes?: string[];
    faq: { q: string; a: string }[];
  };
}

export default function ServiceCard({
  title,
  bullets,
  price,
  originalPrice,
  ctaLabel,
  ctaUrl,
  details,
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card-base p-4">
      {/* Card Header */}
      <h3 className="text-xl font-bold mb-2">{title}</h3>

      {/* Bullets */}
      <ul className="space-y-1 mb-3 text-sm">
        {bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-2 text-gray-700">
            <span className="text-brand-purple mt-0.5">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Price & CTA */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex flex-col">
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">{originalPrice}</span>
          )}
          <span className="text-base font-bold text-gray-900">{price}</span>
        </div>
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm font-semibold text-white bg-brand-purple hover:opacity-90 rounded-lg transition-all whitespace-nowrap"
        >
          {ctaLabel}
        </a>
      </div>

      {/* Show/Hide Details Toggle */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-xs text-brand-purple hover:text-brand-turquoise font-medium flex items-center justify-center gap-1 transition-colors"
      >
        {isExpanded ? "Hide details" : "Show details"}
        <svg
          className={`w-3 h-3 transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Expandable Details */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-200 space-y-4 animate-fadeIn text-sm">
          {/* Intro */}
          <p className="text-gray-700 leading-relaxed text-xs">{details.intro}</p>

          {/* Outcomes */}
          <div>
            <h4 className="font-bold text-sm mb-2">What you&apos;ll achieve:</h4>
            <ul className="space-y-1">
              {details.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700 text-xs">
                  <span className="text-brand-turquoise mt-0.5">✓</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Includes (optional) */}
          {details.includes && details.includes.length > 0 && (
            <div>
              <h4 className="font-bold text-sm mb-2">Includes:</h4>
              <ul className="space-y-1">
                {details.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700 text-xs">
                    <span className="text-brand-purple mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Mini-FAQ */}
          <div>
            <h4 className="font-bold text-sm mb-2">FAQ:</h4>
            <div className="space-y-3">
              {details.faq.map((item, idx) => (
                <div key={idx}>
                  <p className="font-semibold text-gray-900 mb-0.5 text-xs">
                    {item.q}
                  </p>
                  <p className="text-gray-700 text-xs">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
