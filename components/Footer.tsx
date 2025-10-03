export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <p className="text-gray-600 opacity-60">
          © {currentYear} Stepan Sazanavets. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
