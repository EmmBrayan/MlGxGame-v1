const KEY = "mlgx-recent";
const MAX_SAVED = 20;

export function getRecent(): string[] {
  try {
    const raw = localStorage.getItem(KEY);
    const list: unknown = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(list)) return [];
    return list.filter((s): s is string => typeof s === "string");
  } catch {
    return [];
  }
}

export function addRecent(slug: string) {
  try {
    const list = [slug, ...getRecent().filter((s) => s !== slug)];
    localStorage.setItem(KEY, JSON.stringify(list.slice(0, MAX_SAVED)));
  } catch {
    // stockage indisponible (navigation privée...) : on ignore
  }
}