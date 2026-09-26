"use client";

import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import WorkoutCard from "./components/WorkoutCard";

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
};

type SortOption = "duration" | "calories" | "rating";

export default function Home() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("duration");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWorkouts() {
      try {
        const response = await fetch("https://api.api-store.workers.dev/api/fitlog");

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data: Workout[] = await response.json();
        console.log(data);
        setWorkouts(data);
      } catch (error) {
        console.error("Failed to fetch workouts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchWorkouts();
  }, []);

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <main>
      <Hero />

      <section id="library" className="mx-auto max-w-7xl px-6 py-20">
        {/* Section Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold tracking-[0.25em] text-[#ccff00]">
              WORKOUT LIBRARY
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase">THE LIBRARY</h2>

            <p className="mt-3 text-gray-400">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <label
              htmlFor="sort"
              className="text-xs font-bold uppercase tracking-wider text-gray-500"
            >
              Sort By
            </label>

            <div className="relative">
              <select
                id="sort"
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value as SortOption)
                }
                className="cursor-pointer appearance-none border border-white/20 bg-[#0f1115] px-4 py-3 pr-10 text-sm font-bold uppercase text-white outline-none transition focus:border-[#ccff00]"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>

              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#ccff00]">
                ▼
              </span>
            </div>
          </div>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex min-h-80 items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="h-6 w-6 animate-spin border-2 border-[#ccff00] border-t-transparent" />

              <p className="text-sm font-bold uppercase tracking-wider text-gray-400">
                Loading workouts…
              </p>
            </div>
          </div>
        ) : (
          /* Workout Grid */
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedWorkouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
