"use client";

import { useEffect, useState } from "react";

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero (full viewport)
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-white border-t border-gray-200 shadow-lg p-4">
        <a
          href={process.env.NEXT_PUBLIC_BOOKING_URL || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full px-6 py-4 font-semibold text-white bg-brand-purple hover:opacity-90 rounded-lg shadow-lg text-center transition-all"
        >
          Book free consultation
        </a>
      </div>
    </div>
  );
}
