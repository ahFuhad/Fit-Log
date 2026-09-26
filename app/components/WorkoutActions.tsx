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
    const { plan, addToPlan, saveWorkout } = useWorkout();

    const alreadyAdded = plan.some(
        (item) => item.id === workout.id
    );

    const planFull = plan.length >= 5;

    function handleAdd() {
        if (alreadyAdded || planFull) {
            return;
        }

        addToPlan(workout);
    }

    function handleSave() {
        saveWorkout(workout);
    }

    return (
        <div className="mt-10 flex flex-wrap gap-4">

            <button
                type="button"
                onClick={handleAdd}
                disabled={alreadyAdded || planFull}
                className={`px-6 py-4 text-sm font-black uppercase transition duration-200 ${
                    alreadyAdded
                        ? "cursor-not-allowed bg-gray-700 text-gray-400"
                        : planFull
                        ? "cursor-not-allowed bg-gray-700 text-gray-400"
                        : "cursor-pointer bg-[#ccff00] text-black hover:bg-white active:scale-95"
                }`}
            >
                {alreadyAdded
                    ? "Added to Plan ✓"
                    : planFull
                    ? "Plan Full"
                    : "Add to Today's Plan"}
            </button>

            <button
                type="button"
                onClick={handleSave}
                className="cursor-pointer border border-white/20 px-6 py-4 text-sm font-black uppercase text-white transition duration-200 hover:border-[#ccff00] hover:text-[#ccff00] active:scale-95"
            >
                Save for Later
            </button>

        </div>
    );
} 