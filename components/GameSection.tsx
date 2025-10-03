export default function GameSection() {
  return (
    <section className="py-16 px-4" id="game">
      <div className="max-w-4xl mx-auto">
        <div className="card bg-gradient-to-r from-accent to-secondary text-white shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300">
          <div className="card-body items-center text-center">
            {/* Game Icon */}
            <div className="text-6xl md:text-7xl mb-4" role="img" aria-label="Game controller">
              🎮
            </div>

            {/* Title */}
            <h2 className="card-title text-3xl md:text-4xl mb-4">
              Check Out My Game
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl mb-6 max-w-2xl opacity-90">
              Dive into an immersive gaming experience. Hours of entertainment await you.
            </p>

            {/* CTA Button */}
            <div className="card-actions">
              <a
                href="#"
                className="btn btn-lg bg-white text-accent hover:bg-gray-100 hover:scale-110 transition-transform border-0"
                aria-label="Play the game"
              >
                Play Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
