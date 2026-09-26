"use client";

import { createContext, useContext, useState } from "react";

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

type WorkoutContextType = {
    plan: Workout[];
    saved: Workout[];
    addToPlan: (workout: Workout) => void;
    saveWorkout: (workout: Workout) => void;
    removeFromPlan: (id: number) => void;
    removeFromSaved: (id: number) => void;
    markAsDone: (id: number) => void;
};

const WorkoutContext = createContext<WorkoutContextType | undefined>(
    undefined
);

export function WorkoutProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [plan, setPlan] = useState<Workout[]>([]);
    const [saved, setSaved] = useState<Workout[]>([]);

    function addToPlan(workout: Workout) {
        setPlan((previousPlan) => {
            const alreadyExists = previousPlan.some(
                (item) => item.id === workout.id
            );

            if (alreadyExists || previousPlan.length >= 5) {
                return previousPlan;
            }

            return [...previousPlan, workout];
        });
    }

    function saveWorkout(workout: Workout) {
        setSaved((previousSaved) => {
            const alreadyExists = previousSaved.some(
                (item) => item.id === workout.id
            );

            if (alreadyExists) {
                return previousSaved;
            }

            return [...previousSaved, workout];
        });
    }

    function removeFromPlan(id: number) {
        setPlan((previousPlan) =>
            previousPlan.filter((workout) => workout.id !== id)
        );
    }

    function removeFromSaved(id: number) {
        setSaved((previousSaved) =>
            previousSaved.filter((workout) => workout.id !== id)
        );
    }

    function markAsDone(id: number) {
        setPlan((previousPlan) =>
            previousPlan.filter((workout) => workout.id !== id)
        );
    }

    return (
        <WorkoutContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                saveWorkout,
                removeFromPlan,
                removeFromSaved,
                markAsDone,
            }}
        >
            {children}
        </WorkoutContext.Provider>
    );
}

export function useWorkout() {
    const context = useContext(WorkoutContext);

    if (!context) {
        throw new Error(
            "useWorkout must be used inside WorkoutProvider"
        );
    }

    return context;
}