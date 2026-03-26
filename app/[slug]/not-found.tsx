import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="max-w-xl rounded-[2rem] border border-black/5 bg-white p-10 text-center shadow-soft">
        <p className="text-xs uppercase tracking-[0.35em] text-ink/45">Not found</p>
        <h1 className="mt-5 font-serif text-5xl text-ink">Press kit unavailable</h1>
        <p className="mt-5 text-base leading-8 text-ink/70">
          The requested makeup artist profile does not exist yet. Add a new object to
          the central data file to generate a new page automatically.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:bg-black/[0.03]"
        >
          Return to homepage
        </Link>
      </div>
    </main>
  );
}
