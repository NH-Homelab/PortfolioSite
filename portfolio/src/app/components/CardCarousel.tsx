import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";

export default function CardCarousel({ children }: { children: React.ReactNode }) {
    const [emblaRef, embla] = useEmblaCarousel({align: "center", loop: true});

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

    useEffect(() => {
        if (!embla) return;

        embla.on("select", () => {
            const n = embla.selectedScrollSnap();
            console.log(n);

            if(n === embla.slideNodes().length - 1){
                if (embla.previousScrollSnap() === 0) {
                    embla.scrollTo(embla.slideNodes.length - 2);
                    return;
                } else {
                    embla.scrollTo(0);
                    return;
                }
            }
        })
    }, [embla]);

    return (
        <div className="h-7/8 md:h-3/4 w-full max-h-[700px] py-4 relative">
            {/* Carousel Container */}
            <div className="embla overflow-hidden h-full" ref={emblaRef}>
                <div className="embla__container flex flex-nowrap gap-12 h-full items-center">{children}</div>
            </div>

            {/* Left Navigation Button */}
            <button
                onClick={scrollPrev}
                className="absolute left-60 translate-x-80 bottom-0 bg-gray-800 text-white text-4xl p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
            >
                ❮
            </button>

            {/* Right Navigation Button */}
            <button
                onClick={scrollNext}
                className="absolute right-60 -translate-x-80 bottom-0 bg-gray-800 text-white text-4xl p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
            >
                ❯
            </button>
        </div>
    );
}
