export default function GameSection() {
  return (
    <section className="py-20 px-6 lg:px-12" id="game">
      <div className="max-w-7xl mx-auto">
        <div
          className="rounded-3xl overflow-hidden shadow-2xl relative"
          style={{
            backgroundImage: "url('/game-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="relative grid lg:grid-cols-2 gap-8 items-center p-10 lg:p-16">
            <div className="text-white bg-black/40 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Check out my vibe-coded game!
              </h2>
              <a
                href="https://stepans-emigrant-game.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Play Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
