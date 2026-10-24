const persianDate = new Intl.DateTimeFormat("fa-IR", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

/** Formats an ISO date for Persian readers using the Solar Hijri calendar. */
export function formatPersianDate(isoDate: string): string {
  return persianDate.format(new Date(isoDate));
}
