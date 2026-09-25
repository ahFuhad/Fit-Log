export default async function WorkoutDetails({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <main>
        <h1>Workout Details</h1>
        <p>Workout ID: {id}</p>
        </main>
    );
}
