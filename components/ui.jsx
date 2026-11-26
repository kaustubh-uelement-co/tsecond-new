import Link from "next/link";

/* --------------------------------------------------------------- surface */
/* The glass primitive. `tone` picks density: sheer for big surfaces,
   dense for floating chrome, default for content panels. */
export function Glass({
  as: As = "div",
  tone = "",
  lift = false,
  className = "",
  children,
  ...rest
}) {
  const t = tone === "sheer" ? "glass-sheer" : tone === "dense" ? "glass-dense" : "";
  return (
    <As className={`glass ${t} ${lift ? "lift" : ""} ${className}`} {...rest}>
      {children}
    </As>
  );
}

/* ------------------------------------------------------------------ type */
export function Lab({ n, children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-accent ${className}`}
    >
      <span className="h-px w-5 bg-current opacity-60" />
      {n && <span className="opacity-70">{n}</span>}
      {children}
    </span>
  );
}

const SIZES = {
  xl: "text-[clamp(38px,6.2vw,80px)] leading-[1.03] tracking-[-0.035em]",
  lg: "text-[clamp(30px,4.4vw,56px)] leading-[1.06] tracking-[-0.032em]",
  md: "text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-0.028em]",
  sm: "text-[clamp(17px,1.9vw,22px)] leading-[1.22] tracking-[-0.02em]",
  xs: "text-[15px] leading-[1.3] tracking-[-0.015em]",
};

export function D({ as: As = "h2", size = "lg", className = "", children }) {
  return (
    <As className={`font-display font-semibold text-ink ${SIZES[size]} ${className}`}>
      {children}
    </As>
  );
}

export function Lede({ className = "", children }) {
  return (
    <p className={`max-w-[58ch] text-[clamp(14.5px,1.25vw,17px)] leading-[1.76] text-body ${className}`}>
      {children}
    </p>
  );
}

/* No default colour — Tailwind can't resolve two text-* of equal specificity
   by class order, so the caller always sets it explicitly. */
export const Mono = ({ className = "text-faint", children }) => (
  <span className={`font-mono text-[10px] uppercase tracking-[0.2em] ${className}`}>
    {children}
  </span>
);

/* ---------------------------------------------------------------- button */
export function Btn({ href, children, variant = "solid", type, onClick, className = "" }) {
  const base =
    "group relative inline-flex items-center gap-2.5 overflow-hidden rounded-none px-6 py-3.5 " +
    "font-mono text-[10px] uppercase tracking-[0.16em] transition-colors duration-300";

  const skin = {
    solid: "bg-ink text-white",
    glass:
      "glass glass-dense text-ink hover:text-ink",
    quiet: "text-body hover:text-accent",
  }[variant];

  const inner = (
    <>
      {variant === "solid" && (
        <span className="absolute inset-0 z-0 translate-y-full bg-accent transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0" />
      )}
      <span className="relative z-[3]">{children}</span>
      <span className="relative z-[3] transition-transform duration-300 group-hover:translate-x-1">
        &#8599;
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${base} ${skin} ${className}`}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={`${base} ${skin} cursor-pointer ${className}`}>
      {inner}
    </button>
  );
}

/* --------------------------------------------------------------- section */
export function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`relative py-[clamp(32px,4vw,56px)] ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}

export function Head({ n, label, title, lede, center = false, className = "" }) {
  return (
    <div
      className={`rv mb-[clamp(18px,2.4vw,32px)] ${center ? "mx-auto max-w-[760px] text-center" : "max-w-[760px]"} ${className}`}
    >
      <Lab n={n} className="mb-4">
        {label}
      </Lab>
      <D>{title}</D>
      {lede && <Lede className={`mt-4 ${center ? "mx-auto" : ""}`}>{lede}</Lede>}
    </div>
  );
}

/* ------------------------------------------------------------- page hero */
export function PageHero({ n, label, title, lede, crumb, meta, children }) {
  return (
    <section className="relative pb-[clamp(16px,2vw,28px)] pt-[clamp(76px,6vw,96px)]">
      <div className="wrap">
        {crumb && (
          <div className="rv mb-4">
            <Link
              href={crumb.href}
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent"
            >
              ← {crumb.label}
            </Link>
          </div>
        )}
        <div className="rv">
          <Lab n={n} className="mb-4">
            {label}
          </Lab>
        </div>
        <div className="rv" data-d="70">
          <D as="h1" size="xl" className="max-w-[17ch]">
            {title}
          </D>
        </div>
        {lede && (
          <div className="rv" data-d="140">
            <Lede className="mt-5 text-[clamp(14.5px,1.3vw,17.5px)] leading-[1.65]">{lede}</Lede>
          </div>
        )}
        {children}
        {meta && (
          <div className="rv mt-[clamp(20px,2.5vw,32px)]" data-d="200">
            <Glass tone="sheer" className="grid grid-cols-2 lg:grid-cols-4">
              {meta.map(([v, u, k], i) => (
                <div
                  key={k}
                  className={`px-5 py-4 ${i > 0 ? "border-l border-line" : ""} ${i === 2 ? "max-lg:border-l-0" : ""} ${i > 1 ? "max-lg:border-t max-lg:border-line" : ""}`}
                >
                  <b className="block font-display text-[clamp(20px,2.2vw,28px)] font-semibold leading-none tracking-[-0.035em] text-ink">
                    {v}
                    {u && <s className="ml-1.5 text-[0.44em] font-medium text-accent no-underline">{u}</s>}
                  </b>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.17em] text-muted">{k}</p>
                </div>
              ))}
            </Glass>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- small pieces */
export function Chips({ items }) {
  return (
    <div className="rv flex flex-wrap gap-2">
      {items.map((c) => (
        <span
          key={c}
          className="glass rounded-none px-4 py-2.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-body"
        >
          {c}
        </span>
      ))}
    </div>
  );
}

export function SpecList({ rows }) {
  return (
    <Glass className="rv overflow-hidden">
      <dl>
        {rows.map(([k, v], i) => (
          <div
            key={k}
            className={`grid grid-cols-1 gap-1.5 px-6 py-4 md:grid-cols-[minmax(190px,1fr)_2fr] md:gap-7 ${
              i > 0 ? "border-t border-line" : ""
            }`}
          >
            <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{k}</dt>
            <dd className="text-[14.5px] text-ink">{v}</dd>
          </div>
        ))}
      </dl>
    </Glass>
  );
}
