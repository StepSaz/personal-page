export default function GameSection() {
  return (
    <section className="section-spacing bg-brand-bg-game" id="game">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Check out my vibe-coded <span className="gradient-text">game</span> 🎮
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A retro pixel-art platformer about a Business Analyst&apos;s
            journey from Minsk to Warsaw.
          </p>
        </div>

        {/* Game Image with Button */}
        <div className="card-base-lg overflow-hidden">
          <div
            className="relative flex items-center justify-center p-10 lg:p-16 min-h-[400px]"
            style={{
              backgroundImage: "url('/game-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <a
              href="https://stepans-emigrant-game.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-purple text-white font-bold text-lg rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all hover:bg-brand-purple/90"
            >
              Play demo
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
