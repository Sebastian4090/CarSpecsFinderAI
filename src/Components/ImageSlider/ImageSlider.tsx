import { useState } from "react";
import arrow from "../../down-arrow.svg";

type ImageSliderProps = {
  photosUrls: {
    url: string;
    alt: string;
    msg: string;
  }[];
};

const ImageSlider = ({ photosUrls }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState<number>(0);

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
      className="w-full h-full flex justify-center my-20"
    >
      <a
        href="#after-image-slider"
        className="sr-only focus-visible:not-sr-only focus-visible:bg-white focus-visible:absolute focus-visible:z-50 focus-visible:p-2 focus-visible:border"
      >
        Skip Image Slider
      </a>
      <div className="w-9/12 h-full flex justify-center relative shadow-2xl rounded-2xl overflow-hidden">
        <div className="w-full h-full flex overflow-hidden">
          {photosUrls.map(({ url, alt }, index) => (
            <img
              key={url}
              src={url}
              alt={alt}
              aria-hidden={imageIndex !== index}
              className="w-full h-auto rounded-2xl flex-shrink-0 flex-grow-0 transition-[translate] duration-300 ease-in-out motion-reduce:transition-none"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
        </div>
        <button
          className="transition ease-in-out hover:bg-black/[0.2] active:bg-black/[0.3] 
        flex items-center absolute top-0 bottom-0 left-0 rounded-l-2xl p-1 z-10 focus-visible:bg-black/[0.2]"
          onClick={showPrevImage}
        >
          <img
            src={arrow}
            className="w-10 h-auto rotate-90 invert-[1] opacity-50 pointer-events-none"
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
            className="w-10 h-auto -rotate-90 invert-[1] opacity-50 pointer-events-none"
            alt="arrow-right"
            aria-label="View Next Image"
          />
        </button>
        <div className="flex w-full h-full absolute justify-center items-end p-5 gap-2">
          {photosUrls.map((_, index) => (
            <div
              key={index}
              className="select-none cursor-pointer bottom-1 left-0 -translate-x-1/2 flex"
              aria-label={`View Image ${index + 1}`}
              onClick={() => setImageIndex(index)}
            >
              {index === imageIndex ? (
                <button
                  className="bg-indigo-700 border-[2px] border-indigo-700 rounded-full p-2
                 transition-transform duration-150 ease-in-out hover:scale-125 focus-visible:outline focus-visible:outline-white"
                ></button>
              ) : (
                <button
                  className="rounded-full border-[2px] border-indigo-700 p-2 transition-transform
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
