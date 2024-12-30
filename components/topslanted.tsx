
/// Page Sections
const TopSlanted = () => {

return (
 <div>
<div className="relative  py-32 flex text-center items-center justify-center bg-blue-700" 
   >
    {/* <div className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{
        backgroundImage: `${hero_bg_img}`
      }}>
      <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
    </div> */}
    <div className=" w-full">
      <div className=" flex bottom flex-wrap justify-center items-center">
        <div className="text-center">
          <div className="flex flex-col justify-center px-4">
            <h1 className="text-white font-extrabold text-4xl md:text-5xl">
              Making your dream come true with codes.
                </h1>
            <p className="mt-4 text-lg text-blue-300">
              Explore some of the world&apos;s problems getting solved with technology.
            </p>
          </div>
        </div>
  
      </div>
    </div>
    <div
      className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
      style={{ height: "70px" }}
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
          className="text-gray-300 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
  </div>
  </div>
  )
  }

  export default TopSlanted