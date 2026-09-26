import Image from "next/image";
import WorkoutActions from "../../components/WorkoutActions";

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

export default async function WorkoutDetails({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const response = await fetch(
        `https://api.api-store.workers.dev/api/fitlog/${id}`
    );

    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }

    const workout: Workout = await response.json();

    return (
        <main className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-2">

                <div>
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={1000}
                        height={700}
                        className="w-full object-cover"
                    />
                </div>

                <div>
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ccff00]">
                        {workout.difficulty}
                    </p>

                    <h1 className="mt-4 text-5xl font-black uppercase leading-none">
                        {workout.name}
                    </h1>

                    <p className="mt-6 text-gray-400">
                        {workout.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="border border-white/20 px-3 py-2 text-xs font-bold uppercase text-[#ccff00]"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">

                        <div className="border border-white/10 p-4">
                            <p className="text-xs uppercase text-gray-500">
                                Equipment
                            </p>
                            <p className="mt-2 font-bold">
                                {workout.equipment}
                            </p>
                        </div>

                        <div className="border border-white/10 p-4">
                            <p className="text-xs uppercase text-gray-500">
                                Sets
                            </p>
                            <p className="mt-2 font-bold">
                                {workout.sets}
                            </p>
                        </div>

                        <div className="border border-white/10 p-4">
                            <p className="text-xs uppercase text-gray-500">
                                Reps
                            </p>
                            <p className="mt-2 font-bold">
                                {workout.reps}
                            </p>
                        </div>

                        <div className="border border-white/10 p-4">
                            <p className="text-xs uppercase text-gray-500">
                                Duration
                            </p>
                            <p className="mt-2 font-bold">
                                {workout.duration} min
                            </p>
                        </div>

                        <div className="border border-white/10 p-4">
                            <p className="text-xs uppercase text-gray-500">
                                Calories
                            </p>
                            <p className="mt-2 font-bold">
                                {workout.caloriesBurned} kcal
                            </p>
                        </div>

                        <div className="border border-white/10 p-4">
                            <p className="text-xs uppercase text-gray-500">
                                Rating
                            </p>
                            <p className="mt-2 font-bold">
                                ★ {workout.rating}
                            </p>
                        </div>

                    </div>

                    <div className="mt-10">
                        <h2 className="text-2xl font-black uppercase">
                            Instructions
                        </h2>

                        <div className="mt-5 space-y-4">
                            {workout.instructions.map(
                                (instruction, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-4 border-b border-white/10 pb-4"
                                    >
                                        <span className="font-black text-[#ccff00]">
                                            0{index + 1}
                                        </span>

                                        <p className="text-gray-300">
                                            {instruction}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    <WorkoutActions workout={workout} />
                </div>
            </div>
        </main>
    );
}