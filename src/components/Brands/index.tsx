import { Brand } from "@/types/brand";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-20">
      <div className="container">
        <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
           Services We Provide
        </h2>
        <div className="-mx-4 flex flex-wrap justify-center">
          {brandsData.map((brand) => (
            <SingleBrand key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, imageLight, name, icon: Icon } = brand;

  return (
    <div className="w-1/2 px-3 py-4 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
      <div className="group flex h-24 flex-col items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <a
          target="_blank"
          rel="nofollow noreferrer"
          className="flex flex-col items-center justify-center gap-2"
        >
          {Icon && (
            <Icon className="text-4xl text-gray-600 transition group-hover:text-primary dark:text-gray-300" />
          )}
          <span className="text-sm font-medium text-gray-700 transition group-hover:text-primary dark:text-gray-200">
            {name}
          </span>
        </a>
      </div>
    </div>
  );
};
