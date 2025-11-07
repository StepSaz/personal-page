import { FreeMaterial } from "@/data/free-materials";
import EmailForm from "./EmailForm";

interface MaterialCardProps {
  material: FreeMaterial;
  onEmailSubmit?: (email: string, type: string) => Promise<void>;
  onPurchase?: (productType: string) => Promise<void>;
  isPurchaseLoading?: boolean;
}

export default function MaterialCard({
  material,
  onEmailSubmit,
  onPurchase,
  isPurchaseLoading,
}: MaterialCardProps) {
  const handleEmailSubmit = async (email: string) => {
    if (onEmailSubmit && material.emailType) {
      await onEmailSubmit(email, material.emailType);
    }
  };

  const handlePurchaseClick = async () => {
    if (onPurchase && material.productType) {
      await onPurchase(material.productType);
    }
  };

  const isPremium = material.type === "purchase" || (material.type === "coming-soon" && material.price);

  return (
    <div className={`relative overflow-hidden rounded-2xl border-2 p-6 flex flex-col transition-all hover:shadow-xl ${
      isPremium
        ? "border-brand-purple bg-gradient-to-br from-white to-purple-50"
        : "border-gray-200 bg-white"
    }`}>
      {/* Premium badge/indicator */}
      {isPremium && (
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
          <div className="absolute top-4 -right-10 rotate-45 bg-brand-purple text-white text-xs font-bold py-1 px-10 text-center">
            PREMIUM
          </div>
        </div>
      )}

      {/* Badge */}
      {material.badge && (
        <div className="mb-3">
          <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${
            isPremium
              ? "text-white bg-brand-purple"
              : "text-brand-purple bg-brand-purple/10"
          }`}>
            {material.badge}
          </span>
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl lg:text-2xl font-bold mb-2 text-gray-900">{material.title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">{material.description}</p>

      {/* Price (for purchase type) */}
      {material.type === "purchase" && material.price && (
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-bold text-brand-purple">{material.price}</span>
        </div>
      )}

      {/* Action based on type */}
      <div className="mt-auto">
        {material.type === "email-download" && (
          <div className="bg-gray-50 p-3 rounded-xl border-2 border-dashed border-gray-300">
            <p className="text-xs font-semibold text-gray-700 mb-2">Get instant access:</p>
            <EmailForm
              placeholder={material.emailPlaceholder || "Your email"}
              buttonText={material.emailButtonText || "Submit"}
              onSubmit={handleEmailSubmit}
            />
          </div>
        )}

        {material.type === "external-link" && material.url && (
          <a
            href={material.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-3 font-bold text-center text-white bg-brand-purple hover:bg-brand-purple/90 rounded-xl transition-all shadow-lg hover:shadow-xl text-base"
          >
            {material.linkText || "Learn More"}
          </a>
        )}

        {material.type === "purchase" && (
          <button
            onClick={handlePurchaseClick}
            disabled={isPurchaseLoading}
            className="w-full px-4 py-3 font-bold text-white bg-brand-purple hover:bg-brand-purple/90 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl text-base"
          >
            {isPurchaseLoading ? "Processing..." : "Buy Now"}
          </button>
        )}

        {material.type === "coming-soon" && material.emailType && (
          <div className="bg-purple-50 p-3 rounded-xl border-2 border-brand-purple/20">
            <p className="text-xs font-semibold text-brand-purple mb-2">Be the first to know:</p>
            <EmailForm
              placeholder={material.emailPlaceholder || "Your email"}
              buttonText={material.emailButtonText || "Get Notified"}
              onSubmit={handleEmailSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
}
