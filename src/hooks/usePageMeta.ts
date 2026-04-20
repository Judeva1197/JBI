import { useEffect } from "react";

function setOrCreateMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Sets document title and meta description per route (SPA).
 * Optional keywords only for pages that should expose them; omitted on other routes removes stale keywords.
 */
export function usePageMeta(
  title: string,
  description: string,
  keywords?: string | null,
): void {
  useEffect(() => {
    document.title = title;
    setOrCreateMeta("description", description);

    const existingKw = document.querySelector('meta[name="keywords"]');
    if (keywords) {
      setOrCreateMeta("keywords", keywords);
    } else if (existingKw) {
      existingKw.remove();
    }
  }, [title, description, keywords]);
}
