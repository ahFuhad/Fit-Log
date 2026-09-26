"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useWorkout } from "../context/WorkoutContext";

export default function MyPlan() {
    const {
        plan,
        saved,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
    } = useWorkout();

    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
    const [toast, setToast] = useState("");

    const currentWorkouts = activeTab === "plan" ? plan : saved;

    const workouts = currentWorkouts.filter(
        (workout, index, array) =>
            array.findIndex((item) => item.id === workout.id) === index
    );

    const totalMinutes = plan.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = plan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    function showToast(message: string) {
        setToast(message);

        setTimeout(() => {
            setToast("");
        }, 2500);
    }

    function handleRemove(id: number) {
        if (activeTab === "plan") {
            removeFromPlan(id);
            showToast("Workout removed from your plan");
        } else {
            removeFromSaved(id);
            showToast("Workout removed from saved");
        }
    }

    function handleDone(id: number) {
        markAsDone(id);
        showToast("Workout marked as done");
    }

    return (
        <main className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

            {/* Header */}
            <div>
                <p className="text-sm font-bold tracking-[0.25em] text-[#ccff00]">
                    FITLOG
                </p>

                <h1 className="mt-3 text-5xl font-black uppercase">
                    MY PLAN
                </h1>

                <p className="mt-3 text-gray-400">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            {/* Metrics */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">

                <div className="border border-white/10 p-6">
                    <p className="text-xs font-bold uppercase text-gray-500">
                        Exercises
                    </p>

                    <p className="mt-2 text-3xl font-black">
                        {plan.length}
                    </p>
                </div>

                <div className="border border-white/10 p-6">
                    <p className="text-xs font-bold uppercase text-gray-500">
                        Minutes
                    </p>

                    <p className="mt-2 text-3xl font-black">
                        {totalMinutes}
                    </p>
                </div>

                <div className="border border-white/10 p-6">
                    <p className="text-xs font-bold uppercase text-gray-500">
                        Calories
                    </p>

                    <p className="mt-2 text-3xl font-black">
                        {totalCalories}
                    </p>
                </div>

            </div>

            {/* Tabs */}
            <div className="mt-12 flex gap-8 border-b border-white/10">

                <button
                    type="button"
                    onClick={() => setActiveTab("plan")}
                    className={`cursor-pointer pb-4 text-sm font-black uppercase transition ${
                        activeTab === "plan"
                            ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                            : "text-gray-500 hover:text-white"
                    }`}
                >
                    Today&apos;s Plan
                </button>

                <button
                    type="button"
                    onClick={() => setActiveTab("saved")}
                    className={`cursor-pointer pb-4 text-sm font-black uppercase transition ${
                        activeTab === "saved"
                            ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                            : "text-gray-500 hover:text-white"
                    }`}
                >
                    Saved
                </button>

            </div>

            {/* Empty State */}
            {workouts.length === 0 ? (

                <div className="py-20 text-center">

                    <h2 className="text-3xl font-black uppercase">
                        NOTHING HERE YET
                    </h2>

                    <p className="mt-3 text-gray-400">
                        {activeTab === "plan"
                            ? "Browse the library and add a lift to get today moving."
                            : "Save a workout from the library and it will appear here."}
                    </p>

                    <Link
                        href="/"
                        className="mt-7 inline-block cursor-pointer bg-[#ccff00] px-6 py-4 text-sm font-black uppercase text-black transition hover:bg-white active:scale-95"
                    >
                        GO TO WORKOUTS
                    </Link>

                </div>

            ) : (

                /* Workout Cards */
                <div className="mt-8 grid gap-6 md:grid-cols-2">

                    {workouts.map((workout) => (
                        <div
                            key={workout.id}
                            className="relative overflow-hidden border border-white/10 bg-white/3"
                        >

                            {/* Remove Button */}
                            <button
                                type="button"
                                onClick={() => handleRemove(workout.id)}
                                className="absolute right-3 top-3 z-10 flex h-9 w-9 cursor-pointer items-center justify-center border border-white/20 bg-black/70 text-lg font-bold text-white transition hover:border-red-500 hover:text-red-500"
                                aria-label={`Remove ${workout.name}`}
                            >
                                ×
                            </button>

                            <Image
                                src={workout.image}
                                alt={workout.name}
                                width={800}
                                height={500}
                                className="h-56 w-full object-cover"
                            />

                            <div className="p-5">

                                <h3 className="text-2xl font-black uppercase">
                                    {workout.name}
                                </h3>

                                <p className="mt-2 text-sm text-gray-400">
                                    {workout.equipment}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-5 text-sm text-gray-400">
                                    <span>
                                        {workout.duration} min
                                    </span>

                                    <span>
                                        {workout.caloriesBurned} kcal
                                    </span>

                                    <span>
                                        ★ {workout.rating}
                                    </span>
                                </div>

                                {/* Buttons */}
                                <div className="mt-6 flex flex-wrap gap-3">

                                    <Link
                                        href={`/workout/${workout.id}`}
                                        className="inline-block cursor-pointer border border-white/20 px-5 py-3 text-xs font-black uppercase transition hover:border-[#ccff00] hover:text-[#ccff00] active:scale-95"
                                    >
                                        View Details
                                    </Link>

                                    {activeTab === "plan" && (
                                        <button
                                            type="button"
                                            onClick={() => handleDone(workout.id)}
                                            className="cursor-pointer bg-[#ccff00] px-5 py-3 text-xs font-black uppercase text-black transition hover:bg-white active:scale-95"
                                        >
                                            Mark as Done
                                        </button>
                                    )}

                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            )}

            {/* Toast */}
            {toast && (
                <div className="fixed bottom-6 right-6 z-50 border border-[#ccff00] bg-[#0f1115] px-5 py-4 text-sm font-bold text-white shadow-lg">
                    {toast}
                </div>
            )}

        </main>
    );
}