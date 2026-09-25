export default function Hero() {
    return (
        <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">

            {/* Left side */}
            <div>
            <p className="mb-4 text-sm font-bold tracking-[0.25em] text-[#ccff00]">
                WORKOUT LIBRARY
            </p>

            <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Train With Intent.
                <br />
                Log Every Set.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
                Build consistency with a focused library of effective lifts.
                Choose your workout, track your progress, and keep moving forward.
            </p>

            <a
                href="#library"
                className="mt-8 inline-flex items-center gap-3 bg-[#ccff00] px-6 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-white"
            >
                Browse Workouts
                <span>↓</span>
            </a>
            </div>

            {/* Right side */}
            <div className="relative">
            <div className="aspect-4/5 overflow-hidden bg-white/5">
                <img
  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
  alt="Person working out"
  className="h-full w-full object-cover"
/>
            </div>
            </div>

        </div>
        </section>
    );
    }