import { useState, useEffect } from "react";
import { useImageFetch } from "../../assets/fetchImg/img";

const Search = () => {
  const [search, setSearch] = useState("");
  const [filteredClothes, setFilteredClothes] = useState([]);
  const clothes = useImageFetch();

  useEffect(() => {
    if (search === "") {
      setFilteredClothes([]);
    } else {
      const filtered = clothes.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredClothes(filtered);
    }
  }, [search, clothes]);

  const content = filteredClothes?.map((item) => (
    <div
      key={item.id}
      className="p-4 flex flex-col justify-center w-full max-w-[400px] mx-auto shadow"
    >
      <div className="flex flex-col justify-center items-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[300px] object-contain mb-2 transition hover:scale-110"
        />
        <p className="font-medium h-[70px] w-full text-gray-950 pl-6 pt-1">
          {item.title}
        </p>
      </div>
      <div className="flex justify-between items-center py-2 text-gray-900">
        <p>${item.price}</p>
        <p>
          {item.rating.rate} ({item.rating.count})
        </p>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col min-h-screen">
      <div className="m-4 flex justify-center items-center">
        <input
          className="w-full max-w-[400px] px-4 py-2 bg-neutral-100 rounded-[10px]"
          type="text"
          placeholder="search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex-grow">
        {filteredClothes.length > 0 && (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-0 mx-auto w-full max-w-7xl mt-20 transition-all duration-500">
            {content}
          </section>
        )}
        {search && filteredClothes.length === 0 && (
          <p className="text-center mt-10">No products found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
