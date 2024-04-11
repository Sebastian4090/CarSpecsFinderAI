import arrow from "../../down-arrow.svg";
import { useEffect, useState } from "react";

const ReturnTopButton = () => {
  const [isActiveButton, setIsActiveButton] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setIsActiveButton(true);
      } else {
        setIsActiveButton(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed z-50 bottom-14 right-8 h-12 w-12">
      {isActiveButton && (
        <button
          className="w-full bg-slate-700 border-[2px] border-slate-900 opacity-40 rounded-full p-2 transition-transform
          duration-150 ease-in-out hover:scale-125 hover:opacity-80"
          aria-label="Return to Top"
          onClick={goToTop}
        >
          <img
            src={arrow}
            className="w-full rotate-180 invert opacity-40"
            alt="arrow"
          />
        </button>
      )}
    </div>
  );
};

export default ReturnTopButton;
