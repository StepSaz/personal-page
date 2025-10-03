export default function Hero() {
  return (
    <section className="py-16 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Avatar */}
        <div className="avatar mb-8">
          <div className="w-24 md:w-28 lg:w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
            <img
              src="/avatar.png"
              alt="Stepan Sazanavets"
              className="object-cover"
            />
          </div>
        </div>

        {/* Name with gradient */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Stepan Sazanavets
        </h1>

        {/* Bio */}
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
          Over 10 years of experience in IT. Started as a system analyst, the last 5 years as a business analyst.
          Worked with ERP/MRP systems, in IoT and manufacturing domains. Currently working in the AI domain at RedCore.
          In my free time, I run a Telegram channel and do vibe-coding.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://linkedin.com/in/stepan-sazanavets"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg w-full sm:w-auto hover:scale-105 transition-transform"
            aria-label="Visit LinkedIn profile"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a
            href="https://t.me/psyreq"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info btn-lg w-full sm:w-auto hover:scale-105 transition-transform"
            aria-label="Visit Telegram channel"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.093.036.306.02.472z"/>
            </svg>
            Telegram @psyreq
          </a>
        </div>
      </div>
    </section>
  );
}
