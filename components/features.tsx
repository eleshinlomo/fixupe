
const Features = ()=> {

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

<div className="container mx-auto px-4 pt-24 lg:pb-8">
  <div className="flex flex-wrap text-center justify-center">
    <div className="w-full lg:w-6/12 px-4">
      <h2 className="text-4xl font-semibold text-white">
        Good experience building SaaS that solves real-life problems
          </h2>
      <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
        Happy to join your team in building the next big thing.
          </p>
    </div>
  </div>
  <div className="flex flex-wrap mt-12 justify-center">
    <div className="w-full lg:w-3/12 px-4 text-center">
      <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
        <i className="fas fa-medal text-xl"></i>
      </div>
      <h6 className="text-xl mt-5 font-semibold text-blue-500">
        Application Security
          </h6>
      <p className="mt-2 mb-4 text-gray-500">
        Cybersecurity focused app development approach.
          </p>
    </div>
    <div className="w-full lg:w-3/12 px-4 text-center">
      <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
        <i className="fas fa-poll text-xl"></i>
      </div>
      <h5 className="text-xl mt-5 font-semibold text-blue-500">
        AI Technology
          </h5>
      <p className="mt-2 mb-4 text-gray-500">
       Good experience with AI implementation.
          </p>
    </div>
    <div className="w-full lg:w-3/12 px-4 text-center">
      <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
        <i className="fas fa-lightbulb text-xl"></i>
      </div>
      <h5 className="text-xl mt-5 font-semibold text-blue-500">
        E-commerce App 
          </h5>
      <p className="mt-2 mb-4 text-gray-500">
        Top-notch e-commerce application portfolio.
          </p>
    </div> 
  </div>
</div>
</section>
)
}

export default Features