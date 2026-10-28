"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { TeamMember } from "@/content/team";
import { cn } from "@/lib/utils";

type TeamSliderProps = {
  members: TeamMember[];
};

const controlClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-text-primary shadow-subtle transition-colors hover:border-brand-primary/30 hover:bg-brand-light hover:text-brand-primary";

function Chevron({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      {direction === "next" ? (
        <path d="M9 18l6-6-6-6" />
      ) : (
        <path d="M15 18l-6-6 6-6" />
      )}
    </svg>
  );
}

function PlayPauseIcon({ playing }: { playing: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      {playing ? (
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M9 5v14" />
          <path d="M15 5v14" />
        </g>
      ) : (
        <path d="M8 5v14l11-7z" fill="currentColor" />
      )}
    </svg>
  );
}

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("");
}

function MemberPhoto({
  member,
  priority,
}: {
  member: TeamMember;
  priority: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(member.image) && !failed;

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-accent/20 via-brand-primary/10 to-transparent blur-3xl"
      />
      <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand-primary to-brand-accent shadow-[0_24px_60px_-24px_rgba(23,107,155,0.45)] sm:h-[520px] lg:h-[640px]">
        {showImage ? (
          <Image
            src={member.image as string}
            alt={`تصویر ${member.name}`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 42vw, 90vw"
            className="object-cover"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_45%),radial-gradient(circle_at_75%_80%,rgba(255,255,255,0.2),transparent_40%)]"
            />
            <span
              aria-hidden="true"
              className="relative text-7xl font-black tracking-widest text-white/85 sm:text-8xl"
            >
              {initials(member.name)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function MemberSocials({ member }: { member: TeamMember }) {
  const links = [
    member.socials.linkedin
      ? { href: member.socials.linkedin, label: "LinkedIn" }
      : null,
    member.socials.github
      ? { href: member.socials.github, label: "GitHub" }
      : null,
    member.socials.website
      ? { href: member.socials.website, label: "وب‌سایت" }
      : null,
    member.socials.email
      ? { href: `mailto:${member.socials.email}`, label: "ایمیل" }
      : null,
  ].filter((link): link is { href: string; label: string } => link !== null);

  if (links.length === 0) return null;

  return (
    <div className="mt-6 flex flex-wrap justify-center gap-4 border-t border-border pt-4 lg:justify-start">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-xs font-semibold text-brand-primary underline-offset-4 hover:underline"
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noreferrer noopener"}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

const PLAY_INTERVAL_MS = 7000;

export function TeamSlider({ members }: TeamSliderProps) {
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const playButtonRef = useRef<HTMLButtonElement>(null);

  const total = members.length;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsPlaying(false);
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const onVisibilityChange = () => setTabHidden(document.hidden);
    onVisibilityChange();
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (total === 0) return;
      setActive((index % total + total) % total);
    },
    [total],
  );

  const goNext = useCallback(() => {
    setActive((current) => (current + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setActive((current) => (current - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (!isPlaying || hovered || focused || tabHidden || total <= 1) return;

    const timer = window.setTimeout(() => {
      goNext();
    }, PLAY_INTERVAL_MS);

    return () => window.clearTimeout(timer);
  }, [active, isPlaying, hovered, focused, tabHidden, total, goNext]);

  const togglePlaying = useCallback(() => {
    setIsPlaying((prev) => {
      if (prev) return false;
      setHovered(false);
      setFocused(false);
      return true;
    });
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (total <= 1) return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      }
    },
    [total, goNext, goPrev],
  );

  if (total === 0) return null;

  const safeActive = ((active % total) + total) % total;
  const member = members[safeActive];

  return (
    <section
      id="team"
      className="relative overflow-hidden border-y border-border bg-brand-light/60 py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full opacity-60 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(18, 175, 193, 0.16), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full opacity-60 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(23, 107, 155, 0.12), transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="mb-16 text-center md:mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-text-secondary sm:text-sm">
            Meet Our Team
          </span>
          <h2 className="mt-3 text-3xl font-black text-text-primary sm:text-4xl">
            تیم{" "}
            <span className="bg-gradient-to-l from-brand-primary via-[#0f8aa4] to-[#0d93a3] bg-clip-text text-transparent">
              آتیوار
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
            ترکیب تجربه، تخصص و فناوری در کنار یکدیگر برای ساخت راهکارهای پایدار سازمانی.
          </p>
        </div>

        <div
          className="rounded-2xl border border-border bg-white/80 p-6 shadow-[0_24px_70px_-30px_rgba(23,107,155,0.35)] backdrop-blur-sm sm:p-10 lg:p-14"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={(event) => {
            if ((event.target as Node) === playButtonRef.current) return;
            setFocused(true);
          }}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setFocused(false);
            }
          }}
        >
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="اعضای تیم آتیوار"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="relative rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/40 focus-visible:ring-offset-4 focus-visible:ring-offset-white"
          >
            <div
              key={member.id}
              className="grid animate-team-fade grid-cols-1 items-center gap-10 lg:grid-cols-[42fr_58fr] lg:gap-16"
            >
              <MemberPhoto member={member} priority={safeActive === 0} />

              <div className="text-center lg:text-start">
                <h3 className="text-3xl font-black leading-tight text-text-primary sm:text-4xl lg:text-5xl">
                  {member.name}
                </h3>
                <div className="mt-3 space-y-1">
                  {member.roles.map((role) => (
                    <p
                      key={role}
                      className="text-sm font-medium text-brand-primary sm:text-base"
                    >
                      {role}
                    </p>
                  ))}
                </div>
                <p className="mx-auto mt-6 max-w-[42rem] whitespace-pre-line text-sm leading-7 text-text-secondary sm:text-base lg:mx-0">
                  {member.bio}
                </p>
                <div className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-brand-light/70 px-3.5 py-1.5 text-xs text-text-secondary sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <MemberSocials member={member} />
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:justify-between">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="عضو قبلی"
                  className={controlClass}
                  onClick={goPrev}
                >
                  <Chevron direction="prev" />
                </button>
                <button
                  type="button"
                  aria-label="عضو بعدی"
                  className={controlClass}
                  onClick={goNext}
                >
                  <Chevron direction="next" />
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="flex items-center gap-2.5"
                  role="group"
                  aria-label="انتخاب عضو تیم"
                >
                  {members.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-label={`نمایش ${item.name}`}
                      aria-current={safeActive === index ? "true" : undefined}
                      onClick={() => goTo(index)}
                      className="relative flex h-2.5 items-center"
                    >
                      <span
                        className={cn(
                          "block rounded-full transition-all duration-300",
                          safeActive === index
                            ? "h-2.5 w-8 bg-gradient-to-r from-brand-primary to-brand-accent"
                            : "h-2.5 w-2.5 bg-text-secondary/30 hover:bg-brand-accent/50",
                        )}
                      />
                    </button>
                  ))}
                </div>

                <span aria-hidden="true" className="h-4 w-px bg-border" />

                <button
                  ref={playButtonRef}
                  type="button"
                  aria-label={isPlaying ? "توقف چرخش خودکار" : "شروع چرخش خودکار"}
                  aria-pressed={isPlaying}
                  onClick={togglePlaying}
                  className={cn(controlClass, "h-9 w-9")}
                >
                  <PlayPauseIcon playing={isPlaying} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="sr-only" aria-live={isPlaying ? "off" : "polite"}>
          {member.name}
        </p>
      </div>
    </section>
  );
}
