import { useState, useEffect } from "react";
import arrow from "../../down-arrow.svg";

type ImageSliderProps = {
  photosUrls: {
    url: string;
    alt: string;
    text: string;
  }[];
};

const ImageSlider = ({ photosUrls }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (imageIndex !== photosUrls.length - 1) {
        setImageIndex(imageIndex + 1);
      } else {
        setImageIndex(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [imageIndex]);

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return photosUrls.length - 1;
      return index - 1;
    });
  };

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === photosUrls.length - 1) return 0;
      return index + 1;
    });
  };

  return (
    <section
      aria-label="Image Slider"
      className="w-full h-full flex justify-center my-10 xl:my-20"
    >
      <a
        href="#after-image-slider"
        className="sr-only focus-visible:not-sr-only focus-visible:bg-white focus-visible:absolute focus-visible:z-50 focus-visible:p-2 focus-visible:border"
      >
        Skip Image Slider
      </a>
      <div className="w-12/12 sm:w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 h-full flex justify-center relative shadow-lg lg:shadow-2xl rounded-2xl overflow-hidden">
        <div className="w-full h-full flex overflow-hidden">
          {photosUrls.map(({ url, alt, text }, index) => (
            <div
              className="w-full h-auto rounded-2xl flex-shrink-0 flex-grow-0"
              key={index}
            >
              <img
                key={url}
                src={url}
                alt={alt}
                aria-hidden={imageIndex !== index}
                className="w-full h-auto rounded-2xl transition-[translate] duration-300 ease-in-out motion-reduce:transition-none"
                style={{ translate: `${-100 * imageIndex}%` }}
              />
              <div
                key={alt}
                className="flex absolute bg-black opacity-40 top-0 left-0 m-2 p-2 sm:m-6 sm:p-6 md:m-8 md:p-8 xl:m-10
              2xl:m-10 max-w-2xl xl:max-w-4xl 2xl:max-w-5xl rounded-md"
              >
                <p
                  key={text}
                  className="font-primary text-sm sm:text-2xl xl:text-3xl 2xl:text-4xl text-pretty text-white select-none"
                >
                  {photosUrls[imageIndex].text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="transition ease-in-out hover:bg-black/[0.2] active:bg-black/[0.3] 
        flex items-center absolute top-0 bottom-0 left-0 rounded-l-2xl p-1 z-10 focus-visible:bg-black/[0.2]"
          onClick={showPrevImage}
        >
          <img
            src={arrow}
            className="w-8 sm:w-10 xl:w-12 2xl:w-14 h-auto rotate-90 invert-[1] opacity-50 pointer-events-none"
            alt="arrow-left"
            aria-label="View Previous Image"
          />
        </button>
        <button
          className="transition ease-in-out hover:bg-black/[0.2] active:bg-black/[0.3] 
        flex items-center absolute top-0 bottom-0 right-0 rounded-r-2xl p-1 z-10 focus-visible:bg-black/[0.2]"
          onClick={showNextImage}
        >
          <img
            src={arrow}
            className="w-8 sm:w-10 xl:w-12 2xl:w-14 h-auto -rotate-90 invert-[1] opacity-50 pointer-events-none"
            alt="arrow-right"
            aria-label="View Next Image"
          />
        </button>
        <div className="flex w-full h-full absolute justify-center items-end p-2 sm:p-5 xl:p-6 2xl:p-7 gap-2">
          {photosUrls.map((_, index) => (
            <div
              key={index}
              className="select-none cursor-pointer bottom-1 left-0 -translate-x-1/2 flex"
              aria-label={`View Image ${index + 1}`}
              onClick={() => setImageIndex(index)}
            >
              {index === imageIndex ? (
                <button
                  className="bg-indigo-700 border-[2px] border-indigo-700 rounded-full p-2 xl:p-3
                 transition-transform duration-150 ease-in-out hover:scale-125 focus-visible:outline focus-visible:outline-white"
                ></button>
              ) : (
                <button
                  className="rounded-full border-[2px] border-indigo-700 p-2 xl:p-3 transition-transform
                 duration-150 ease-in-out hover:scale-125 focus-visible:outline focus-visible:outline-white"
                ></button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div id="after-image-slider" className="absolute bottom-0"></div>
    </section>
  );
};

export default ImageSlider;
