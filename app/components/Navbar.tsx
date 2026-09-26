"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWorkout } from "../context/WorkoutContext";

export default function Navbar() {
    const { plan, saved } = useWorkout();
    const pathname = usePathname();

    const isWorkoutActive = pathname === "/";
    const isPlanActive = pathname === "/my-plan";

    return (
        <header className="border-b border-white/10 bg-[#0c0d10]">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">

                {/* Top Row */}
                <div className="flex h-20.25 items-center justify-between">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex shrink-0 items-center gap-3"
                    >
                        <Image
                            src="/logo.png"
                            alt="FitLog"
                            width={42}
                            height={42}
                            className="h-9 w-9 object-contain"
                        />

                        <span className="text-xl font-black tracking-wide text-white">
                            FITLOG
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="ml-8 hidden items-center gap-2 md:flex">
                        <Link
                            href="/"
                            className={`rounded-full px-5 py-2 text-sm font-bold uppercase transition ${
                                isWorkoutActive
                                    ? "bg-[#283618] text-[#ccff00]"
                                    : "text-gray-400 hover:text-white"
                            }`}
                        >
                            Workouts
                        </Link>

                        <Link
                            href="/my-plan"
                            className={`rounded-full px-5 py-2 text-sm font-bold uppercase transition ${
                                isPlanActive
                                    ? "bg-[#283618] text-[#ccff00]"
                                    : "text-gray-400 hover:text-white"
                            }`}
                        >
                            My Plan
                        </Link>
                    </nav>

                    {/* Counters */}
                    <div className="flex items-center gap-2">

                        {/* Plan */}
                        <Link
                            href="/my-plan"
                            className="flex items-center gap-2 rounded-full border border-white/10 bg-[#111318] px-3 py-2 text-xs font-bold uppercase text-gray-300 transition hover:border-[#ccff00]/40 sm:px-4"
                        >
                            <span>Plan</span>
                            <span className="w-5 h-5 rounded-full bg-[#CCFF00] text-black font-bold text-lg flex items-center justify-center">
                                {plan.length}
                            </span>
                        </Link>

                        {/* Saved */}
                        <Link
                            href="/my-plan"
                            className="flex items-center gap-2 rounded-full border border-white/10 bg-[#111318] px-3 py-2 text-xs font-bold uppercase text-gray-300 transition hover:border-[#ccff00]/40 sm:px-4"
                        >
                            <span>Saved</span>
                            <span className="w-5 h-5 rounded-full bg-[#CCFF00] text-black font-bold text-lg flex items-center justify-center">
                                {saved.length}
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex border-t border-white/10 py-3 md:hidden">
                    <Link
                        href="/"
                        className={`flex-1 py-2 text-center text-xs font-bold uppercase tracking-wider transition ${
                            isWorkoutActive
                                ? "text-[#ccff00]"
                                : "text-gray-500 hover:text-white"
                        }`}
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`flex-1 py-2 text-center text-xs font-bold uppercase tracking-wider transition ${
                            isPlanActive
                                ? "text-[#ccff00]"
                                : "text-gray-500 hover:text-white"
                        }`}
                    >
                        My Plan
                    </Link>
                </nav>

            </div>
        </header>
    );
}