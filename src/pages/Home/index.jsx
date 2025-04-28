import imageData from "../../assets/fetchImg/homePageImg";
export default function Home() {
  const {
    heroImage,
    dressImage,
    skirtImage,
    bagImage,
    bagImage1,
    bagImage2,
    overcoatImage,
    hatImage,
    sweaterImage,
    collectionBanner1,
    collectionBanner2,
    lastPartImage1,
    lastPartImage2,
    lastPartImage3,
    lastPartImage4,
    lastPartImage5,
  } = imageData;
  return (
    <>
      <section
        className="relative h-[712px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute bottom-10 left-20">
          <p className="text-[#fff] text-lg w-[180px] py-4">
            Elevate Your Style Timeless Fashion, Sustainable Choices
          </p>
          <button className="text-sm bg-[#fff] px-2 py-[5px]">Shop Now</button>
        </div>
      </section>
      <section className="relative h-[650px] px-10">
        <p className="w-[510px] px-[1rem] py-7">
          Elevate your lifestyle with a more intelligent, superior wardrobe. Our
          range is crafted sustainably with longevity in mind.
        </p>
        <div className="flex items-center justify-around pb-8">
          <div
            className="w-[440px] h-[532px]  bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${dressImage})` }}
          ></div>
          <div
            className="w-[440px]  h-[532px]  bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${skirtImage})` }}
          ></div>
          <div
            className="w-[440px]  h-[532px]  bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bagImage})` }}
          ></div>
        </div>
      </section>
      <section className="px-10 pb-10">
        <p className="py-10 px-4">What to Wear Now</p>
        <section className="grid grid-cols-5 px-2">
          <div
            className="w-[260px] h-[280px] mx-autobg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bagImage1})` }}
          ></div>
          <div
            className="w-[260px] h-[280px] mx-autobg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bagImage2})` }}
          ></div>
          <div
            className="w-[260px] h-[280px] mx-autobg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${overcoatImage})` }}
          ></div>
          <div
            className="w-[260px] h-[280px] mx-autobg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${hatImage})` }}
          ></div>
          <div
            className="w-[260px] h-[280px] mx-autobg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${sweaterImage})` }}
          ></div>
        </section>
      </section>
      <section className="px-10 py-10 flex justify-between">
        <div
          className="h-[719px] w-[1000px] mx-3 mx-autobg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${collectionBanner1})` }}
        ></div>
        <div
          className="h-[719px] w-[1000px] mx-3 mx-autobg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${collectionBanner2})` }}
        ></div>
      </section>
      <section className="flex flex-col justify-around items-center h-[443px] text-center bg-neutral-100 py-20">
        <p className="w-[30rem] font-medium text-xl md:tracking-wide">
          The Art of Fewer, Better Choices
        </p>
        <p className="w-[38rem]">
          Opting for quality over quantity means selecting timeless, durable,
          and responsibly made items. This approach simplifies our lives and
          fosters a deeper appreciation for our surroundings. Emphasizing
          longevity and responsible production resonates with a more sustainable
          and mindful lifestyle.
        </p>
      </section>
      <section className="flex flex-col justify-around pb-5">
        <div className="flex justify-center items-center">
          <p className="py-10 px-4 font-medium md:tracking-wide">
            Shop Instagram
          </p>
        </div>
        <section className="grid grid-cols-5 px-2">
          <div
            className="w-[270px] h-[252px] mx-auto bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${lastPartImage1})` }}
          ></div>
          <div
            className="w-[270px] h-[252px] mx-auto bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${lastPartImage2})` }}
          ></div>
          <div
            className="w-[270px] h-[252px] mx-auto bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${lastPartImage3})` }}
          ></div>
          <div
            className="w-[270px] h-[252px] mx-auto bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${lastPartImage4})` }}
          ></div>
          <div
            className="w-[270px] h-[252px] mx-auto bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${lastPartImage5})` }}
          ></div>
        </section>
      </section>
    </>
  );
}
