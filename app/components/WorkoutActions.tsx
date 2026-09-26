"use client";

import { useWorkout } from "../context/WorkoutContext";

type Workout = {
    id: number;
    name: string;
    image: string;
    muscleGroups: string[];
    equipment: string;
    difficulty: string;
    duration: number;
    caloriesBurned: number;
    rating: number;
    description: string;
    sets: number;
    reps: number;
    instructions: string[];
};

type WorkoutActionsProps = {
    workout: Workout;
};

export default function WorkoutActions({
    workout,
    }: WorkoutActionsProps) {
    const { addToPlan, saveWorkout } = useWorkout();

    return (
        <div className="mt-10 flex flex-wrap gap-4">
        <button
            onClick={() => addToPlan(workout)}
            className="bg-[#ccff00] px-6 py-4 text-sm font-black uppercase text-black"
        >
            Add to Today&apos;s Plan
        </button>

        <button
            onClick={() => saveWorkout(workout)}
            className="border border-white/20 px-6 py-4 text-sm font-black uppercase text-white"
        >
            Save for Later
        </button>
        </div>
    );
}