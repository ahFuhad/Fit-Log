import Link from "next/link";
import Image from "next/image";

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

type WorkoutCardProps = {
    workout: Workout;
};

export default function WorkoutCard({ workout }: WorkoutCardProps) {
    return (
        <Link
        href={`/workout/${workout.id}`}
        className="group block border border-white/10 bg-[#15171d] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]/60"
        >
        {/* Image */}
        <div className="overflow-hidden border-b border-white/10">
            <Image
                src={workout.image}
                alt={workout.name}
                width={800}
                height={500}
                className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
            />
        </div>

        {/* Content */}
        <div className="p-5">
            {/* Muscle Groups */}
            <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
                <span
                key={muscle}
                className="border border-[#ccff00]/40 px-2 py-1 text-[10px] font-black uppercase tracking-wider text-[#ccff00]"
                >
                {muscle}
                </span>
            ))}
            </div>

            {/* Workout Name */}
            <h3 className="mt-4 min-h-14.5 text-2xl font-black uppercase leading-none tracking-tight text-white">
            {workout.name}
            </h3>

            {/* Equipment */}
            <p className="mt-3 text-sm text-gray-500">
            {workout.equipment}
            </p>

            {/* Stats */}
            <div className="mt-5 grid grid-cols-3 border-t border-white/10 pt-4">
            <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600">
                Duration
                </p>
                <p className="mt-1 text-sm font-bold text-gray-300">
                {workout.duration} min
                </p>
            </div>

            <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600">
                Calories
                </p>
                <p className="mt-1 text-sm font-bold text-gray-300">
                {workout.caloriesBurned} kcal
                </p>
            </div>

            <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600">
                Rating
                </p>
                <p className="mt-1 text-sm font-bold text-[#ccff00]">
                ★ {workout.rating}
                </p>
            </div>
            </div>
        </div>
        </Link>
    );
}