"use client";

"use client";

import Link from "next/link";
import { useWorkout } from "../context/WorkoutContext";

export default function Navbar() {
    const { plan, saved } = useWorkout();

    return (
        <header className="border-b border-white/10 bg-[#0f1115]">
            <div className="mx-auto flex min-h-19 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">

                {/* Logo */}
                <Link
                    href="/"
                    className="shrink-0 text-xl font-black tracking-tight text-white"
                >
                    FIT<span className="text-[#ccff00]">LOG</span>
                </Link>

                {/* Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    <Link
                        href="/"
                        className="text-sm font-bold uppercase tracking-wide text-white transition hover:text-[#ccff00]"
                    >
                        Workout
                    </Link>

                    <Link
                        href="/my-plan"
                        className="text-sm font-bold uppercase tracking-wide text-white transition hover:text-[#ccff00]"
                    >
                        My Plan
                    </Link>
                </nav>

                {/* Counters */}
                <div className="flex items-center gap-2">
                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 border border-[#ccff00] bg-[#ccff00] px-3 py-2 text-xs font-black uppercase text-black transition hover:bg-transparent hover:text-[#ccff00]"
                    >
                        <span>Plan</span>
                        <span>{plan.length}</span>
                    </Link>

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 border border-white/30 px-3 py-2 text-xs font-black uppercase text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
                    >
                        <span>Saved</span>
                        <span>{saved.length}</span>
                    </Link>
                </div>

            </div>
        </header>
    );
}