const Features = () => {
  return (
    <section className="relative block bg-gray-900 pb-24">
      {/* Top SVG Divider */}
      <div
        className="absolute top-0 left-0 right-0 w-full pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-900 fill-current"
            points="2560 0 2560 100 0 100"
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 pt-24 lg:pb-8">
        {/* Heading Section */}
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-white">
              Building SaaS Solutions for Real-Life Problems
            </h2>
            <p className="text-lg leading-relaxed mt-4 mb-8 text-gray-400">
              I’m excited to collaborate and help build the next big thing.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="flex flex-wrap mt-12 justify-center">
          {/* Feature 1: Application Security */}
          <div className="w-full lg:w-3/12 px-4 text-center mb-8 lg:mb-0">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i className="fas fa-medal text-xl"></i>
            </div>
            <h6 className="text-xl mt-5 font-semibold text-blue-400">
              Application Security
            </h6>
            <p className="mt-2 mb-4 text-gray-400">
              A cybersecurity-focused approach to app development.
            </p>
          </div>

          {/* Feature 2: AI Technology */}
          <div className="w-full lg:w-3/12 px-4 text-center mb-8 lg:mb-0">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i className="fas fa-poll text-xl"></i>
            </div>
            <h5 className="text-xl mt-5 font-semibold text-blue-400">
              AI Technology
            </h5>
            <p className="mt-2 mb-4 text-gray-400">
              Proven experience in AI implementation and integration.
            </p>
          </div>

          {/* Feature 3: E-commerce App */}
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i className="fas fa-lightbulb text-xl"></i>
            </div>
            <h5 className="text-xl mt-5 font-semibold text-blue-400">
              E-commerce Apps
            </h5>
            <p className="mt-2 mb-4 text-gray-400">
              A portfolio of top-notch e-commerce applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;