export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 mt-12">
      <div className="max-w-5xl mx-auto">
        <div className="border-t border-gray-200 pt-6">
          <p className="text-center text-gray-500 text-xs">
            © {currentYear} Stepan Sazanovets. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
