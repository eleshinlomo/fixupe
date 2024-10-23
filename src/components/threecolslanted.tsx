
const ThreeColsSlanted = ()=> {

    return (
    
    <section className="pb-4 relative block bg-gray-900">
    <div
      className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
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
        ></polygon>
      </svg>
    </div>
    
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="flex flex-wrap text-center justify-center">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold text-white">
            Set-up a landing page for your idea in just 5 minutes
              </h2>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
            Direct your traffic to your page and manage validate your idea.
              </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-12 justify-center">
        <div className="w-full lg:w-3/12 px-4 text-center">
          <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <i className="fas fa-medal text-xl"></i>
          </div>
          <h6 className="text-xl mt-5 font-semibold text-green-500">
            Register
              </h6>
          <p className="mt-2 mb-4 text-gray-500">
            Registration is quick and straight forward. You also get a dashboard.
              </p>
        </div>
        <div className="w-full lg:w-3/12 px-4 text-center">
          <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <i className="fas fa-poll text-xl"></i>
          </div>
          <h5 className="text-xl mt-5 font-semibold text-green-500">
            Set-up our landing page
              </h5>
          <p className="mt-2 mb-4 text-gray-500">
           Our AI will help you complete most of your texts and images needed.
              </p>
        </div>
        <div className="w-full lg:w-3/12 px-4 text-center">
          <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
            <i className="fas fa-lightbulb text-xl"></i>
          </div>
          <h5 className="text-xl mt-5 font-semibold text-green-500">
            Run campaigns
              </h5>
          <p className="mt-2 mb-4 text-gray-500">
            Start running campaigns and send your traffic to your landing page. Validate your idea.
              </p>
        </div> 
      </div>
    </div>
    </section>
    )
    }
    
    export default ThreeColsSlanted