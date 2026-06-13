import Script from "next/script";

// ============================================================================
//  EASY EDITS — fill these in as your assets are ready. Empty string = shows a
//  clean "coming soon" placeholder instead of a broken embed.
// ============================================================================

// Your Tally form, embedded at the bottom. Buttons scroll down to it (#apply).
const TALLY_EMBED =
  "https://tally.so/embed/NpOrjO?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

// Your intro video (in the "Meet your growth partner" section).
// Paste a Loom *share* link OR a YouTube link.
const INTRO_VIDEO = "";

// Socials (leave "" to hide that one)
const SOCIALS = {
  linkedin: "https://www.linkedin.com/",
  twitter: "",
  telegram: "",
};

// Hero stat bar.  TODO: confirm the "2.5 yrs" / "12+" figures with Shruti.
const STATS = [
  { n: "2.5 yrs", l: "experience" },
  { n: "12+", l: "social media projects" },
];

// Brands you've worked with. Names show as text until you add a logo file:
// export each logo as a PNG into /public/logos/ and set its `src`.
// NOTE: on the dark theme, use white / light versions of logos so dark-text
// logos (DIPS, Dr. Water) don't disappear against the background.
const LOGOS: { name: string; src: string }[] = [
  { name: "Naturally Yours", src: "/logos/naturally-yours.png" },
  { name: "Dr. Water", src: "/logos/dr-water.png" },
  { name: "Data Se", src: "/logos/data-se.png" },
  { name: "DhairyaDa", src: "/logos/dhairyada.png" },
  { name: "wellbi.in", src: "/logos/wellbi.png" },
  { name: "C4E", src: "/logos/c4e.png" },
  { name: "Kopikar Dermatology", src: "/logos/kopikar.png" },
  { name: "DIPS", src: "/logos/dips.png" },
  { name: "matiks.play", src: "/logos/matiks.png" },
];

// Case studies as Loom videos. Paste a Loom share link into `loom`.
const CASE_STUDIES = [
  {
    title: "Building the wave",
    tag: "CEO · Founder-led marketing",
    blurb:
      "Founder-led marketing in his own voice — building a wave of attention around the product he's building. 2.5M+ organic impressions, without him writing a single post.",
    loom: "",
  },
  {
    title: "Scaling LinkedIn for a CTO",
    tag: "Consumer app · CTO",
    blurb:
      "Growing a CTO's audience from 35K to 46K+ followers and 3.7M+ organic impressions — turning his real shipping range into a following.",
    loom: "",
  },
];

// Testimonials — real LinkedIn recommendations from her social-media clients.
const TESTIMONIALS: { quote: string; name: string; role: string }[] = [
  {
    quote:
      "Shruti has been managing my LinkedIn presence and brings real structure to the process. Every week she hops on a call to understand what's happening, and turns it into well-drafted posts ready for my review. She's responsive to feedback and keeps the tone and voice consistent. What stands out most is how professional she is: dependable, organised, and genuinely invested in doing the work well.",
    name: "A consumer-app CTO",
    role: "",
  },
  {
    quote:
      "Loved working with Shruti. Meticulous and hard working. Wishing you the best.",
    name: "Vinod C",
    role: "Founder & CEO, Naturally Yours",
  },
  {
    quote:
      "Shruti helped us plan, strategize, shoot and post content for our brand in the US market. With no prior experience shooting content, she picked it up quickly and delivered results.",
    name: "Smile Bhateja",
    role: "Co-founder, Dr.Water",
  },
  {
    quote:
      "Shruti's work as a social media manager for our company pages was absolutely amazing! From helping us build a voice to making our targets reality, she did a great job. I'll absolutely recommend her work.",
    name: "Siddhida Kabara",
    role: "Founder & CEO, DhairyaDa",
  },
  {
    quote:
      "From the moment we started, Shruti showed real expertise and dedication. Her attention to detail, creativity, and problem-solving were evident throughout — and she always met deadlines. A reliable, talented professional I wholeheartedly recommend.",
    name: "Chirag Bhoraniya",
    role: "Marketing & Production Manager, Kreative Resinroom",
  },
];

// ============================================================================

function toEmbed(url: string): string {
  if (!url) return "";
  if (url.includes("loom.com/share/"))
    return url.replace("loom.com/share/", "loom.com/embed/");
  if (url.includes("youtu.be/"))
    return url.replace("youtu.be/", "www.youtube.com/embed/");
  if (url.includes("watch?v="))
    return url.replace("watch?v=", "embed/").replace("youtube.com", "www.youtube.com");
  return url;
}

