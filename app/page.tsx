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

export default async function Home() {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  const workouts: Workout[] = await response.json();

  return (
    <main>
      <Hero />

      <section id="library" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold tracking-[0.25em] text-[#ccff00]">
          WORKOUT LIBRARY
        </p>

        <h2 className="mt-3 text-4xl font-black uppercase">
          THE LIBRARY
        </h2>

        <p className="mt-3 text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
