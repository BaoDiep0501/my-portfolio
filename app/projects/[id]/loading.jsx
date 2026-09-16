export default function Loading() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="animate-pulse">
        <div className="h-4 w-32 rounded bg-gray-200"></div>

        <div className="mt-5 h-10 w-72 rounded bg-gray-200"></div>

        <div className="mt-6 h-5 w-full rounded bg-gray-200"></div>

        <div className="mt-3 h-5 w-5/6 rounded bg-gray-200"></div>

        <div className="mt-10 h-8 w-48 rounded bg-gray-200"></div>

        <div className="mt-5 h-12 w-full rounded bg-gray-200"></div>
      </div>
    </section>
  );
}