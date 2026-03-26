type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionIntroProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-xs uppercase tracking-[0.35em] text-ink/50">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-4xl leading-none text-ink md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-ink/70 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
