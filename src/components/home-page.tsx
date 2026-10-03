import { useMemo, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import {
  links,
  meditations,
  method,
  patterns,
  pillars,
  products,
  questions,
  socials,
  type PatternId,
  type ShopGroup,
} from "@/data/mindshift";

const nav = [
  { href: "#method", label: "Method" },
  { href: "#patterns", label: "Patterns" },
  { href: "#listen", label: "Listen" },
  { href: "#shop", label: "Shop" },
  { href: "#socials", label: "Socials" },
];

export function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-30 border-b border-line/80 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/brand/compass-full.jpeg"
              alt=""
              className="h-10 w-auto"
            />
            <span className="font-display text-xl leading-none tracking-wide">
              Mindshift
            </span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href={links.guide}
              className="inline-flex min-h-11 items-center rounded-full bg-deep px-4 text-sm font-medium text-cream"
            >
              Free guide
            </a>
          </nav>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open ? (
          <nav className="border-t border-line px-4 py-3 md:hidden">
            <div className="flex flex-col">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex min-h-11 items-center text-base"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={links.guide}
                className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-deep px-4 text-sm font-medium text-cream"
              >
                Free guide
              </a>
            </div>
          </nav>
        ) : null}
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div>
            <p className="text-xs font-semibold tracking-widest text-muted uppercase">
              Mindset · Nervous system · Self-leadership
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] font-medium sm:text-7xl">
              You’re not broken.
              <span className="block italic text-clay">You’re patterned.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              Mindset, nervous system, and self-leadership. Tools for calm,
              clarity and confidence — from the creator of the Mindshift Method.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={links.guide}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-deep px-6 text-sm font-semibold text-cream"
              >
                Still Surviving — free guide
              </a>
              <a
                href="#shop"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-clay px-6 text-sm font-semibold text-ink"
              >
                Deepening tools
              </a>
            </div>
          </div>
          <figure className="rounded-card border border-line bg-sand/70 p-6 sm:p-8">
            <img
              src="/brand/logo-mark.jpeg"
              alt="The Mindshift Movement compass mark"
              className="mx-auto w-full max-w-sm"
            />
            <figcaption className="mt-4 text-center text-sm text-muted">
              Awareness · Alignment · Action
            </figcaption>
          </figure>
        </section>

        <section className="border-y border-line bg-cream">
          <div className="mx-auto grid max-w-6xl sm:grid-cols-3">
            {pillars.map((item) => (
              <div
                key={item.kicker}
                className="border-b border-line px-6 py-8 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0"
              >
                <h2 className="font-display text-3xl">{item.kicker}</h2>
                <p className="mt-2 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="method" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase">
            The Mindshift Method
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            Three words, printed on Volume 1.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            This isn’t a willpower problem. It’s a pattern problem. The journal
            names the path in three moves.
          </p>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {method.map((step, i) => (
              <li key={step.word} className="rounded-card border border-line bg-cream p-6">
                <span className="font-display text-4xl text-clay">0{i + 1}</span>
                <h3 className="mt-3 font-display text-3xl">{step.word}</h3>
                <p className="mt-2 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="patterns" className="bg-sand/50">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-widest text-muted uppercase">
                Still Surviving
              </p>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                Five patterns that quietly run the show.
              </h2>
              <p className="mt-4 text-muted">
                Named in Jasmine’s free guide. You’ve tried the journaling, the
                courses, the books — and still landed back in the same place.
              </p>
              <ul className="mt-8 divide-y divide-line border-y border-line">
                {patterns.map((pattern) => (
                  <li key={pattern.id} className="py-4">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-2xl text-clay">{pattern.index}</span>
                      <div>
                        <h3 className="font-display text-2xl">{pattern.name}</h3>
                        <p className="text-sm text-muted">{pattern.line}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <PatternCheck />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="rounded-card bg-deep px-6 py-10 text-cream sm:px-10 sm:py-12">
            <p className="text-xs font-semibold tracking-widest text-sand uppercase">
              Free guide
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight sm:text-5xl">
              Still Surviving
            </h2>
            <p className="mt-4 max-w-xl text-sand">
              The five patterns, and why you can’t think your way out of them.
              Jasmine sends the guide to your inbox. No spam — just the guide.
            </p>
            <a
              href={links.guide}
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-cream px-6 text-sm font-semibold text-deep"
            >
              Send me the guide
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </section>

        <section id="listen" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest text-muted uppercase">
                Free on YouTube
              </p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">Mindshift Meditations</h2>
              <p className="mt-3 max-w-xl text-muted">
                Guided meditations, affirmations, and frequency practices that
                blend science, spirituality, and mindset.
              </p>
            </div>
            <a
              href={links.youtube}
              className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-clay"
            >
              The channel
              <ArrowUpRight className="size-4" />
            </a>
          </div>
          <ListenGrid />
        </section>

        <Shop />

        <section id="socials" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase">
            Find Jasmine
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Every room she keeps.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="group rounded-card border border-line bg-cream p-6 transition-colors hover:border-clay"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl">{social.name}</h3>
                    <p className="text-sm font-medium text-clay">{social.handle}</p>
                  </div>
                  <ArrowUpRight className="size-5 text-muted group-hover:text-ink" />
                </div>
                <p className="mt-4 text-muted">{social.text}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="about" className="border-t border-line bg-cream">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <img
              src="/brand/volume1.png"
              alt="Mindshift Volume One journal cover"
              className="mx-auto w-56 rounded-card shadow-none"
            />
            <div>
              <p className="text-xs font-semibold tracking-widest text-muted uppercase">
                About
              </p>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                A space to slow down, reconnect, and remember your power.
              </h2>
              <p className="mt-4 text-muted">
                Hi, I’m Jasmine — creator of the Mindshift Movement. I make
                tools for people who grew up in dysfunction and are still living
                in survival mode. You are not broken. You are patterned. And
                patterns can change.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>The Mindshift Movement · Jasmine</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="/proposal" className="hover:text-ink">
              Proposal
            </a>
            <a href={links.linktree} className="hover:text-ink">
              Linktree
            </a>
            <a href={links.guide} className="hover:text-ink">
              Free guide
            </a>
            <a href={links.youtube} className="hover:text-ink">
              YouTube
            </a>
            <a href={links.instagram} className="hover:text-ink">
              Instagram
            </a>
            <a href={links.tiktok} className="hover:text-ink">
              TikTok
            </a>
            <a href={links.facebook} className="hover:text-ink">
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PatternCheck() {
  const [step, setStep] = useState(0);
  const [picks, setPicks] = useState<PatternId[]>([]);

  const winner = useMemo(() => {
    if (picks.length < questions.length) return null;
    const scores = new Map<PatternId, number>();
    for (const id of picks) scores.set(id, (scores.get(id) ?? 0) + 1);
    let best: PatternId = picks[0];
    let bestScore = 0;
    for (const pattern of patterns) {
      const score = scores.get(pattern.id) ?? 0;
      if (score > bestScore) {
        best = pattern.id;
        bestScore = score;
      }
    }
    return patterns.find((pattern) => pattern.id === best) ?? patterns[0];
  }, [picks]);

  function choose(id: PatternId) {
    const next = [...picks, id];
    setPicks(next);
    setStep(next.length);
  }

  function reset() {
    setPicks([]);
    setStep(0);
  }

  const question = questions[step];

  return (
    <div className="rounded-card border border-line bg-cream p-6 sm:p-8">
      <p className="text-xs font-semibold tracking-widest text-muted uppercase">
        Pattern check
      </p>
      {winner ? (
        <div>
          <p className="mt-4 font-display text-sm tracking-widest text-clay uppercase">
            Loudest right now · {winner.index}
          </p>
          <h3 className="mt-2 font-display text-4xl leading-tight">{winner.name}</h3>
          <p className="mt-4 text-muted">{winner.result}</p>
          <p className="mt-4 text-sm text-muted">
            A reflection on the five patterns in Still Surviving — not a
            diagnosis. The guide goes further.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={links.guide}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-deep px-5 text-sm font-semibold text-cream"
            >
              Read Still Surviving
            </a>
            <button
              type="button"
              onClick={reset}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-line px-5 text-sm font-semibold"
            >
              Check again
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="mt-3 text-sm text-muted">
            {step + 1} of {questions.length}
          </p>
          <h3 className="mt-2 font-display text-3xl leading-tight">{question.prompt}</h3>
          <div className="mt-5 flex flex-col gap-2">
            {question.options.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => choose(option.id)}
                className="min-h-12 rounded-2xl border border-line bg-paper px-4 py-3 text-left text-sm leading-snug hover:border-clay"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ListenGrid() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      {meditations.map((track) => (
        <article key={track.id} className="overflow-hidden rounded-card border border-line bg-cream">
          {active === track.id ? (
            <div className="aspect-video bg-deep">
              <iframe
                title={track.title}
                src={`https://www.youtube-nocookie.com/embed/${track.id}?rel=0&autoplay=1`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setActive(track.id)}
              className="relative block aspect-video w-full"
            >
              <img src={track.image} alt="" className="h-full w-full object-cover" />
              <span className="absolute inset-0 flex items-center justify-center bg-deep/25">
                <span className="rounded-full bg-cream px-4 py-2 text-sm font-semibold text-deep">
                  Play
                </span>
              </span>
            </button>
          )}
          <div className="p-5">
            <h3 className="font-display text-2xl leading-tight">{track.title}</h3>
            <p className="mt-1 text-sm text-clay">{track.detail}</p>
            <p className="mt-3 text-sm text-muted">{track.blurb}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function Shop() {
  const [group, setGroup] = useState<ShopGroup>("all");
  const shown = products.filter((product) => group === "all" || product.group === group);
  const filters: { id: ShopGroup; label: string }[] = [
    { id: "all", label: "All" },
    { id: "journal", label: "Journal" },
    { id: "magnets", label: "Affirmagnets" },
  ];

  return (
    <section id="shop" className="border-y border-line bg-sand/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest text-muted uppercase">
              Mindshift Shop
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Deepening tools</h2>
            <p className="mt-3 max-w-xl text-muted">
              The journal, and magnet words to leave where you will actually see
              them. Checkout opens on Gumroad.
            </p>
          </div>
          <div className="flex gap-2" role="tablist" aria-label="Shop filters">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={group === filter.id}
                onClick={() => setGroup(filter.id)}
                className={
                  "min-h-11 rounded-full px-4 text-sm font-semibold " +
                  (group === filter.id
                    ? "bg-deep text-cream"
                    : "border border-line bg-cream text-ink")
                }
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((product) => (
            <article
              key={product.id}
              className="flex flex-col overflow-hidden rounded-card border border-line bg-cream"
            >
              <img
                src={product.image}
                alt=""
                className="portrait-frame w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl leading-tight">{product.title}</h3>
                  <p className="shrink-0 text-sm font-semibold">{product.price}</p>
                </div>
                <p className="mt-2 text-sm text-muted">{product.blurb}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {product.words.map((word) => (
                    <li
                      key={word}
                      className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
                    >
                      {word}
                    </li>
                  ))}
                </ul>
                <a
                  href={product.href}
                  className="mt-5 inline-flex min-h-11 items-center justify-center gap-1 rounded-full bg-deep px-4 text-sm font-semibold text-cream"
                >
                  Get it
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
