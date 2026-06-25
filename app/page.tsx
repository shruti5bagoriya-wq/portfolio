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
      "Founder-led marketing in his own voice, building a wave of attention around the product he's building. 2.5M+ organic impressions, without him writing a single post.",
    cover: "/case-studies/case-study-1.jpg",
    loom: "https://www.loom.com/share/87ffa4ac6f444877afe77bedfa02977d",
  },
  {
    title: "Scaling LinkedIn for a CTO",
    tag: "Consumer app · CTO",
    blurb:
      "Growing a CTO's audience from 35K to 46K+ followers and 3.6M+ organic impressions, by turning the real work he ships every week into content people want to follow.",
    cover: "/case-studies/case-study-2.jpg",
    loom: "https://www.loom.com/share/cb8b76b1965e45d5b4dc184a5043c6bc",
  },
];

// Testimonials — real LinkedIn recommendations from her clients. `photo` empty
// means the client stays anonymous (no name/face shown); a path means a real,
// named LinkedIn recommendation with the client's profile photo.
const TESTIMONIALS: {
  quote: string;
  name: string;
  role: string;
  photo: string;
  date: string;
  anon?: boolean;
}[] = [
  {
    quote:
      "The thing I appreciate most is that she has taken the effort to understand how I think and communicate. Time is always a crunch for me, and instead of adding more meetings or back and forth, she has built her own process to get context from me in the most efficient way possible. I can usually just dump my thoughts, what happened during the week, and what's on my mind, and she turns that into content that sounds like me. She doesn't just write content, she keeps improving the process of working together. Would definitely recommend her to anyone looking for a ghostwriter who can understand their voice and make content creation feel effortless.",
    name: "Sudhanshu Bhatia",
    role: "Co-Founder, Matiks",
    photo: "/testimonials/sudhanshu.jpg",
    date: "Jun 2026",
  },
  {
    quote:
      "Shruti has been managing my LinkedIn presence and brings real structure to the process. Every week she hops on a call to understand what's happening, and turns it into well-drafted posts ready for my review. She's responsive to feedback and keeps the tone and voice consistent. What stands out most is how professional she is: dependable, organised, and genuinely invested in doing the work well.",
    name: "A consumer-app CTO",
    role: "Building a consumer app",
    photo: "/testimonials/cto.jpg",
    date: "Jun 2026",
    anon: true,
  },
  {
    quote:
      "Loved working with Shruti. Meticulous and hard working. Wishing you the best.",
    name: "Vinod C",
    role: "Founder & CEO, Naturally Yours",
    photo: "/testimonials/vinod.jpg",
    date: "Jun 2026",
  },
  {
    quote:
      "Shruti helped us plan, strategize, shoot and post content for our brand in the US market. With no prior experience shooting content, she picked it up quickly and delivered results.",
    name: "Smile Bhateja",
    role: "Founder, Dr. Water",
    photo: "/testimonials/smile.jpg",
    date: "May 2025",
  },
  {
    quote:
      "Shruti's work as a social media manager for our company pages was absolutely amazing! From helping us build a voice to making our targets reality, she did a great job. I'll absolutely recommend her work.",
    name: "Siddhida Kabara",
    role: "Founder & CEO, DhairyaDa",
    photo: "/testimonials/siddhida.jpg",
    date: "Feb 2025",
  },
  {
    quote:
      "From the moment we started, Shruti showed real expertise and dedication. Her attention to detail, creativity, and problem-solving were evident throughout — and she always met deadlines. A reliable, talented professional I wholeheartedly recommend.",
    name: "Chirag Bhoraniya",
    role: "Marketing & Production Manager, Kreative Resinroom",
    photo: "/testimonials/chirag.jpg",
    date: "Mar 2024",
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

// Case-study media: a clickable cover slide that opens the Loom walkthrough in
// a new tab. Falls back to a static cover (no Loom yet) or the empty placeholder.
function CaseStudyMedia({
  cover,
  loom,
  title,
}: {
  cover: string;
  loom: string;
  title: string;
}) {
  if (cover && loom) {
    return (
      <a
        href={loom}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block aspect-square w-full overflow-hidden rounded-2xl border border-white/10"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cover}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/25">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent pl-1 text-2xl text-[#1c0b08] shadow-xl transition-transform duration-300 group-hover:scale-110">
            ▶
          </span>
        </div>
        <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
          Watch on Loom
        </span>
      </a>
    );
  }
  if (cover) {
    return (
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={cover} alt={title} className="h-full w-full object-cover" />
        <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
          Walkthrough coming soon
        </span>
      </div>
    );
  }
  return <VideoFrame url={loom} label={`${title} · Loom coming soon`} />;
}

// LinkedIn wordmark logo, used on recommendation cards.
function LinkedInMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#0A66C2" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

// One LinkedIn-recommendation card. Named clients show photo + name + "1st";
// anonymous clients show a neutral avatar and a withheld-name label.
function TestimonialCard({
  t,
  featured,
}: {
  t: {
    quote: string;
    name: string;
    role: string;
    photo: string;
    date: string;
    anon?: boolean;
  };
  featured?: boolean;
}) {
  return (
    <figure
      className={`card flex flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-7 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        {t.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${t.photo}?v=2`}
            alt={t.name}
            className="h-12 w-12 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/40">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
              <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" />
            </svg>
          </div>
        )}
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="truncate font-semibold text-white">{t.name}</span>
            {!t.anon && t.photo && <span className="text-xs text-white/40">· 1st</span>}
          </div>
          <div className="truncate text-xs text-white/50">{t.role}</div>
        </div>
        <LinkedInMark className="ml-auto h-5 w-5 shrink-0" />
      </div>

      <blockquote
        className={`mt-5 flex-1 font-serif leading-relaxed text-white/90 ${
          featured ? "text-xl" : "text-lg"
        }`}
      >
        {t.quote}
      </blockquote>

      <figcaption className="mt-5 text-xs text-white/40">
        Recommended on LinkedIn{t.date ? ` · ${t.date}` : ""}
      </figcaption>
    </figure>
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
          <div className="flex items-center gap-7">
            <div className="hidden items-center gap-7 text-sm text-white/70 md:flex">
              <a href="#work" className="transition-colors hover:text-white">
                Case studies
              </a>
              <a href="#proof" className="transition-colors hover:text-white">
                Social proof
              </a>
              <a href="#about" className="transition-colors hover:text-white">
                About
              </a>
            </div>
            <a href="#apply" className="btn px-4 py-2 text-sm">
              Work with me
            </a>
          </div>
        </nav>
      </header>

      <main className="relative z-10 flex flex-col">
        {/* ---------- HERO ---------- */}
        <section className="mx-auto flex min-h-[calc(100svh-64px)] w-full max-w-5xl flex-col items-center justify-center px-6 py-12 text-center">
          <span className="reveal inline-block rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Content partner for founders building in public
          </span>
          <h1 className="reveal mx-auto mt-10 max-w-4xl font-display text-6xl uppercase leading-[1.08] tracking-tight text-white sm:text-[5.25rem]" style={{ animationDelay: "0.08s" }}>
            LinkedIn content that builds{" "}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              trust <span className="mx-2 sm:mx-3">+</span> attention
            </span>
          </h1>
          <p className="reveal mx-auto mt-7 max-w-xl font-serif text-2xl italic leading-relaxed text-indigo-100/75" style={{ animationDelay: "0.16s" }}>
            You keep building. I make sure the right people are watching.
          </p>

          {/* stat bar */}
          <div className="reveal mt-14 flex flex-wrap items-center justify-center gap-y-6 divide-x divide-white/10" style={{ animationDelay: "0.24s" }}>
            {STATS.map((s) => (
              <div key={s.l} className="px-10">
                <div className="font-display text-4xl text-white">{s.n}</div>
                <div className="mt-1 text-base text-white/50">{s.l}</div>
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
        <section id="work" className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-24">
          <div className="reveal">
            <Kicker index="01">The work</Kicker>
            <h2 className="mt-5 max-w-3xl font-display text-3xl uppercase leading-tight tracking-tight text-white sm:text-5xl">
              More about me and the kind of work I do.
            </h2>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {CASE_STUDIES.map((cs, i) => (
              <div key={cs.title} className="reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <CaseStudyMedia cover={cs.cover} loom={cs.loom} title={cs.title} />
                <div className="mt-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    {cs.tag}
                  </span>
                  <h3 className="mt-2 font-display text-2xl uppercase tracking-[0.06em] text-white">{cs.title}</h3>
                  <p className="mt-2 leading-relaxed text-indigo-100/70">{cs.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- TESTIMONIALS ---------- */}
        <section id="proof" className="scroll-mt-24 border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto w-full max-w-5xl px-6 py-24">
            <div className="reveal">
              <Kicker index="02">Social proof</Kicker>
              <h2 className="mt-5 max-w-3xl font-display text-2xl uppercase leading-tight tracking-tight text-white sm:text-4xl">
                Trusted by founders who&apos;ve built and shipped.
              </h2>
            </div>
            {/* Masonry so cards pack by content height — no gaps from uneven
                lengths. Leads with Sudhanshu (named + face + exact LinkedIn
                service), then a real face, then the rest. */}
            <div className="mt-12 columns-1 gap-6 md:columns-2">
              {[0, 4, 3, 1, 5, 2].map((idx, i) => (
                <div
                  key={idx}
                  className="reveal mb-6 break-inside-avoid"
                  style={{ animationDelay: `${(i % 2) * 0.08}s` }}
                >
                  <TestimonialCard t={TESTIMONIALS[idx]} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- MEET YOUR GROWTH PARTNER (intro video) ---------- */}
        <section id="about" className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-24">
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
                <VideoFrame url={INTRO_VIDEO} label="My intro video, coming soon" />
              )}
            </div>
            <div className="reveal space-y-4 text-lg leading-relaxed text-indigo-100/75" style={{ animationDelay: "0.1s" }}>
              <p className="font-serif text-xl italic text-white/90">
                Hi, I&apos;m Shruti. I turn founder conversations into content.
              </p>
              <p>
                Over the last two years I&apos;ve worked with 30+ founders, and
                they all want the same thing: to build visibility and
                credibility, so the right people know who they are and trust
                what they&apos;re building. That&apos;s never been harder.
                Everyone&apos;s posting, feeds are cluttered with AI content, and
                you don&apos;t have the time to sit down and write.
              </p>
              <p>
                My secret sauce? It&apos;s you. I interview you about your real
                week and your real decisions, then turn it into content that
                builds trust, grows your audience, and turns that attention into
                what actually moves your company: users, hires, and the
                investors who want in.
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
