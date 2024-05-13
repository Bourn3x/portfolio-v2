import { useCallback, useRef } from "react";
import Image from "next/image";
import { register } from "swiper/element/bundle";

const arrowContainerClass =
  "rounded-full absolute top-2/4 w-10 h-10 flex items-center justify-center bg-gray-300 bg-opacity-20 cursor-pointer hover:bg-gray-50 hover:bg-opacity-25 duration-150 z-20";

register();

export default function ImageSwiper({ images }) {
  const swiperRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <div className="p-4 md:p-7 rounded-lg bg-gradient-to-br from-accent-3 to-accent-4 relative">
        <div>
          <swiper-container
            ref={swiperRef}
            slides-per-view="1"
            navigation="false"
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: (index, className) => {
                return (
                  '<span class="' + className + '">' + (index + 1) + "</span>"
                );
              },
            }}
          >
            {images.map((img, i) => (
              <swiper-slide key={i} lazy="true">
                <img className="rounded-lg" src={img} alt={`img-${i}`} />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>

        {images.length > 1 && (
          <>
            <div
              onClick={handlePrev}
              className={`${arrowContainerClass} left-1 rotate-180`}
            >
              <Image src={"/Arrow.svg"} width="16" height="16" alt="arrow" />
            </div>

            <div
              onClick={handleNext}
              className={`${arrowContainerClass} right-1`}
            >
              <Image src={"/Arrow.svg"} width="16" height="16" alt="arrow" />
            </div>
          </>
        )}
      </div>
      <style jsx>{`
        .arrow {
          display: block;
          margin: 0 0 0 0;
          width: 12px;
          height: 12px;
          border-top: 2px solid #000;
          border-left: 2px solid #000;
        }

        .right {
          transform: rotate(135deg);
          -webkit-transform: rotate(135deg);
        }

        .left {
          transform: rotate(-45deg);
          -webkit-transform: rotate(-45deg);
        }
      `}</style>
    </>
  );
}
