import MediumNews from "./MediumNews";

const HorizontalNews = () => {
  return (
    <div className=" bg-white rounded-xl py-7   w-full shadow-sm overflow-x-auto">
      <div className=" flex items-center px-7 justify-between shadow-sm  py-1  pb-4 border-b">
        <div className="flex gap-x-2">
          <span className="text-lg font-bold">Trending News</span>
        </div>
      </div>

      <div className="py-7 bg-white flex justify-end ">
        <div className="flex mx-auto   w-full gap-x-6 py-2 overflow-x-auto scrollbar-none relative bg-transparent ">
            <MediumNews/>
            <MediumNews/>
            <MediumNews/>
        </div>
      </div>
    </div>
  );
};

export default HorizontalNews;
