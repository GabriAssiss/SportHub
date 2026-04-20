import { useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface Slide {
    image: string;
    title: string;
    phrase: string;
}

export default function Carousel({ slides }: { slides: Slide[] }) {
    const [current, setCurrent] = useState(0);

    const previousSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);
    const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);

    return (
        <div className="overflow-hidden relative w-3/5 mx-auto rounded-2xl">
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((s, idx) => (
                    <div key={idx} className="min-w-full h-128 relative">
                        <img src={s.image} className="w-full h-full object-cover" alt={s.title} />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent flex flex-col items-center justify-end pb-16 px-4 text-center">
                            <h3 className="text-4xl font-bold text-white mb-2">{s.title}</h3>
                            <p className="text-lg text-white/85">{s.phrase}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={previousSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-2 transition-all"
            >
                <IoChevronBackOutline size={22} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-2 transition-all"
            >
                <IoChevronForwardOutline size={22} />
            </button>

   
            <div className="absolute bottom-4 flex justify-center gap-2 w-full">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`rounded-full transition-all duration-300 ${
                            i === current ? "bg-white w-5 h-3" : "bg-white/40 w-3 h-3"
                        }`}
                    />
                ))}
            </div>

        </div>
    );
}