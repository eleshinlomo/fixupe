import Image from 'next/image'
import image from '../public/boxes.png'

const TechStack = () =>  {

  const imageData: any = (image)

return (

<section className="relative py-5 bg-blue-300 pb-8">
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
      className="text-white fill-current"
      points="2560 0 2560 100 0 100"
    ></polygon>
  </svg>
</div>

<div className="container mx-auto px-4">
  <div className="items-center flex flex-wrap">
    <div className="w-full md:w-1/2 ml-auto mr-auto px-4">
      <Image
        alt="..."
        className="max-w-full rounded-lg shadow-lg"
        src={image}
        
      />
    </div>
    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
      <div className="md:pr-12">
        <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg
         rounded-full bg-blue-600">
          <i className="fas fa-rocket text-xl"></i>
        </div>
        <h3 className="text-3xl font-semibold">
          Providing top notch software engineering skills
            </h3>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          Attention to details plus...
            </p>
        <ul className="list-none mt-6">
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                  <i className="fas fa-fingerprint"></i>
                </span>
              </div>
              <div>
                <h4 className="text-gray-600">
                  Using React and Next JS stack
                    </h4>
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                  <i className="fab fa-html5"></i>
                </span>
              </div>
              <div>
                <h4 className="text-gray-600">SQL & PostGRES</h4>
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                  <i className="far fa-paper-plane"></i>
                </span>
              </div>
              <div>
                <h4 className="text-gray-600">Cloud Containers implementation</h4>
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                  <i className="far fa-paper-plane"></i>
                </span>
              </div>
              <div>
                <h4 className="text-gray-600">Django and Flask</h4>
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                  <i className="far fa-paper-plane"></i>
                </span>
              </div>
              <div>
                <h4 className="text-gray-600">Typescript and Node JS</h4>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</section>)
}
export default TechStack