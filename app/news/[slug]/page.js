import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PageHero, Section, Head, Glass, D, Mono } from "@/components/ui";
import { CTA } from "@/components/bits";
import { getAllArticles, getArticleBySlug } from "@/lib/blogData";
import { ArticleSections } from "./ArticleSections";

export function generateStaticParams() {
  const all = getAllArticles();
  return all.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found | Tsecond" };

  return {
    title: `${article.title} | Tsecond Newsroom`,
    description: article.description || (article.content?.introduction?.[0] || "").slice(0, 160),
    openGraph: {
      title: `${article.title} | Tsecond`,
      description: article.description,
      images: article.image ? [article.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const allArticles = getAllArticles();
  const related = allArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  const intro = Array.isArray(article.content?.introduction)
    ? article.content.introduction
    : article.content?.introduction
    ? [article.content.introduction]
    : [article.description];

  const continuation = Array.isArray(article.content?.continuation)
    ? article.content.continuation
    : article.content?.continuation
    ? [article.content.continuation]
    : [];

  return (
    <>
      <PageHero
        crumb={{ href: "/news", label: "Newsroom" }}
        n={article.tags?.[0] || "Dispatch"}
        label={article.date}
        title={article.title}
        lede={article.description}
      >
        {/* Author & Meta bar */}
        <div className="rv mt-6 flex flex-wrap items-center gap-6 border-y border-line py-4" data-d="160">
          {article.author && (
            <div className="flex items-center gap-3">
              {article.author.avatar && (
                <div className="relative h-10 w-10 overflow-hidden rounded-none bg-gray-200 shrink-0">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <p className="text-[13px] font-semibold text-ink">
                  {article.author.name}
                </p>
                {article.author.role && (
                  <p className="text-[11px] text-muted">{article.author.role}</p>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center gap-4 text-xs font-mono text-muted">
            <span>Estimated reading: {article.readTime || "7 min"}</span>
            <span>·</span>
            <div className="flex flex-wrap gap-1.5">
              {(article.tags || []).map((t) => (
                <span
                  key={t}
                  className="rounded-none bg-gray-100 px-2 py-0.5 text-[9.5px] uppercase tracking-wider text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </PageHero>

      <Section className="py-[clamp(28px,3.5vw,48px)]">
        <div className="mx-auto max-w-[820px]">
          {/* Main Featured Image Banner */}
          {article.image && (
            <div className="rv relative mb-10 h-[320px] sm:h-[440px] w-full overflow-hidden rounded-none border border-line bg-black/5 shadow-md" data-d="100">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 900px) 100vw, 820px"
              />
            </div>
          )}

          {/* Whitepaper CTA if available */}
          {article.whitepaperurl && (
            <div className="rv mb-10 rounded-none border border-blue-200 bg-blue-50/60 p-6 backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[9.5px] uppercase tracking-wider text-blue-700 font-semibold">
                    Technical Publication Available
                  </span>
                  <h4 className="mt-1 font-display text-[16px] font-bold text-gray-900">
                    Download the Complete Technical Report
                  </h4>
                  <p className="mt-1 text-[13px] text-gray-600">
                    Access full benchmark metrics, architecture diagrams, and hardware specs.
                  </p>
                </div>
                <a
                  href={article.whitepaperurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-2 rounded-none bg-[#161b29] px-5 py-2.5 font-mono text-[10.5px] uppercase tracking-wider text-white shadow-sm transition-all hover:bg-blue-600"
                >
                  Download PDF ↓
                </a>
              </div>
            </div>
          )}

          {/* Stats Bar if present (e.g. BRYCK Block Resilience) */}
          {article.content?.stats && article.content.stats.length > 0 && (
            <div className="rv mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {article.content.stats.map((st, i) => (
                <div key={i} className="rounded-none border border-line bg-white/80 p-5 shadow-xs backdrop-blur-md">
                  <div className="font-display text-[32px] font-bold text-accent mb-1">{st.value}</div>
                  <p className="text-[12.5px] text-gray-700 leading-snug">{st.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Article Introduction Paragraphs */}
          <div className="rv space-y-6 text-[16px] leading-[1.8] text-gray-800">
            {intro.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Key Advantages / Tech Points */}
          {article.content?.keyAdvantages && (
            <div className="rv my-10 rounded-none border border-line bg-white/70 p-8 shadow-xs backdrop-blur-md">
              <h3 className="font-display text-[20px] font-semibold text-ink">
                {article.content.keyAdvantages.title || "Key Architectural Highlights"}
              </h3>
              <div className="mt-6 space-y-6">
                {(article.content.keyAdvantages.points || []).map((pt, i) => (
                  <div key={i} className="border-t border-line/60 pt-4 first:border-0 first:pt-0">
                    {typeof pt === "string" ? (
                      <div
                        className="text-[14.5px] leading-[1.7] text-gray-700"
                        dangerouslySetInnerHTML={{ __html: pt }}
                      />
                    ) : (
                      <>
                        <h4 className="font-display text-[15.5px] font-semibold text-ink">
                          {pt.title}
                        </h4>
                        <p className="mt-2 text-[14px] leading-[1.7] text-body">
                          {pt.description}
                        </p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Deep-dive sections (Metric grids, Calculators, Risk, Timelines, etc.) */}
          {article.content?.sections && (
            <ArticleSections sections={article.content.sections} />
          )}

          {/* Continuation Paragraphs */}
          {continuation.length > 0 && (
            <div className="rv my-8 space-y-6 text-[16px] leading-[1.8] text-gray-800">
              {continuation.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          )}

          {/* Additional Content Images Gallery */}
          {article.content?.images && article.content.images.length > 0 && (
            <div className="rv my-10 space-y-6">
              {article.content.images.map((img, i) => {
                const src = typeof img === "string" ? img : img?.src;
                const alt = (typeof img === "object" && img?.alt) ? img.alt : `${article.title} - figure ${i + 1}`;
                if (!src) return null;
                return (
                  <div key={i} className="relative h-[280px] sm:h-[380px] w-full overflow-hidden rounded-none border border-line bg-black/5">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                );
              })}
            </div>
          )}

          {/* Call to Action Block */}
          {article.content?.callToAction && (
            <div className="rv my-10 rounded-none border border-line bg-gradient-to-r from-gray-900 to-[#161b29] p-8 text-white">
              <h4 className="font-display text-[20px] font-bold mb-2">
                {article.content.callToAction.text || "Accelerate Your Tactical Edge Intelligence"}
              </h4>
              <p className="text-[14px] text-gray-300 mb-6">
                Connect with our mission solutions architects to discuss zero-trust tactical compute deployments.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-none bg-blue-600 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white hover:bg-blue-500 transition-colors"
                >
                  Request Technical Briefing →
                </Link>
                <Link
                  href="/products"
                  className="rounded-none border border-white/20 bg-white/10 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white hover:bg-white/20 transition-colors"
                >
                  Explore Hardware Systems
                </Link>
              </div>
            </div>
          )}

          {/* Back to news button */}
          <div className="mt-12 pt-6 border-t border-line flex items-center justify-between">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-accent hover:underline"
            >
              ← Back to all dispatches
            </Link>
            <Link
              href="/contact"
              className="rounded-none bg-gray-900 px-5 py-2.5 font-mono text-[10.5px] uppercase tracking-wider text-white hover:bg-blue-600 transition-colors"
            >
              Contact Press Office
            </Link>
          </div>
        </div>
      </Section>

      {/* Related Dispatches */}
      {related.length > 0 && (
        <Section className="py-[clamp(32px,4vw,56px)] bg-gray-50/60 border-t border-line">
          <Head n="02" label="Related" title="More from the field" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((art) => (
              <Glass
                as={Link}
                href={`/news/${art.slug}`}
                key={art.slug}
                lift
                className="group flex flex-col justify-between overflow-hidden rounded-none p-0"
              >
                <div>
                  <div className="relative h-40 w-full overflow-hidden bg-black/5">
                    {art.image && (
                      <Image
                        src={art.image}
                        alt={art.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-106"
                      />
                    )}
                  </div>
                  <div className="p-5">
                    <span className="font-mono text-[10px] text-muted">
                      {art.date}
                    </span>
                    <h4 className="mt-2 font-display text-[15px] font-semibold leading-snug text-ink group-hover:text-accent transition-colors line-clamp-2">
                      {art.title}
                    </h4>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <span className="font-mono text-[9.5px] uppercase tracking-wider text-accent group-hover:translate-x-1 transition-transform">
                    Read dispatch →
                  </span>
                </div>
              </Glass>
            ))}
          </div>
        </Section>
      )}

      <CTA n="03" />
    </>
  );
}