function VideoFrame({ url, label }: { url: string; label: string }) {
  const embed = toEmbed(url);
  if (!embed) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-2xl border-2 border-dashed border-white/15 bg-white/[0.03] text-center">
        <div className="px-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/20 text-xl text-rose-300">
            ▶
          </div>
          <p className="mt-3 text-sm font-medium text-white/60">{label}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
      <iframe src={embed} className="h-full w-full" allowFullScreen title={label} />
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex w-full flex-col bg-[#0d0c16]" id="top">
      {/* ---------- NAV ---------- */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0c16]/85 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg uppercase tracking-wide text-white">
            Shruti Bagoriya
          </a>
          <a
            href="#apply"
            className="rounded-full bg-rose-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-rose-400"
          >
            Work with me
          </a>
        </nav>
      </header>

      <main className="flex flex-col">
        {/* ---------- HERO ---------- */}
        <section className="mx-auto flex min-h-[82vh] w-full max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
          <span className="inline-block rounded-full bg-rose-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-300">
            LinkedIn ghostwriting for founders
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-5xl uppercase leading-[0.95] tracking-tight text-white sm:text-7xl">
            LinkedIn content that builds trust + attention
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-indigo-100/70">
            You keep building. I make sure the right people are watching.
          </p>

          {/* stat bar */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-12 gap-y-4">
            {STATS.map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-white">{s.n}</div>
                <div className="text-sm text-white/50">{s.l}</div>
              </div>
            ))}
          </div>

          <a
            href="#apply"
            className="mt-10 inline-block rounded-full bg-rose-500 px-8 py-3.5 font-medium text-white transition-colors hover:bg-rose-400"
          >
            Work with me
          </a>
        </section>

        {/* ---------- BRANDS (light band, logos bare) ---------- */}
        <section className="border-y border-white/10 bg-[#f6f5f1]">
          <div className="mx-auto w-full max-w-5xl px-6 py-12">
            <p className="text-center font-display text-2xl uppercase tracking-wide text-indigo-950 sm:text-3xl">
              Brands I have worked with
            </p>
            <div className="mt-9 overflow-hidden">
              <div className="logo-track">
                {[...LOGOS, ...LOGOS].map((logo, i) =>
                  logo.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={i}
                      src={logo.src}
                      alt={logo.name}
                      className="mr-16 h-16 w-auto max-w-[210px] shrink-0 object-contain"
                    />
                  ) : (
                    <span
                      key={i}
                      className="mr-16 shrink-0 text-lg font-semibold text-indigo-950/50"
                    >
                      {logo.name}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- MORE ABOUT ME / THE WORK (Loom case studies) ---------- */}
        <section className="mx-auto w-full max-w-5xl px-6 py-16">
          <h2 className="font-display text-3xl uppercase leading-tight tracking-tight text-white sm:text-5xl">
            More about me and the kind of work I do.
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.title}>
                <VideoFrame url={cs.loom} label={`${cs.title} — Loom coming soon`} />
                <div className="mt-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-rose-400">
                    {cs.tag}
                  </span>
                  <h3 className="mt-1 font-display text-xl text-white">{cs.title}</h3>
                  <p className="mt-2 leading-relaxed text-indigo-100/70">{cs.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- TESTIMONIALS ---------- */}
        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto w-full max-w-5xl px-6 py-16">
            <h2 className="font-display text-2xl uppercase leading-tight tracking-tight text-white sm:text-4xl">
              Trusted by founders who've built and shipped.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {(TESTIMONIALS.length > 0
                ? TESTIMONIALS
                : [
                    {
                      quote: "Testimonial coming soon — what it's like to work with me.",
                      name: "Founder",
                      role: "Series A consumer app",
                    },
                    {
                      quote: "Testimonial coming soon — what it's like to work with me.",
                      name: "Founder",
                      role: "Series A consumer app",
                    },
                  ]
              ).map((t, i) => (
                <figure key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                  <blockquote className="text-lg leading-relaxed text-white/90">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-5 text-sm font-medium text-white/60">
                    — {t.name}
                    {t.role ? `, ${t.role}` : ""}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- MEET YOUR GROWTH PARTNER (intro video) ---------- */}
        <section className="mx-auto w-full max-w-5xl px-6 py-16">
          <h2 className="font-display text-3xl uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Meet your growth partner.
          </h2>
          <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
            <VideoFrame url={INTRO_VIDEO} label="My intro video — coming soon" />
            <div className="space-y-4 text-lg leading-relaxed text-indigo-100/70">
              <p>
                Hi, I'm Shruti. I turn founder conversations into content. I
                listen, ask better questions, and turn what's already happening
                in your business into clear, relatable content.
              </p>
              <p>
                You don't need to "create content" — you're already living it.
                Meetings, launches, hires, hard calls, small wins. You just need
                someone who can listen, connect the dots, and share it clearly
                with the world.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- WORK WITH ME (embedded form) ---------- */}
        <section id="apply" className="border-t border-white/10 py-20">
          <div className="mx-auto w-full max-w-3xl px-6">
            <h2 className="text-center font-display text-4xl uppercase leading-tight tracking-tight text-white sm:text-6xl">
              Work with me
            </h2>
            <p className="mx-auto mt-3 max-w-md text-center text-indigo-100/70">
              Takes 2 minutes. I'll get back to you within 24 hours.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl bg-white p-2 shadow-2xl sm:p-4">
              <iframe
                data-tally-src={TALLY_EMBED}
                src={TALLY_EMBED}
                loading="lazy"
                width="100%"
                height={500}
                title="Work with me"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* ---------- FOOTER ---------- */}
        <footer className="bg-[#0d0c16]">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-white/60 sm:flex-row">
            <span>© 2026 Shruti Bagoriya</span>
            <div className="flex items-center gap-5">
              {SOCIALS.linkedin && (
                <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-rose-400">
                  LinkedIn
                </a>
              )}
              {SOCIALS.twitter && (
                <a href={SOCIALS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-rose-400">
                  Twitter
                </a>
              )}
              {SOCIALS.telegram && (
                <a href={SOCIALS.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-rose-400">
                  Telegram
                </a>
              )}
              <a href="#top" className="hover:text-rose-400">
                ↑ Back to top
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* Tally embed script — adds dynamic height to the form above */}
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
    </div>
  );
}
