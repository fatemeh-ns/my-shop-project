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
  className="relative h-[500px] md:h-[712px] bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  <div className="absolute bottom-10 left-5 md:left-20 max-w-xs">
    <p className="text-white text-base md:text-lg py-4">
      Elevate Your Style Timeless Fashion, Sustainable Choices
    </p>
    <button className="text-sm bg-white px-4 py-2">Shop Now</button>
  </div>
</section>

<section className="relative px-4 md:px-10 py-10 md:h-[650px]">
  <p className="max-w-md px-4 py-4 text-sm md:text-base">
    Elevate your lifestyle with a more intelligent, superior wardrobe...
  </p>
  <div className="flex flex-col md:flex-row items-center justify-center md:justify-around gap-6 pb-8">
    {[dressImage, skirtImage, bagImage].map((img, i) => (
      <div
        key={i}
        className="w-full max-w-[440px] h-[400px] md:h-[532px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    ))}
  </div>
</section>

<section className="px-4 md:px-10 pb-10">
  <p className="py-10 px-4 text-lg md:text-xl">What to Wear Now</p>
  <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-2">
    {[bagImage1, bagImage2, overcoatImage, hatImage, sweaterImage].map((img, i) => (
      <div
        key={i}
        className="w-full h-[200px] md:h-[280px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    ))}
  </section>
</section>

<section className="px-4 md:px-10 py-10 flex flex-col lg:flex-row justify-between items-center gap-6">
  {[collectionBanner1, collectionBanner2].map((img, i) => (
    <div
      key={i}
      className="w-full lg:w-[50%] h-[400px] md:h-[719px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${img})` }}
    ></div>
  ))}
</section>

<section className="flex flex-col justify-around items-center text-center bg-neutral-100 py-20 px-4">
  <p className="max-w-xl font-medium text-lg md:text-xl tracking-wide">
    The Art of Fewer, Better Choices
  </p>
  <p className="max-w-2xl text-sm md:text-base pt-4">
    Opting for quality over quantity means selecting timeless...
  </p>
</section>

<section className="flex flex-col justify-around pb-5 px-4">
  <div className="flex justify-center items-center">
    <p className="py-10 px-4 font-medium text-lg md:text-xl">Shop Instagram</p>
  </div>
  <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
    {[lastPartImage1, lastPartImage2, lastPartImage3, lastPartImage4, lastPartImage5].map((img, i) => (
      <div
        key={i}
        className="w-full h-[200px] md:h-[252px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    ))}
  </section>
</section>

    </>
  );
}
