import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="bg-[#0c0d10] px-5 py-8 sm:px-8 lg:py-12">
            <div className="mx-auto grid max-w-7xl items-center overflow-hidden rounded-3xl border border-[#1c1f28] bg-[#111318] lg:grid-cols-2">

                {/* Left Content */}
                <div className="px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">

                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="mt-5 max-w-2xl text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl">
                        Train With Intent.
                        <br />
                        Log Every Set.
                    </h1>

                    <p className="mt-7 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today&apos;s plan, and watch the week&apos;s
                        work add up.
                    </p>

                    <Link
                        href="#library"
                        className="mt-7 inline-block rounded-[10px] bg-[#ccff00] px-6 py-4 text-sm font-black uppercase text-black transition hover:bg-white active:scale-95"
                    >
                        Browse Workouts
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>

                {/* Right 3D Visual */}
                <div className="flex min-h-80 items-center justify-center px-6 py-8 sm:min-h-105 lg:min-h-125 lg:px-8">
                    <Image
                        src="/banner1.png"
                        alt="3D fitness workout model"
                        width={700}
                        height={600}
                        priority
                        className="h-auto w-full max-w-sm object-contain sm:max-w-md lg:max-w-lg"
                    />
                </div>

            </div>
        </section>
    );
}