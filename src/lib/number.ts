const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

/**
 * Formats a number with Persian digits. Two-digit padding is useful for
 * numbered editorial lists (01, 02, ...).
 */
export function faNumber(value: number, pad = 2): string {
  return String(value)
    .padStart(pad, "0")
    .replace(/\d/g, (digit) => persianDigits[Number(digit)]);
}
