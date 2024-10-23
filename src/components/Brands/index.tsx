import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className=" w-full bg-gray-light 
            py-8 dark:bg-gray-dark">
      <div className="">
        <div className="- flex flex-wrap">
          <div className="w-full text-center font-extrabold text-2xl">
          <p>AS SEEN ON</p>
            <div className="w-full flex flex-wrap items-center justify-center rounded-sm 
            py-8   md:py-[40px]  2xl:py-[60px]">
              
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[5px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-5 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={imageLight} alt={name} fill className="hidden dark:block" />
        <Image src={image} alt={name} fill className="block dark:hidden" />
      </a>
    </div>
  );
};
