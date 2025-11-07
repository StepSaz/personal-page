"use client";

import { useState } from "react";

interface EmailFormProps {
  placeholder?: string;
  buttonText: string;
  onSubmit: (email: string) => Promise<void>;
}

export default function EmailForm({
  placeholder = "Enter your email",
  buttonText,
  onSubmit,
}: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      await onSubmit(email);
      setMessage("Success! Check your email.");
      setEmail("");
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-3 font-semibold text-white bg-brand-purple hover:opacity-90 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {isLoading ? "Sending..." : buttonText}
        </button>
      </div>
      {message && (
        <p
          className={`text-sm ${
            message.includes("Success") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
