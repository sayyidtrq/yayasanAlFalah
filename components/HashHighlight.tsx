"use client";

import { useEffect } from "react";

// Marks the element named by the URL hash with data-selected, so CSS can highlight it.
// CSS :target is not enough: Next.js client navigation uses pushState, which never updates it.
export default function HashHighlight({ ids }: { ids: string[] }) {
  useEffect(() => {
    const apply = () => {
      const hash = decodeURIComponent(location.hash.slice(1));
      for (const id of ids) document.getElementById(id)?.toggleAttribute("data-selected", id === hash);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, [ids]);
  return null;
}
