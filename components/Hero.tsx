export default function Hero() {
  return (
    <section className="min-h-screen flex items-center py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">Welcome</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
              Hi! I&apos;m<br />
              <span className="gradient-text">Stepan Sazanovets</span>
            </h1>

            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>

            <p className="text-xl lg:text-2xl font-semibold text-gray-700 mb-4">
              Business Analyst
            </p>

            <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-xl">
              Over 10 years of experience in IT. Started as a system analyst, the last 5 years as a business analyst.
              Worked with ERP/MRP systems, in IoT and manufacturing domains. Currently working in the AI domain at RedCore.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://www.linkedin.com/in/stepansazanovets/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Let&apos;s Connect
              </a>
              <a
                href="https://t.me/psyreq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-gray-700 bg-white border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 rounded-lg transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.093.036.306.02.472z"/>
                </svg>
                Telegram
              </a>
            </div>
          </div>

          {/* Right Content - Image with Stats */}
          <div className="relative">
            <div className="relative z-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/avatar.jpg"
                alt="Stepan Sazanovets"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>

            {/* Stats Cards */}
            <div className="absolute top-8 -right-4 bg-white rounded-xl shadow-xl p-6 z-20 hidden lg:block">
              <div className="text-4xl font-bold gradient-text">10+</div>
              <div className="text-sm text-gray-600 mt-1">Years of experience</div>
            </div>

            <div className="absolute bottom-8 -left-4 bg-white rounded-xl shadow-xl p-6 z-20 hidden lg:block">
              <div className="text-4xl font-bold gradient-text">5+</div>
              <div className="text-sm text-gray-600 mt-1">Domains worked in</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
