import { useState } from "react";

import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const items = [];

function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDesktop = userMediaQuery("(min-width: 768px");

  const previousIndex = () => {};

  const nextIndex = () => {};

  const getVisibleImages = () => {
    const startIndex = currentImage % images.length;
    const visibleImages = [];

    for (
      let i = startIndex;
      visibleImages.length < (isDesktop ? 4 : 1);
      i = (i + 1) % images.length
    ) {
      visibleImages.push(images[i]);
    }

    return visibleImages;
  };

  return (
    <>
      <div>
        <div></div>
        <div className="flex flex-row justify-between items-center">
          <button>
            <ChevronLeftIcon />
          </button>
          <button>
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </>
  );
}

export default ServiceCarousel;
