import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="text-center">

            <p className="text-sm font-bold tracking-[0.3em] text-[#ccff00]">
            ERROR 404
            </p>

            <h1 className="mt-4 text-6xl font-black uppercase">
            WORKOUT NOT FOUND
            </h1>

            <p className="mx-auto mt-4 max-w-md text-gray-400">
            The page you are looking for does not exist or the workout
            could not be found.
            </p>

            <Link
            href="/"
            className="mt-8 inline-block bg-[#ccff00] px-6 py-4 text-sm font-black uppercase text-black transition hover:bg-white active:scale-95"
            >
            Back to Workouts
            </Link>

        </div>
        </main>
    );
}