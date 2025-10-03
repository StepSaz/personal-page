"use client";

import { useState } from "react";

interface CourseCardProps {
  badge: string;
  badgeColor: "primary" | "secondary" | "accent";
  title: string;
  description: string;
  price?: number;
  features: string[];
  available: boolean;
  onPurchase?: () => void;
  onNotify?: () => void;
  isAccented?: boolean;
  details?: {
    curriculum?: string[];
    outcomes?: string[];
    prerequisites?: string[];
    materials?: string[];
    format?: string[];
  };
}

export default function CourseCard({
  badge,
  badgeColor,
  title,
  description,
  price,
  features,
  available,
  onPurchase,
  onNotify,
  isAccented = false,
  details,
}: CourseCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`glass rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
        isAccented ? "ring-2 ring-accent" : ""
      }`}
    >
      <div className="p-5 md:p-6">
        {/* Badge */}
        <div className="mb-2">
          <span className={`badge badge-${badgeColor} badge-lg`}>{badge}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">{title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{description}</p>

        {/* Price */}
        {price && (
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            ${price}
          </div>
        )}

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature, index) => (
            <span key={index} className="badge badge-outline">
              {feature}
            </span>
          ))}
        </div>

        {/* Expandable Details */}
        {details && (
          <div className="mb-4">
            <button
              onClick={() => setExpanded(!expanded)}
              className="btn btn-sm btn-ghost w-full"
              aria-expanded={expanded}
              aria-controls={`details-${title.replace(/\s+/g, "-")}`}
            >
              {expanded ? "Hide Details" : "Show Details"}
              <svg
                className={`w-4 h-4 transition-transform ${
                  expanded ? "rotate-180" : ""
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

            {expanded && (
              <div
                id={`details-${title.replace(/\s+/g, "-")}`}
                className="mt-4 space-y-4 animate-fadeIn"
              >
                {details.curriculum && (
                  <div>
                    <h4 className="font-semibold mb-2">Curriculum:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {details.curriculum.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {details.outcomes && (
                  <div>
                    <h4 className="font-semibold mb-2">Learning Outcomes:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {details.outcomes.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {details.prerequisites && details.prerequisites.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Prerequisites:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {details.prerequisites.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {details.materials && (
                  <div>
                    <h4 className="font-semibold mb-2">Materials Included:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {details.materials.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {details.format && (
                  <div>
                    <h4 className="font-semibold mb-2">Format:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {details.format.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Action Button */}
        <div className="mt-4">
          {available ? (
            <button
              onClick={onPurchase}
              className={`w-full py-3 px-5 rounded-lg font-semibold text-white shadow hover:shadow-md transform hover:scale-105 transition-all duration-300 ${
                isAccented
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
                  : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              }`}
            >
              {price ? "Purchase Course" : "Learn More"}
            </button>
          ) : (
            <button
              onClick={onNotify}
              className="w-full py-3 px-5 rounded-lg font-semibold border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary hover:bg-primary/5 transform hover:scale-105 transition-all duration-300"
            >
              Notify Me
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
