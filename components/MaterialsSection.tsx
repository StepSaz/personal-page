"use client";

import { useState } from "react";
import { freeMaterials, paidMaterials } from "@/data/free-materials";
import MaterialCard from "./MaterialCard";

export default function MaterialsSection() {
  const [purchaseLoadingId, setPurchaseLoadingId] = useState<string | null>(null);

  const handleEmailSubmit = async (email: string, type: string) => {
    const response = await fetch("/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, type }),
    });

    if (!response.ok) throw new Error("Failed to send");
  };

  const handlePurchase = async (productType: string) => {
    setPurchaseLoadingId(productType);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productType }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Purchase error:", error);
      setPurchaseLoadingId(null);
    }
  };

  // Combine and sort all materials by order
  const allMaterials = [...freeMaterials, ...paidMaterials].sort(
    (a, b) => (a.order || 999) - (b.order || 999)
  );

  return (
    <section className="section-spacing bg-brand-bg-alt" id="materials">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Free & Premium <span className="gradient-text">Materials</span>
          </h2>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allMaterials.map((material) => (
            <MaterialCard
              key={material.id}
              material={material}
              onEmailSubmit={handleEmailSubmit}
              onPurchase={handlePurchase}
              isPurchaseLoading={purchaseLoadingId === material.productType}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
