"use client";

import { useEffect } from "react";

/** Subtly updates the tab title when the tab loses/gains focus. */
export function useTabTitle(blurTitle = "Come back →") {
  useEffect(() => {
    const original = document.title;
    const onBlur = () => {
      document.title = blurTitle;
    };
    const onFocus = () => {
      document.title = original;
    };
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);
    return () => {
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
      document.title = original;
    };
  }, [blurTitle]);
}
