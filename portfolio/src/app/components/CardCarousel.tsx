import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export default function CardCarousel({ children }: { children: React.ReactNode }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

    // Handle navigation buttons
    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <div className="h-2/3 w-full max-w-5xl mx-auto py-4 border-4 border-black relative">
            {/* Carousel Container */}
            <div className="overflow-hidden h-full" ref={emblaRef}>
                <div className="flex gap-6 h-full items-center">{children}</div>
            </div>

            {/* Left Navigation Button */}
            <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-x-20 -translate-y-1/2 bg-gray-800 text-white text-4xl p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
            >
                ❮
            </button>

            {/* Right Navigation Button */}
            <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 translate-x-20 -translate-y-1/2 bg-gray-800 text-white text-4xl p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
            >
                ❯
            </button>
        </div>
    );
}
