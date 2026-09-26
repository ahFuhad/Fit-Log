import Link from "next/link";

export default function Hero() {
    return (
        <section className="border-b border-white/10 bg-[#0f1115]">
        <div className="mx-auto grid min-h-155 max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
            
            {/* Left Content */}
            <div>
            <p className="text-sm font-bold tracking-[0.25em] text-[#ccff00]">
                WORKOUT LIBRARY
            </p>

            <h1 className="mt-5 max-w-3xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Train With Intent.
                <br />
                Log Every Set.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <Link
                href="#library"
                className="mt-8 inline-flex items-center gap-3 bg-[#ccff00] px-6 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-white"
            >
                Browse Workouts
                <span aria-hidden="true">→</span>
            </Link>
            </div>

            {/* Right Visual */}
            <div className="relative flex min-h-90 items-center justify-center lg:min-h-125">
            <div className="absolute inset-0 bg-[#ccff00]/5" />

            <div className="relative flex h-full w-full items-center justify-center border border-white/10 bg-white/2">
                <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-600">
                FitLog
                <br />
                Workout Visual
                </p>
            </div>
            </div>
        </div>
        </section>
    );
}