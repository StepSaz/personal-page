/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'brand-purple': '#6C5CE7',
        'brand-turquoise': '#00D1B2',
        'brand-bg': '#F8F8FB',
        'brand-bg-alt': '#F1F1F8',
        'brand-bg-game': '#ECECFF',
        'brand-hero-from': '#F8F8FB',
        'brand-hero-to': '#E9E7FF',
      },
      backgroundImage: {
        'gradient-pastel': 'linear-gradient(135deg, #eff6ff 0%, #faf5ff 50%, #fff1f2 100%)',
        'gradient-hero': 'linear-gradient(180deg, #F8F8FB 0%, #E9E7FF 100%)',
        'gradient-outro': 'linear-gradient(180deg, #F8F8FB 0%, #6C5CE7 100%)',
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '20px',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#6C5CE7",
          "secondary": "#00D1B2",
          "accent": "#fb7185",
          "neutral": "#1f2937",
          "base-100": "#ffffff",
          "info": "#0ea5e9",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
    ],
  },
};
