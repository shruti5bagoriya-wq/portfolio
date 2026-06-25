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

// Your photo (shows in the "Meet your growth partner" section). Drop a headshot
// into /public (e.g. /public/shruti.jpg) and set the path below. If both PHOTO
// and INTRO_VIDEO are empty, a clean placeholder shows. PHOTO wins if both set.
const PHOTO = "/shruti.jpg";

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
  { n: "6M+", l: "organic impressions" },
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
      "The thing I appreciate most is that she has taken the effort to understand how I think and communicate. Time is always a crunch for me, and instead of adding more meetings or back and forth, she has built her own process to get context from me in the most efficient way possible. I can usually just dump my thoughts, what happened during the week, and what's on my mind, and she turns that into content that sounds like me. She doesn't just write content, she keeps improving the process of working together. Would definitely recommend her to anyone looking for a ghostwriter who can understand their voice and make content creation feel effortless.",
    name: "A consumer-app CEO",
    role: "",
  },
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
      <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.03] text-center">
        <div className="px-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-xl text-accent">
            ▶
          </div>
          <p className="mt-3 text-sm font-medium text-white/55">{label}</p>
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

// Small uppercase section label with an accent tick.
function Kicker({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
      <span className="font-display text-sm text-white/30">{index}</span>
      <span className="h-px w-8 bg-accent/50" />
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative flex w-full flex-col" id="top">
      {/* ---------- ATMOSPHERE (fixed, behind everything) ---------- */}
      <div className="bg-atmosphere" aria-hidden="true">
        <div className="aurora" />
        <div className="grain" />
      </div>

      {/* ---------- NAV ---------- */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09080f]/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg uppercase tracking-wide text-white">
            Shruti Bagoriya
          </a>
          <a href="#apply" className="btn px-4 py-2 text-sm">
            Work with me
          </a>
        </nav>
      </header>

      <main className="relative z-10 flex flex-col">
        {/* ---------- HERO ---------- */}
        <section className="mx-auto flex min-h-[calc(100svh-64px)] w-full max-w-5xl flex-col items-center justify-center px-6 py-12 text-center">
          <span className="reveal inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Content partner for founders building in public
          </span>
          <h1 className="reveal mx-auto mt-7 max-w-4xl font-display text-5xl uppercase leading-[1.08] tracking-tight text-white sm:text-7xl" style={{ animationDelay: "0.08s" }}>
            LinkedIn content that builds{" "}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              trust <span className="mx-2 sm:mx-3">+</span> attention
            </span>
          </h1>
          <p className="reveal mx-auto mt-7 max-w-xl font-serif text-xl italic leading-relaxed text-indigo-100/75" style={{ animationDelay: "0.16s" }}>
            You keep building. I make sure the right people are watching.
          </p>

          {/* stat bar */}
          <div className="reveal mt-12 flex flex-wrap items-center justify-center divide-x divide-white/10" style={{ animationDelay: "0.24s" }}>
            {STATS.map((s) => (
              <div key={s.l} className="px-7">
                <div className="font-display text-3xl text-white">{s.n}</div>
                <div className="mt-1 text-sm text-white/50">{s.l}</div>
              </div>
            ))}
          </div>

          <a href="#apply" className="reveal btn mt-12 px-8 py-3.5 text-base" style={{ animationDelay: "0.32s" }}>
            Work with me →
          </a>
        </section>

        {/* ---------- BRANDS (light band, edge-faded marquee) ---------- */}
        <section className="border-y border-white/10 bg-[#f6f5f1]">
          <div className="mx-auto w-full max-w-5xl px-6 py-12">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-indigo-950/50">
              Brands I have worked with
            </p>
            <div className="marquee-mask mt-8 overflow-hidden">
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
                      className="mr-16 shrink-0 text-lg font-semibold text-indigo-950/45"
                    >
                      {logo.name}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- THE WORK (Loom case studies) ---------- */}
        <section className="mx-auto w-full max-w-5xl px-6 py-20">
          <div className="reveal">
            <Kicker index="01">The work</Kicker>
            <h2 className="mt-5 max-w-3xl font-display text-3xl uppercase leading-tight tracking-tight text-white sm:text-5xl">
              More about me and the kind of work I do.
            </h2>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {CASE_STUDIES.map((cs, i) => (
              <div key={cs.title} className="reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <VideoFrame url={cs.loom} label={`${cs.title} — Loom coming soon`} />
                <div className="mt-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    {cs.tag}
                  </span>
                  <h3 className="mt-2 font-display text-xl uppercase tracking-tight text-white">{cs.title}</h3>
                  <p className="mt-2 leading-relaxed text-indigo-100/70">{cs.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- TESTIMONIALS ---------- */}
        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto w-full max-w-5xl px-6 py-20">
            <div className="reveal">
              <Kicker index="02">Social proof</Kicker>
              <h2 className="mt-5 max-w-3xl font-display text-2xl uppercase leading-tight tracking-tight text-white sm:text-4xl">
                Trusted by founders who&apos;ve built and shipped.
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {TESTIMONIALS.map((t, i) => (
                <figure
                  key={i}
                  className={`card rounded-2xl border border-white/10 bg-white/[0.035] p-7 ${
                    i === 0 ? "md:col-span-2" : ""
                  } reveal`}
                  style={{ animationDelay: `${(i % 2) * 0.08}s` }}
                >
                  <div className="font-serif text-3xl leading-none text-accent/60">&ldquo;</div>
                  <blockquote
                    className={`mt-2 font-serif leading-relaxed text-white/90 ${
                      i === 0 ? "text-xl" : "text-lg"
                    }`}
                  >
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-5 text-sm font-medium text-white/55">
                    — {t.name}
                    {t.role ? `, ${t.role}` : ""}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- MEET YOUR GROWTH PARTNER (intro video) ---------- */}
        <section className="mx-auto w-full max-w-5xl px-6 py-20">
          <div className="reveal">
            <Kicker index="03">Who you&apos;re working with</Kicker>
            <h2 className="mt-5 font-display text-3xl uppercase leading-tight tracking-tight text-white sm:text-5xl">
              Meet your growth partner.
            </h2>
          </div>
          <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
            <div className="reveal">
              {PHOTO ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={PHOTO}
                  alt="Shruti Bagoriya"
                  className="aspect-[4/5] w-full rounded-2xl border border-white/10 object-cover object-[72%_center]"
                />
              ) : (
                <VideoFrame url={INTRO_VIDEO} label="My intro video — coming soon" />
              )}
            </div>
            <div className="reveal space-y-4 text-lg leading-relaxed text-indigo-100/75" style={{ animationDelay: "0.1s" }}>
              <p className="font-serif text-xl italic text-white/90">
                Hi, I&apos;m Shruti. I turn founder conversations into content.
              </p>
              <p>
                Over the last two years I&apos;ve worked with 30+ founders, and
                they all want the same thing — to build visibility and
                credibility, so the right people know who they are and trust
                what they&apos;re building. That&apos;s never been harder:
                everyone&apos;s posting, feeds are cluttered with AI content, and
                you don&apos;t have the time to sit down and write.
              </p>
              <p>
                My secret sauce? It&apos;s you. I interview you — your real week,
                your real decisions — and turn it into content that builds
                trust, grows your audience, and turns that attention into what
                actually moves your company: users, hires, and the investors who
                want in.
              </p>
              <p className="font-serif text-xl italic text-white/90">
                You shouldn&apos;t have to choose between building your company
                and being known for it. That&apos;s exactly what I do.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- WORK WITH ME (embedded form) ---------- */}
        <section id="apply" className="relative border-t border-white/10 py-24">
          <div className="mx-auto w-full max-w-3xl px-6">
            <div className="reveal text-center">
              <h2 className="font-display text-4xl uppercase leading-tight tracking-tight text-white sm:text-6xl">
                Work with me
              </h2>
              <p className="mx-auto mt-4 max-w-md font-serif text-lg italic text-indigo-100/75">
                Takes 2 minutes. I&apos;ll get back to you within 24 hours.
              </p>
            </div>
            <div className="reveal mt-9 overflow-hidden rounded-2xl bg-white p-2 shadow-2xl sm:p-4" style={{ animationDelay: "0.1s" }}>
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
        <footer>
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-white/55 sm:flex-row">
            <span className="font-display uppercase tracking-wide text-white/70">
              Shruti Bagoriya
            </span>
            <div className="flex items-center gap-5">
              {SOCIALS.linkedin && (
                <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                  LinkedIn
                </a>
              )}
              {SOCIALS.twitter && (
                <a href={SOCIALS.twitter} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                  Twitter
                </a>
              )}
              {SOCIALS.telegram && (
                <a href={SOCIALS.telegram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                  Telegram
                </a>
              )}
              <a href="#top" className="transition-colors hover:text-accent">
                ↑ Back to top
              </a>
            </div>
          </div>
          <div className="border-t border-white/5 py-4 text-center text-xs text-white/35">
            © 2026 Shruti Bagoriya
          </div>
        </footer>
      </main>

      {/* Tally embed script — adds dynamic height to the form above */}
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />

      {/* Scroll-reveal — fade content up as it enters the viewport */}
      <Script id="reveal-observer" strategy="afterInteractive">
        {`
          (function () {
            var els = document.querySelectorAll('.reveal');
            if (!('IntersectionObserver' in window)) {
              els.forEach(function (el) { el.classList.add('in'); });
              return;
            }
            var io = new IntersectionObserver(function (entries) {
              entries.forEach(function (e) {
                if (e.isIntersecting) {
                  e.target.classList.add('in');
                  io.unobserve(e.target);
                }
              });
            }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
            els.forEach(function (el) { io.observe(el); });
          })();
        `}
      </Script>
    </div>
  );
}
