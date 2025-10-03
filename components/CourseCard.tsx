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
      className={`card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${
        isAccented ? "ring-2 ring-accent" : ""
      }`}
    >
      <div className="card-body">
        {/* Badge */}
        <div className="mb-2">
          <span className={`badge badge-${badgeColor} badge-lg`}>{badge}</span>
        </div>

        {/* Title */}
        <h3 className="card-title text-2xl mb-2">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Price */}
        {price && (
          <div className="text-4xl font-bold text-primary mb-4">
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
        <div className="card-actions justify-end">
          {available ? (
            <button
              onClick={onPurchase}
              className={`btn ${
                isAccented ? "btn-accent" : "btn-primary"
              } btn-block hover:scale-105 transition-transform`}
            >
              {price ? "Purchase Course" : "Learn More"}
            </button>
          ) : (
            <button
              onClick={onNotify}
              className="btn btn-outline btn-block hover:scale-105 transition-transform"
            >
              Notify Me
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
