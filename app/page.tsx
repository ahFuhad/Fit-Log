import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="library" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold tracking-[0.25em] text-[#ccff00]">
          WORKOUT LIBRARY
        </p>

        <h2 className="mt-3 text-4xl font-black uppercase">THE LIBRARY</h2>

        <p className="mt-3 text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </section>
    </main>
  );
}
