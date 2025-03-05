import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export default function CardCarousel({ children }: { children: React.ReactNode }) {
    const [emblaRef, embla] = useEmblaCarousel({align: "center", loop: true});
    const [selectedIndex, setSelectedIndex] = useState(0);


    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

    useEffect(() => {
        if (!embla) return;

        embla.on("select", () => {
            const n = embla.selectedScrollSnap();
            setSelectedIndex(n);

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
        <div className="h-full w-full relative flex flex-col md:gap-5">
            {/* Carousel Container */}
            <div className="embla overflow-hidden h-full py-2" ref={emblaRef}>
                <div className="embla__container flex flex-nowrap gap-12 h-full items-center">{children}</div>
            </div>

            <div className="flex flex-row w-full justify-center gap-20">
                <button
                    onClick={scrollPrev}
                    className="relative collapse md:visible bg-gray-800 text-white text-3xl p-3 rounded-full shadow-xl hover:bg-gray-700 transition"
                >
                    ❮
                </button>
                {
                    <div className="flex flex-row gap-3 w-min justify-center items-center">
                        {embla && embla.slideNodes().map((_, i) => (
                            i < embla.slideNodes().length - 1 && <div key={i} className={`border-2 border-black w-3 h-3 rounded-full ${ i === selectedIndex ? "bg-indigo-500" : ""}`}></div>
                        ))}
                    </div>
                }
                <button
                    onClick={scrollNext}
                    className="relative collapse md:visible bg-gray-800 text-white text-3xl p-3 rounded-full shadow-xl hover:bg-gray-700 transition"
                >
                    ❯
                </button>
            </div>
        </div>
    );
}
