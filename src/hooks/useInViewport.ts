"use client";

import { RefObject, useEffect, useState } from "react";

export function useInViewport<T extends Element>(
  ref: RefObject<T | null>,
  options?: IntersectionObserverInit,
) {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInViewport(entry.isIntersecting);
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [options, ref]);

  return isInViewport;
}
