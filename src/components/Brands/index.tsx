import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-xs bg-gray-light px-8 py-4 dark:bg-gray-dark sm:px-10 md:px-[20px] md:py-[40px] xl:p-[20px] 2xl:px-[70px] 2xl:py-[60px]">
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
  const {  image, imageLight, name,icon:Icon } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
  <a
    target="_blank"
    rel="nofollow noreferrer"
    className="flex items-center justify-center gap-2 relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
  >
    {Icon && <Icon className="text-2xl" />}
    <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">
      {name}
    </span>
  </a>
</div>

  );
};
