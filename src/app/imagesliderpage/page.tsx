
import ImageSlider from "@/components/imageslider/imageslider";
import Image from "next/image";


const ImageSliderPage = () => {
  return (
    <section className=" w-full bg-gray-light 
            py-8 dark:bg-gray-dark">
      <div className="">
        <div className="- flex flex-wrap">
          <div className="w-full text-center font-extrabold text-2xl">
          <p>AS SEEN ON</p>
            <div className="w-full flex flex-wrap items-center justify-center rounded-sm 
            py-8   md:py-[40px]  2xl:py-[60px]">
              
              
                <ImageSlider />
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSliderPage;


